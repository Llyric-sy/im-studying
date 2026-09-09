# im-studying

A personal Semester 2, 2026 Curtin study dashboard built around **topics + actual dates**, rather than expecting the user to remember what “Week 8” means.

## What it does

- Shows the current Curtin teaching week with the actual date range.
- Organises study as **Unit → Topic → Concept**, with week number as secondary metadata.
- Starts every learning and assessment checkbox **unticked**.
- Saves progress locally in the browser with `localStorage`.
- Gives each topic a plain-English “what this really means” explanation before technical terminology.
- Separates learning progress from class attendance and assessment completion.
- Tracks assessment due dates and known timetable placeholders.
- Marks source coverage so it is obvious where more lecture/tutorial material still needs to be added.

## Current source coverage

- **ACCT2002** — unit outline plus Modules 1–9 and supporting tutorial/revision/illustration material received so far.
- **ECOM1000** — unit outline plus the currently supplied Module/Lab material through the later analytics and data-governance content.
- **TAXA2000** — unit outline + announcements mapped; detailed teaching attachments still to come.
- **ECON1000** — unit outline + assessment/MyLabs announcements mapped; detailed teaching attachments still to come.

## Important copyright note

This repository is intentionally **not** a dump of Curtin/Pearson lecture decks, textbook pages, tutorial PDFs, or other copyrighted course files. The public site contains derived study structure, short plain-language explanations, progress state, dates and source labels. Authorised original-source links can be added separately where appropriate.

## Weekly upkeep

At the end of each teaching week, reconcile newly released materials before changing the study content:

1. Check Blackboard/OASIS announcements for deadline or instruction changes.
2. Add any newly released lecture/tutorial/solution files to the private source set.
3. Update the relevant topic’s source coverage.
4. Add or refine plain-English explanations only after the source is available.
5. Do **not** overwrite the learner’s saved progress ticks.

## Run locally

Open `index.html` directly, or serve the folder with any simple static server.

## GitHub Pages

The site is static and Pages-ready from the repository root. If Pages is not already enabled, set **Settings → Pages → Deploy from a branch → `main` / root**.
