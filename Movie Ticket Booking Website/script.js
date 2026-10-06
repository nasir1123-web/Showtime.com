/* ============================================================
   MOVIE PHOTOS (optional): to use your own photo for a movie,
   add  img:"banners/your-photo.jpg"  inside that movie below.
   Leave it out and the generated artwork is used instead.
   ============================================================ */
const MOVIES = [
{  id: 1, t: "Midnight Express", l: "Hindi", g: ["Thriller", "Action"], r: 8.6, v: "84K", d: "2h 18m",c: "UA",img: "resources/midnightexpress.jpg",a: "#7b1e3a",b: "#1b1d4e",s: "A night train, a stolen ledger and twelve hours to reach the border before the police do."},
  { id: 2, t: "Chai & Chaos", l: "Hindi", g: ["Comedy", "Drama"], r: 7.9, v: "41K", d: "2h 04m", c: "U", img:"resources/Chai & Chaos at Sunset.png",a: "#d9822b", b: "#8a2b4a", s: "Three siblings inherit a failing tea stall in Banaras and one very strange will." },
  { id: 3, t: "Orbit Zero", l: "English", g: ["Sci-Fi", "Adventure"], r: 8.9, v: "120K", d: "2h 41m", c: "UA",img:"resources/orbitzero.jpg", a: "#0f6d8c", b: "#1a1446", s: "A salvage crew finds a silent space station that is still counting down." },
  { id: 4, t: "Kaveri", l: "Tamil", g: ["Drama", "Romance"], r: 8.2, v: "29K", d: "2h 22m", c: "U",img:"resources/kaveri.jpg" ,a: "#1f8a5b", b: "#124a5c", s: "Two river-boat pilots from rival families fall in love during a monsoon season." },
  { id: 5, t: "The Last Lighthouse", l: "English", g: ["Horror", "Mystery"], r: 7.4, v: "58K", d: "1h 52m", c: "A",img:"resources/The Last Lighthouse Keeper.png" ,a: "#3a4a5c", b: "#0d1018", s: "A keeper's logbook starts describing things that have not happened yet." },
  { id: 6, t: "Dhoom Machine", l: "Telugu", g: ["Action", "Comedy"], r: 7.7, v: "67K", d: "2h 35m", c: "UA",img:"resources/Dhoom Machine_ The Last Heist.png" ,a: "#c2331f", b: "#5a1658", s: "A retired stuntman is pulled back for one last, very loud, heist." },
  { id: 7, t: "Paper Planes", l: "English", g: ["Animation", "Family"], r: 8.4, v: "33K", d: "1h 38m", c: "U",img:"resources/A Paper Plane Around the World.png", a: "#4aa3df", b: "#6f4bd8", s: "A shy girl folds a paper plane that carries her across five fantastic cities." },
  { id: 8, t: "Sarhad", l: "Hindi", g: ["Drama", "War"], r: 8.1, v: "76K", d: "2h 29m", c: "UA",img:"resources/Letters Across the Mountain Border.png" ,a: "#8a6a2e", b: "#2a2419", s: "A border-town postmaster keeps the mail moving as the lines are redrawn." }];
/* ============================================================
   HOME PAGE BANNERS: PASTE YOUR IMAGE NAMES HERE
   - img  : put your image file name/path between the quotes
            e.g.  img:"banners/banner1.jpg"
            (keep it "" to use the generated artwork)
   - title / text : the headline and line shown on the banner
   - id   : the movie that opens when "Book tickets" is clicked
   - Add or remove lines to have more or fewer banners.
   ============================================================ */
const BANNERS = [
  { img: "resources/orbitzero.jpg",  /* <-- PASTE IMAGE NAME FOR BANNER 1 HERE */  title: "Orbit Zero", text: "Now in IMAX. Book early.", id: 3 },
  { img: "resources/midnightexpress.jpg",  /* <-- PASTE IMAGE NAME FOR BANNER 2 HERE */  title: "Midnight Express", text: "The thriller everyone is talking about.", id: 1 },
  { img: "resources/kaveri.jpg",  /* <-- PASTE IMAGE NAME FOR BANNER 3 HERE */  title: "Kaveri", text: "A monsoon love story.", id: 4 }
];
const TIMES = [["10:15", "13:00", "16:30", "19:45", "22:30"], ["09:45", "12:50", "15:55", "19:10", "22:15"], ["11:00", "14:20", "18:00", "21:00"]];
const CITIES = {
  "Varanasi": [["PVR: Ganga Plaza Mall", "Lanka Road"], ["INOX: Cantt Central", "Cantonment"], ["Cinepolis: DLW Square", "Bhelupur"]],
  "Delhi NCR": [["PVR: Select Citywalk", "Saket"], ["INOX: Nehru Place", "Nehru Place"], ["Cinepolis: Pacific Mall", "Subhash Nagar"]],
  "Mumbai": [["PVR: Phoenix Palladium", "Lower Parel"], ["INOX: Nariman Point", "Nariman Point"], ["Cinepolis: Viviana", "Thane"]],
  "Bengaluru": [["PVR: Orion Mall", "Rajajinagar"], ["INOX: Garuda Mall", "MG Road"], ["Cinepolis: Nexus", "Koramangala"]],
  "Lucknow": [["PVR: Phoenix Palassio", "Amar Shaheed Path"], ["INOX: Wave Mall", "Gomti Nagar"], ["Cinepolis: Lulu Mall", "Sushant Golf City"]]
};
const cityTh = c => CITIES[c].map((x, i) => ({ n: x[0], a: x[1], t: TIMES[i] }));
let CITY = "Varanasi"; try { CITY = localStorage.getItem("st_city") || CITY } catch (e) { }
if (!CITIES[CITY]) CITY = "Varanasi";
let THEATRES = cityTh(CITY);
const CAST = { 1: "Rohan Mehra, Kavya Iyer, Dev Rao", 2: "Anita Sharma, Vikram Joshi, Meera Nair", 3: "Lena Ortiz, Sam Okafor, J. Park", 4: "Arun Kumar, Divya Selvan", 5: "Tom Hale, Ingrid Voss", 6: "Ravi Teja Naidu, Sneha Reddy", 7: "Voices: Mia Chen, Oscar Bell", 8: "Irfan Qureshi, Naina Kapoor, Harsh Vyas" };
const SOON = [{ id: 11, t: "Neon Monsoon", l: "Hindi", g: ["Romance", "Musical"], r: 0, rel: "Releases 16 Oct",img: "resources/neon-monsoon.jpg", a: "#6b2bd9", b: "#e5214a" },
{ id: 12, t: "Iron Harvest", l: "Punjabi", g: ["Action", "Drama"], r: 0, rel: "Releases 23 Oct",img: "resources/iron-harvest.jpg", a: "#9a6b1f", b: "#2b1b0f" },
{ id: 13, t: "Deep Blue", l: "English", g: ["Adventure"], r: 0, rel: "Releases 30 Oct",img: "resources/deep blue.jpg", a: "#0a6aa8", b: "#031a3a" },
{ id: 14, t: "Gully Kings", l: "Hindi", g: ["Comedy", "Sports"], r: 0, rel: "Releases 6 Nov",img: "resources/gully king.jpg", a: "#1f9d55", b: "#0b3d2b" }];
const SNACKS = [{ id: "p1", n: "Salted popcorn (large)", p: 320 }, { id: "p2", n: "Caramel popcorn (regular)", p: 280 }, { id: "d1", n: "Cold drink 500 ml", p: 180 }, { id: "n1", n: "Cheese nachos", p: 250 }, { id: "c1", n: "Combo: popcorn + 2 drinks", p: 520 }];
let NOT = []; try { NOT = JSON.parse(localStorage.getItem("st_notify") || "[]") } catch (e) { }
const TIERS = [{ n: "Recliner", rows: "AB", p: 400 }, { n: "Prime", rows: "CDEF", p: 250 }, { n: "Classic", rows: "GH", p: 150 }];
const FEE = 30, MAXSEATS = 8, COLS = 12;
const $ = s => document.querySelector(s);
const st = { food: {}, tab: "now", slot: "All", pay: "upi", movie: null, date: null, theatre: null, time: null, seats: [], lang: "All", q: "", slide: 0 };
const lastShow = () => 0;

function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("on"), 2200) }
function show(v) { document.querySelectorAll(".view").forEach(e => e.hidden = e.id !== "v-" + v); window.scrollTo(0, 0) }
const KIND = { 1: "city", 2: "hills", 3: "space", 4: "hills", 5: "waves", 6: "city", 7: "hills", 8: "hills" }, ART = {};
function art(m) {
  if (ART[m.id]) return ART[m.id]; let sd = hash(m.t); const R = () => (sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0) / 4294967296, k = KIND[m.id] || "hills";
  let o = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${m.a}'/><stop offset='1' stop-color='${m.b}'/></linearGradient></defs><rect width='800' height='450' fill='url(#g)'/>`;
  for (let i = 0; i < (k === "space" ? 120 : 40); i++)o += `<circle cx='${R() * 800 | 0}' cy='${R() * 260 | 0}' r='${(R() * 1.6 + .4).toFixed(1)}' fill='#fff' opacity='${(R() * .7 + .2).toFixed(2)}'/>`;
  const cx = 480 + R() * 220 | 0; o += `<circle cx='${cx}' cy='120' r='${k === "space" ? 90 : 58}' fill='#fff' opacity='.22'/><circle cx='${cx}' cy='120' r='${k === "space" ? 64 : 40}' fill='#fff' opacity='.35'/>`;
  for (let L = 0; L < 3; L++) {
    const y = 250 + L * 60, op = (.22 + L * .2).toFixed(2);
    if (k === "city") { for (let x = -10; x < 800;) { const w = 30 + R() * 50 | 0, h = 40 + R() * (150 - L * 30) | 0; o += `<rect x='${x}' y='${y + 40 - h}' width='${w}' height='${450 - y - 40 + h}' fill='#000' opacity='${op}'/>`; x += w + 4 } }
    else if (k === "waves") { let d = `M0 450 L0 ${y}`; for (let x = 0; x <= 800; x += 100)d += ` Q${x + 50} ${y - 30 - R() * 30 | 0} ${x + 100} ${y}`; o += `<path d='${d} L800 450Z' fill='#000' opacity='${op}'/>` }
    else { let d = `M0 450 L0 ${y}`; for (let x = 0; x <= 800; x += 160)d += ` L${x + 80} ${y - R() * 90 - 20 | 0} L${x + 160} ${y}`; o += `<path d='${d} L800 450Z' fill='#000' opacity='${op}'/>` }
  }
  return ART[m.id] = "url(" + ("data:image/svg+xml," + encodeURIComponent(o + "</svg>")).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29") + ")"
}
/* uses movie.img (see MOVIES above) if set, otherwise the generated artwork */
const grad = m => `linear-gradient(180deg,#0000 35%,#000c),${m.img ? `url('${m.img}')` : art(m)} center/cover`;
const poster = m => `<div class="poster" style="background:${grad(m)}"><span class="rate">${m.rel || "★ " + m.r + "/10"}</span><div><h3>${m.t}</h3><small>${m.g[0]}</small></div></div>`;

/* HOME */
function renderHero() {
  const b = BANNERS[st.slide], m = MOVIES.find(x => x.id === b.id), h = $("#hero");
  /* the banner image comes from BANNERS[].img (see BANNERS list near the top) */
  h.style.background = b.img ? `linear-gradient(180deg,#0000 35%,#000c),url('${b.img}') center/cover` : grad(m);
  h.innerHTML = `<div class="in"><h1>${b.title}</h1><p>${b.text}</p><button class="btn" data-open="${b.id}">Book tickets</button></div>
  <div class="dots">${BANNERS.map((_, i) => `<button data-slide="${i}" aria-label="Slide ${i + 1}" aria-current="${i === st.slide}"></button>`).join("")}</div>`
}
function renderChips() {
  $("#maintabs").innerHTML = [["now", "Now showing"], ["soon", "Coming soon"]].map(([k, l]) => `<button class="chip" data-tab="${k}" aria-pressed="${st.tab === k}">${l}</button>`).join(""); const ls = ["All", ...new Set(MOVIES.map(m => m.l))];
  $("#chips").innerHTML = ls.map(l => `<button class="chip" data-lang="${l}" aria-pressed="${l === st.lang}">${l}</button>`).join("")
}
function renderGrid() {
  const q = st.q.toLowerCase();
  const list = (st.tab === "soon" ? SOON : MOVIES).filter(m => (st.lang === "All" || m.l === st.lang) && (!q || (m.t + m.g.join(" ")).toLowerCase().includes(q)));
  $("#grid").innerHTML = list.length ? list.map(m => m.rel ? `<div class="card">${poster(m)}<div class="t">${m.t}</div><div class="g">${m.g.join(", ")} · ${m.l}</div><button class="chip" style="margin-top:6px" data-notify="${m.id}" aria-pressed="${NOT.includes(m.id)}">${NOT.includes(m.id) ? "Reminder set" : "Notify me"}</button></div>` : `<button class="card" data-open="${m.id}">${poster(m)}<div class="t">${m.t}</div><div class="g">${m.g.join(", ")} · ${m.l}</div></button>`).join("") : `<p class="empty">No movies match your search. Try a different title or language.</p>`
}

/* DETAIL */
function dates() { return Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() + i); return d }) }
function renderDetail() {
  const m = st.movie;
  $("#detail").innerHTML = `<div class="banner" style="background:${grad(m)}">${poster(m)}<div>
  <h1>${m.t}</h1><div class="meta"><span>★ ${m.r}/10 (${m.v} votes)</span><span>${m.c}</span><span>${m.d}</span><span>${m.g.join(" / ")}</span><span>${m.l}</span></div>
  <p>${m.s}</p><p><b>Cast:</b> ${CAST[m.id]}</p><button class="btn" data-scroll="shows">Book tickets</button></div></div>
  <div class="panel" id="shows"><div class="dates" id="dates">${dates().map((d, i) => `<button class="date" data-date="${i}" aria-pressed="${i === st.date}">${d.toLocaleDateString("en-IN", { weekday: "short" })}<b>${d.getDate()}</b>${d.toLocaleDateString("en-IN", { month: "short" })}</button>`).join("")}</div>
  <div class="chips" id="slots" style="margin-top:14px">${["All", "Morning", "Afternoon", "Evening", "Night"].map(x => `<button class="chip" data-slot="${x}" aria-pressed="${x === st.slot}">${x}</button>`).join("")}</div><div id="theatres" style="margin-top:6px"></div></div>`;
  renderTheatres()
}
const slotOf = h => h < 12 ? "Morning" : h < 16 ? "Afternoon" : h < 20 ? "Evening" : "Night";
function renderTheatres() {
  const now = new Date(), isToday = st.date === 0;
  const html = THEATRES.map((t, ti) => {
    const ts = t.t.filter(x => st.slot === "All" || slotOf(+x.slice(0, 2)) === st.slot); if (!ts.length) return "";
    return `<div class="theatre"><div><h3>${t.n}</h3><p>${t.a} · Cancellation available</p></div><div class="times">${ts.map(x => {
      const [h, mi] = x.split(":").map(Number); const past = isToday && (h * 60 + mi <= now.getHours() * 60 + now.getMinutes());
      return `<button class="time" ${past ? "disabled" : ""} data-th="${ti}" data-time="${x}">${x}<small>from ₹150</small></button>`
    }).join("")}</div></div>`
  }).join("");
  $("#theatres").innerHTML = html || `<p class="empty">No shows in this slot. Try another time of day or date.</p>`
}

/* SEATS */
function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) } return h >>> 0 }
function isSold(r, c) { return (hash([CITY, st.movie.id, st.date, st.theatre, st.time, r, c].join("|")) % 100) < 28 }
function price(row) { return TIERS.find(t => t.rows.includes(row)).p }
function renderSeats() {
  const m = st.movie, t = THEATRES[st.theatre], d = dates()[st.date];
  $("#seat-title").textContent = m.t; renderSnacks(); $("#promo").value = ""; $("#pmsg").textContent = "";
  $("#seat-sub").textContent = `${t.n} · ${d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })} · ${st.time}`;
  $("#seatmap").innerHTML = `<div class="screen"></div><div class="screen-l">Screen this way</div>` + TIERS.map(T => `<div class="tier">₹${T.p} · ${T.n}</div>` + [...T.rows].map(r => `<div class="row"><i>${r}</i>${Array.from({ length: COLS }, (_, c) => {
    const id = r + (c + 1); const sold = isSold(r, c);
    return (c === 6 ? '<span class="aisle"></span>' : '') + `<button class="seat${st.seats.includes(id) ? " sel" : ""}" data-seat="${id}" ${sold ? "disabled" : ""} aria-label="Seat ${id}, ₹${T.p}${sold ? ", sold" : ""}">${c + 1}</button>`
  }).join("")}</div>`).join(""));
  updateSummary()
}
function totals() { const sub = st.seats.reduce((a, s) => a + price(s[0]), 0), fee = FEE * st.seats.length; const disc = st.promo === "SHOW10" ? Math.round(sub * .1) : st.promo === "FIRST50" ? Math.min(50, sub) : 0; return { sub, fee, disc, food: foodTotal(), total: sub + fee + foodTotal() - disc } }
function updateSummary() {
  const n = st.seats.length, T = totals();
  $("#sum-main").textContent = n ? `${n} ticket${n > 1 ? "s" : ""}: ${st.seats.join(", ")}` : "Select up to 8 seats";
  $("#sum-sub").textContent = n ? `Tickets ₹${T.sub}${T.food ? ` + food ₹${T.food}` : ""} + fees ₹${T.fee}${T.disc ? ` − promo ₹${T.disc}` : ""}` : "Tap a seat to start";
  $("#pay").disabled = !n; $("#pay").textContent = n ? `Pay ₹${T.total}` : "Pay"
}

/* AUTH */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, PH = /^[6-9]\d{9}$/, FAIL = {};
let US = {}, ME = null;
try { US = JSON.parse(localStorage.getItem("st_users") || "{}"); ME = localStorage.getItem("st_me") || sessionStorage.getItem("st_me") } catch (e) { }
if (!US[ME]) ME = null;
const saveUsers = () => { try { localStorage.setItem("st_users", JSON.stringify(US)) } catch (e) { } };
const rnd = () => Array.from(crypto.getRandomValues(new Uint8Array(8)), x => x.toString(16).padStart(2, "0")).join("");
async function hp(pw, salt) { try { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + pw)); return Array.from(new Uint8Array(b), x => x.toString(16).padStart(2, "0")).join("") } catch (e) { return "f" + hash(salt + pw) } }
const fld = (id, l, type, ph, ac) => `<label for="a-${id}">${l}</label><input id="a-${id}" type="${type}" placeholder="${ph}" autocomplete="${ac}"><small class="err" id="e-${id}" role="alert"></small>`;
const pfld = (id, l, ac) => `<label for="a-${id}">${l}</label><div class="pw"><input id="a-${id}" type="password" autocomplete="${ac}"><button type="button" class="eye" data-eye="${id}">Show</button></div><small class="err" id="e-${id}" role="alert"></small>`;
function renderAuth(m) {
  $("#tabs").innerHTML = m === "forgot" ? `<h2>Reset password</h2>` : ["signin", "signup"].map(x => `<button type="button" class="tab" data-auth="${x}" aria-pressed="${m === x}">${x === "signin" ? "Sign in" : "Create account"}</button>`).join("");
  $("#authform").innerHTML = (m === "signup" ? fld("name", "Full name", "text", "Asha Verma", "name") : "") + fld("email", m === "signin" ? "Email or username" : "Email", m === "signin" ? "text" : "email", m === "signin" ? "Email or username" : "you@example.com", m === "signin" ? "username" : "email")
    + (m !== "signin" ? fld("phone", m === "forgot" ? "Registered mobile number" : "Mobile number", "tel", "10-digit number", "tel") : "")
    + pfld("password", m === "forgot" ? "New password" : "Password", m === "signin" ? "current-password" : "new-password")
    + (m === "signup" ? '<small id="strength"></small>' + pfld("confirm", "Confirm password", "new-password") : "")
    + (m === "signin" ? `<div class="aux"><label class="chk"><input type="checkbox" id="a-remember" checked> Keep me signed in</label><button type="button" class="link" data-auth="forgot">Forgot password?</button></div>` : "")
    + `<button class="btn wide" type="submit">${{ signin: "Sign in", signup: "Create account", forgot: "Reset password" }[m]}</button>`
    + (m === "forgot" ? `<p class="center"><button type="button" class="link" data-auth="signin">Back to sign in</button></p>` : "")
}
async function seed() {
  const u = "yashdubey8595";
  if (!US[u]) { US[u] = { name: "Yash Dubey", phone: "9000000000", salt: "seed0001", hash: await hp("Yash@8595", "seed0001") }; saveUsers() }
  try { if (!localStorage.getItem("st_bk_" + u)) localStorage.setItem("st_bk_" + u, JSON.stringify([{ id: "ST482916", mid: 3, title: "Orbit Zero", cinema: "PVR: Ganga Plaza Mall, Lanka Road", date: "Sat 3 Oct", time: "19:45", seats: ["D5", "D6"], total: 560 }])) } catch (e) { }
  if (ME === u) { loadBK(); renderAuthUI(); renderMine() }
}
function openAuth(m, after) { st.auth = m; if (after !== undefined) st.after = after; renderAuth(m); show("auth") }
function renderAuthUI() { $("#signin").textContent = ME ? "Hi, " + US[ME].name.split(" ")[0] : "Sign in"; $("#signout").hidden = !ME }
function login(email, remember) {
  ME = email; try { (remember ? localStorage : sessionStorage).setItem("st_me", email) } catch (e) { }
  loadBK(); renderAuthUI(); renderMine(); const a = st.after; st.after = null;
  if (a === "pay") { show("seats"); toast("Signed in. You can complete your payment.") } else if (a === "mine") { show("mine") } else { show("home"); toast("Welcome, " + US[email].name.split(" ")[0]) }
}
function logout() { ME = null; try { localStorage.removeItem("st_me"); sessionStorage.removeItem("st_me") } catch (e) { } loadBK(); renderAuthUI(); renderMine(); show("home"); toast("Signed out") }
function checkout() { if (!ME) { openAuth("signin", "pay"); toast("Sign in to complete your booking"); return } renderPay(); show("pay") }
$("#authform").addEventListener("submit", async e => {
  e.preventDefault(); const m = st.auth; let ok = true;
  document.querySelectorAll(".err").forEach(x => x.textContent = ""); document.querySelectorAll("#authform input").forEach(x => x.removeAttribute("aria-invalid"));
  const val = id => ($("#a-" + id) || { value: "" }).value.trim(), bad = (id, t) => { $("#e-" + id).textContent = t; $("#a-" + id).setAttribute("aria-invalid", "true"); ok = false };
  const email = val("email").toLowerCase(), pw = $("#a-password").value, strong = pw.length >= 8 && /[a-z]/i.test(pw) && /\d/.test(pw);
  if (m === "signin" ? email.length < 3 : !EMAIL.test(email)) bad("email", m === "signin" ? "Enter your email or username" : "Enter a valid email address");
  if (m === "signup" && val("name").length < 2) bad("name", "Enter your full name");
  if (m !== "signin" && !PH.test(val("phone"))) bad("phone", "Enter a 10-digit Indian mobile number");
  if (m === "signin" && !pw) bad("password", "Enter your password");
  if (m !== "signin" && !strong) bad("password", "Use 8 or more characters with letters and numbers");
  else if (m === "signup" && pw !== $("#a-confirm").value) bad("confirm", "Passwords do not match");
  if (!ok) return;
  if (m === "signup") {
    if (US[email]) return bad("email", "An account with this email exists. Sign in instead.");
    const salt = rnd(); US[email] = { name: val("name"), phone: val("phone"), salt, hash: await hp(pw, salt) }; saveUsers(); login(email, true)
  }
  else if (m === "signin") {
    const u = US[email], f = FAIL[email] = FAIL[email] || { n: 0, until: 0 };
    if (f.until > Date.now()) return bad("password", "Too many attempts. Try again in " + Math.ceil((f.until - Date.now()) / 1000) + "s");
    if (!u || await hp(pw, u.salt) !== u.hash) { if (++f.n >= 5) { f.until = Date.now() + 30000; f.n = 0 } return bad("password", "Email or password is incorrect") }
    delete FAIL[email]; login(email, $("#a-remember").checked)
  }
  else {
    const u = US[email]; if (!u || u.phone !== val("phone")) return bad("phone", "These details do not match an account");
    u.salt = rnd(); u.hash = await hp(pw, u.salt); saveUsers(); toast("Password updated. Sign in with your new password."); openAuth("signin")
  }
});
document.addEventListener("input", e => {
  if (e.target.id !== "a-password" || st.auth !== "signup") return; const p = e.target.value;
  const n = [p.length >= 8, /[a-z]/.test(p) && /[A-Z]/.test(p), /\d/.test(p), /[^\w\s]/.test(p)].filter(Boolean).length; $("#strength").textContent = p ? "Strength: " + ["Weak", "Weak", "Fair", "Good", "Strong"][n] : ""
});

/* SNACKS / PAYMENT / QR */
const foodTotal = () => SNACKS.reduce((a, x) => a + x.p * (st.food[x.id] || 0), 0);
function renderSnacks() { $("#snacks").innerHTML = `<h3>Grab a bite</h3>` + SNACKS.map(x => `<div class="sn"><span>${x.n}<small>₹${x.p}</small></span><span class="qty"><button class="chip" data-snack="${x.id}" data-d="-1" aria-label="Remove ${x.n}">−</button><b>${st.food[x.id] || 0}</b><button class="chip" data-snack="${x.id}" data-d="1" aria-label="Add ${x.n}">+</button></span></div>`).join("") }
function renderPay() {
  const m = st.movie, t = THEATRES[st.theatre], d = dates()[st.date], T = totals();
  $("#order").innerHTML = `<h3>Order summary</h3><p><b>${m.t}</b><br>${t.n}<br>${d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })} · ${st.time}<br>Seats ${st.seats.join(", ")}</p>
  <div class="ln"><span>Tickets</span><span>₹${T.sub}</span></div>${T.food ? `<div class="ln"><span>Food and drinks</span><span>₹${T.food}</span></div>` : ""}<div class="ln"><span>Convenience fee</span><span>₹${T.fee}</span></div>${T.disc ? `<div class="ln"><span>Promo ${st.promo}</span><span>− ₹${T.disc}</span></div>` : ""}<div class="ln tot"><span>Total</span><span>₹${T.total}</span></div>`;
  $("#ptabs").innerHTML = [["upi", "UPI"], ["card", "Card"], ["net", "Net banking"]].map(([k, l]) => `<button type="button" class="tab" data-pm="${k}" aria-pressed="${st.pay === k}">${l}</button>`).join("");
  $("#payform").innerHTML = (st.pay === "upi" ? fld("upi", "UPI ID", "text", "name@bank", "off") : st.pay === "card" ? fld("card", "Card number", "text", "1234 5678 9012 3456", "cc-number") + fld("cname", "Name on card", "text", "", "cc-name") + `<div class="two"><div>${fld("exp", "Expiry (MM/YY)", "text", "08/28", "cc-exp")}</div><div>${fld("cvv", "CVV", "password", "3 digits", "cc-csc")}</div></div>`
    : `<label for="a-bank">Select your bank</label><select id="a-bank">${["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Punjab National Bank"].map(b => `<option>${b}</option>`).join("")}</select>`)
    + `<button class="btn wide" type="submit" id="paybtn">Pay ₹${T.total}</button>`
}
const luhn = n => { let s = 0, f = false; for (let i = n.length - 1; i >= 0; i--) { let d = +n[i]; if (f) { d *= 2; if (d > 9) d -= 9 } s += d; f = !f } return s % 10 === 0 };
$("#payform").addEventListener("submit", e => {
  e.preventDefault(); let ok = true; document.querySelectorAll("#payform .err").forEach(x => x.textContent = "");
  const v = id => ($("#a-" + id) || { value: "" }).value.trim(), bad = (id, t) => { $("#e-" + id).textContent = t; ok = false };
  if (st.pay === "upi" && !/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v("upi"))) bad("upi", "Enter a valid UPI ID, for example name@okbank");
  if (st.pay === "card") {
    const n = v("card").replace(/\s/g, ""); if (!/^\d{13,19}$/.test(n) || !luhn(n)) bad("card", "Enter a valid card number");
    if (v("cname").length < 2) bad("cname", "Enter the name on the card");
    const m = v("exp").match(/^(\d\d)\/(\d\d)$/), now = new Date(); if (!m || +m[1] < 1 || +m[1] > 12 || (2000 + +m[2]) * 12 + +m[1] < now.getFullYear() * 12 + now.getMonth() + 1) bad("exp", "Enter a valid, unexpired date");
    if (!/^\d{3,4}$/.test(v("cvv"))) bad("cvv", "Enter the 3 or 4 digit CVV")
  }
  if (!ok) return; const btn = $("#paybtn"); btn.disabled = true; btn.textContent = "Processing payment…"; setTimeout(confirm, 1600)
});
document.addEventListener("input", e => {
  const i = e.target; if (i.id === "a-card") i.value = i.value.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
  if (i.id === "a-exp") { const d = i.value.replace(/\D/g, "").slice(0, 4); i.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d }
});
function qr(id) {
  let q = hash(id); const R = () => (q = (Math.imul(q, 1103515245) + 12345) >>> 0) / 4294967296; let o = "";
  for (let y = 0; y < 21; y++)for (let x = 0; x < 21; x++) {
    const f = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13); let on;
    if (f) { const ex = x > 13 ? x - 14 : x, ey = y > 13 ? y - 14 : y; on = ex === 0 || ex === 6 || ey === 0 || ey === 6 || (ex >= 2 && ex <= 4 && ey >= 2 && ey <= 4) } else on = R() > .5;
    if (on) o += `<rect x="${x}" y="${y}" width="1" height="1"/>`
  }
  return `<svg viewBox="0 0 21 21" width="130" height="130" fill="currentColor" style="margin-top:10px" role="img" aria-label="Ticket QR code">${o}</svg>`
}

/* TICKET + BOOKINGS */
let BK = []; const bkKey = () => "st_bk_" + ME;
function loadBK() { BK = []; if (ME) try { BK = JSON.parse(localStorage.getItem(bkKey()) || "[]") } catch (e) { } }
const save = () => { if (ME) try { localStorage.setItem(bkKey(), JSON.stringify(BK)) } catch (e) { } };
function renderTicket(k) {
  const m = MOVIES.find(x => x.id === k.mid);
  $("#ticket").innerHTML = `<div class="head" style="background:${grad(m)}"><small>${m.l} · ${m.c}</small><h2>${m.t}</h2></div>
  <div class="body"><div><small>Date</small>${k.date}</div><div><small>Time</small>${k.time}</div>
  <div style="grid-column:1/-1"><small>Cinema</small>${k.cinema}</div><div><small>Seats</small>${k.seats.join(", ")}</div><div><small>Paid</small>₹${k.total}</div></div>
  <div class="stub"><small style="color:var(--muted)">Booking ID</small><b>${k.id}</b>${qr(k.id)}</div>`
}
function renderMine() {
  $("#cnt").textContent = BK.length ? `(${BK.length})` : "";
  $("#minelist").innerHTML = BK.length ? BK.map(k => `<div class="panel bk"><div><h3>${k.title}</h3><p>${k.cinema} · ${k.date} · ${k.time}<br>Seats ${k.seats.join(", ")} · ₹${k.total}</p></div><div><button class="btn" data-view="${k.id}">View ticket</button> <button class="chip" data-cancel="${k.id}">Cancel</button></div></div>`).join("") : `<p class="empty">No bookings yet. Pick a movie to get started.</p>`
}
function confirm() {
  const t = THEATRES[st.theatre], d = dates()[st.date], T = totals();
  const k = {
    id: "ST" + (hash(Date.now() + st.seats.join()) % 900000 + 100000), mid: st.movie.id, title: st.movie.t, cinema: `${t.n}, ${t.a}`,
    date: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }), time: st.time, seats: [...st.seats], total: T.total
  };
  BK.unshift(k); save(); renderMine(); renderTicket(k); st.seats = []; st.food = {}; show("done")
}

/* EVENTS */
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.open) { st.movie = MOVIES.find(m => m.id == b.dataset.open); st.date = 0; st.slot = "All"; renderDetail(); show("detail") }
  else if (b.dataset.slide) { st.slide = +b.dataset.slide; renderHero() }
  else if (b.dataset.lang) { st.lang = b.dataset.lang; renderChips(); renderGrid() }
  else if (b.dataset.date) { st.date = +b.dataset.date; document.querySelectorAll(".date").forEach(x => x.setAttribute("aria-pressed", x === b)); renderTheatres() }
  else if (b.dataset.time) { st.theatre = +b.dataset.th; st.time = b.dataset.time; st.seats = []; st.food = {}; st.promo = null; st.hold = Date.now() + 300000; renderSeats(); show("seats") }
  else if (b.dataset.seat) {
    const id = b.dataset.seat, i = st.seats.indexOf(id);
    if (i > -1) st.seats.splice(i, 1); else if (st.seats.length >= MAXSEATS) return toast("You can book up to 8 seats at a time"); else st.seats.push(id);
    b.classList.toggle("sel", st.seats.includes(id)); updateSummary()
  }
  else if (b.dataset.view) { renderTicket(BK.find(x => x.id === b.dataset.view)); show("done") }
  else if (b.dataset.cancel) { BK = BK.filter(x => x.id !== b.dataset.cancel); save(); renderMine(); toast("Booking cancelled. Refund in 5–7 days") }
  else if (b.dataset.tab) { st.tab = b.dataset.tab; renderChips(); renderGrid() }
  else if (b.dataset.notify) { const i = +b.dataset.notify; NOT = NOT.includes(i) ? NOT.filter(x => x !== i) : [...NOT, i]; try { localStorage.setItem("st_notify", JSON.stringify(NOT)) } catch (x) { } renderGrid(); toast(NOT.includes(i) ? "We will remind you on release day" : "Reminder removed") }
  else if (b.dataset.slot) { st.slot = b.dataset.slot; document.querySelectorAll("#slots .chip").forEach(x => x.setAttribute("aria-pressed", x === b)); renderTheatres() }
  else if (b.dataset.snack) { const i = b.dataset.snack; st.food[i] = Math.max(0, Math.min(10, (st.food[i] || 0) + +b.dataset.d)); renderSnacks(); updateSummary() }
  else if (b.dataset.pm) { st.pay = b.dataset.pm; renderPay() }
  else if (b.dataset.scroll) { const el = $("#" + b.dataset.scroll); el.scrollIntoView({ behavior: "smooth", block: "start" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1400) }
  else if (b.dataset.back) { show(b.dataset.back) }
  else if (b.id === "home" || b.id === "again") { st.seats = []; show("home") }
  else if (b.id === "pay") checkout();
  else if (b.id === "mine") { if (!ME) return openAuth("signin", "mine"); renderMine(); show("mine") }
  else if (b.id === "apply") {
    const c = $("#promo").value.trim().toUpperCase(); if (!st.seats.length) return toast("Select seats first");
    if (c === "SHOW10" || c === "FIRST50") { st.promo = c; $("#pmsg").textContent = c + " applied" } else { st.promo = null; $("#pmsg").textContent = "Code not valid" } updateSummary()
  }
  else if (b.dataset.auth) { openAuth(b.dataset.auth) }
  else if (b.dataset.eye) { const i = $("#a-" + b.dataset.eye); i.type = i.type === "password" ? "text" : "password"; b.textContent = i.type === "password" ? "Show" : "Hide" }
  else if (b.id === "signout") logout();
  else if (b.id === "signin") { if (ME) { renderMine(); show("mine") } else openAuth("signin", "home") }
});
$("#q").addEventListener("input", e => { st.q = e.target.value; show("home"); renderGrid() });
$("#city").value = CITY;
$("#city").addEventListener("change", e => {
  CITY = e.target.value; THEATRES = cityTh(CITY); try { localStorage.setItem("st_city", CITY) } catch (x) { } toast("Showing cinemas in " + CITY);
  if (!$("#v-detail").hidden) renderTheatres(); else if (!$("#v-seats").hidden || !$("#v-pay").hidden) show("home")
});
renderHero(); renderChips(); renderGrid(); loadBK(); renderAuthUI(); renderMine(); seed();
setInterval(() => { if ($("#v-seats").hidden) return; const r = Math.max(0, st.hold - Date.now()); $("#timer").textContent = Math.floor(r / 60000) + ":" + String(Math.floor(r / 1000) % 60).padStart(2, "0"); if (!r) { st.seats = []; toast("Seat hold expired. Please choose again."); show("detail") } }, 1000);
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) setInterval(() => { if (!$("#v-home").hidden) { st.slide = (st.slide + 1) % BANNERS.length; renderHero() } }, 5000);
