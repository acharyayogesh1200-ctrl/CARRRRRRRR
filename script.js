/* =========================================================
   AUTOAURA — Premium Automotive E-Commerce
   script.js
   ========================================================= */
"use strict";

/* ---------- Image helper ----------
   Adds a graceful onerror fallback to a neutral gradient image. */
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60";

/* =========================================================
   PRODUCT DATA
   Edit prices, images, ratings, and retailer links here.
   Links use genuine retailer SEARCH pages so they always
   resolve to the correct product category / item.
   ========================================================= */
const PRODUCTS = [
  /* ---------- INTERIOR ---------- */
  {
    id: 1,
    name: "Premium Leather Seat Cushion",
    category: "Interior",
    price: 1499,
    original: 2499,
    rating: 4.6,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=70",
    desc: "Ergonomic memory-foam seat cushion wrapped in premium leather for all-day driving comfort and lumbar support.",
    highlights: ["Premium PU leather finish", "Memory-foam cushioning", "Non-slip anti-skid base", "Fits most car seats"],
    link: "https://www.amazon.in/s?k=leather+car+seat+cushion"
  },
  {
    id: 2,
    name: "Ambient LED Interior Lighting Kit",
    category: "Interior",
    price: 1999,
    original: 2999,
    rating: 4.7,
    badge: "TRENDING",
    badgeClass: "trending",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=70",
    desc: "App-controlled multicolor ambient LED strips that transform your cabin with a premium glow and music sync.",
    highlights: ["16 million colors + music sync", "App & remote control", "Easy adhesive install", "Footwell + dash ready"],
    link: "https://www.amazon.in/s?k=car+ambient+led+interior+lighting+kit"
  },
  {
    id: 3,
    name: "Universal Car Organizer",
    category: "Interior",
    price: 799,
    original: 1299,
    rating: 4.4,
    badge: "SALE",
    badgeClass: "sale",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
    desc: "Multi-compartment backseat organizer with cup holders and tablet storage to keep your cabin clutter-free.",
    highlights: ["Multiple storage pockets", "Built-in cup holders", "Durable Oxford fabric", "Universal fit"],
    link: "https://www.amazon.in/s?k=universal+car+seat+back+organizer"
  },
  {
    id: 4,
    name: "Premium Steering Wheel Cover",
    category: "Interior",
    price: 1299,
    original: 1999,
    rating: 4.5,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=70",
    desc: "Hand-stitched microfiber leather steering wheel cover for a secure, luxurious grip on every drive.",
    highlights: ["Genuine microfiber leather", "Anti-slip ergonomic grip", "Heat & sweat resistant", "Universal 37-38cm fit"],
    link: "https://www.amazon.in/s?k=premium+steering+wheel+cover+car"
  },
  {
    id: 5,
    name: "Dashboard Phone Holder",
    category: "Interior",
    price: 699,
    original: 1099,
    rating: 4.3,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=70",
    desc: "Sturdy dashboard & windshield phone mount with 360° rotation and one-hand locking mechanism.",
    highlights: ["360° rotation", "One-hand lock & release", "Non-marking suction base", "Fits all phones"],
    link: "https://www.amazon.in/s?k=car+dashboard+phone+holder+mount"
  },
  {
    id: 6,
    name: "Car Neck & Lumbar Support Set",
    category: "Interior",
    price: 1499,
    original: 2299,
    rating: 4.6,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=70",
    desc: "Memory-foam neck and lumbar support set engineered to reduce fatigue on long journeys.",
    highlights: ["Orthopedic memory foam", "Breathable mesh cover", "Adjustable straps", "Relieves back & neck pain"],
    link: "https://www.amazon.in/s?k=car+neck+and+lumbar+support+cushion+set"
  },

  /* ---------- EXTERIOR ---------- */
  {
    id: 7,
    name: "Premium Car Body Cover",
    category: "Exterior",
    price: 1999,
    original: 3499,
    rating: 4.5,
    badge: "SALE",
    badgeClass: "sale",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70",
    desc: "Weather-resistant, soft-inner body cover that protects your car from sun, dust, and scratches.",
    highlights: ["Water & UV resistant", "Soft fleece inner lining", "Elasticated with mirror pockets", "All-weather protection"],
    link: "https://www.amazon.in/s?k=premium+car+body+cover+weatherproof"
  },
  {
    id: 8,
    name: "Carbon-Finish Mirror Covers",
    category: "Exterior",
    price: 899,
    original: 1499,
    rating: 4.4,
    badge: "TRENDING",
    badgeClass: "trending",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
    desc: "Sporty carbon-finish rearview mirror covers that add a sharp, aggressive look to your car.",
    highlights: ["Carbon-fiber textured finish", "Impact-resistant ABS", "Easy snap-on install", "UV-stable coating"],
    link: "https://www.amazon.in/s?k=carbon+finish+car+mirror+covers"
  },
  {
    id: 9,
    name: "Door Edge Protection Kit",
    category: "Exterior",
    price: 499,
    original: 899,
    rating: 4.2,
    badge: "SALE",
    badgeClass: "sale",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=70",
    desc: "Transparent door edge guards that prevent chips and dents while staying virtually invisible.",
    highlights: ["Clear PU film", "Prevents door chips", "Self-adhesive backing", "Trim-to-fit design"],
    link: "https://www.amazon.in/s?k=car+door+edge+protection+guard"
  },
  {
    id: 10,
    name: "Premium Number Plate Frame",
    category: "Exterior",
    price: 599,
    original: 999,
    rating: 4.3,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=70",
    desc: "Sleek stainless-steel number plate frame with corrosion-resistant finish and secure mounting.",
    highlights: ["Stainless steel build", "Rust-proof finish", "Slim premium profile", "Universal screw fit"],
    link: "https://www.amazon.in/s?k=premium+car+number+plate+frame+steel"
  },

  /* ---------- DETAILING ---------- */
  {
    id: 11,
    name: "Car Detailing Starter Kit",
    category: "Detailing",
    price: 1499,
    original: 2499,
    rating: 4.7,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=70",
    desc: "All-in-one detailing kit with shampoo, spray wax, microfiber towels, and applicators for a showroom finish.",
    highlights: ["Complete 8-piece kit", "pH-neutral shampoo", "Microfiber towels included", "Safe on all surfaces"],
    link: "https://www.amazon.in/s?k=car+detailing+starter+kit"
  },
  {
    id: 12,
    name: "Microfiber Cleaning Cloth Set",
    category: "Detailing",
    price: 499,
    original: 899,
    rating: 4.5,
    badge: "SALE",
    badgeClass: "sale",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=70",
    desc: "Ultra-soft, scratch-free microfiber cloths (set of 6) for streak-free interiors, paint, and glass.",
    highlights: ["Set of 6 plush cloths", "350 GSM absorbent", "Lint-free & scratch-free", "Machine washable"],
    link: "https://www.amazon.in/s?k=microfiber+car+cleaning+cloth+set"
  },
  {
    id: 13,
    name: "Interior Cleaning Brush Kit",
    category: "Detailing",
    price: 599,
    original: 999,
    rating: 4.4,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=70",
    desc: "Soft-bristle detailing brush set for vents, crevices, and delicate interior surfaces.",
    highlights: ["Multi-size soft brushes", "Reaches tight vents", "Non-scratch bristles", "Ergonomic grips"],
    link: "https://www.amazon.in/s?k=car+interior+cleaning+brush+kit"
  },
  {
    id: 14,
    name: "Premium Car Shampoo",
    category: "Detailing",
    price: 699,
    original: 1099,
    rating: 4.6,
    badge: "TRENDING",
    badgeClass: "trending",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
    desc: "High-foaming pH-neutral car shampoo that lifts grime gently while protecting wax and sealant.",
    highlights: ["pH-neutral formula", "Rich thick foam", "Wax & sealant safe", "1L concentrate"],
    link: "https://www.amazon.in/s?k=premium+car+shampoo+ph+neutral"
  },
  {
    id: 15,
    name: "Wheel Cleaning Kit",
    category: "Detailing",
    price: 999,
    original: 1599,
    rating: 4.5,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=70",
    desc: "Dedicated wheel cleaner and soft brushes that dissolve brake dust and restore alloy shine safely.",
    highlights: ["Brake-dust remover", "Soft wheel brushes", "Safe on alloys", "Streak-free rinse"],
    link: "https://www.amazon.in/s?k=car+wheel+cleaning+kit+alloy"
  },

  /* ---------- GADGETS ---------- */
  {
    id: 16,
    name: "Wireless Car Charger",
    category: "Gadgets",
    price: 1799,
    original: 2799,
    rating: 4.6,
    badge: "TRENDING",
    badgeClass: "trending",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=70",
    desc: "Fast 15W wireless charging car mount with auto-clamp and intelligent cooling.",
    highlights: ["15W fast wireless charging", "Smart auto-clamp", "Built-in cooling fan", "Dash & vent mount"],
    link: "https://www.amazon.in/s?k=wireless+car+charger+mount+15w"
  },
  {
    id: 17,
    name: "Bluetooth FM Transmitter",
    category: "Gadgets",
    price: 999,
    original: 1599,
    rating: 4.4,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=70",
    desc: "Connect any car audio system via Bluetooth and FM with crisp hands-free calling and dual USB ports.",
    highlights: ["Bluetooth 5.0 hands-free", "Dual USB charging ports", "CVC noise cancellation", "LED display"],
    link: "https://www.amazon.in/s?k=bluetooth+fm+transmitter+car"
  },
  {
    id: 18,
    name: "Portable Tire Inflator",
    category: "Gadgets",
    price: 2499,
    original: 3999,
    rating: 4.7,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=70",
    desc: "Compact cordless digital tire inflator with auto shut-off and preset pressure memory.",
    highlights: ["Auto shut-off preset", "Digital pressure display", "Rechargeable battery", "LED emergency light"],
    link: "https://www.amazon.in/s?k=portable+car+tire+inflator+digital"
  },

  /* ---------- CAR CARE ---------- */
  {
    id: 19,
    name: "Waterless Wash & Wax Spray",
    category: "Car Care",
    price: 849,
    original: 1399,
    rating: 4.5,
    badge: "SALE",
    badgeClass: "sale",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=70",
    desc: "Spray-on waterless wash that cleans and adds a protective wax layer without a hose.",
    highlights: ["No water needed", "Adds wax protection", "Safe for paint & trim", "500ml spray"],
    link: "https://www.amazon.in/s?k=car+waterless+wash+and+wax+spray"
  },
  {
    id: 20,
    name: "Ceramic Spray Coating",
    category: "Car Care",
    price: 1799,
    original: 2999,
    rating: 4.8,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=70",
    desc: "SiO2 ceramic spray sealant delivering deep gloss, hydrophobic protection, and lasting shine.",
    highlights: ["SiO2 ceramic formula", "Hydrophobic beads", "Up to 6 months protection", "Gloss & slick finish"],
    link: "https://www.amazon.in/s?k=ceramic+spray+coating+car"
  },
  {
    id: 21,
    name: "Interior Dashboard Polish",
    category: "Car Care",
    price: 549,
    original: 899,
    rating: 4.3,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=70",
    desc: "Matte-finish dashboard protectant that restores interior surfaces and blocks harmful UV.",
    highlights: ["UV protection", "Non-greasy matte finish", "Anti-dust formula", "Fresh scent"],
    link: "https://www.amazon.in/s?k=car+dashboard+polish+interior+protectant"
  },

  /* ---------- PERFORMANCE LIFESTYLE ---------- */
  {
    id: 22,
    name: "Alloy Wheel Spoke Badge Kit",
    category: "Performance Lifestyle",
    price: 1199,
    original: 1999,
    rating: 4.5,
    badge: "PREMIUM",
    badgeClass: "premium",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
    desc: "Premium alloy wheel accent kit that adds a sharp, performance-inspired finish to your wheels.",
    highlights: ["Precision-machined alloy", "Universal fit accents", "Corrosion resistant", "Easy snap install"],
    link: "https://www.amazon.in/s?k=alloy+wheel+accent+badge+kit+car"
  },
  {
    id: 23,
    name: "Carbon Aero Diffuser Trim",
    category: "Performance Lifestyle",
    price: 1599,
    original: 2599,
    rating: 4.6,
    badge: "TRENDING",
    badgeClass: "trending",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=70",
    desc: "Carbon-look rear diffuser trim that gives your car an aggressive, track-inspired stance.",
    highlights: ["Carbon-look ABS finish", "Aerodynamic profile", "UV-stable coating", "Secure 3M adhesive"],
    link: "https://www.amazon.in/s?k=car+carbon+diffuser+rear+bottom+trim"
  },
  {
    id: 24,
    name: "Performance Shift Knob",
    category: "Performance Lifestyle",
    price: 899,
    original: 1499,
    rating: 4.4,
    badge: "NEW",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=70",
    desc: "Weighted aluminium performance shift knob for a precise, tactile gear change feel.",
    highlights: ["Weighted aluminium build", "Universal adapter fit", "Anti-sweat grip", "Sporty threaded design"],
    link: "https://www.amazon.in/s?k=performance+shift+knob+car+aluminium"
  }
];

/* ---------- Helper: compute discount % ---------- */
const discountPct = (p) => Math.round(((p.original - p.price) / p.original) * 100);

/* ---------- Helper: format INR ---------- */
const inr = (n) => "₹" + n.toLocaleString("en-IN");

/* =========================================================
   STATE
   ========================================================= */
const state = {
  filter: "All",
  query: "",
  sort: "featured",
  wishlist: []
};

/* =========================================================
   LOCALSTORAGE
   ========================================================= */
const LS_KEY = "autoaura_wishlist_v1";
function loadWishlist() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    state.wishlist = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(state.wishlist)) state.wishlist = [];
  } catch (e) {
    state.wishlist = [];
  }
}
function saveWishlist() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state.wishlist));
  } catch (e) { /* ignore quota errors */ }
}

/* =========================================================
   TOASTS
   ========================================================= */
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  const icon = type === "success" ? "✓" : "✕";
  toast.innerHTML = `<span class="t-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3100);
}

/* =========================================================
   IMAGE FALLBACK
   ========================================================= */
function applyImageFallback(img) {
  img.addEventListener("error", function handleError() {
    if (this.dataset.fallbackApplied) return;
    this.dataset.fallbackApplied = "1";
    this.src = FALLBACK_IMG;
  });
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */
function productCardHTML(p, index) {
  const isWish = state.wishlist.includes(p.id);
  const discount = discountPct(p);
  return `
    <article class="product-card" data-id="${p.id}" style="animation-delay:${Math.min(index * 40, 400)}ms">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        <button class="wishlist-btn ${isWish ? "active" : ""}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist" aria-pressed="${isWish}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.5-9.2-9C1.3 8 2.5 4.5 6 4.5c2 0 3.3 1.2 4 2.2C10.7 5.7 12 4.5 14 4.5c3.5 0 4.7 3.5 3.2 6.5C19 15.5 12 20 12 20z"/></svg>
        </button>
        <span class="discount-tag">SAVE ${discount}%</span>
      </div>
      <div class="product-body">
        <span class="product-cat">AUTOAURA ${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))}</span>
          <span class="rating-num">${p.rating.toFixed(1)}</span>
        </div>
        <div class="product-price-row">
          <span class="price-now">${inr(p.price)}</span>
          <span class="price-old">${inr(p.original)}</span>
        </div>
        <button class="view-btn" data-view="${p.id}">VIEW PRODUCT ↗</button>
      </div>
    </article>`;
}

/* =========================================================
   FILTER + SORT + SEARCH
   ========================================================= */
function getVisibleProducts() {
  let list = PRODUCTS.slice();

  if (state.filter !== "All") {
    list = list.filter((p) => p.category === state.filter);
  }

  if (state.query.trim()) {
    const q = state.query.trim().toLowerCase();
    list = list.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price); break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price); break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating); break;
    case "new":
      list.sort((a, b) => (b.badge === "NEW") - (a.badge === "NEW") || b.id - a.id); break;
    default:
      list.sort((a, b) => a.id - b.id);
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const list = getVisibleProducts();
  grid.innerHTML = list.map(productCardHTML).join("");

  grid.querySelectorAll("img").forEach(applyImageFallback);

  if (countEl) {
    countEl.innerHTML = `<strong>${list.length}</strong> product${list.length === 1 ? "" : "s"} found`;
  }
  if (noResults) noResults.hidden = list.length !== 0;
  grid.style.display = list.length === 0 ? "none" : "";

  // Re-bind wishlist + view buttons inside grid
  bindCardButtons(grid);
  syncWishlistButtons();
}

function renderDetailing() {
  const grid = document.getElementById("detailingGrid");
  if (!grid) return;
  const detailingProducts = PRODUCTS.filter((p) =>
    ["Detailing", "Car Care"].includes(p.category)
  );
  grid.innerHTML = detailingProducts.map(productCardHTML).join("");
  grid.querySelectorAll("img").forEach(applyImageFallback);
  bindCardButtons(grid);
  syncWishlistButtons();
}

function renderDeals() {
  const grid = document.getElementById("dealsGrid");
  if (!grid) return;
  // Pick the products with the highest discount %
  const deals = PRODUCTS.slice()
    .sort((a, b) => discountPct(b) - discountPct(a))
    .slice(0, 6);
  grid.innerHTML = deals.map((p) => `
    <article class="deal-card">
      <div class="deal-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="deal-body">
        <span class="deal-save">SAVE ${discountPct(p)}%</span>
        <h3>${p.name}</h3>
        <div class="deal-price">
          <span class="price-now">${inr(p.price)}</span>
          <span class="price-old">${inr(p.original)}</span>
        </div>
        <a class="btn btn-primary deal-btn" href="${p.link}" target="_blank" rel="noopener noreferrer">SHOP NOW ↗</a>
      </div>
    </article>`).join("");
  grid.querySelectorAll("img").forEach(applyImageFallback);
}

/* =========================================================
   WISHLIST
   ========================================================= */
function isWishlisted(id) { return state.wishlist.includes(id); }

function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  const product = PRODUCTS.find((p) => p.id === id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast(`${product ? product.name : "Product"} added to wishlist`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast("Removed from wishlist", "info");
  }
  saveWishlist();
  syncWishlistButtons();
  renderWishlistDrawer();
}

function syncWishlistButtons() {
  document.querySelectorAll("[data-wish]").forEach((btn) => {
    const id = parseInt(btn.dataset.wish, 10);
    const active = isWishlisted(id);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  const countEl = document.getElementById("wishlistCount");
  if (countEl) {
    countEl.textContent = state.wishlist.length;
    countEl.classList.toggle("show", state.wishlist.length > 0);
  }
  const drawerCount = document.getElementById("drawerWishCount");
  if (drawerCount) drawerCount.textContent = `(${state.wishlist.length})`;
}

function renderWishlistDrawer() {
  const itemsEl = document.getElementById("wishlistItems");
  const emptyEl = document.getElementById("wishlistEmpty");
  if (!itemsEl || !emptyEl) return;

  if (state.wishlist.length === 0) {
    itemsEl.innerHTML = "";
    emptyEl.style.display = "flex";
    return;
  }
  emptyEl.style.display = "none";

  itemsEl.innerHTML = state.wishlist.map((id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return "";
    return `
      <div class="wl-item">
        <div class="wl-thumb"><img src="${p.image}" alt="${p.name}" /></div>
        <div class="wl-info">
          <div class="wl-name">${p.name}</div>
          <div class="wl-price">${inr(p.price)}</div>
          <div class="wl-actions">
            <a class="wl-buy" href="${p.link}" target="_blank" rel="noopener noreferrer">BUY ↗</a>
            <button class="wl-remove" data-wish-remove="${p.id}">Remove</button>
          </div>
        </div>
      </div>`;
  }).join("");

  itemsEl.querySelectorAll("img").forEach(applyImageFallback);
  itemsEl.querySelectorAll("[data-wish-remove]").forEach((btn) => {
    btn.addEventListener("click", () => toggleWishlist(parseInt(btn.dataset.wishRemove, 10)));
  });
}

/* =========================================================
   PRODUCT MODAL
   ========================================================= */
let lastFocused = null;
function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  lastFocused = document.activeElement;
  const body = document.getElementById("modalBody");
  const discount = discountPct(p);
  body.innerHTML = `
    <div class="modal-media">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal-info">
      <span class="modal-cat">AUTOAURA ${p.category}</span>
      <h2 class="modal-title">${p.name}</h2>
      <div class="modal-rating">
        <span class="stars">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))}</span>
        <span class="rating-num">${p.rating.toFixed(1)} · Verified rating</span>
      </div>
      <div class="modal-price-row">
        <span class="price-now">${inr(p.price)}</span>
        <span class="price-old">${inr(p.original)}</span>
        <span class="modal-discount">SAVE ${discount}%</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <ul class="modal-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <a class="btn btn-primary modal-buy" href="${p.link}" target="_blank" rel="noopener noreferrer">BUY NOW ↗</a>
      <p class="modal-retailer-note">You'll be redirected to our retail partner to complete your purchase.</p>
    </div>`;
  body.querySelectorAll("img").forEach(applyImageFallback);
  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
  const closeBtn = document.getElementById("modalClose");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

/* =========================================================
   EVENT BINDING
   ========================================================= */
function bindCardButtons(scope) {
  scope.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(parseInt(btn.dataset.view, 10)));
  });
  scope.querySelectorAll("[data-wish]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.wish, 10);
      toggleWishlist(id);
      if (isWishlisted(id)) {
        btn.classList.add("pop");
        setTimeout(() => btn.classList.remove("pop"), 450);
      }
    });
  });
}

/* =========================================================
   SEARCH + FILTERS + SORT
   ========================================================= */
function initShopControls() {
  const chips = document.getElementById("filterChips");
  if (chips) {
    chips.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      chips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.filter = chip.dataset.filter;
      renderProducts();
    });
  }

  const inlineSearch = document.getElementById("inlineSearch");
  if (inlineSearch) {
    inlineSearch.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  const clearFilters = document.getElementById("clearFilters");
  const noResultsReset = document.getElementById("noResultsReset");
  const doClear = () => {
    state.filter = "All";
    state.query = "";
    state.sort = "featured";
    if (inlineSearch) inlineSearch.value = "";
    if (sortSelect) sortSelect.value = "featured";
    if (chips) chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.filter === "All"));
    renderProducts();
  };
  if (clearFilters) clearFilters.addEventListener("click", doClear);
  if (noResultsReset) noResultsReset.addEventListener("click", doClear);
}

/* =========================================================
   NAVBAR
   ========================================================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active link highlight via IntersectionObserver
  const sections = ["home", "shop", "interior", "detailing"].map((id) => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const navMap = {};
    navLinks && navLinks.querySelectorAll(".nav-link").forEach((l) => { navMap[l.getAttribute("href")] = l; });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const href = "#" + entry.target.id;
          navLinks && navLinks.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
          if (navMap[href]) navMap[href].classList.add("active");
        }
      });
    }, { threshold: 0.35 });
    sections.forEach((s) => obs.observe(s));
  }

  // Search overlay
  const searchToggle = document.getElementById("searchToggle");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");
  const openSearch = () => {
    if (!searchOverlay) return;
    searchOverlay.classList.add("open");
    if (searchInput) searchInput.focus();
    // sync with inline shop search
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }), 50);
  };
  const closeSearch = () => searchOverlay && searchOverlay.classList.remove("open");
  if (searchToggle) searchToggle.addEventListener("click", openSearch);
  if (searchClose) searchClose.addEventListener("click", closeSearch);
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      const inline = document.getElementById("inlineSearch");
      if (inline) inline.value = e.target.value;
      renderProducts();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter") {
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/* =========================================================
   WISHLIST DRAWER
   ========================================================= */
function initWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const toggle = document.getElementById("wishlistToggle");
  const cartToggle = document.getElementById("cartToggle");
  const close = document.getElementById("drawerClose");

  const open = () => {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderWishlistDrawer();
  };
  const shut = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (!document.getElementById("productModal").classList.contains("open")) {
      document.body.style.overflow = "";
    }
  };

  if (toggle) toggle.addEventListener("click", open);
  if (cartToggle) cartToggle.addEventListener("click", open); // cart icon opens wishlist drawer
  if (close) close.addEventListener("click", shut);
  if (backdrop) backdrop.addEventListener("click", shut);
}

/* =========================================================
   MODAL EVENTS
   ========================================================= */
function initModal() {
  const closeBtn = document.getElementById("modalClose");
  const backdrop = document.getElementById("modalBackdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      const searchOverlay = document.getElementById("searchOverlay");
      if (searchOverlay) searchOverlay.classList.remove("open");
    }
  });
}

/* =========================================================
   CATEGORY CARDS -> FILTER
   ========================================================= */
function initCategories() {
  document.querySelectorAll(".cat-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      setFilter(cat);
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Footer + showcase category jumps
  document.querySelectorAll("[data-jump-category]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const cat = el.dataset.jumpCategory;
      // If linking to an anchor, still apply filter
      setFilter(cat);
    });
  });
}

function setFilter(cat) {
  state.filter = cat;
  const chips = document.getElementById("filterChips");
  if (chips) {
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.filter === cat));
  }
  renderProducts();
}

/* =========================================================
   NEWSLETTER
   ========================================================= */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const email = document.getElementById("newsletterEmail");
  const msg = document.getElementById("newsletterMsg");
  if (!form || !email || !msg) return;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = email.value.trim();
    msg.className = "newsletter-msg";
    if (!val || !emailRe.test(val)) {
      email.classList.add("invalid");
      msg.textContent = "Please enter a valid email address.";
      msg.classList.add("error");
      email.focus();
      return;
    }
    email.classList.remove("invalid");
    msg.textContent = "You're in! Welcome to the AutoAura drive. 🏁";
    msg.classList.add("success");
    email.value = "";
    showToast("Subscribed to AutoAura newsletter");
  });

  email.addEventListener("input", () => {
    if (email.classList.contains("invalid")) {
      email.classList.remove("invalid");
      msg.className = "newsletter-msg";
    }
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => obs.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  loadWishlist();
  renderProducts();
  renderDetailing();
  renderDeals();
  syncWishlistButtons();
  renderWishlistDrawer();

  initShopControls();
  initNavbar();
  initWishlistDrawer();
  initModal();
  initCategories();
  initNewsletter();
  initScrollReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}