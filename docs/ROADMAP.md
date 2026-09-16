# Roadmap

The roadmap orders work by dependency and learning value. Each phase should end with something demonstrable and explainable.

## Phase 0 — Foundation

**Outcome:** A credible plan, documented boundaries, contribution workflow, and issue backlog.

- Product requirements
- Architecture and decision records
- Threat model
- Pull-request and issue templates
- Foundation CI checks

## Phase 1 — Runnable development environment

**Outcome:** One command starts the local dependencies and each application has a health check.

- Workspace and formatting configuration
- React, NestJS, and FastAPI skeletons
- PostgreSQL, Redis, and MongoDB containers
- Environment validation
- CI lint, type-check, and test jobs

## Phase 2 — Secure multi-tenant core

**Outcome:** Authenticated users can access only their organization's data.

- Organizations, users, and memberships
- Authentication
- Role-based authorization
- Tenant-scoped persistence
- Audit-event foundation
- Negative cross-tenant tests

## Phase 3 — Case management vertical slice

**Outcome:** An agent can create, assign, update, and resolve a case through the UI.

- Case schema and lifecycle
- REST endpoints and OpenAPI
- React screens, forms, and state management
- Comments, assignment, and history
- Unit, component, integration, and end-to-end tests

## Phase 4 — Asynchronous integrations

**Outcome:** External and long-running work is reliable and diagnosable.

- BullMQ worker
- Idempotent jobs
- Signed webhook delivery
- Retry and dead-letter behavior
- Delivery history

## Phase 5 — Analytics and reporting

**Outcome:** Leads can understand queue health and workload.

- Operational dashboard
- Filtered metrics
- Purposeful SQL query and stored procedure
- Export safeguards
- Performance indexes and query analysis

## Phase 6 — Human-controlled AI triage

**Outcome:** The platform proposes structured triage suggestions that a person can approve or reject.

- FastAPI service
- LangGraph workflow
- Validated structured output
- Trace and evaluation store
- Approval UI and audit events
- Safe failure and deterministic tests

## Phase 7 — Delivery and operations

**Outcome:** The system can be deployed, observed, and operated responsibly.

- Production container builds
- GitHub Actions quality and security gates
- AWS environment and least-privilege roles
- Health checks, logs, metrics, and traces
- Load test, runbook, and incident exercise

## Phase 8 — Portfolio release

**Outcome:** A hiring manager can evaluate the product and the engineering decisions quickly.

- Seeded demonstration organization
- Guided demo script
- Architecture and security walkthrough
- Screenshots or short video
- Honest performance results
- Sample incident postmortem
- Resume and portfolio case study

## Optional targeted extensions

These are intentionally outside the MVP and should be added only when a specific job target justifies them:

- React Native mobile client
- ASP.NET Core alerting service
- Small C++ SDK or performance component
