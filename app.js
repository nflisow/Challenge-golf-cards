const STORAGE = {
  cards: "golfCards.cards.v1",
  golfers: "golfCards.golfers.v1",
  leaderboard: "golfCards.leaderboard.v1",
  highScores: "golfCards.highScores.v1",
};

const defaultCards = [
  {
    id: "card-swear-jar",
    image: "assets/cards/swear-jar.png",
    title: "Swear Jar",
    description: "Each time you swear on this hole, pay the penalty.",
    values: { cash: 2, drinks: 1, strokes: 1 },
    scoringType: "tap_to_add",
    isActive: true,
  },
];

// cash, drinks, strokes, image
const challengeSeeds = [
   ["2 Fore free", "First two putts are free on this hole. Every putt after that costs you another penalty (Team event).", 1,2, "2 Fore free.png"],
  ["Par is the paywall", "For every stroke over par, take another penalty (Team event).", 1,2, "Par is the paywall.png"],
  ["Stroke of Luck?", "After you putt out, attempt to re-sink the same putt. If you miss, take a penalty. (Individual event, each person will re-putt from where it was made by their team).", 2,4, "Stroke of luck.png"],
  ["Pays to be first", "First person to make the green sets the pace, all others must make it on the same stroke or take a penalty (Individual event).", 2,4, "Pays to be first.png"],
  ["The goat", "Longest, fairway drive, closest to the pin, wins. Everyone else takes a penalty. If no one lands the fairway or green, everyone takes a penalty. (Individual event).", 1,2, "The goat.png"],
  ["Swear jar", "Each time you swear on this hole, take a penalty. So don't F@ck up, you take a penalty each time (Individual event,).", 1,2, "Swear jar.png"],
  ["PGA ready", "Anyone that misses the fairway or green on their tee shot, take a penalty. (Individual event)", 2,4, "PGA ready.png"],
  ["Not measuring up", "Anyone that leaves a putt short, takes a penalty. Hit it like you mean it, long is safe. (Individual event)", 2,4, "Not measuring up.png"],
  ["Lost and found", "Take a penalty for every ball lost on this hole. To keep the pace moving, you have 30 seconds to find it once you start looking (Individual event)", 1,2, "Lost and found.png"],
  ["Money where your mouth is", "The person or team with the lowest score, must win this hole or take a penalty. If tied, may the best team win, and the other take a penalty! If you tie again this hole, double or nothing next, and so on.", 2,4, "Money where your mouth is.png"],
  ["Son of a beach", "On this hole, if you land in the water take 2 penalties, each time. If you end up in the sand, take 1 penalty each time (Individual event)", 1,3, "Son of a beach.png"],
  ["Tree hugger", "If you hit any part of a tree on this hole, take a penalty (Individual event)", 3,5, "Tree hugger.png"],
  ["Weed wacker", "If your ball lands in the tall stuff on this hole (the naturalized area) take a penalty each time. (Individual event)", 2,4, "Weed wacker.png"],
  ["Club up", "On this hole, everyone hits from the farthest tee box from the pin. Anyone that doesn't hit past the front tee box, take a penalty. (Individual event)", 3,5, "Club up.png"],
  ["Gimme", "For this hole, anyone that misses a putt that starts within the distance of the flagstick, takes a penalty. (Individual event, each player must putt if teams ball is inside the flagstick distance)", 2,4, "Gimme.png"],
  ["Wrong hole", "If your ball lands on the fairway or rough of another hole, take a penalty (Individual event)", 2,4, "Wrong hole.png"],
  ["Green Eagle", "You must land the green 2 under par or each take a penalty. Par 3 = make green on tee shot. Par 4 = make green on 2nd shot. Par 5 = make green on 3rd shot (team event, all players take the penalty).", 2,4, "Green eagle.png"],
    ["Silence Please", "For this hole, anyone who talks during a swing takes a penalty, each time (Individual event).", 2,3, "Silence please.png"],
  ["No Fly Zone", "For this hole, any shots that go over the green takes a penalty. (Individual event).", 3,5, "No fly zone.png"],
  ["Can't bench the bar", "Shortest drive on this hole takes a penalty (Individual event).", 1,4, "Cant bench the bar.png"],
  ["Fairway or Else", "At least one player on your team needs to hit the fairway or green on your drive or take a penalty. (Team event)", 3,5, "Fairway or else.png"],
  ["Musketeers", "Your entire team’s drives must land on the fairway or green or everyone takes a penalty.", 2,4, "Musketeers.png"],
  ["Control Your Balls", "If your ball touches the green but rolls or bounces off at any point on this hole, take a penalty for each time. (Individual event)", 3,5, "Control your balls.png"],
  ["Reverse vampire", "For this hole, each time a shot lands in the shade of a tree, take a penalty. If you use the shot in the shade it becomes a team penalty (individual/Team event)", 1,3, "Reverse vampire.png"],
  ["Bunker Breakout", "For this hole, if hitting out of a bunker, take a penalty for every shot that doesn't make it out of the sand (Individual event)", 2,4, "Bunker Breakout.png"],
  ["Benchwarmer", "If your team finishes the hole without using any of your shots, that/those players take a penalty. (individual/Team event)", 2,4, "Benchwarmer.png"],
  ["Weak Sauce", "Any approach that is less than 100 yards to the pin and lands short of the green, takes a penalty. (individual event)", 2,4, "Weak Sauce.png"],
  ["Be unique", "Any player on the same team hits off the fairway or green (left or all right of the fairway, in a bunker, or...), all those players take a penalty. (individual/Team event)", 1,2, "Be unique.png"],
  ["Worm burner", "Any drive that never gets above the trees takes a penalty. (individual event, majority decision if penalty is awarded)", 2,4, "Worm burner.png"],
  ["Equipment Violation", "If anyone drops ANYTHING on this hole, take a penalty each time. This means the tee, the ball, club... Put it down, don't drop it. (individual event)", 2,4, "Equipment Violation.png"],
  ["Bromance", "If 2+ teammates land their drive within three “paces” of each other, all other players on opposing teams take a penalty (Pace will be from one foot to the next, feel free to jump and make it interesting. You only get 1 try, and falling negates the penalty).", 3,6, "Bromance.png"],
  ["Pressure Cooker", "Once your team sinks a putt, everyone has one chance to make the same putt or take a penalty.", 2,5, "Pressure cooker.png"],
  ["Clean Sheet", "If your team finishes this hole with no penalties or stray shots, from anyone, you're safe. Otherwise everyone takes a penalty (no sand trap, water hazards, OB, or... you can decide if anything other than fairway counts prior to the hole). (Team Event)", 1,3, "Clean Sheet.png"],
  ["Chunk & Run", "Any chunked shots on this hole (obvious fat shot) will take a penalty for each one. (Individual)", 1,3, "Chunk and run.png"],
  ["Blade of Glory", "Any obvious thin shots on this hole will take a penalty for each one. (Individual)", 1,3, "Blade of glory.png"],
  ["Need a Map?", "Any shots within 30 yards of the green and fail to land it, take a penalty. (Individual)", 2,4, "Need a map.png"],
  ["Cart's path only", "If anyone hits the cart path on this hole takes a penalty. (Individual)", 3,5, "Carts path only.png"],
  ["Birdie Bonus", "If a team scores a Birdie or better on this hole, everyone else takes a penalty (more than one penalty can be taken)", 2,5, "Birdie bonus.png"],
  ["OB Taxman", "This app is from Illinois, we tax everything and big... Hit a ball out of bounds and take a huge penalty.", 4,7, "OB taxman.png"],
  ["One and Done", "Once your team reaches the green, everyone gets one putt. Miss it and take a penalty. (Team)", 2,5, "One and done.png"],
  ["Bromance", "If you and a teammate land your drive within three paces of each other, all players on other teams take a penalty (a “Pace” will be from one foot to the next, feel free to skip, jump or… just make it interesting).", 3,5, "Bromance.png"],
  ["The Great Bambino", "Your team must call the shot that is going to land the green. If you call the shot too early or late, take a penalty.", 3,5, "The great bambino.png"],
  ["Spades", "You must predict your score for the hole before teeing off. For every one stroke off you are, take a penalty.", 2,5, "Spades.png"],
];

let state = {
  screen: "home",
  cards: loadCardsWithSeeds(),
  golfers: load(STORAGE.golfers, []),
  leaderboard: load(STORAGE.leaderboard, { cash: [], drinks: [], strokes: [] }),
  activeGolfers: [],
  game: null,
  editingCard: null,
  selectedProfiles: new Set(),
};

const app = document.querySelector("#app");
let longPressTimer = null;

function load(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function normalizeTitle(title) {
  return String(title).trim().toLowerCase().replaceAll(/[^a-z0-9]+/g, " ");
}

function blankValues() {
  return { cash: "", drinks: "", strokes: "" };
}

function seedCard(title, description, cash_value=1, drink_value=1, image="placeholder.png") {
  const slug = normalizeTitle(title).trim().replaceAll(" ", "-") || uid("challenge");
  return {
    id: `challenge-${slug}`,
    image: "assets/cardArt/" + image,
    title,
    description,
    values: setValues(cash_value, drink_value),
    scoringType: "tap_to_add",
    isActive: true,
  };
}

function setValues(cash_value, drink_value) {
  return { cash: cash_value, drinks: drink_value};
}

function loadCardsWithSeeds() {
  const cards = load(STORAGE.cards, defaultCards);
  const byTitle = new Map(cards.map((card) => [normalizeTitle(card.title), card]));
  let changed = false;

  challengeSeeds.forEach(([title, description, cash_value, drink_value, image]) => {
    const key = normalizeTitle(title);
    const existing = byTitle.get(key);
    if (existing) {
      existing.title = title;
      existing.description = description;
      existing.image = "assets/cardArt/" + image;
      existing.values = setValues(
        cash_value ?? 1,
        drink_value ?? 1,
      );
      changed = true;
      return;
    }
    const card = seedCard(title, description, cash_value, drink_value, image);
    cards.push(card);
    byTitle.set(key, card);
    changed = true;
  });

  if (changed) save(STORAGE.cards, cards);
  return cards;
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function route(screen) {
  const leavingGame = (state.screen === "game" || state.screen === "results") && screen !== "game";
  state.screen = screen;
  state.editingCard = null;
  render();
}

function activeCards() {
  return state.cards.filter((card) => card.isActive);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  document.body.classList.toggle("game-orientation", state.screen === "game");
  if (state.screen === "home") return renderHome();
  if (state.screen === "cards") return renderCards();
  if (state.screen === "golfers") return renderGolfers();
  if (state.screen === "profiles") return renderProfiles();
  if (state.screen === "how") return renderHow();
  if (state.screen === "leaderboard") return renderLeaderboard();
  if (state.screen === "settings") return renderSettings();
  if (state.screen === "playSetup") return renderPlaySetup();
  if (state.screen === "game") return renderCurrentGameView();
  if (state.screen === "results") return renderResults();
}

function shell(title, body, subtitle = "", options = {}) {
  app.innerHTML = `
    <section class="screen">
      <div class="panel">
        <div class="flex">
        ${options.hideBack ? "" : `<button class="back-button" aria-label="Back" data-action="back">←</button>`}
        <div>
          <h1>${title}</h1>
          ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
        </div>
        <div class="empty-div"></div>
        </div>
        ${body}
      </div>
    </section>
  `;
}


function emptyShell(body) {
  app.innerHTML = `
    ${body}`;
}

function renderHome() {
  const canPlay = state.activeGolfers.length >= 1 || state.golfers.some((g) => g.inCurrentGame);
  app.innerHTML = `
    <section class="screen home">
      <img class="home-art" src="assets/home-screen.png" alt="Golf Cards home screen">
      <button class="home-hotspot home-play" data-action="play" ${canPlay ? "" : "disabled"} aria-label="Play"><span class="tooltip">Select your golfers before playing!</span></button>
      <button class="home-hotspot home-cards" data-route="cards" aria-label="Challenges"></button>
      <button class="home-hotspot home-golfers" data-route="golfers" aria-label="Golfers"></button>
      <button class="home-hotspot home-how" data-route="how" aria-label="How to Play"></button>
      <button class="home-hotspot home-shame" data-route="leaderboard" aria-label="Walk of Shame"></button>
      <button class="home-hotspot home-settings" data-route="settings" aria-label="Settings"></button>
    </section>
  `;
}

function renderCards() {
  const body = `
    <div class="toolbar">
      <div><strong>${state.cards.length}</strong> cards, <strong>${activeCards().length}</strong> active in deck</div>
      <div class="button-row">
        <button class="primary-button" data-action="pickImage">Add Challenge</button>
      </div>
    </div>
    <div class="grid card-grid">
      ${state.cards.map(cardTemplate).join("") || "<p>No cards yet. Add one to build your deck.</p>"}
    </div>
  `;
  shell("CHALLENGES", body, "Active cards are shuffled into the gameplay deck.");
}

function viewActiveCard(card){
   const body = `

   <div class="fullwidth">
    <img src="${escapeHtml(card.image)}" class="imageCardInGameplay">
    </div>


        <div class="button-row">
              <button class="accept-card" data-action="showScoreCard" data-id="${card.id}">
              <img height="200px" src="assets/Tap to continue.png">
              </button>
            </div>
  `;
  shell("ACTIVE CARD", body, "This is your card for this round!");
}

function cardTemplate(card) {
  const cashValue = card.values.cash === "" ? "" : `$${card.values.cash}`;
  const drinksValue = card.values.drinks === "" ? "" : `${card.values.drinks} drinks`;
  return `
    <article class="card-tile" data-card-id="${card.id}">
      <div class="card-body">
        <div class="card-row">
          <h3>${escapeHtml(card.title)}</h3>
          <button class="active-toggle" title="Active / Inactive" data-action="toggleCard" data-id="${card.id}">${card.isActive ? "✓" : ""}</button>
        </div>
        <p>${escapeHtml(card.description)}</p>
        <div>
          <div class="values">
            <div class="value-chip">${escapeHtml(cashValue)}</div>
            <div class="value-chip">${escapeHtml(drinksValue)}</div>
          </div>
            <div class="button-row">
              <button class="ghost-button" data-action="editCard" data-id="${card.id}">Edit</button>
              <button class="danger-button" data-action="deleteCard" data-id="${card.id}">Delete</button>
            </div>
          </div>
        </div>
    </article>
  `;
}

function showCardForm(card = null, imageData = null) {
  const editing = Boolean(card);
  const source = card || {
    id: uid("card"),
    image: imageData?.dataUrl || "",
    title: "",
    description: "",
    values: blankValues(),
    scoringType: "tap_to_add",
    isActive: true,
  };
  showModal(`
    <h2>${editing ? "Edit Card" : "Card Data"}</h2>
    <form class="form" data-action="saveCardForm">
      <p><strong>id:</strong> ${escapeHtml(source.id)}</p>
      <label>Title
        <input name="title" required value="${escapeHtml(source.title)}" placeholder="Please enter a name for your card">
      </label>
      <label>Description
        <textarea name="description" required placeholder="Describe circumstances for the challenge">${escapeHtml(source.description)}</textarea>
      </label>
      <div class="form-values">
        <label>Cash
          <input name="cash" type="number" min="0" max="99" value="${source.values.cash}">
        </label>
        <label>Drinks
          <input name="drinks" type="number" min="0" max="99" value="${source.values.drinks}">
        </label>
        <label>Strokes
          <input name="strokes" type="number" min="0" max="99" value="${source.values.strokes}">
        </label>
      </div>
      <div class="button-row">
        <button class="primary-button" type="submit">${editing ? "Save Changes" : "Add Challenge"}</button>
        <button class="ghost-button" type="button" data-action="closeModal">Cancel</button>
      </div>
    </form>
  `);
  state.editingCard = source;
}

function renderGolfers() {
  const body = `
    <div class="button-row">
      <button class="pill-button" data-action="newGolfers">Create new golfer</button>
      <button class="pill-button" data-route="profiles">Choose existing golfer</button>
    </div>
    <form class="golfer-slots" data-action="saveGolfers">
      ${[0, 1, 2, 3].map((i) => {
        const golfer = state.activeGolfers[i] || {};
        return `
          <div class="slot">
            <label>Name
              <input name="name${i}" value="${escapeHtml(golfer.name || "")}" placeholder="Golfer ${i + 1}">
            </label>
            <label class="checkline">
              <input type="checkbox" name="favorite${i}" ${golfer.favorite ? "checked" : ""}>
              <span>Favorite this profile ⭐</span>
            </label>
          </div>
        `;
      }).join("")}
      <div class="button-row golfer-save-row">
        <button class="primary-button" type="submit">Save players</button>
      </div>
    </form>
  `;
  shell("GOLFERS", body, "Start Game uses only filled slots. Minimum 1 player, maximum 4.");
}

function renderProfiles() {
  const favorites = state.golfers.filter((g) => g.favorite);
  const body = `
    <div class="saved-list">
      ${favorites.map((golfer) => `
        <label class="saved-row">
          <input type="checkbox" data-action="selectProfile" data-id="${golfer.id}" ${state.selectedProfiles.has(golfer.id) ? "checked" : ""}>
          <span>⭐ ${escapeHtml(golfer.name)}</span>
          <span>${state.selectedProfiles.has(golfer.id) ? "Selected" : "Choose"}</span>
        </label>
      `).join("") || "<p>No starred golfers saved yet.</p>"}
    </div>
    <div class="button-row">
      <button class="primary-button" data-action="useProfiles">Use selected golfers</button>
    </div>
  `;
  shell("SAVED GOLFERS", body, "Choose up to 4 starred profiles.");
}

function renderPlaySetup() {
  if (!activeCards().length) {
    shell("PLAY", `<p class="subtitle">Add or activate at least one card before starting.</p><div class="button-row"><button class="primary-button" data-route="cards">Go to Challenges</button></div>`);
    return;
  }
  const body = `
    <div class="option-grid">
      <img src="assets/playing_options.png">
      <button class="option-card cashSelect" data-action="startGame" data-mode="drinks"></button>
      <button class="option-card drinkSelect" data-action="startGame" data-mode="cash"></button>
    </div>
  `;
  emptyShell(body);
}

function startGame(mode) {
  const players = state.activeGolfers.length
    ? state.activeGolfers
    : state.golfers.filter((g) => g.inCurrentGame).slice(0, 4);
  const deck = shuffle(activeCards());
  state.game = {
    mode,
    deck,
    view: "card",
    used: [],
    card: deck.shift(),
    hole: 1,
    scores: Object.fromEntries(players.map((p) => [p.id, Array(18).fill(0)])),
    players,
    history: [],
  };
  route("game");
}

function renderCurrentGameView() {
  const game = state.game;

  if (game.view === "card") {
    return viewActiveCard(game.card);
  }

  return renderGame();
}

function renderGame() {
  const game = state.game;
  if (!game) return route("home");
  const value = Number(game.card?.values?.[game.mode]) || 0;
  const showingBackNine = game.hole > 9;
  const scoreSection = (start, end, totalLabel, totalFor) => {
    const holes = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    return `
      <table class="score-grid">
        <thead>
          <tr><th>PLAYER</th>${holes.map((h) => `<th>${h}</th>`).join("")}<th>${totalLabel}</th></tr>
        </thead>
        <tbody>
          ${game.players.map((player) => {
            const row = game.scores[player.id];
            const total = totalFor(row);
            return `<tr>
              <th class="player-name">
                <span class="player-name-content">
                  <span>${escapeHtml(player.name)}</span>
                  <button class="plus-button" data-action="addScore" data-id="${player.id}" aria-label="Add ${value} to ${escapeHtml(player.name)} on hole ${game.hole}">+</button>
                </span>
              </th>
              ${holes.map((hole) => {
                const index = hole - 1;
                const score = row[index];
                return `<td>${score || (index === game.hole - 1 ? "•" : "")}</td>`;
              }).join("")}
              <td class="total-cell">${total}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    `;
  };

  const body = `
  <br>
    <div class="game-layout">
      <section class="scorecard">
        <div class="card-header">
          <h2>${escapeHtml(game.card?.title || "Deck Empty")}</h2>
          <p>${escapeHtml(game.card?.description || "All active cards have been used this round.")}</p>
        </div>
        <div class="hole-status">
          <span>Hole ${game.hole} of 18</span>
          <span>${game.mode.toUpperCase()} +${value}</span>
        </div>
        <div class="score-sections">
          ${showingBackNine
            ? scoreSection(10, 18, "TOTAL", (row) => row.reduce((sum, score) => sum + score, 0))
            : scoreSection(1, 9, "TOTAL", (row) => row.slice(0, 9).reduce((sum, score) => sum + score, 0))}
        </div>
        <div class="game-actions">
          <button class="ghost-button" data-action="undo">↶ Undo</button>
          <button class="primary-button" data-action="finishHole">Hole Finished</button>
        </div>
      </section>
    </div>
  `;
  shell("SCORE CARD", body);
}

function addScore(playerId) {
  const game = state.game;
  const amount = Number(game.card?.values?.[game.mode]) || 0;
  const index = game.hole - 1;
  game.scores[playerId][index] += amount;
  game.history.push({ playerId, index, amount });
  render();
}

function finishHole() {
  const game = state.game;
  if (game.hole >= 18) {
    finishGame();
    return true;
  }
  if (game.card) game.used.push(game.card);
  game.card = game.deck.length ? game.deck.shift() : shuffle(activeCards())[0];
  game.hole += 1;
  render();
}

function finishGame() {
  route("results");
}

function renderResults() {
  const game = state.game;
  const body = `
    <div class="grid results-grid">
      ${game.players.map((player) => {
        const total = game.scores[player.id].reduce((sum, score) => sum + score, 0);
        return `<div class="result-card">${escapeHtml(player.name)}<span>${total}</span></div>`;
      }).join("")}
    </div>
    <div class="button-row">
      <button class="primary-button" data-action="endToHome">Return to home screen</button>
    </div>
  `;
  shell("FINAL", body, `${game.mode.toUpperCase()} totals`, { hideBack: true });
}

function saveFinalScoresToLeaderboard() {
  const game = state.game;
  if (!game || game.leaderboardSaved) return;
  const today = new Date().toLocaleDateString();
  game.players.forEach((player) => {
    const total = game.scores[player.id].reduce((sum, score) => sum + score, 0);
    state.leaderboard[game.mode].push({ name: player.name, total, date: today });
  });
  state.leaderboard[game.mode] = state.leaderboard[game.mode]
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);
  game.leaderboardSaved = true;
  save(STORAGE.leaderboard, state.leaderboard);
}

function clearCurrentPlayers() {
  state.activeGolfers = [];
  state.selectedProfiles.clear();
  state.golfers = state.golfers.map((golfer) => ({ ...golfer, inCurrentGame: false }));
  save(STORAGE.golfers, state.golfers);
}

function returnFinalToHome() {
  try {
    saveFinalScoresToLeaderboard();
    clearCurrentPlayers();
  } finally {
    state.game = null;
    route("home");
  }
}

function renderLeaderboard() {
  const boards = ["cash", "drinks"];
  const body = `
    <div class="leaderboards">
      ${boards.map((board) => {
        const entries = state.leaderboard[board] || [];
        return `
          <section class="leaderboard">
            <h2>${board.toUpperCase()}</h2>
            <div class="top-score">${entries[0] ? formatScore(board, entries[0].total) : "-"}</div>
            ${[0, 1, 2].map((i) => {
              const entry = entries[i];
              return `<div class="rank-row"><span>${i + 1}</span><span>${escapeHtml(entry?.name || "-")}</span><span>${entry ? formatScore(board, entry.total) : "-"}</span><small>${escapeHtml(entry?.date || "")}</small></div>`;
            }).join("")}
          </section>
        `;
      }).join("")}
    </div>
  `;
  shell("WALK OF SHAME", body, "Top penalties. Wear it with pride.");
}

function renderHow() {
  const body = `
    <div class="copy">
    <br>
      <p>This will be the easiest part of your day. Start by deciding if your group, or you, will be playing for a cash pot, drink penalties, or adding penalty strokes to your score.</p>
      <p>Each card has an objective to complete or an action to avoid. If you fail, there are consequences. Each card can carry a different penalty for cash, drinks, and strokes.</p>
      <h2>Playing for cash</h2>
      <p>Before starting, decide who takes the pot, what happens on a tie, whether the losing team has other penalties, and whether mulligans are allowed. If mulligans are allowed, decide how many, whether they can avoid a card penalty, and whether using one has a cost.</p>
      <h2>Playing for drinks</h2>
      <p><strong>Warning:</strong> know your limits. Water works too. Be responsible, know your limits, and stop playing when you have had enough. Before starting, decide what counts as a drink for each player and whether all penalty drinks must be completed before teeing off on the next hole.</p>
      <h2>Playing for strokes</h2>
      <p>Each card has a stroke penalty. If the condition is met, add the strokes to that player's score. Decide ahead of time whether mulligans can avoid penalties and whether using one carries its own penalty.</p>
    </div>
  `;
  shell("HOW TO PLAY", body);
}

function renderSettings() {
  const rows = [

    ["CLEAR WALK OF SHAME", "Reset leaderboards.", "resetLeaderboard"],
    ["DELETE PLAYERS", "Erase saved players.", "erasePlayers"],
    ["ERASE ALL CARDS", "Erase player made cards.", "eraseCards"],
    ["FACTORY RESET", "Reset all data, not just scores.", "resetAll"],
    ["BUY ME A DRINK", "Support development!", "donate"],
    ["CONTACT ME", "Suggest a new card!", "contact"],
  ];
  const body = `<br><div class="settings-list">${rows.map(([header, label, action]) => `
    <button class="setting-row" data-action="${action}">
      <span class="menu-header">${header}</span>
      <span>${label}</span>
    </button>
  `).join("")}</div>`;
  shell("SETTINGS", body);
}

function showModal(content) {
  document.body.insertAdjacentHTML("beforeend", `<div class="modal-wrap"><div class="modal">${content}</div></div>`);
}

function closeModal() {
  document.querySelector(".modal-wrap")?.remove();
}

function saveCardFromForm(form) {
  const source = state.editingCard;
  const formValue = (field) => field.value.trim() === "" ? "" : Number(field.value);
  const card = {
    ...source,
    title: form.title.value.trim(),
    description: form.description.value.trim(),
    values: {
      cash: formValue(form.cash),
      drinks: formValue(form.drinks),
      strokes: formValue(form.strokes),
    },
    scoringType: "tap_to_add",
  };
  const index = state.cards.findIndex((item) => item.id === card.id);
  if (index >= 0) state.cards[index] = card;
  else state.cards.push(card);
  save(STORAGE.cards, state.cards);
  closeModal();
  renderCards();
}

function saveGolfers(form) {
  const players = [0, 1, 2, 3]
    .map((i) => ({
      id: state.activeGolfers[i]?.id || uid("golfer"),
      name: form[`name${i}`].value.trim(),
      favorite: form[`favorite${i}`].checked,
      inCurrentGame: true,
    }))
    .filter((g) => g.name);
  if (!players.length) {
    showModal(`<h2>One golfer needed</h2><p>Add at least one name to unlock Play.</p><div class="button-row"><button class="primary-button" data-action="closeModal">OK</button></div>`);
    return;
  }
  state.activeGolfers = players;
  players.forEach((player) => {
    const existing = state.golfers.findIndex((g) => g.name.toLowerCase() === player.name.toLowerCase());
    if (existing >= 0) state.golfers[existing] = { ...state.golfers[existing], ...player };
    else state.golfers.push(player);
  });
  save(STORAGE.golfers, state.golfers);
  route("home");
}

function confirmAction(message, yes) {
  showModal(`
    <h2>Are you sure?</h2>
    <p>${message}</p>
    <div class="button-row">
      <button class="danger-button" data-confirm="${yes}">Yes</button>
      <button class="ghost-button" data-action="closeModal">No</button>
    </div>
  `);
}

function runConfirmed(action) {
  if (action === "delete-card") {
    state.cards = state.cards.filter((card) => card.id !== state.deleteCardId);
    save(STORAGE.cards, state.cards);
    closeModal();
    renderCards();
  }
  if (action === "reset-leaderboard" || action === "reset-highscores") {
    state.leaderboard = { cash: [], drinks: [], strokes: [] };
    save(STORAGE.leaderboard, state.leaderboard);
    closeModal();
    renderSettings();
  }
  if (action === "erase-players") {
    state.golfers = [];
    state.activeGolfers = [];
    save(STORAGE.golfers, state.golfers);
    closeModal();
    renderSettings();
  }
  if (action === "erase-cards") {
    state.cards = [];
    save(STORAGE.cards, state.cards);
    closeModal();
    renderSettings();
  }
  if (action === "reset-all") {
    Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
    state.cards = structuredClone(defaultCards);
    state.golfers = [];
    state.activeGolfers = [];
    state.leaderboard = { cash: [], drinks: [], strokes: [] };
    save(STORAGE.cards, state.cards);
    closeModal();
    route("home");
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatScore(board, total) {
  if (board === "cash") return `$${total}`;
  return String(total);
}

document.addEventListener("submit", (event) => {
  const action = event.target.dataset.action;
  if (!action) return;
  event.preventDefault();
  if (action === "saveCardForm") saveCardFromForm(event.target);
  if (action === "saveGolfers") saveGolfers(event.target);
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-route], [data-confirm]");
  if (!target) return;

  const routeName = target.dataset.route;
  if (routeName) return route(routeName);

  const confirmed = target.dataset.confirm;
  if (confirmed) return runConfirmed(confirmed);

  const action = target.dataset.action;
  if (action === "back"){
    if (state.game != null) {
      if(window.confirm("You have a game in progress! Are you sure you want to quit now?"))
      {
        state.game = null;
        return route(state.screen === "profiles" ? "golfers" : "home");
      }
    }
    return route(state.screen === "profiles" ? "golfers" : "home");
  }
  if (action === "play") return route("playSetup");
  if (action === "pickImage") return showCardForm();
  if (action === "closeModal") return closeModal();
  if (action === "toggleCard") {
    const card = state.cards.find((item) => item.id === target.dataset.id);
    card.isActive = !card.isActive;
    save(STORAGE.cards, state.cards);
    return renderCards();
  }
  if (action === "editCard") return showCardForm(state.cards.find((card) => card.id === target.dataset.id));
  if (action === "deleteCard") {
    state.deleteCardId = target.dataset.id;
    return confirmAction("Delete this card and all of its saved data?", "delete-card");
  }
  if (action === "newGolfers") {
    state.activeGolfers = [];
    return renderGolfers();
  }
  if (action === "selectProfile") {
    if (target.checked && state.selectedProfiles.size >= 4) target.checked = false;
    if (target.checked) state.selectedProfiles.add(target.dataset.id);
    else state.selectedProfiles.delete(target.dataset.id);
    return renderProfiles();
  }
  if (action === "useProfiles") {
    state.activeGolfers = state.golfers.filter((g) => state.selectedProfiles.has(g.id)).slice(0, 4);
    state.golfers = state.golfers.map((g) => ({ ...g, inCurrentGame: state.selectedProfiles.has(g.id) }));
    save(STORAGE.golfers, state.golfers);
    return route("home");
  }
  if (action === "startGame") return startGame(target.dataset.mode);
  if (action === "addScore") return addScore(target.dataset.id);
  if (action === "undo") {
    const last = state.game.history.pop();
    if (last) state.game.scores[last.playerId][last.index] = Math.max(0, state.game.scores[last.playerId][last.index] - last.amount);
    return renderCurrentGameView();
  }
  if (action === "finishHole"){
    state.game.view = "card";
    gameDone = finishHole();
    if(gameDone == false) {
      renderCurrentGameView();
    }
  }
  if (action === "endToHome") return returnFinalToHome();
  if (action === "resetHighScores") return confirmAction("Clear saved high scores?", "reset-highscores");
  if (action === "resetLeaderboard") return confirmAction("Clear all Walk of Shame boards?", "reset-leaderboard");
  if (action === "erasePlayers") return confirmAction("Erase all saved golfer profiles?", "erase-players");
  if (action === "eraseCards") return confirmAction("Erase every card from Challenges?", "erase-cards");
  if (action === "resetAll") return confirmAction("Reset all local app data?", "reset-all");
  if (action === "donate") return showModal(`<h2>Donate</h2><p>Help keep this updated and new content without ads or microcharges. If you enjoy, send me a tip to buy me a beer.</p><div class="button-row"><button class="primary-button" ><a class="donate" href="https://www.venmo.com/u/Nick-Lisowski">Donate</a></button><button class="danger-button" data-action="closeModal">Close</button></div>`);
  if (action === "contact") return showModal(`<h2>Contact me</h2><p>Feel free to email me at <a href="mailto:golfcardsforfun@gmail.com">golfcardsforfun@gmail.com</a> if you have any questions, suggestions for new cards, or suggestions for updates. I am not a programer, so i would also take offers of help.</p><div class="button-row"><button class="primary-button" data-action="closeModal">Close</button></div>`);
  if(action === "showScoreCard") {
    state.game.view = "score";
    renderCurrentGameView();
  }
});

document.addEventListener("pointerdown", (event) => {
  const tile = event.target.closest(".card-tile[data-card-id]");
  if (!tile || event.target.closest("button")) return;
  longPressTimer = setTimeout(() => {
    state.deleteCardId = tile.dataset.cardId;
    confirmAction("Delete this card and all of its saved data?", "delete-card");
  }, 650);
});

["pointerup", "pointercancel", "pointermove"].forEach((name) => {
  document.addEventListener(name, () => {
    clearTimeout(longPressTimer);
  });
});

render();

