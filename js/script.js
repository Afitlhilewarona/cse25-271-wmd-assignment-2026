const ARTICLES_DB = [
  {
    id: "ai-first-design",
    title: "AI-First Design: The Next Epoch of User Experience",
    excerpt: "Designers are moving from deterministic layouts to dynamic agent-led canvas generation. Explore the guidelines of design in the age of intelligence.",
    content: `
      <p>The history of user interface design has been largely deterministic. As designers, we created fixed paths: button A routes to page B, input C yields output D. Every layout was compiled beforehand and served statically. But we are crossing a threshold. In the age of AI agents, interfaces will be generated on-the-fly based on intention, context, and immediate user needs.</p>
      
      <h2>The Shift to Generative Canvases</h2>
      <p>Instead of mapping pages, designers will design systems of capabilities. When an agent understands a user’s prompt, it doesn’t just show text; it gathers components (a chart here, a billing dropdown there, a comparative table) and renders them instantly. The interface becomes fluid and ephemeral.</p>
      
      <blockquote>
        "The best interface is the one that dynamically adapts to your cognitive state, presenting exactly what you need, when you need it, and dissolving when the task is done."
      </blockquote>

      <h2>Core Principles of AI-First UX</h2>
      <p>To succeed in this new paradigm, keep these three principles in mind:</p>
      <ul>
        <li><strong>Intent Alignment:</strong> Design inputs that allow rich, natural expression of intention, combining text, voice, and visual gestures.</li>
        <li><strong>Graceful Uncertainty:</strong> Design states that explain what the agent is doing, loading skeletons, and interactive feedback loops.</li>
        <li><strong>User-in-the-Loop Controls:</strong> Never automate critical steps without clear approval gates. Offer overrides and easy backtracks.</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>We are no longer designing static pixels. We are designing behaviors, systems, and guidelines for intelligent systems to operate within.</p>
    `,
    category: "tech",
    categoryLabel: "Tech & AI",
    tag: "AI & Design",
    readTime: "5 min read",
    date: "May 18, 2026",
    author: {
      name: "Helen Vance",
      avatarInitials: "HV",
      title: "Staff Designer"
    },
    image: "images/1.jpg"
  },
  {
    id: "micro-interactions",
    title: "Micro-interactions: Crafting Delightful Digital Moments",
    excerpt: "A detail-oriented deep dive into hover states, spring physics, and subtle audio cues that transform an interface from utility to magic.",
    content: `
      <p>An interface can be functionally flawless, but feel completely dead. The difference between a cold utility tool and an application that users love often lies in the details: the micro-interactions. These are the small, single-purpose animations and feedback loops that occur when a user performs a minor action.</p>
      
      <h2>Why Details Matter</h2>
      <p>Human beings are wired to respond to feedback. When we press a physical button, we feel a click. When we slide a physical latch, it clicks into place. In digital spaces, these tactile sensations are absent. Micro-interactions restore this loop, providing reassuring confirmation and a sense of weight to pixels.</p>
      
      <blockquote>
        "The details are not the details. They make the design." — Charles Eames
      </blockquote>

      <h2>Spring Physics vs. Linear Animations</h2>
      <p>Linear transitions feel robotic. Real-world objects have mass, momentum, and friction. By using spring-based motion curves instead of ease-in-out, digital components behave like physical materials. Buttons compress slightly under your touch and bounce back with a subtle overshoot.</p>
    `,
    category: "design",
    categoryLabel: "Design Systems",
    tag: "UI Physics",
    readTime: "4 min read",
    date: "May 14, 2026",
    author: {
      name: "Marcus Grey",
      avatarInitials: "MG",
      title: "UI Engineer"
    },
    image: "images/2.jpg"
  },
  {
    id: "deep-work-frameworks",
    title: "Deep Work Frameworks for Distributed Teams",
    excerpt: "How to combat communication fatigue, establish asynchronous workflows, and reclaim blocks of focus in a world of slack notifications.",
    content: `
      <p>Modern remote work is broken. We traded long commutes for constant interruptions. In theory, working from anywhere should give us periods of uninterrupted focus. In practice, it has created a culture of hyper-responsiveness where we spend our days checking Slack, attending Zoom meetings, and clearing email.</p>
      
      <h2>The Cost of Context Switching</h2>
      <p>Every time you check a notification, your brain undergoes a context switch. Studies show it takes an average of 23 minutes to refocus after a distraction. If you are interrupted every 10 minutes, you never enter a state of deep, high-value cognitive focus.</p>
      
      <blockquote>
        "To produce at your peak level you need to work for extended periods with full concentration on a single task free from distraction." — Cal Newport
      </blockquote>

      <h2>The Asynchronous Manifesto</h2>
      <p>To rescue deep work, teams must transition from synchronous expectations to asynchronous principles:</p>
      <ul>
        <li><strong>Write it Down:</strong> Replace status update meetings with detailed, written documentation. Use platforms like Notion or GitHub Discussions.</li>
        <li><strong>Batch Communication:</strong> Set expectations that Slack messages do not need immediate replies. Encourage team members to check communications only 3-4 times a day.</li>
        <li><strong>Time-Blocking:</strong> Mark large focus periods on your calendar. Protect them from meetings.</li>
      </ul>
    `,
    category: "productivity",
    categoryLabel: "Productivity",
    tag: "Workflows",
    readTime: "6 min read",
    date: "May 11, 2026",
    author: {
      name: "Sarah Jenkins",
      avatarInitials: "SJ",
      title: "Ops Director"
    },
    image: "images/3.jpg"
  },
  {
    id: "minimal-software",
    title: "The Elegant Philosophy of Minimal Software Systems",
    excerpt: "Reflecting on why build tools grow complex, why dependencies spiral, and how to write resilient code that lives for decades without maintenance.",
    content: `
      <p>In software development, complexity is the enemy. Yet, our industry has built a culture that celebrates bloat. A simple web app today often pulls in thousands of NPM dependencies, requires complex compilation steps, and demands massive server infrastructure. It doesn't have to be this way.</p>
      
      <h2>The Concept of Accidental Complexity</h2>
      <p>There is essential complexity (inherent to the problem we are solving) and accidental complexity (introduced by our tools, frameworks, and architecture). When we adopt massive frameworks for small projects, we are borrowing trouble.</p>
      
      <blockquote>
        "Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make things worse: complexity sells better." — Edsger W. Dijkstra
      </blockquote>

      <h2>Building for Longevity</h2>
      <p>If you want to build software that lasts, aim for these guidelines:</p>
      <ul>
        <li><strong>Minimize Dependencies:</strong> Every dependency you add is a potential security vulnerability and a maintenance liability. Write custom code where practical.</li>
        <li><strong>Embrace Standards:</strong> Use standard, native APIs rather than proprietary layer abstractions. Vanilla JavaScript, HTML, and CSS are highly backward-compatible.</li>
        <li><strong>Self-Contained Modules:</strong> Write code that is decoupled and clear. A module should do one thing well, with an explicit interface.</li>
      </ul>
    `,
    category: "philosophy",
    categoryLabel: "Philosophy",
    tag: "Architecture",
    readTime: "7 min read",
    date: "May 05, 2026",
    author: {
      name: "Aiden Cross",
      avatarInitials: "AC",
      title: "Systems Architect"
    },
    image: "images/4.jpg"
  },
  {
    id: "future-of-css",
    title: "CSS in 2026: Container Queries and Dynamic Scroll Animations",
    excerpt: "With scroll-driven timelines, container queries, and native nesting fully supported, modern layout techniques are stepping into a code-only design framework.",
    content: `
      <p>CSS has evolved faster in the last three years than in the previous ten. Gone are the days when we needed complex JavaScript libraries to trigger animations on scroll, or heavyweight frameworks like Tailwind to achieve maintainable nesting structures. Today's CSS is powerful, expressive, and entirely native.</p>
      
      <h2>Container Queries over Media Queries</h2>
      <p>Media queries look at the browser viewport. Container queries look at the parent element. This changes the game for reusable component libraries. A card can render differently based on whether it is placed in a narrow sidebar or a wide main content grid, entirely independent of screen size.</p>
      
      <h2>Scroll-Driven Timelines</h2>
      <p>Native scroll-driven animations allow you to map animation progression directly to the scroll offset of any scroll container. No scroll listeners, no layout thrashing, and buttery smooth 60fps animations running directly on the browser's compositor thread.</p>
    `,
    category: "design",
    categoryLabel: "Design Systems",
    tag: "Modern CSS",
    readTime: "5 min read",
    date: "April 29, 2026",
    author: {
      name: "Marcus Grey",
      avatarInitials: "MG",
      title: "UI Engineer"
    },
    image: "images/5.jpg"
  },
  {
    id: "rust-for-web-dev",
    title: "Why Modern Web Dev is Moving Toward Rust Abstractions",
    excerpt: "A deep dive into why bundlers, compilation tooling, and performant server frameworks are migrating from JavaScript to Rust.",
    content: `
      <p>If you look at the toolchains powering modern JavaScript development, you'll find a surprising trend: none of them are written in JavaScript anymore. Next.js uses SWC; Vite leverages Rust-based tools; Turbopack is written in Rust. The industry has reached the limits of single-threaded node execution engines.</p>
      
      <h2>The CPU Bound Problem</h2>
      <p>JavaScript is exceptionally fast for network I/O, but it struggles with CPU-bound work like code parsing, minification, and bundling. Rust, with its zero-cost abstractions, data race safety, and thread-level parallelism, executes these tasks orders of magnitude faster.</p>
      
      <h2>Beyond Tooling: Backend APIs</h2>
      <p>Using frameworks like Axum or Actix-web, teams are building REST APIs and WebAssembly microservices that handle millions of requests per second on minimal server footprints. The benefits are clear: reduced cloud spend and extreme runtime stability.</p>
    `,
    category: "tech",
    categoryLabel: "Tech & AI",
    tag: "Rustlang",
    readTime: "6 min read",
    date: "April 20, 2026",
    author: {
      name: "Aiden Cross",
      avatarInitials: "AC",
      title: "Systems Architect"
    },
    image: "images/6.jpg"
  },
  {
    id: "stoicism-in-code",
    title: "Applied Stoicism: Navigating Modern Software Projects",
    excerpt: "How ancient philosophy offers software developers a powerful cognitive framework for handling legacy code, bug reports, and refactoring stress.",
    content: `
      <p>Software development is a series of problem-solving challenges mixed with technical debt, shifting deadlines, and unexpected production bugs. It is easy to feel overwhelmed. However, Stoicism—a practical philosophy founded in Athens—offers a psychological operating system designed for these conditions.</p>
      
      <h2>The Dichotomy of Control</h2>
      <p>The core tenet of Stoicism is separating what is in your control from what is not. You cannot control: legacy code written by a former employee, sudden API outages, or project requirement shifts. You can control: how you format your commits, how you write tests, and how you respond to bug reports.</p>
      
      <h2>Amor Fati and Bugs</h2>
      <p>Stoics practice 'Amor Fati'—loving one's fate. When a major bug occurs in production, don't view it as a disaster. View it as a testing ground for your debugging skills, a learning opportunity, and a chance to make the codebase more resilient.</p>
    `,
    category: "philosophy",
    categoryLabel: "Philosophy",
    tag: "Philosophy",
    readTime: "5 min read",
    date: "April 15, 2026",
    author: {
      name: "Helen Vance",
      avatarInitials: "HV",
      title: "Staff Designer"
    },
    image: "images/7.jpg"
  },
  {
    id: "calm-tech-philosophy",
    title: "Calm Technology: Designing for Attention Scarcity",
    excerpt: "Explore the framework of calm design: creating tools that respect cognitive load, present data in peripheral spaces, and scale back noise.",
    content: `
      <p>We are constantly bombarded by screens, alerts, and pings. Most technology is designed to grab our attention, capitalize on dopamine loops, and monopolize our focus. Calm Technology is a design philosophy that challenges this model, advocating for tools that exist peacefully in our environment.</p>
      
      <h2>Attention as a Finite Resource</h2>
      <p>A user has a limited amount of primary attention. Good design works in the periphery. Information should rest comfortably in the background until it is explicitly needed. Think of a smart thermostat or a dashboard indicator—they do not scream; they inform at a glance.</p>
      
      <h2>Principles of Calm Design</h2>
      <p>When building systems, follow these calm technology design goals:</p>
      <ul>
        <li><strong>Peripheral Information:</strong> Display status changes ambiently using subtle colors or indicators rather than intrusive popups.</li>
        <li><strong>Respect Attention:</strong> A tool should run silently, completing tasks in the background without constantly demanding validation or showing alerts.</li>
        <li><strong>Human Scale:</strong> Design for human limits, not processor speeds. Allow users to step away without feeling cognitive residue.</li>
      </ul>
    `,
    category: "philosophy",
    categoryLabel: "Philosophy",
    tag: "Calm Design",
    readTime: "6 min read",
    date: "April 08, 2026",
    author: {
      name: "Sarah Jenkins",
      avatarInitials: "SJ",
      title: "Ops Director"
    },
    image: "images/3.jpg"
  }
];

let state = {
  currentCategory: "all",
  searchQuery: "",
  bookmarks: JSON.parse(localStorage.getItem("wawa-bookmarks")) || []
};

const bookmarkCountBadge = document.getElementById("bookmark-count");
const bookmarksModal = document.getElementById("bookmarks-modal");
const bookmarksClose = document.getElementById("bookmarks-close");
const bookmarkNavBtn = document.getElementById("bookmark-nav-btn");
const bookmarksList = document.getElementById("bookmarks-list");

const subModal = document.getElementById("sub-modal");
const subClose = document.getElementById("sub-close");
const subForm = document.getElementById("sub-form");
const navSubBtn = document.getElementById("nav-sub-btn");

const articleDetailModal = document.getElementById("article-detail-modal");
const detailClose = document.getElementById("detail-close");
const detailModalBody = document.getElementById("detail-modal-body");
const detailBookmarkBtn = document.getElementById("detail-bookmark-btn");

const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const categoriesMenu = document.getElementById("categories-menu");
const articlesGrid = document.getElementById("articles-grid");
const resultsCount = document.getElementById("results-count");
const featuredContainer = document.getElementById("featured-article-container");

function init() {
  setupEventListeners();
  updateBookmarkBadge();
  
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("category");
  const qParam = params.get("q");
  
  if (catParam) {
    state.currentCategory = catParam;
    const catBtns = document.querySelectorAll(".category-btn");
    catBtns.forEach(btn => {
      if (btn.getAttribute("data-category") === catParam) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
  
  if (qParam) {
    state.searchQuery = qParam;
    if (searchInput) {
      searchInput.value = qParam;
      searchClearBtn.style.display = "block";
    }
  }
  
  if (featuredContainer) {
    renderFeatured();
  }
  if (articlesGrid) {
    renderArticles();
  }
}

function renderFeatured() {
  featuredContainer.innerHTML = "";
  const featured = ARTICLES_DB[0];
  const isBookmarked = state.bookmarks.includes(featured.id);
  
  const card = document.createElement("div");
  card.className = "featured-card";
  card.innerHTML = `
    <div class="featured-img-wrapper">
      <span class="featured-badge">Featured Article</span>
      <button class="featured-bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${featured.id}" title="Bookmark Article">
        <i data-lucide="bookmark" class="icon-sm" style="fill: ${isBookmarked ? 'currentColor' : 'none'}"></i>
      </button>
      <img src="${featured.image}" alt="${featured.title}" class="featured-img">
    </div>
    <div class="featured-content">
      <div class="featured-meta">
        <span>${featured.categoryLabel}</span>
        <span>&middot;</span>
        <span>${featured.readTime}</span>
      </div>
      <h2 class="featured-title">${featured.title}</h2>
      <p class="featured-excerpt">${featured.excerpt}</p>
      <div class="featured-footer">
        <div class="card-author">
          <div class="author-avatar">${featured.author.avatarInitials}</div>
          <span class="author-name">${featured.author.name}</span>
        </div>
        <span class="card-link">
          Read Article
          <i data-lucide="arrow-up-right" class="icon-xs"></i>
        </span>
      </div>
    </div>
  `;
  
  card.addEventListener("click", (e) => {
    if (e.target.closest(".featured-bookmark-btn")) return;
    openArticleDetail(featured.id);
  });
  
  const bookmarkBtn = card.querySelector(".featured-bookmark-btn");
  bookmarkBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleBookmark(featured.id);
    renderFeatured();
  });
  
  featuredContainer.appendChild(card);
  lucide.createIcons();
}

function renderArticles() {
  articlesGrid.innerHTML = "";
  
  let dbToFilter = ARTICLES_DB;
  if (featuredContainer) {
    dbToFilter = ARTICLES_DB.slice(1);
  }
  
  const filtered = dbToFilter.filter(article => {
    const matchesCategory = state.currentCategory === "all" || article.category === state.currentCategory;
    const query = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      article.title.toLowerCase().includes(query) || 
      article.excerpt.toLowerCase().includes(query) ||
      article.tag.toLowerCase().includes(query) ||
      article.categoryLabel.toLowerCase().includes(query);
      
    return matchesCategory && matchesSearch;
  });

  if (resultsCount) {
    if (state.searchQuery) {
      resultsCount.textContent = `Found ${filtered.length} matching articles`;
    } else if (state.currentCategory !== "all") {
      const catName = ARTICLES_DB.find(a => a.category === state.currentCategory)?.categoryLabel || "";
      resultsCount.textContent = `Showing ${filtered.length} articles in ${catName}`;
    } else {
      resultsCount.textContent = `Showing all ${filtered.length} publications`;
    }
  }

  if (filtered.length === 0) {
    articlesGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px 24px; color: var(--text-muted);">
        <i data-lucide="inbox" style="width: 48px; height: 48px; margin: 0 auto 16px; display: block; opacity: 0.5;"></i>
        <h3 style="font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 8px;">No articles found</h3>
        <p style="font-size: 14px;">Try adjusting your filters or search query.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filtered.forEach(article => {
    const isBookmarked = state.bookmarks.includes(article.id);
    const card = document.createElement("div");
    card.className = "article-card";
    card.setAttribute("data-id", article.id);
    
    card.innerHTML = `
      <div class="card-img-wrapper">
        <span class="card-badge">${article.tag}</span>
        <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${article.id}" title="Bookmark Article">
          <i data-lucide="bookmark" class="icon-xs" style="fill: ${isBookmarked ? 'currentColor' : 'none'}"></i>
        </button>
        <img src="${article.image}" alt="${article.title}" class="card-img">
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${article.categoryLabel}</span>
          <span>&middot;</span>
          <span>${article.readTime}</span>
        </div>
        <h3 class="card-title">${article.title}</h3>
        <p class="card-excerpt">${article.excerpt}</p>
        <div class="card-footer">
          <div class="card-author">
            <div class="author-avatar">${article.author.avatarInitials}</div>
            <span class="author-name">${article.author.name}</span>
          </div>
          <span class="card-link">
            Read article
            <i data-lucide="arrow-up-right" class="icon-xs"></i>
          </span>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-bookmark-btn")) return;
      openArticleDetail(article.id);
    });

    const bookmarkBtn = card.querySelector(".card-bookmark-btn");
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleBookmark(article.id);
    });

    articlesGrid.appendChild(card);
  });

  lucide.createIcons();
}

function toggleBookmark(articleId) {
  const index = state.bookmarks.indexOf(articleId);
  if (index === -1) {
    state.bookmarks.push(articleId);
  } else {
    state.bookmarks.splice(index, 1);
  }
  
  localStorage.setItem("wawa-bookmarks", JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  if (articlesGrid) renderArticles();
  if (featuredContainer) renderFeatured();
  
  if (articleDetailModal.classList.contains("open")) {
    const currentOpenId = detailBookmarkBtn.getAttribute("data-id");
    if (currentOpenId === articleId) {
      updateDetailBookmarkBtnState(state.bookmarks.includes(articleId));
    }
  }
}

function updateBookmarkBadge() {
  const count = state.bookmarks.length;
  bookmarkCountBadge.textContent = count;
}

function renderBookmarksList() {
  bookmarksList.innerHTML = "";
  const savedArticles = ARTICLES_DB.filter(a => state.bookmarks.includes(a.id));
  
  if (savedArticles.length === 0) {
    bookmarksList.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <i data-lucide="bookmark-x" style="width: 32px; height: 32px; margin: 0 auto 12px; display: block; opacity: 0.5;"></i>
        <p style="font-size: 14px;">No saved articles yet.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  savedArticles.forEach(article => {
    const item = document.createElement("div");
    item.className = "bookmark-item";
    
    item.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="bookmark-item-img">
      <div class="bookmark-item-info">
        <h4 class="bookmark-item-title">${article.title}</h4>
        <div class="bookmark-item-meta">
          <span>${article.categoryLabel}</span>
          <span>&middot;</span>
          <span>${article.readTime}</span>
        </div>
      </div>
      <button class="bookmark-item-remove" title="Remove Bookmark">
        <i data-lucide="trash-2" class="icon-xs"></i>
      </button>
    `;

    item.addEventListener("click", (e) => {
      if (e.target.closest(".bookmark-item-remove")) {
        e.stopPropagation();
        toggleBookmark(article.id);
        renderBookmarksList();
        return;
      }
      closeModal(bookmarksModal);
      openArticleDetail(article.id);
    });

    bookmarksList.appendChild(item);
  });
  
  lucide.createIcons();
}

function openArticleDetail(articleId) {
  const article = ARTICLES_DB.find(a => a.id === articleId);
  if (!article) return;

  detailBookmarkBtn.setAttribute("data-id", article.id);
  updateDetailBookmarkBtnState(state.bookmarks.includes(article.id));

  detailModalBody.innerHTML = `
    <img src="${article.image}" alt="${article.title}" class="detail-cover">
    <div class="detail-meta">
      <span class="detail-category">${article.categoryLabel}</span>
      <span>${article.date}</span>
      <span>&middot;</span>
      <span>${article.readTime}</span>
    </div>
    <h1 class="detail-title">${article.title}</h1>
    <div class="detail-author-row">
      <div class="detail-author-avatar">${article.author.avatarInitials}</div>
      <div class="detail-author-meta">
        <h4>${article.author.name}</h4>
        <p>${article.author.title} &middot; WaWa News Contributor</p>
      </div>
    </div>
    <div class="detail-content">
      ${article.content}
    </div>
  `;

  openModal(articleDetailModal);
}

function updateDetailBookmarkBtnState(isBookmarked) {
  if (isBookmarked) {
    detailBookmarkBtn.classList.add("active");
    detailBookmarkBtn.innerHTML = `<i data-lucide="bookmark" class="icon-sm" style="fill: currentColor"></i>`;
  } else {
    detailBookmarkBtn.classList.remove("active");
    detailBookmarkBtn.innerHTML = `<i data-lucide="bookmark" class="icon-sm"></i>`;
  }
  lucide.createIcons();
}

function openModal(modalEl) {
  modalEl.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  modalEl.classList.remove("open");
  document.body.style.overflow = "";
}

function setupEventListeners() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const contactNavBtn = document.getElementById("contact-nav-btn");
  if (contactNavBtn) {
    contactNavBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "contact.html";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      searchClearBtn.style.display = state.searchQuery.trim().length > 0 ? "block" : "none";
      renderArticles();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      searchClearBtn.style.display = "none";
      renderArticles();
    });
  }

  if (categoriesMenu) {
    categoriesMenu.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;
      categoriesMenu.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentCategory = btn.getAttribute("data-category");
      renderArticles();
    });
  }

  if (navSubBtn) {
    navSubBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(subModal);
    });
  }
  
  if (subClose) subClose.addEventListener("click", () => closeModal(subModal));
  if (subForm) {
    subForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = subForm.querySelector("input").value;
      alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
      subForm.reset();
      closeModal(subModal);
    });
  }

  const inlineForm = document.getElementById("newsletter-form-inline");
  if (inlineForm) {
    inlineForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = inlineForm.querySelector("input").value;
      alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
      inlineForm.reset();
    });
  }

  const footerNewsletterForm = document.getElementById("footer-newsletter-form");
  if (footerNewsletterForm) {
    footerNewsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = footerNewsletterForm.querySelector("input").value;
      alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
      footerNewsletterForm.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      alert(`Thank you, ${name}! Your message has been received. We will get back to you at ${email} shortly.`);
      contactForm.reset();
    });
  }

  const faqAccordion = document.getElementById("faq-accordion");
  if (faqAccordion) {
    faqAccordion.addEventListener("click", (e) => {
      const item = e.target.closest(".faq-item");
      if (!item) return;
      const question = e.target.closest(".faq-question");
      if (!question) return;
      
      const isActive = item.classList.contains("active");
      faqAccordion.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      
      if (!isActive) {
        item.classList.add("active");
      }
    });
  }

  if (bookmarkNavBtn) {
    bookmarkNavBtn.addEventListener("click", () => {
      renderBookmarksList();
      openModal(bookmarksModal);
    });
  }
  if (bookmarksClose) bookmarksClose.addEventListener("click", () => closeModal(bookmarksModal));
  if (detailClose) detailClose.addEventListener("click", () => closeModal(articleDetailModal));
  if (detailBookmarkBtn) {
    detailBookmarkBtn.addEventListener("click", () => {
      const id = detailBookmarkBtn.getAttribute("data-id");
      toggleBookmark(id);
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal(e.target);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(subModal);
      closeModal(bookmarksModal);
      closeModal(articleDetailModal);
    }
  });
}

window.addEventListener("DOMContentLoaded", init);
