/* ==========================================================================
   Builds the page from content.js. You normally don't need to edit this.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE || {};
  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isExternal(url) { return /^https?:\/\//i.test(url || ""); }
  function linkAttrs(url) {
    return 'href="' + esc(url || "#") + '"' + (isExternal(url) ? ' target="_blank" rel="noopener"' : "");
  }
  function list(x) { return Array.isArray(x) ? x : []; }

  var ICONS = {
    atom: '<svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>',
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M2 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0"/><path d="M2 18c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0" opacity=".5"/><path d="M2 6c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0" opacity=".5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14.2c2.6.2 4.4 2 5 4.8"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6l8.5 7 8.5-7"/></svg>'
  };
  function icon(name) { return ICONS[name] || ICONS.spark; }

  /* ---------- Theme & meta ---------- */
  var root = document.documentElement.style;
  if (S.theme) {
    if (S.theme.accent) root.setProperty("--accent", S.theme.accent);
    if (S.theme.accent2) root.setProperty("--accent-2", S.theme.accent2);
  }
  var brandName = (S.brand && S.brand.name) || "Quantum Society";
  document.title = (S.seo && S.seo.title) || brandName;
  if (S.seo && S.seo.description) {
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", S.seo.description);
  }
  $("#brand-name").textContent = brandName;

  /* ---------- Section builders ---------- */
  var navItems = [];

  function section(id, data, defaultLabel, inner, extraClass) {
    var label = data.navLabel || defaultLabel;
    navItems.push({ id: id, label: label });
    return '<section id="' + id + '" class="section ' + (extraClass || "") + '"><div class="container">' +
      '<header class="section-head reveal"><p class="kicker"><span class="ket">|' + esc(label.toLowerCase()) + '⟩</span></p>' +
      (data.title ? "<h2>" + esc(data.title) + "</h2>" : "") +
      (data.intro ? '<p class="lead">' + esc(data.intro) + "</p>" : "") +
      "</header>" + inner + "</div></section>";
  }

  function buildHero(h) {
    var stats = list(h.stats).length
      ? '<dl class="stats reveal">' + list(h.stats).map(function (s) {
          return '<div class="stat"><dt>' + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd></div>";
        }).join("") + "</dl>"
      : "";
    var buttons = list(h.buttons).map(function (b) {
      var style = b.style === "ghost" ? "ghost" : "primary";
      return '<a class="btn btn-' + style + '" ' + linkAttrs(b.link) + ">" + esc(b.text) +
        (style === "primary" ? icon("arrow") : "") + "</a>";
    }).join("");
    return '<section class="hero" id="home"><div class="container hero-inner">' +
      (h.eyebrow ? '<p class="eyebrow reveal"><span class="pulse"></span>' + esc(h.eyebrow) + "</p>" : "") +
      '<h1 class="reveal">' + esc(h.title) + "</h1>" +
      (h.text ? '<p class="hero-text reveal">' + esc(h.text) + "</p>" : "") +
      (buttons ? '<div class="actions reveal">' + buttons + "</div>" : "") +
      stats + "</div></section>";
  }

  function buildAbout(a) {
    var cards = list(a.pillars).map(function (p, i) {
      return '<article class="card pillar reveal" style="--d:' + i * 80 + 'ms">' +
        '<div class="icon">' + icon(p.icon) + "</div>" +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></article>";
    }).join("");
    return section("about", a, "About", '<div class="grid grid-4">' + cards + "</div>");
  }

  function parseDate(str) {
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(str || "").trim());
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
  }

  function eventCard(ev, past, i) {
    var d = parseDate(ev.date);
    var now = new Date();
    var day = d ? d.getDate() : "TBC";
    var mon = d ? d.toLocaleDateString("en-GB", { month: "short" }) : "";
    var wk = d ? d.toLocaleDateString("en-GB", { weekday: "short" }) : "";
    var yr = d && d.getFullYear() !== now.getFullYear() ? " " + d.getFullYear() : "";
    var meta = [];
    if (wk || ev.time) meta.push('<span>' + icon("clock") + esc([wk + yr, ev.time].filter(Boolean).join(" · ")) + "</span>");
    if (ev.location) meta.push('<span>' + icon("pin") + esc(ev.location) + "</span>");
    return '<article class="card event' + (past ? " past" : "") + ' reveal" style="--d:' + i * 60 + 'ms">' +
      '<div class="event-date"><span class="day">' + esc(day) + '</span><span class="mon">' + esc(mon) + "</span></div>" +
      '<div class="event-body"><h3>' + esc(ev.title) + "</h3>" +
      (meta.length ? '<p class="event-meta">' + meta.join("") + "</p>" : "") +
      (ev.description ? "<p>" + esc(ev.description) + "</p>" : "") +
      (ev.link ? '<a class="text-link" ' + linkAttrs(ev.link) + ">" + (past ? "View details" : "Details &amp; sign-up") + icon("arrow") + "</a>" : "") +
      "</div></article>";
  }

  function buildEvents(e) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var items = list(e.items).map(function (ev) { return { ev: ev, d: parseDate(ev.date) }; });
    var upcoming = items.filter(function (x) { return !x.d || x.d >= today; })
      .sort(function (a, b) { return (a.d || Infinity) - (b.d || Infinity); });
    var past = items.filter(function (x) { return x.d && x.d < today; })
      .sort(function (a, b) { return b.d - a.d; });

    var html = upcoming.length
      ? '<div class="events">' + upcoming.map(function (x, i) { return eventCard(x.ev, false, i); }).join("") + "</div>"
      : '<p class="empty card reveal">' + esc(e.emptyMessage || "No upcoming events right now — check back soon!") + "</p>";
    if (past.length) {
      html += '<details class="past-events reveal"><summary>Past events (' + past.length + ")</summary>" +
        '<div class="events">' + past.map(function (x, i) { return eventCard(x.ev, true, i); }).join("") + "</div></details>";
    }
    return section("events", e, "Events", html);
  }

   function buildInfo(n) {
      var cards = list(n.items).map(function (it, i) {
         return '<article class ="card info-item reveal" style="--d:' + i * 60 + 'ms">' +
            '<div class ="icon">' + icon(it.icon) + "</div>" +
            '<p class="info-label">' + esc(it.label) + "</p>" +
            "<h3>" + esc(it.value) + "</h3>" + 
            (it.detail ? "<p>" + esc(it.detail) + "</p>" : "") + "</article>";
      }).join("");
      return section("info", n, "Info", '<div class="grid grid-4">' + cards + "</div>");
   }
   
  function initials(name) {
    return String(name || "?").trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("").toUpperCase();
  }

  function buildTeam(t) {
    var cards = list(t.members).map(function (m, i) {
      var avatar = m.photo
        ? '<img class="avatar" src="' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy">'
        : '<div class="avatar avatar-initials" aria-hidden="true">' + esc(initials(m.name)) + "</div>";
      var name = m.link ? '<a ' + linkAttrs(m.link) + ">" + esc(m.name) + "</a>" : esc(m.name);
      return '<article class="card member reveal" style="--d:' + i * 60 + 'ms">' + avatar +
        "<h3>" + name + '</h3><p class="role">' + esc(m.role) + "</p>" +
        (m.bio ? '<p class="bio">' + esc(m.bio) + "</p>" : "") + "</article>";
    }).join("");
    return section("team", t, "Team", '<div class="grid grid-3">' + cards + "</div>");
  }

  function buildResources(r) {
    var cards = list(r.items).map(function (it, i) {
      return '<a class="card resource reveal" style="--d:' + i * 60 + 'ms" ' + linkAttrs(it.link) + ">" +
        '<div class="icon">' + icon(it.icon || "book") + "</div>" +
        '<div><h3>' + esc(it.title) + "</h3><p>" + esc(it.description) + "</p></div>" +
        '<span class="go">' + icon("arrow") + "</span></a>";
    }).join("");
    return section("resources", r, "Resources", '<div class="grid grid-2">' + cards + "</div>");
  }

  function buildFaq(f) {
    var items = list(f.items).map(function (q) {
      return '<details class="faq-item reveal"><summary>' + esc(q.q) + '<span class="plus" aria-hidden="true"></span></summary>' +
        "<p>" + esc(q.a) + "</p></details>";
    }).join("");
    return section("faq", f, "FAQ", '<div class="faq">' + items + "</div>");
  }

  function socialLinks(cls) {
    var s = list(S.socials);
    if (!s.length) return "";
    return '<ul class="' + cls + '">' + s.map(function (x) {
      return "<li><a " + linkAttrs(x.link) + ">" + esc(x.name) + "</a></li>";
    }).join("") + "</ul>";
  }

  function buildJoin(j) {
    navItems.push({ id: "join", label: j.navLabel || "Join" });
    return '<section id="join" class="section join"><div class="container">' +
      '<div class="join-panel reveal"><div class="orbit" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<p class="kicker"><span class="ket">|' + esc((j.navLabel || "Join").toLowerCase()) + '⟩</span></p>' +
      "<h2>" + esc(j.title) + "</h2>" +
      (j.text ? '<p class="lead">' + esc(j.text) + "</p>" : "") +
      '<div class="actions">' +
      (j.button && j.button.text ? '<a class="btn btn-primary" ' + linkAttrs(j.button.link) + ">" + esc(j.button.text) + icon("arrow") + "</a>" : "") +
      (j.email ? '<a class="btn btn-ghost" href="mailto:' + esc(j.email) + '">' + icon("mail") + esc(j.email) + "</a>" : "") +
      "</div>" + socialLinks("socials") + "</div></div></section>";
  }

  /* ---------- Assemble page ---------- */
  var html = "";
  if (S.hero) html += buildHero(S.hero);
  if (S.about) html += buildAbout(S.about);
  if (S.info) html += buildInfo(S.info);
  if (S.team) html += buildTeam(S.team);
  if (S.resources) html += buildResources(S.resources);
  if (S.faq) html += buildFaq(S.faq);
  if (S.join) html += buildJoin(S.join);
  $("#app").innerHTML = html;

  // Navigation
  var nav = $("#site-nav");
  nav.innerHTML = navItems.map(function (n) {
    var cta = n.id === "join" ? ' class="nav-cta"' : "";
    return '<a href="#' + n.id + '"' + cta + ">" + esc(n.label) + "</a>";
  }).join("");

  // Footer
  var year = new Date().getFullYear();
  $("#site-footer").innerHTML = '<div class="container footer-inner">' +
    '<a class="brand" href="#home">' + esc(brandName) + "</a>" +
    socialLinks("footer-socials") +
    '<p class="footer-text">' + esc(((S.footer && S.footer.text) || "© {year} " + brandName).replace("{year}", year)) + "</p></div>";

  /* ---------- Mobile menu ---------- */
  var header = $("#site-header");
  var toggle = $("#menu-toggle");
  function setMenu(open) {
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () { setMenu(!header.classList.contains("menu-open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll & active nav ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });

    var links = $$("a", nav);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navItems.forEach(function (n) { var s = document.getElementById(n.id); if (s) spy.observe(s); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Background: drifting, "entangled" particles ---------- */
  var canvas = $("#field");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var styles = getComputedStyle(document.documentElement);
    var c1 = styles.getPropertyValue("--accent").trim() || "#7dd3fc";
    var c2 = styles.getPropertyValue("--accent-2").trim() || "#a78bfa";
    var w, h, pts = [], running = true, LINK = 130;

    var resize = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(85, (w * h) / 17000));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.5 + 0.5, p: Math.random() * Math.PI * 2,
          c: Math.random() < 0.7 ? c1 : c2
        });
      }
    };

    var draw = function (t) {
      ctx.clearRect(0, 0, w, h);
      var i, j, a, b, dx, dy, dist;
      ctx.lineWidth = 0.6;
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        for (j = i + 1; j < pts.length; j++) {
          b = pts[j]; dx = a.x - b.x; dy = a.y - b.y;
          dist = dx * dx + dy * dy;
          if (dist < LINK * LINK) {
            ctx.globalAlpha = (1 - Math.sqrt(dist) / LINK) * 0.18;
            ctx.strokeStyle = a.c;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        ctx.globalAlpha = 0.35 + 0.35 * Math.sin((t || 0) / 900 + a.p);
        ctx.fillStyle = a.c;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    var step = function (t) {
      if (!running) return;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      }
      draw(t);
      requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", function () { resize(); if (reduceMotion) draw(0); });
    if (reduceMotion) { draw(0); }
    else {
      document.addEventListener("visibilitychange", function () {
        running = !document.hidden;
        if (running) requestAnimationFrame(step);
      });
      requestAnimationFrame(step);
    }
  }
})();
