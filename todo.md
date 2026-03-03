# Services Pages v2 - Implementation Plan

## Overview
Replace the current services.html content with the new 4-pillar service structure from the Rivium_Services Pages_v2.pdf. The new page uses a consistent structure for each pillar: tagline, The Reality, What Clients Are Struggling With, The Consequences, What Rivium Does, and Outcome.

## Design Approach
- **Replace** the services section content in services.html with the 4 new pillars (replaces the old 5 service cards)
- Keep the same header/nav, footer, CTA section, and page shell (Tailwind CDN, fonts, Google Translate)
- Each service pillar rendered as a full-width section with consistent styling
- Use existing brand colors (blue-sea, sky-blue, ice-blue, forest-green, grass-green) and fonts (Aleo headings, Poppins body)
- Alternating background colors (white / ice-blue) between pillar sections
- Keep the Conflict-Free Policy callout and CTA sections

## New Page Structure
1. **Hero Section** — Updated intro: "Rivium supports technology providers, municipal utilities, industrial operators and consulting houses across four integrated service pillars."
2. **Pillar 1: Market Entry** (white bg) — "Structure entry before expansion."
3. **Pillar 2: Business Development** (ice-blue bg) — "Protect margins before contract signature."
4. **Pillar 3: Technical Due Diligence** (white bg) — "Protect capital before scale."
5. **Pillar 4: PMO** (ice-blue bg) — "Protect execution when exposure increases."
6. **Conflict-Free Policy** — Keep existing callout
7. **CTA Section** — Keep existing "Discuss Your Project"
8. **Footer** — Keep existing footer

## Each Pillar Section Layout
- Pillar number + title (h2, Aleo bold)
- Bold tagline subtitle
- **The Reality** — paragraph(s)
- **What Clients Are Struggling With** — bullet list (styled with existing check/bullet pattern)
- **The Consequences** — short stacked lines (emphasized)
- **What Rivium Does** — intro text + bullet list
- **Outcome:** — bold summary line

## Tasks
- [x] 1. Update hero section with new intro copy from PDF
- [x] 2. Replace the 5 old service cards with 4 new pillar sections
- [x] 3. Ensure consistent styling across all 4 pillar sections
- [x] 4. Keep Conflict-Free Policy, CTA, and footer sections unchanged
- [x] 5. Remove the "How We Work / Time-Boxed Engagements" section (replaced by new content)

## Review

### Changes Made (Mar 3, 2026) - Services Pages v2

**Hero Section:**
- Kept existing h1 "How we help - and what you get" and "Where others advise, Rivium delivers."
- Updated subtitle paragraph with new intro text from PDF about 4 integrated service pillars

**Replaced 5 old service cards + "How We Work" section with 4 new pillar sections:**

1. **Pillar 1: Market Entry** (white bg) - "Structure entry before expansion."
2. **Pillar 2: Business Development** (ice-blue bg) - "Protect margins before contract signature."
3. **Pillar 3: Technical Due Diligence** (white bg) - "Protect capital before scale."
4. **Pillar 4: PMO - Project Management & Integration** (ice-blue bg) - "Protect execution when exposure increases."

**Each pillar has consistent structure:**
- Pillar number label (sky-blue uppercase)
- Title (h2, Aleo bold) + tagline (blue-sea)
- The Reality - paragraph text
- What Clients Are Struggling With - bullet list (blue-sea dots)
- The Consequences - medium-weight paragraph
- What Rivium Does - intro text + checkmark bullet list (blue-sea)
- Outcome - highlighted box (ice-blue on white sections, white on ice-blue sections)

**Pillar 4 also includes:** AI-Automations callout from the PDF

**Kept unchanged:** Conflict-Free Policy callout, CTA section, footer, header/nav
