# Security, Hardening & Safe Architecture

Read this when entering Step 8 (Normalize Requirements), Step 9 (PRD Generation), Step 12 (Technical Architecture), and Step 16 (Self-Review).

Writing code that merely "works on happy path" is a critical failure. Professional engineering requires code that is secure against vulnerabilities, resilient against real-world chaos, and cleanly structured for long-term maintainability.

---

## 1. Security Baseline (OWASP Defense in Depth)

Every application must implement security safeguards proportional to its context. Never postpone security as a "later" task.

### 1.1 Input Validation & Sanitization (Never Trust Client Data)

```text
1. Strict Schema Validation:
   - Validate every external input (query params, body, headers, route params) using schema validators (Zod, Valibot, Yup) or strict type guards.
   - Reject unexpected keys (strip or reject unknown fields).
   - Enforce minimum and maximum length bounds on strings, arrays, and numbers.

2. XSS (Cross-Site Scripting) Defense:
   - NEVER use dangerouslySetInnerHTML, v-html, innerHTML, or eval() without strict sanitization (DOMPurify).
   - If rendering user-generated markdown or rich text, sanitize with an allowlist before injection.
   - Escape dynamic user data rendered into HTML contexts, attributes, or script tags.
   - Validate external URLs: reject `javascript:`, `data:`, or `vbscript:` URI schemes in <a href> and <iframe src>.

3. Injection Prevention (SQL / NoSQL / Command):
   - Always use parameterized queries or trusted ORM/query builders (Prisma, Drizzle, TypeORM, SQLAlchemy, Eloquent).
   - Never concatenate user input directly into SQL strings or system shell commands.
   - For NoSQL (MongoDB), sanitize operator injection (e.g., {$gt: ""}).
```

### 1.2 Authentication & Authorization

```text
1. Session & Token Management:
   - Store sensitive auth tokens in HttpOnly, Secure, SameSite=Lax/Strict cookies.
   - Never store sensitive JWTs or API keys in localStorage or sessionStorage where XSS can steal them.
   - Enforce token expiry and implement clean invalidation/logout.

2. Access Control (Broken Object Level Authorization - BOLA):
   - Check authorization on the server/API layer for EVERY endpoint and mutation.
   - Never rely on UI hiding buttons as security: verify `req.user.id === resource.ownerId` or user role permissions in backend handlers.
   - Prevent IDOR (Insecure Direct Object Reference) by scoping database queries to the active tenant/user.
```

### 1.3 Secrets & Sensitive Data Leakage

```text
1. Environment Variable Hygiene:
   - Distinguish public env vars (e.g., NEXT_PUBLIC_*, VITE_*) from private server secrets.
   - Never commit `.env`, `.env.local`, API keys, database passwords, or private certs to version control.
   - Verify that private tokens are never bundled into client-side JS.

2. Data Masking & Safe Logging:
   - Strip passwords, API keys, credit card numbers, and PII from error logs and console messages.
   - Do not leak stack traces or internal database error messages to end-users in production responses.
```

### 1.4 Secure Transport & Headers

```text
1. CORS & CSRF:
   - Restrict CORS origin to trusted domains; avoid `Access-Control-Allow-Origin: *` with credentials.
   - Use SameSite cookies and Anti-CSRF tokens for state-changing POST/PUT/DELETE requests.

2. Security Headers (configured in server or next.config.js / middleware):
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY or SAMEORIGIN
   - Referrer-Policy: strict-origin-when-cross-origin
   - Content-Security-Policy (CSP): configured to restrict script execution sources
   - Strict-Transport-Security (HSTS): for HTTPS enforcement
```

---

## 2. Hardening Against Real-World Chaos (From Impeccable)

Production interfaces do not operate in a lab with perfect 5-word English strings and gigabit fiber. Harden against reality:

### 2.1 Text Overflow & Spacing Resilience

```css
/* Single line truncation */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Multi-line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Prevent text overflow in flex / grid children */
.flex-child, .grid-child {
  min-width: 0;
  overflow-wrap: break-word;
}
```

- **Extreme input resilience**: Test UI with 100+ character strings (German compound nouns, email addresses, unwrapped URLs). Containers must wrap or truncate predictably, never burst horizontally.
- **Dynamic text scaling**: Support 200% browser zoom without breaking layouts or truncating critical actions.
- **Balanced typography**: Use `text-wrap: balance` on headings to avoid awkward single-word orphan lines.

### 2.2 Internationalization & Locale Resilience

- **Translation space budget**: German and French copy typically expands by 30-40% compared to English. Avoid fixed-width buttons (use padding-based sizing).
- **RTL (Right-to-Left) Readiness**: Use CSS logical properties (`padding-inline`, `margin-inline-start`, `border-inline-end`) rather than physical left/right properties.
- **Multilingual character sets**: Always set UTF-8. Ensure font stacks support CJK (Chinese, Japanese, Korean), Arabic, Cyrillic, and multi-byte emojis.
- **Date, Number, Currency Formatting**: Never hardcode `$12.50` or `MM/DD/YYYY`. Use native `Intl.NumberFormat` and `Intl.DateTimeFormat` or localized date libraries.

### 2.3 Network & Asynchronous Resilience

```text
1. Explicit Four-State UI Pattern:
   Every data-fetching component MUST handle all 4 states:
   - Idle / Loading: Shimmer skeleton or progress indicator with accessible aria-busy="true".
   - Success / Populated: Clean rendering with verified data bounds.
   - Empty State: Purposeful graphic or message with an actionable next step (e.g., "No projects found. Create your first project").
   - Error State: User-friendly explanation + Actionable Retry button (never leave user stranded).

2. Network Failure & Timeouts:
   - Implement timeout limits on fetch requests (AbortController).
   - Prevent double-submission: disable submit buttons immediately upon click, re-enable on failure/success.
   - Debounce search inputs (300ms) and throttle scroll/resize handlers (100ms).

3. Error Boundaries:
   - Wrap feature modules in React Error Boundaries so that a single component failure does not crash the entire application screen.
```

### 2.4 Gesture, Pointer & Touch Resilience

- **Interrupted gestures**: If a user drags a slider or custom carousel and a second finger touches down, or pointer leaves the window (`pointercancel`, `lostpointercapture`, `blur`), immediately reset drag state and release pointer capture cleanly.
- **Touch target minimum**: Minimum 44x44px clickable area on mobile screens to prevent mis-clicks.

---

## 3. Safe, Maintainable Code Architecture

Code must be written so that any senior engineer can read, understand, test, and modify it without introducing regressions.

### 3.1 Strict Typing & Discriminated Unions

```typescript
// ❌ Dangerous: Loose types and boolean soup
type State = {
  isLoading: boolean;
  isError: boolean;
  data?: User[];
  error?: string;
};

// ✅ Safe: Discriminated union eliminates impossible states
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error; retry: () => void };
```

- **No loose `any`**: Use strict TypeScript (`strict: true`). Use `unknown` with narrowing or schema validation when data is unverified.
- **Discriminated unions**: Model complex state machines explicitly to eliminate impossible states (e.g. data loaded but `isLoading: true`).

### 3.2 Single Responsibility & Clean Layering

```text
Presentation Layer (UI Components)
    ↓ calls
Custom Hooks / Controller (State & Interaction Logic)
    ↓ calls
Service / API Layer (Data Fetching, HTTP, Normalization)
    ↓ validates
Domain Models / Schemas (Zod / Types)
```

- **Separation of Concerns**: Do not mix raw API `fetch()` calls, complex string parsing, and JSX rendering in a single 500-line component. Extract data operations into hooks or service functions.
- **Colocation**: Keep related files together (component, test, types, styles).
- **Tokenized values**: Zero magic numbers. All colors, spacing steps, typography sizes, and animation durations must map to design tokens or named constants.

### 3.3 Defensive Coding & Immutability

- **Immutable updates**: Treat state and props as immutable. Use functional updates or Immer for nested state.
- **Resource cleanup**: Always return cleanup functions in `useEffect` (cancel timers, unsubscribe listeners, abort pending fetch requests).
- **Pure functions**: Keep business calculations pure and deterministic to make unit testing trivial.

### 3.4 Standardized 4-State Component Pattern & Error Boundary

Dynamic data components must NEVER render an unhandled state or a raw generic spinner in the middle of content. Implement this standardized 4-state contract:

```tsx
import React, { ReactNode } from 'react';

export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'empty'; message: string; actionLabel?: string; onAction?: () => void }
  | { status: 'error'; error: Error; retry: () => void }
  | { status: 'success'; data: T };

interface AsyncStateViewProps<T> {
  state: AsyncState<T>;
  loadingSkeleton: ReactNode;
  renderSuccess: (data: T) => ReactNode;
  emptyIcon?: ReactNode;
}

export function AsyncStateView<T>({
  state,
  loadingSkeleton,
  renderSuccess,
  emptyIcon,
}: AsyncStateViewProps<T>) {
  switch (state.status) {
    case 'loading':
      return <div aria-busy="true" aria-live="polite">{loadingSkeleton}</div>;

    case 'empty':
      return (
        <div className="empty-state-container" role="status">
          {emptyIcon && <div className="empty-state-icon" aria-hidden="true">{emptyIcon}</div>}
          <h3 className="empty-state-title">No Records Found</h3>
          <p className="empty-state-message">{state.message}</p>
          {state.actionLabel && state.onAction && (
            <button type="button" onClick={state.onAction} className="btn-primary">
              {state.actionLabel}
            </button>
          )}
        </div>
      );

    case 'error':
      return (
        <div className="error-state-container" role="alert">
          <h3 className="error-state-title">Unable to Load Data</h3>
          <p className="error-state-message">{state.error.message || 'An unexpected error occurred while fetching data.'}</p>
          <button type="button" onClick={state.retry} className="btn-retry">
            Retry Connection
          </button>
        </div>
      );

    case 'success':
      return <>{renderSuccess(state.data)}</>;
  }
}
```

#### Production Error Boundary Boilerplate:
```tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ComponentErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    if (this.props.onReset) this.props.onReset();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-panel" role="alert">
          <h3>{this.props.fallbackTitle || 'Component Error'}</h3>
          <p>This module encountered an issue and could not render.</p>
          <button type="button" onClick={this.handleReset} className="btn-secondary">
            Reset Module
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

---

## 4. Zero Half-Baked Code Policy (Hard Rule)

Professional engineering requires complete, functional deliverables. The following practices are strictly forbidden:

```text
FORBIDDEN LAZY AI PRACTICES:
- Placeholder comments: "// TODO: implement later", "// add rest of items here", "/* ... */"
- Dummy non-functional handlers: onClick={() => console.log('clicked')}
- Missing state wires: UI controls (filters, tabs, search, pagination, modals) that visually exist but do not respond to interaction
- Truncated files or skipping repetitive code blocks with "/* remaining code as above */"

MANDATORY COMPLETENESS STANDARDS:
1. Every interactive control MUST be wired to working state handlers (backed by realistic local storage, in-memory state, or mocked services).
2. All components must be delivered in full without code omission comments.
3. Every filter, sort, search input, and modal toggle must actually change UI state and reflect in the rendered view.
```

---

## 5. Verification & Hardening Checklist

Before marking code complete, verify:

```text
SECURITY:
[ ] Input schemas validate and reject malicious/unexpected payloads
[ ] No dangerouslySetInnerHTML or unescaped user HTML injection
[ ] External links have rel="noopener noreferrer" and safe protocols
[ ] Sensitive tokens are stored in HttpOnly cookies, not localStorage
[ ] API endpoints enforce authorization & ownership checks on the server
[ ] Zero secrets, private keys, or passwords committed or leaked to client

HARDENING & COMPLETE UI STATES:
[ ] Zero half-baked code: No "// TODO" comments, no lazy truncation, working click handlers
[ ] Long text wraps or truncates gracefully (tested with 100+ chars)
[ ] All 4 async states handled: Loading (skeleton), Success, Empty (with action), Error with Retry
[ ] Submit buttons prevent double-click / concurrent race conditions
[ ] CSS uses min-width: 0 on flex/grid children to prevent overflow blowout
[ ] Touch targets meet 44x44px minimum on mobile devices

MAINTAINABILITY:
[ ] Strict TypeScript types with zero 'any' casts
[ ] State modeled with discriminated unions where applicable
[ ] Business logic separated from presentation components
[ ] Design tokens / constants used instead of hardcoded magic values
[ ] Event listeners, intervals, and fetch controllers properly cleaned up
```
