# Portfolio Live — Engineering, Hiring, and Client Review

**Review date:** August 12, 2026  
**Purpose:** maximize senior-engineering credibility, interview conversion, and client acquisition.  
**Code-change status:** audit only; no project code was changed.

## Executive verdict

This portfolio demonstrates a rare and commercially useful combination: deep mortgage/operations knowledge, fast product delivery, public-data automation, SaaS monetization, and client-facing web work. The strongest hiring story is not “13 unrelated websites”; it is **a domain expert who repeatedly converts manual, regulated workflows into deployed software and paid data products**.

The principal weakness is evidence, not ambition. The projects frequently look functional and commercially oriented, but many repositories do not yet prove senior-level engineering discipline: CI is uncommon, test depth is inconsistent, README quality varies, production observability and security practices are rarely demonstrated, and the portfolio offers live links without source links, architecture diagrams, case studies, metrics, or technical decisions. A hiring manager sees impressive shipping velocity but must guess how much of the architecture is reliable, secure, maintainable, and personally owned.

**Best hiring flagship:** Processor Assistant.  
**Best client/data-product proof:** Tax Delinquency Leads.  
**Best polished local-business client example:** Pressure Washing.  
**Best supporting full-stack automation system:** Contractor Leads SaaS.  
**Recommended positioning:** Full-Stack AI Automation Engineer / Applied AI Product Engineer with mortgage-tech specialization—not generic “software developer.”

## Scoring method

All numeric scores are `/10`. Overall weights: engineering quality 25%, AI/automation value 20%, résumé impact 20%, hiring-manager impression 15%, client-deal value 10%, and production readiness 10%. A low score can mean weak public evidence, not necessarily weak private implementation. “Portfolio-ready effort” estimates the focused work needed to make the project convincing in a 5–10 minute hiring review; it is not a full production-hardening estimate.

## Live current rankings

| Rank | Project | Overall | Eng. quality | AI / automation | Résumé value | Hiring manager | Client deal | Production ready | Effort to portfolio-ready |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Processor Assistant | **8.2** | 7.5 | 9.5 | 9.5 | 8.5 | 8.5 | 7.0 | 2–4 days |
| 2 | Tax Delinquency Leads | **7.7** | 6.8 | 8.8 | 8.4 | 7.8 | 9.0 | 7.2 | 2–4 days |
| 3 | Contractor Leads SaaS | **7.4** | 6.8 | 8.6 | 8.2 | 7.6 | 8.5 | 6.2 | 3–5 days |
| 4 | Property Manager Leads | **7.0** | 6.2 | 8.1 | 7.7 | 7.0 | 8.2 | 6.3 | 3–5 days |
| 5 | Pressure Washing | **6.6** | 6.5 | 4.2 | 6.2 | 6.4 | 8.5 | 7.2 | 1–2 days |
| 6 | Commission Scout | **6.3** | 6.3 | 4.8 | 6.8 | 6.4 | 7.1 | 5.5 | 2–4 days |
| 7 | Edge Landings | **6.1** | 5.3 | 5.8 | 6.3 | 5.8 | 7.8 | 5.6 | 2–4 days |
| 8 | Tennessee Child Support Estimator | **5.9** | 5.0 | 3.0 | 6.0 | 5.7 | 6.7 | 6.0 | 1–3 days |
| 9 | Leasure Time Lawn Care | **5.6** | 5.3 | 3.2 | 5.3 | 5.2 | 7.2 | 6.2 | 1–2 days |
| 10 | Ince Electric | **5.3** | 5.1 | 2.5 | 5.0 | 4.9 | 7.0 | 6.1 | 1–2 days |
| 11 | Realtors Commission / Agent Finder legacy variant | **4.8** | 4.6 | 3.0 | 4.8 | 4.5 | 5.5 | 4.5 | 2–3 days |
| 12 | Edge Barber Apply | **3.8** | 4.0 | 2.5 | 3.7 | 3.5 | 4.7 | 2.5 | 1–2 days |
| 13 | Dallas Mortgage | **3.6** | 3.8 | 2.5 | 3.8 | 3.5 | 4.5 | 2.0 | 1–2 days |
| 14 | Leadbot | **3.4** | 3.5 | 4.5 | 4.0 | 3.5 | 3.8 | 1.5 | 2–4 days |

The last three deployed URLs returned errors during this review. They should not be presented as live until a clean anonymous browser check passes. The “Realtors Commission” row refers to the older additional-project link; Commission Scout is the stronger current repository/deployment and is ranked separately.

## Project reviews

### 1. Processor Assistant — flagship

**Executive summary:** A mortgage-processing workspace that parses approval PDFs, extracts and rewrites conditions, manages pipeline work, and integrates cloud AI, Supabase, billing, and deployment. The repository shows materially more depth than the portfolio card: document classification, approval intelligence, privacy filtering, compliance/fraud checks, underwriting tools, Stripe webhooks, exports, cloud/local AI routing, and a meaningful test footprint.

**Senior staff engineer:** Strong vertical decomposition and excellent domain coverage. This is the only project that clearly signals applied-AI system design rather than a thin API wrapper. Tests exist for parsers, privacy, cloud cleanup, lender learning, extraction, and Stripe. Risks: a very broad flat Python module layout, unclear service boundaries, Streamlit UI coupled to production workflows, no visible CI, ambiguous structured logging/metrics, and limited public proof of authorization, tenant isolation, retry/idempotency, prompt/evaluation strategy, data retention, and incident recovery. Mortgage documents contain sensitive data; threat modeling and verified Supabase RLS matter more here than more features.

**Hiring manager:** Highest interview value by a large margin. It combines authentic domain expertise, AI, SaaS, billing, database, deployment, and actual customer language. “Live with paying customers” is extremely strong only if supported with safe metrics: customers, documents/month, extraction accuracy, hours saved, retention, or revenue range. Without a concise case study, the sprawling feature list can look generated rather than deliberately engineered.

**Client perspective:** Clear pain, clear buyer, clear economic outcome. Add a guided sample loan, a 90-second video, security/privacy statement, and three quantified outcomes. The current deployed root rendered as a loading/skeleton state in the automated visual pass, so cold-start and first-run experience need verification.

**UI/UX and docs:** Streamlit is practical but visually weaker than the best client-facing projects. README and setup material are substantive, though mojibake/encoding artifacts reduce polish. Replace feature volume with workflow clarity: upload → review confidence/citations → edit → export/sync. Add empty, error, and slow-AI states.

**Issues and effort:** P0 security/RLS and secrets audit (1–2 days); CI plus deterministic core tests (1–2 days); case study/demo dataset/video (1 day); architecture/evaluation documentation (1 day). A complete enterprise hardening effort is weeks, not days.

### 2. Tax Delinquency Leads

**Executive summary:** A deployed foreclosure/tax-delinquency data storefront with 20k+ visible records, 59 markets, filtering, masking, per-lead pricing, and scraping/OCR automation. It presents the clearest immediately understandable product value.

**Senior staff engineer:** The scraping stack covers requests, BeautifulSoup, PDF extraction/OCR, Playwright, persistence, Flask, and scheduled runners. That is credible automation breadth. Weaknesses are zero evident tests, large bundled data payloads (the homepage response was roughly 10 MB), unclear job orchestration, data lineage, deduplication, freshness SLAs, rate-limit/backoff controls, observability, and checkout idempotency. Public-record sourcing and permissible contact usage need documented compliance boundaries.

**Hiring manager:** Excellent evidence of shipping a data product, less evidence of maintainable production engineering. Add a scraper architecture diagram, source adapters, normalized schema, failure/retry model, and quality metrics. “20,381 leads / 59 markets” is strong résumé material if accurate and timestamped.

**Client perspective:** Strong client proposition and credible inventory. The dense table is appropriate for power users, but a buyer needs sample quality, freshness date, deliverable fields, refund/replacement policy, and trust indicators before paying.

**UI/UX and docs:** Functional, information-dense, good masking/selection model. Improve responsive use, onboarding, saved filters, clearer selected-state feedback, and table virtualization. README explains coverage well; add operating runbook and data dictionary.

**Issues and effort:** Add tests/CI and payload pagination (2–4 days); buyer trust/compliance copy and sample download (1 day); metrics/case study (half day).

### 3. Contractor Leads SaaS

**Executive summary:** Multi-city permit collection and normalization with a customer-facing lead product, Supabase, Stripe/email delivery, and scheduled backend automation. The live landing page communicates a concrete recurring-value proposition.

**Senior staff engineer:** A real full-stack boundary exists, but the backend repository is cluttered with backups, logs, CSV fixtures, binaries, migration/debug utilities, and aged pinned dependencies. The README publicly lists a map key and credential-oriented material; even if the map token is intended public, this is poor secrets hygiene signaling. Tests exist but CI is absent. Consolidate scraper adapters, define schemas/contracts, isolate admin jobs, use migrations, add queue semantics, idempotent ingestion, and operational dashboards.

**Hiring manager:** Strong second flagship once repository hygiene improves. Seven-city scraping plus subscriptions tells a coherent automation/SaaS story. Current evidence says “resourceful builder”; cleanup and an architecture narrative can move it toward “production engineer.”

**Client perspective:** Strong promise, pricing, and delivery cadence. Claims such as “300–700 fresh leads daily” and “24/7 auto-updated” need visible methodology and proof. Show sample records, coverage/freshness, customer ROI, cancellation terms, and lead exclusivity.

**UI/UX and docs:** Attractive but generic SaaS hero. Dashboard workflow should lead the presentation, not just the landing page. Documentation is plentiful but duplicated/inconsistent and contains encoding artifacts.

**Issues and effort:** Rotate/audit documented credentials, purge operational artifacts from Git, update dependencies (1–2 days); CI/contract and scraper tests (2 days); evidence-based case study (1 day).

### 4. Property Manager Leads Service

**Executive summary:** A seven-county property-sales collection pipeline feeding a filterable storefront with more than 9,000 displayed leads and per-lead purchase flow. The backend contains multiple source-specific scrapers and automation guides.

**Senior staff engineer:** Meaningful ETL/scraping complexity and useful normalization work. However, the repo contains many experimental/legacy scripts, generated HTML/CSV, debug screenshots, and overlapping implementations. The architecture is hard to identify from filenames alone. Tests appear limited and CI absent. Create one production package, one adapter interface, one canonical pipeline, explicit schema validation, dedupe/provenance, and monitored scheduled execution.

**Hiring manager:** Good evidence of gritty automation across unreliable public sources. Its impact is diluted because the portfolio description understates the scope while the repo overexposes implementation debris. Present it as an ETL reliability case study.

**Client perspective:** Search/filter/cart is useful and inventory is tangible. Some rows show masked fields and unavailable phones; explain exact purchased fields, data age, verification, replacement terms, and buyer outcomes.

**UI/UX and docs:** Dense but capable desktop interface; small typography and wide tables will struggle on mobile. Add detail drawer, saved lists, clearer filtering, and explicit freshness. README architecture is one of the better ones.

**Issues and effort:** Repo consolidation (2–4 days), pipeline quality/health metrics (1–2 days), purchase trust and mobile UX (1–2 days).

### 5. Pressure Washing

**Executive summary:** The strongest visual client-site example: polished local positioning, instant-estimate funnel, localized copy, trust badges, and before/after proof.

**Senior staff engineer:** Appropriate modern web implementation with the rare presence of CI/test evidence among the small sites. Engineering depth is naturally lower than SaaS projects; demonstrate form validation, analytics, spam prevention, accessible interactions, performance budgets, and reliable lead delivery.

**Hiring manager:** Useful proof that the candidate can deliver conversion-focused frontend work, but should support—not replace—the automation flagships.

**Client perspective:** Best portfolio item for selling websites to local businesses. Replace placeholder-looking phone number `(615) 555-WASH`, substantiate “fully insured,” and show that estimate/booking truly completes.

**UI/UX and docs:** Clear hierarchy, strong CTA, professional color and imagery. Add social proof, service area map, real contact identity, FAQ, and confirmation flow. Portfolio-ready in 1–2 days.

### 6. Commission Scout

**Executive summary:** A Next.js agent comparison/search experience with interactive map, multi-dimensional filters, account gating, Appwrite integration, and demo fallback.

**Senior staff engineer:** Good UI state complexity and credible product architecture. Production currently displayed zero agents and explicitly announced demo/database fallback, weakening the live proof. No evident tests or CI. Add seeded demo mode, URL-addressable filters, server-side query contracts, auth tests, map performance safeguards, and clear data licensing/compliance.

**Hiring manager:** Stronger than a landing page because it shows search, geospatial UI, auth, and data modeling. The empty production state turns a potentially impressive demo into unfinished work.

**Client perspective:** Useful concept, but no inventory means no marketplace liquidity. Separate consumer and agent value propositions and demonstrate verified supply.

**UI/UX and docs:** Polished split-view layout and filters. Improve first-run geography, mobile map/list toggle, empty state, and filter density. Portfolio-ready in 2–4 days, assuming demo data can be safely enabled.

### 7. Edge Landings

**Executive summary:** A website-as-a-service sales funnel with pricing, signup/login, demos, Supabase/Stripe/email setup, and a fast-launch pitch.

**Senior staff engineer:** Commercial breadth is good, but repository hygiene is poor: multiple backups, “working/simple/debug/fix” HTML variants, database setup scripts, mixed Python/Node paths, and many corrective guides indicate architecture drift. Tests exist but no CI. Choose one application structure, archive experiments outside main, define payment/webhook invariants, and add integration tests.

**Hiring manager:** Shows initiative and sales thinking, but currently signals rapid iteration without enough consolidation. Valuable as a client-acquisition system after cleanup.

**Client perspective:** Clear no-risk offer; the visual is distinctive. Claims such as an exact average launch time and testimonial need verifiable sourcing. Clarify deliverables, ownership, revisions, SEO scope, and support SLA.

**UI/UX and docs:** Strong hero but some low-contrast copy and an overbusy aesthetic. Documentation volume is high but fragmented. Portfolio-ready in 2–4 days; codebase production cleanup is longer.

### 8. Tennessee Child Support Estimator

**Executive summary:** A compact, visually clear calculator translating a domain formula into an interactive two-party estimate.

**Senior staff engineer:** The public repo is essentially a single HTML artifact with no tests or docs, so correctness is not auditable. For legal/financial calculations, versioned rule sources, boundary cases, golden fixtures, rounding rules, effective dates, and a reproducible calculation module are mandatory.

**Hiring manager:** Demonstrates domain translation and UI clarity, but not senior engineering yet. A thorough test matrix and provenance would substantially improve it.

**Client perspective:** Useful lead magnet, with a visible disclaimer. Add printable/shareable calculation, effective-date citation, privacy statement, and attorney/legal-aid conversion path.

**UI/UX and docs:** Excellent information density and immediate result visibility. Improve plain-language guidance and mobile stacking. Portfolio-ready in 1–3 days if authoritative formula tests are added.

### 9. Leasure Time Lawn Care

**Executive summary:** Responsive Next.js service site with service discovery and booking flow.

**Senior staff engineer:** Reasonable structure and setup docs, but no tests/CI evidence. Booking correctness needs timezone, collision, capacity, validation, email/SMS failure, spam, and retry coverage.

**Hiring manager:** Solid delivery evidence, limited differentiation. The scheduling workflow is the technically relevant part and should be shown explicitly.

**Client perspective:** Clear CTA and friendly branding. Current visual is generic and shares a phone number with Ince Electric, which damages authenticity unless intentional. Add real portfolio attribution/outcomes only with permission.

**UI/UX and docs:** Clear and responsive, but emoji/icon style looks template-like. Add real photography, testimonials, service areas, price expectations, and booking confirmation. Portfolio-ready in 1–2 days.

### 10. Ince Electric

**Executive summary:** Straightforward Next.js local-electrician site focused on calls, services, licensing, and location.

**Senior staff engineer:** Clean, appropriately scoped frontend, but no tests/CI and little automation depth. Verify forms, structured data, accessibility, security headers, analytics/consent, and performance.

**Hiring manager:** Evidence of client execution, not a lead technical project. Keep as one grouped “client websites” case study.

**Client perspective:** Clear calls to action and local relevance. Visual identity is basic and hero lacks authentic work imagery, reviews, license details, and emergency/service-area information.

**UI/UX and docs:** Readable, high contrast, simple navigation. Portfolio-ready in 1–2 days.

### 11. Realtors Commission / Agent Finder legacy variant

**Executive summary:** An older agent-matching concept represented by an additional live link, superseded in portfolio value by Commission Scout.

**Reviews:** Avoid presenting two similarly named variants without explaining evolution. It creates ambiguity about which is canonical. Consolidate into the current Commission Scout case study and redirect or remove the legacy card. Effort: 2–3 days if migration/redirect is needed; under one hour to remove it from the portfolio.

### 12. Edge Barber Apply

**Executive summary:** Barber signup/contact funnel with Stripe/webhook setup artifacts and multiple demo/form variants.

**Reviews:** The public deployment returned an error. Repository structure contains many alternate HTML/test/debug versions and no clear canonical architecture. This can support a grouped “conversion funnels” case study after the live route, form delivery, validation, webhook verification, and documentation are cleaned up. Do not feature independently now. Effort: 1–2 days to portfolio-ready, longer if payment flow is incomplete.

### 13. Dallas Mortgage

**Executive summary:** Mortgage landing experience with limited verifiable public evidence in this audit.

**Reviews:** The deployed URL returned an error and the repository metadata is sparse. Because mortgage is the core brand, a broken mortgage link is disproportionately harmful. Repair and document the funnel or remove it until ready. It needs a purpose statement, conversion path, compliance disclosures, analytics, source README, screenshots, and tested deployment. Effort: 1–2 days for presentation if functionality already exists.

### 14. Leadbot

**Executive summary:** AI/automation-signaling name, but the live deployment returned an error and no unambiguous matching repository/case study was evidenced.

**Reviews:** This currently creates negative rather than positive AI credibility. A hiring manager cannot judge model choice, retrieval/tools, guardrails, evaluation, handoff, latency, cost, or business outcome. Either publish a real technical case study with a stable demo or remove it. Effort: 2–4 days if implementation exists; otherwise not estimable.

## Portfolio shell review

**Engineering:** The portfolio itself is a compact Vite/React/Tailwind single page and builds simply. It has no test, lint, typecheck, accessibility, or CI scripts. `App.jsx` is a 21 KB monolith with all content embedded; split data and components only if continued development warrants it. Resume text fetching handles network exceptions but not non-2xx responses. Clipboard failure is silent. The Formspree action is still a placeholder, so the primary contact form is nonfunctional. The README explicitly calls this out, but production UI also exposes an internal setup reminder.

**UI/UX:** The dark visual system is coherent and responsive, but the hero devotes a large block to three tiny scrollable résumé previews—poor hierarchy for recruiters and clients. Replace with one primary résumé CTA and role-specific secondary links. There are visible mojibake strings (`â€”`, corrupted copyright), no project screenshots, no GitHub/source links on cards, no quantified outcomes, no case-study paths, no LinkedIn link, and no clear “hire me” CTA. The additional-project grid makes strong work and weak/broken experiments look equally important.

**Documentation:** The portfolio README is setup-only and outdated (`resume.pdf` and Formspree instructions do not match the current three-resume UI). It needs project selection rationale, content-update instructions, verification checklist, accessibility/performance checks, and deployment status. Public project repos vary from useful architecture docs to no README at all; encoding corruption is widespread.

**Hiring/class perspective:** As a collection, the work is above junior level in product initiative and domain problem-solving, but the public engineering evidence currently reads **strong mid-level / entrepreneurial full-stack builder**, not yet consistently senior staff. Staff-level judgment becomes credible when the portfolio demonstrates system boundaries, reliability, security, tradeoffs, team influence, measurable outcomes, and maintained standards—not when it adds more projects.

## Final recommended portfolio order

1. Processor Assistant — deep technical flagship and domain moat.
2. Tax Delinquency Leads — scaled scraping/data marketplace and visible inventory.
3. Contractor Leads SaaS — recurring automation, payments, delivery, multi-city complexity.
4. Property Manager Leads — ETL reliability and public-source normalization.
5. Pressure Washing — client conversion/design proof.
6. Commission Scout — interactive full-stack/geospatial UI after seeded demo is fixed.
7. One grouped case study: “Local Business Websites” (Pressure Washing, Ince Electric, Lawn Care).
8. Tennessee Child Support Estimator — only after correctness tests and source provenance.
9. Edge Landings — after consolidation and claim verification.

Remove or hide broken/legacy links until they pass production checks: Leadbot, Edge Barber Apply, Dallas Mortgage, and the redundant Realtors Commission variant. More links are not more credibility.

## Top 10 changes by impact

| Priority | Change | Impact | Effort | Why it matters |
|---:|---|---|---|---|
| 1 | Repair/remove all broken links and the placeholder contact form; remove production setup note | Very high | **2–4 hours** | Broken conversion paths immediately cost interviews and clients. |
| 2 | Feature only 4 flagship case studies; group client sites; archive weak/duplicate cards | Very high | **3–5 hours** | Raises average quality and makes the engineering narrative memorable. |
| 3 | Add a case-study page for each flagship: problem, architecture, decisions, failure modes, security, results, screenshots, source/demo | Very high | **2–4 days** | Converts “claims” into senior-level evidence. |
| 4 | Add quantified, defensible outcomes: customers, documents/leads, accuracy, runtime, hours/revenue saved, freshness, uptime | Very high | **1 day** | Highest résumé and sales leverage; never invent numbers. |
| 5 | Publish a 90-second Processor Assistant guided demo using synthetic/redacted data | Very high | **1 day** | Lets reviewers see the flagship without signup, cold-start, or sensitive data. |
| 6 | Security and secrets audit across public repos; rotate exposed credentials; document RLS, PII retention, webhook verification | Very high | **1–3 days** | Essential for mortgage, payments, and senior credibility. |
| 7 | Add CI quality gates to four flagships: lint/typecheck, unit tests, dependency/security scan, build | High | **2–4 days** | Makes production discipline visible and prevents regressions. |
| 8 | Clean flagship repositories: remove logs/backups/generated datasets/binaries/debug variants; create canonical app structure | High | **3–6 days** | Repository review currently lowers the perceived engineering level. |
| 9 | Redesign portfolio hero and project cards around role, outcomes, screenshots, and “Case Study / Code / Live” CTAs | High | **1–2 days** | Improves 30-second recruiter comprehension and client trust. |
| 10 | Add operations evidence: architecture diagrams, health checks, structured logs, error tracking, runbooks, data freshness dashboards | High | **3–7 days** | Bridges the gap from fast builder to senior production engineer/tech lead. |

## High-impact roadmap, low effort first

### Phase 0 — same day (highest ROI)

- Fix/remove broken demos, Formspree placeholder, internal setup text, and encoding corruption.
- Reduce “Additional Live Projects” to proven, working examples.
- Change headline to “Full-Stack AI Automation Engineer | Mortgage-Tech Domain Expert | SaaS Builder.”
- Put one résumé download, GitHub, LinkedIn, email, and “Book a call” above the fold.
- Add honest metric chips to the four flagships and a visible “last verified” date.

### Phase 1 — 2 to 4 days

- Build the Processor Assistant case study/video first, then Tax Delinquency Leads.
- Add screenshots and Case Study/Source/Live links.
- Seed Commission Scout with a reliable demo dataset and repair empty-state behavior.
- Publish clear buyer samples, freshness, terms, and replacement policies for lead products.
- Add authoritative formula provenance and golden tests to the child-support calculator.

### Phase 2 — 1 to 2 weeks

- Establish CI, tests, dependency updates, secrets scanning, and production-check automation for the four flagships.
- Consolidate scraper repositories around adapters, schemas, idempotent ingestion, retries, lineage, and health metrics.
- Clean git history/current trees of logs, backups, generated data, credentials, and ambiguous duplicate implementations.
- Add observability and runbooks; document concrete incidents and design tradeoffs.

### Phase 3 — 2 to 6 weeks

- Harden Processor Assistant for sensitive-document handling: tenant isolation verification, retention/deletion, audit events, AI evaluation set, confidence/citations, cost/latency metrics, recovery procedures.
- Harden commerce flows: verified Stripe webhooks, idempotency, entitlements, refund paths, reconciliation, and end-to-end tests.
- Collect authorized testimonials and outcome evidence from paying users/clients.

## Resume and interview positioning

Lead with outcomes and system complexity, not framework lists. A defensible pattern is:

> Built and deployed an AI-assisted mortgage-processing platform that converts lender approval PDFs into actionable borrower conditions, combining document extraction, privacy controls, cloud/local model routing, Supabase workflows, and Stripe billing; used by paying customers.

Then replace generic words with verified figures. For lead platforms, describe source count, geographic coverage, records processed, freshness, failure recovery, and paid conversion. In interviews, be ready to explain one hard decision each in AI evaluation, scraper reliability, database tenancy/RLS, payment idempotency, and production incident response.

## Bottom line

Do not build another project yet. The existing portfolio has enough raw material for strong full-stack AI automation interviews and real client sales. The winning move is to turn the top four into undeniable case studies, make every public path work, expose production discipline, and remove anything that dilutes trust.
