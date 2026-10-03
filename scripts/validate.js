const fs = require('fs');
const path = require('path');

let hasErrors = false;

function logPass(msg) {
  console.log(`[PASS] ${msg}`);
}

function logFail(msg) {
  console.error(`[FAIL] ${msg}`);
  hasErrors = true;
}

// 1. Validate package.json
const pkgPath = path.join(__dirname, '..', 'package.json');
if (!fs.existsSync(pkgPath)) {
  logFail('Missing package.json');
} else {
  try {
    const raw = fs.readFileSync(pkgPath, 'utf8');
    JSON.parse(raw);
    logPass('Valid JSON: package.json');
  } catch (err) {
    logFail(`Invalid JSON in package.json: ${err.message}`);
  }
}

// 2. Validate SKILL.md
const skillPath = path.join(__dirname, '..', 'skills', 'genzi', 'SKILL.md');
if (!fs.existsSync(skillPath)) {
  logFail('Missing SKILL.md in skills/genzi/');
} else {
  const content = fs.readFileSync(skillPath, 'utf8');
  if (!content.startsWith('---')) {
    logFail('SKILL.md must start with YAML frontmatter (---)');
  } else if (!content.includes('name: genzi')) {
    logFail('SKILL.md missing name frontmatter');
  } else if (!content.includes('description:')) {
    logFail('SKILL.md missing description frontmatter');
  } else {
    logPass('SKILL.md has valid YAML frontmatter header');
  }
}

// 3. Validate reference files
const requiredReferences = [
  'workspace-detection.md',
  'prd-template.md',
  'design-guidelines.md',
  'security-and-hardening.md',
  'review-checklist.md',
  'seo-and-performance.md',
  'token-kits.md',
  'reference-driven-design.md'
];

requiredReferences.forEach((ref) => {
  const refPath = path.join(__dirname, '..', 'skills', 'genzi', 'references', ref);
  if (!fs.existsSync(refPath)) {
    logFail(`Missing reference file: ${ref}`);
  } else {
    logPass(`Reference file exists: ${ref}`);
  }
});

// 4. Validate examples
const requiredExamples = [
  '01-food-delivery-landing.md',
  '02-pos-cashier-app.md',
  '03-saas-crm-pipeline.md',
  '04-coffee-roastery-store.md',
  '05-architecture-portfolio.md'
];

requiredExamples.forEach((ex) => {
  const exPath = path.join(__dirname, '..', 'skills', 'genzi', 'examples', ex);
  if (!fs.existsSync(exPath)) {
    logFail(`Missing example file: ${ex}`);
  } else {
    const content = fs.readFileSync(exPath, 'utf8');
    if (!content.startsWith('# Example')) {
      logFail(`Example ${ex} should start with a level-1 heading (# Example ...)`);
    } else if (!content.includes('Activation Prompt')) {
      logFail(`Example ${ex} missing 'Activation Prompt' section`);
    } else if (content.length < 500) {
      logFail(`Example ${ex} appears to be an incomplete stub (less than 500 characters)`);
    } else {
      logPass(`Example is complete and valid: ${ex} (${content.length} chars)`);
    }
  }
});

if (hasErrors) {
  console.error('\nValidation failed with errors.');
  process.exit(1);
} else {
  console.log('\nAll validation checks passed successfully.');
}
