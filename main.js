/**
 * Prathamesh Patil — Portfolio Main Script
 * Consolidates navigation, rendering, and interaction logic.
 */

(function() {
  "use strict";

  // ---------- DATA ----------
  const PROJECTS = [
    {
      id: "famli", title: "Famli App",
      desc: "Simplified a family wealth management app by turning complex financial data into clear, intuitive experiences.",
      img: "assets/home/famli-app.png", thumbClass: "thumb-famli",
      tags: [{ l: "B2C", c: "purple" }, { l: "0→1", c: "" }, { l: "Fintech", c: "" }],
      outcomes: [
        { v: "28%↑", l: "Decisions Made" },
        { v: "User Trust", l: "& Clarity" },
        { v: "User Control", l: "& Guidance" }
      ],
      long: {
        tagline: "Making complex family finances feel approachable.",
        problem: "Families struggled to get a single, intuitive view of investments, insurance, and wealth planning across multiple advisors and products.",
        approach: "I led research with 20+ high-income households, mapped the family wealth lifecycle, and built a modular dashboard that layered clarity over complexity — progressive disclosure, plain-language framings, and a shared 'family view' for decision-making.",
        outcomes: [
          "Improved decision-making velocity by 28% across tested households",
          "Raised user trust scores on 'I understand my money' from 4.2 → 7.6",
          "Activation on goal-planning flows doubled in month one"
        ]
      }
    },
    {
      id: "otc", title: "OTC Marketplace Seller Portal",
      desc: "Enable Sellers to List Products and Process Orders on the Platform at scale.",
      img: "assets/home/otc-sp.png", thumbClass: "thumb-otc",
      tags: [{ l: "B2B", c: "green" }, { l: "Scale", c: "" }, { l: "Marketplace", c: "" }],
      outcomes: [
        { v: "10 → 236", l: "Scaled Sellers" },
        { v: "8,960", l: "Orders / day" },
        { v: "₹850", l: "Increased AOV" }
      ],
      long: {
        tagline: "From 10 sellers to 236, and growing.",
        problem: "Sellers had no self-serve path to list, manage inventory, and process orders — every change funneled through ops, creating bottlenecks.",
        approach: "Designed a modular seller portal with bulk-upload, order-state machines, and a clarity-first dashboard. Ran weekly shadow sessions with sellers to refine workflows and kill dead clicks.",
        outcomes: [
          "Reduced time-to-list from 48h → 12 minutes",
          "Cut seller-ops support tickets by 64%",
          "Increased average order value by ₹850 through smarter cross-sell surfaces"
        ]
      }
    },
    {
      id: "phlebo", title: "Phlebotomist App",
      desc: "Improving the efficiency of sample collection for Phlebotomists on home visits for Thyrocare customers.",
      img: "assets/home/phlebo.png", thumbClass: "thumb-phlebo",
      tags: [{ l: "B2B2C", c: "blue" }, { l: "Native", c: "" }, { l: "Ops", c: "" }],
      outcomes: [
        { v: "45 → 25 min", l: "Avg TAT / visit" },
        { v: "₹1154 → ₹1732", l: "Revenue / user" },
        { v: "50% ↓", l: "Cancellations" }
      ],
      long: {
        tagline: "Designed for one hand, bright sunlight, and hurry.",
        problem: "Phlebotomists juggled paper forms, a clunky legacy app, and customer anxiety — leading to long turnarounds and high cancellations.",
        approach: "Shadowed 30+ field visits, redesigned the app around a single-thumb flow with offline-first sync, clear state cues, and script prompts for customer interaction.",
        outcomes: [
          "Average visit time down from 45 to 25 minutes",
          "Revenue per active user up 50% with better cross-test suggestions",
          "Cancellations halved"
        ]
      }
    },
    {
      id: "thyro", title: "Thyrocare Diagnostics Portal",
      desc: "B2B diagnostics revamp led to increased adoption, revenue and reduction in cost.",
      img: "assets/home/tc-diag.png", thumbClass: "thumb-thyro",
      tags: [{ l: "Revamp", c: "amber" }, { l: "Web app", c: "" }, { l: "Ops Efficiency", c: "" }],
      outcomes: [
        { v: "10 → 236", l: "Scaled Sellers" },
        { v: "8,960", l: "Orders / day" },
        { v: "₹850", l: "Increased AOV" }
      ],
      long: {
        tagline: "A 15-year-old portal, made modern — without breaking habits.",
        problem: "A decade-old franchise portal was showing its age. Franchisees resisted new flows; operators leaned on printouts and tribal workarounds.",
        approach: "Co-designed with 12 franchisee partners across tiers. Preserved the muscle memory of core flows while rebuilding the IA, filters, and reporting.",
        outcomes: [
          "Adoption of new reporting workflow: 86% in 6 weeks",
          "Cost-per-report down by 22%",
          "Support tickets for 'where is X' questions reduced by 71%"
        ]
      }
    }
  ];

  const LEADERS = [
    { img: "assets/home/il-advocacy.png", t: "Design Advocacy & Stakeholder Alignment", d: "Drive clarity across product, engineering, business by translating ambiguity into focused, high-impact design decisions." },
    { img: "assets/home/il-process.png", t: "Design Processes & Systems", d: "Introduced design rituals and systems that brought clarity, reduced ambiguity, and enabled teams to move faster together." },
    { img: "assets/home/il-lead.png", t: "Leading & Mentoring Designers", d: "Lead by doing — setting the quality bar through hands-on design while mentoring designers to think in systems, not screens." },
    { img: "assets/home/il-scale.png", t: "Built 0 → 1 & Made Them Scale", d: "Worked across the lifecycle — from early concepts to scaled systems — shaping products that evolved with the business." }
  ];

  const TESTIMONIALS = [
    { q: "Deepen has been a key contributor to the design at Famli. He has a clear preference for clean, functional aesthetics and consistently backs his work with thorough competitive research. He excels at thinking in design systems, which ensures our product remains scalable as it grows. For an early-stage startup, Deepen brings a level of confidence and structure to the design process that is highly valued.", n: "Ajinkya (AJ) Ratnaparkhi", r: "Co-Founder / CPO", i: "A" },
    { q: "I worked with Deepen on a consumer fintech platform where he spearheaded the efforts to set up a new design system and visual language with scalability in mind. Overall, Deepen has a very structured approach towards solving design problems and is very easy to work with, thanks to his adaptability and range of knowledge across disciplines.", n: "Kamal Kishan", r: "Experience Designer", i: "K" },
    { q: "I had the opportunity to work with Deepen early in my time at Birla Pivot. He understood each team member's strengths and consistently assigned work that aligned with those strengths. This approach built strong ownership and gave me the space to take on meaningful projects and grow.", n: "Soutik Mukherji", r: "Product Designer", i: "S" },
    { q: "Deepen has been a cornerstone of the B2B design team at PharmEasy, known for his strong leadership, domain expertise, and collaborative approach. As a manager and mentor, he fosters open conversations, encourages curiosity, and emphasizes building strong stakeholder relationships.", n: "Sindhu S Rao", r: "UX Design & Strategy", i: "S" },
    { q: "I had the pleasure of working with Deepen as a Lead UI/UX Designer at PharmEasy. With over 15 years of experience, he brings deep expertise in solving complex design problems with intuitive, user-friendly solutions. Calm, professional, and highly collaborative.", n: "Deeptanshu Baranwal", r: "Co-founder, Capmint", i: "D" },
    { q: "I highly recommend Deepen as a designer and leader. I have the pleasure of working with him on various brainstorming sessions and am continually impressed by his ability to delve into the heart of a problem and devise multiple user-focused solutions.", n: "Alok Jain", r: "Head of Design – API Holdings", i: "A" }
  ];

  // ---------- UTILS ----------
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };

  // ---------- CHROME (NAV & FOOTER) ----------
  function injectChrome() {
    const page = document.body.dataset.page || "";
    const base = document.body.dataset.base || "./";

    // Nav
    const nav = el("header", "nav");
    nav.id = "siteNav";
    nav.innerHTML = `
      <div class="container nav-inner">
        <a href="${base}index.html" class="brand">Prathamesh Patil</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <nav id="primaryNav" class="primary-nav">
          <a href="${base}index.html#work" class="nav-link ${page==='home'?'is-active':''}">Projects</a>
          <a href="${base}about.html" class="nav-link ${page==='about'?'is-active':''}">About</a>
          <a href="${base}experiments.html" class="nav-link ${page==='experiments'?'is-active':''}">Experiments</a>
          <a href="https://writing.imuric.com" class="nav-link" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:4px">
            Writings <span style="font-size:12px"></span>
          </a>
          <a href="https://resume.imuric.com" class="btn btn-primary btn-sm" id="resumeBtn" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px">
            Resume <span style="font-size:12px">↗</span>
          </a>
        </nav>
      </div>`;
    document.body.prepend(nav);

    // Footer
    const ft = el("div");
    ft.innerHTML = `
      <section class="status">
        <div class="container status-inner" style="justify-content: flex-end">
          <button class="back-top" id="backTop">Back to top <span class="back-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></span></button>
        </div>
      </section>
      <footer class="footer" id="contact">
        <div class="container">
          <div class="row footer-row">
            <div class="col-md-6 footer-me">
              <div class="me-card">
                <img src="${base}assets/home/hero-portrait.png" alt="" class="me-avatar" onerror="this.src='https://via.placeholder.com/100'"/>
                <div>
                  <p class="me-name">Prathamesh Patil</p>
                  <p class="me-role muted">UI UX Designer</p>
                </div>
              </div>
              <div class="contact-block">
                <p class="contact-label muted">Contact me</p>
                <div class="contact-rows">
                  <a href="mailto:uxbypratham@gmail.com" class="contact-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> uxbypratham@gmail.com</a>
                  <a href="tel:+918485847584" class="contact-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> (+91) 84858 47584</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 footer-connect">
              <h3 class="connect-title">Let's Connect</h3>
              <p class="connect-sub">Feel free to reach out for collaborations or just a friendly hello.</p>
              <div class="connect-socials">
                <a href="https://www.linkedin.com/in/deepenvora/" target="_blank" rel="noopener" class="social-ic" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                <a href="https://x.com/deepenv" target="_blank" rel="noopener" class="social-ic" aria-label="Twitter / X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                <a href="https://www.instagram.com/deepenv/" target="_blank" rel="noopener" class="social-ic" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>Made with <span class="heart">♥</span> by Prathamesh</p>
          </div>
        </div>
      </footer>`;
    while (ft.firstChild) document.body.appendChild(ft.firstChild);

    // Nav Events
    const toggle = nav.querySelector(".nav-toggle");
    const menu = nav.querySelector("#primaryNav");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }));
    }

    // Back Top
    const bt = document.getElementById("backTop");
    if (bt) bt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // ---------- RENDERING ----------
  function renderWork() {
    const list = document.getElementById("workList");
    if (!list) return;
    list.innerHTML = `
      <div class="updating-soon-card" style="background:var(--bg-soft);border:1px dashed var(--line-2);border-radius:var(--radius);padding:56px 24px;text-align:center;max-width:640px;margin:0 auto">
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,168,97,0.15);color:var(--accent-2);padding:6px 14px;border-radius:999px;font-size:13px;font-weight:600;margin-bottom:16px">
          <span class="dot" style="width:8px;height:8px;border-radius:50%;background:currentColor"></span>
          In Development
        </div>
        <h3 style="font-family:var(--head-font);font-size:26px;font-weight:700;margin:0 0 10px;color:var(--ink)">Updating Soon</h3>
        <p style="color:var(--muted);margin:0 auto;font-size:15px;line-height:1.6;max-width:480px">
          Case studies and in-depth design breakdowns are currently being updated. Check back soon for the latest work!
        </p>
      </div>`;
  }

  function renderLeaders() {
    const grid = document.getElementById("leaderGrid");
    if (!grid) return;
    grid.innerHTML = "";
    LEADERS.forEach((l) => {
      const col = el("div", "col-md-6");
      col.innerHTML = `
        <div class="leader-card h-100">
          <div class="leader-ic"><img src="${l.img}" alt=""/></div>
          <div class="leader-body">
            <h3>${l.t}</h3>
            <p>${l.d}</p>
          </div>
        </div>`;
      grid.appendChild(col);
    });
  }

  function renderTestimonials() {
    const grid = document.getElementById("testiGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const avatars = [
      "assets/testimonials/AJ.png", "assets/testimonials/kamal.png",
      "assets/testimonials/soutik.png", "assets/testimonials/sindhu.png",
      "assets/testimonials/deeptanshu.png", "assets/testimonials/alok.png"
    ];

    const cols = [TESTIMONIALS.slice(0, 2), TESTIMONIALS.slice(2, 4), TESTIMONIALS.slice(4, 6)];
    cols.forEach((colTestis, ci) => {
      const col = el("div", "testi-col");
      const track = el("div", "testi-track");
      track.style.setProperty("--dur", (15 + ci * 2) + "s");

      [0, 1].forEach(() => {
        colTestis.forEach((t, ti) => {
          const idx = ci * 2 + ti;
          const card = el("article", "testi");
          card.innerHTML = `
            <p class="testi-quote">"${t.q}"</p>
            <div class="testi-author">
              <div class="testi-avatar"><img src="${avatars[idx]}" alt="${t.n}" onerror="this.parentElement.textContent='${t.i}'"/></div>
              <div>
                <p class="testi-name">${t.n}</p>
                <p class="testi-role">${t.r}</p>
              </div>
            </div>`;
          track.appendChild(card);
        });
      });
      col.appendChild(track);
      grid.appendChild(col);
    });
  }

  // ---------- BOOT ----------
  document.addEventListener("DOMContentLoaded", () => {
    injectChrome();
    renderWork();
    renderLeaders();
    renderTestimonials();

    // Back to Top Floating
    const btnFloat = document.getElementById('backTopFloat');
    if (btnFloat) {
      window.addEventListener('scroll', () => {
        btnFloat.classList.toggle('visible', window.scrollY > 300);
      }, { passive: true });
      btnFloat.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Beyond Work Slider
    const grid = document.querySelector('.beyond-grid');
    const prev = document.querySelector('.beyond-nav.prev');
    const next = document.querySelector('.beyond-nav.next');
    const dots = document.querySelectorAll('.beyond-dot');

    if (grid && prev && next) {
      const scrollAmt = () => grid.clientWidth;
      
      next.addEventListener('click', () => {
        grid.scrollBy({ left: scrollAmt(), behavior: 'smooth' });
      });
      
      prev.addEventListener('click', () => {
        grid.scrollBy({ left: -scrollAmt(), behavior: 'smooth' });
      });

      grid.addEventListener('scroll', () => {
        const idx = Math.round(grid.scrollLeft / scrollAmt());
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }, { passive: true });

      dots.forEach((d, i) => {
        d.addEventListener('click', () => {
          grid.scrollTo({ left: i * scrollAmt(), behavior: 'smooth' });
        });
      });
    }

    // Scroll Reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal-on-scroll, .work-card, .leader-card, .testi, .section-head, article")
      .forEach(n => {
        n.classList.add("reveal");
        io.observe(n);
      });
  });

})();
