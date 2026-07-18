# Golf Cards Progress Handoff

Project folder:
`/Users/nflisow/Documents/Codex/2026-05-18/files-mentioned-by-the-user-e5`

Open app:
`/Users/nflisow/Documents/Codex/2026-05-18/files-mentioned-by-the-user-e5/index.html`

Current app files:
- `index.html`
- `styles.css`
- `app.js`
- `assets/app-background.png`
- `assets/home-screen.png`
- `assets/cards/swear-jar.png`

Current state:
- Browser-based local prototype for Golf Cards.
- Data saves locally in browser `localStorage`.
- Home screen uses `assets/home-screen.png` with invisible button hotspots.
- Global page background uses `assets/app-background.png`.
- Main screens include Home, Challanges, Golfers, Saved Golfers, How to Play, Walk of Shame, Settings, Play setup, Gameplay, and Results.
- Challanges supports add image, edit, delete, and active/inactive toggle.
- Golfers supports up to 4 players and saved favorite profiles.
- Play setup lets user choose Cash, Drinks, or Strokes.
- Gameplay uses the selected card value, supports plus scoring per player, undo, hole finished, card fade, 18 holes, results, and leaderboard saving.
- Gameplay attempts landscape orientation after selecting Cash/Drinks/Strokes.
- Front nine shows holes 1-9 plus total; after hole 9, the scorecard switches to holes 10-18 plus running total.

Recent requested adjustments completed:
- Removed Speech Bubble Suggestion button.
- Centered Save players button.
- Moved golfer note lower.
- Replaced app background with new golf course image.
- Replaced home screen artwork with transparent home UI image while keeping button behavior.
- Narrowed hole columns so player column has more room.
- Shrunk gameplay card column by 25%.

Good next-thread prompt:
“Continue work on the Golf Cards app in `/Users/nflisow/Documents/Codex/2026-05-18/files-mentioned-by-the-user-e5`. Read `PROGRESS.md`, then inspect `index.html`, `styles.css`, and `app.js` before making changes.”
