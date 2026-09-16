# ADR 0002: AI suggestions require human approval

- **Status:** Accepted
- **Date:** 2026-09-16

## Context

AI can help classify, prioritize, and summarize incoming cases. Model output is probabilistic, can be manipulated by untrusted case content, and may be wrong even when it appears confident.

## Decision

AI produces a versioned suggestion record. It cannot directly change case priority, category, status, ownership, or customer-facing content.

An authorized user must approve or reject the suggestion. The platform records:

- model and prompt-workflow version;
- structured suggestion;
- validation result;
- reviewer decision;
- timestamps and correlation identifiers;
- safe evaluation metadata.

Operational records change only through the primary API after authorization and validation.

## Consequences

### Positive

- Responsibility remains with an authorized person.
- Suggestions can be evaluated independently from operational outcomes.
- Rejected suggestions become useful quality feedback.
- AI outages do not block manual case handling.

### Negative

- Users perform an extra review step.
- The data model and UI need explicit suggestion states.
- End-to-end tests must cover both AI and manual paths.

## Revisit when

Automation may be considered only for narrowly bounded, reversible actions after measured quality, security review, explicit product approval, and an immediate override path.
