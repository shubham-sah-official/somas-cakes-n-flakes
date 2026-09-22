const PRODUCTS = [
  { id: "truffle", name: "Chocolate Truffle Cake", price: 899, rating: 5, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", alt: "Glossy chocolate truffle cake" },
  { id: "velvet", name: "Red Velvet Cake", price: 949, rating: 5, img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80", alt: "Red velvet cake with cream cheese frosting" },
  { id: "forest", name: "Black Forest Cake", price: 799, rating: 4, img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80", alt: "Black forest cake with cherries" },
  { id: "berry", name: "Strawberry Cake", price: 849, rating: 5, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80", alt: "Strawberry cream cake" },
  { id: "donuts", name: "Premium Donuts Box", price: 399, rating: 5, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80", alt: "Colorful glazed donuts" },
  { id: "cookies", name: "Butter Cookies", price: 249, rating: 4, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80", alt: "Stack of butter cookies" },
  { id: "bread", name: "Fresh Bread Loaf", price: 129, rating: 5, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", alt: "Fresh artisan bread" }
];

const CAKES = [
  { cat: "birthday", title: "Rainbow Birthday Bloom", img: "https://images.unsplash.com/photo-1558636508-e0db3819bd3d?auto=format&fit=crop&w=700&q=80" },
  { cat: "birthday", title: "Pastel Party Layers", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80" },
  { cat: "wedding", title: "Ivory Wedding Tower", img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=700&q=80" },
  { cat: "wedding", title: "Floral White Romance", img: "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&w=700&q=80" },
  { cat: "anniversary", title: "Gold Leaf Anniversary", img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=700&q=80" },
  { cat: "anniversary", title: "Rose Cream Duo", img: "https://images.unsplash.com/photo-1621303837174-89787a7d2398?auto=format&fit=crop&w=700&q=80" },
  { cat: "designer", title: "Drip Designer Dream", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80" },
  { cat: "designer", title: "Macaron Crown Cake", img: "https://images.unsplash.com/photo-1569864358642-9d4483892c6f?auto=format&fit=crop&w=700&q=80" },
  { cat: "theme", title: "Unicorn Theme Cake", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=80" },
  { cat: "theme", title: "Garden Fairy Cake", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80" }
];

const TREATS = [
  { title: "Cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80" },
  { title: "Donuts", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80" },
  { title: "Breads", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80" },
  { title: "Pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80" },
  { title: "Gifts", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80" }
];

const IG = [
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
];

const REVIEWS = [
  { name: "Ananya R.", text: "Soma baked our wedding cake and guests still talk about it. Soft, elegant, unforgettable.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", stars: 5 },
  { name: "Rahul K.", text: "Best donuts in Kishanganj. The bakery feels like walking into a candy cloud.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", stars: 5 },
  { name: "Meera S.", text: "Custom unicorn cake for my daughter — Soma listened to every tiny detail. Pure magic.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", stars: 5 },
  { name: "Imran A.", text: "Butter cookies and fresh bread are our Sunday ritual. Warm, premium, always fresh.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", stars: 4 }
];

const WHATSAPP = "919876543210";
const ORDER_EMAIL = "hello@somascakesandflakes.com";

const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;
const stars = (n) => "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n);

const productGrid = document.getElementById("productGrid");
productGrid.innerHTML = PRODUCTS.map((p) => `
  <article class="product-card reveal">
    <img src="${p.img}" alt="${p.alt}" width="400" height="280" loading="lazy">
    <div class="body">
      <h3>${p.name}</h3>
      <p class="stars" aria-label="${p.rating} stars">${stars(p.rating)}</p>
      <p class="price">${rupee(p.price)}</p>
      <button class="add-cart" type="button" data-id="${p.id}">Add to Cart</button>
    </div>
  </article>
`).join("");

const cakeGallery = document.getElementById("cakeGallery");
cakeGallery.innerHTML = CAKES.map((c) => `
  <figure class="gallery-item is-shown" data-cat="${c.cat}">
    <img src="${c.img}" alt="${c.title}" loading="lazy">
    <figcaption>${c.title}</figcaption>
  </figure>
`).join("");

document.getElementById("treatGallery").innerHTML = TREATS.map((t) => `
  <figure class="treat-card reveal">
    <img src="${t.img}" alt="${t.title}" loading="lazy">
    <span>${t.title}</span>
  </figure>
`).join("");

document.getElementById("igGrid").innerHTML = IG.map((src, i) => `
  <figure class="ig-card reveal">
    <img src="${src}" alt="Bakery Instagram photo ${i + 1}" loading="lazy">
    <span>Fresh bake</span>
  </figure>
`).join("");

const select = document.getElementById("orderProduct");
select.innerHTML = PRODUCTS.map((p) => `<option value="${p.id}">${p.name} — ${rupee(p.price)}</option>`).join("");

const dateInput = document.getElementById("orderDate");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().slice(0, 10);

let cart = JSON.parse(localStorage.getItem("soma-cart") || "[]");

function saveCart() {
  localStorage.setItem("soma-cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCount").textContent = count;
  const list = document.getElementById("cartItems");
  const empty = document.getElementById("cartEmpty");
  list.innerHTML = cart.map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return `<li><span>${p.name} × ${i.qty}</span><strong>${rupee(p.price * i.qty)}</strong></li>`;
  }).join("");
  empty.hidden = cart.length > 0;
  const total = cart.reduce((s, i) => s + PRODUCTS.find((x) => x.id === i.id).price * i.qty, 0);
  document.getElementById("cartTotal").textContent = rupee(total);
  updateOrderTotal();
}

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
}

document.body.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-cart");
  if (btn) addToCart(btn.dataset.id);
});

document.getElementById("cartBtn").addEventListener("click", () => {
  document.getElementById("cartDrawer").classList.add("is-open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
});
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartDrawer").addEventListener("click", (e) => {
  if (e.target.id === "cartDrawer") closeCart();
});
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("is-open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}
document.getElementById("checkoutLink").addEventListener("click", closeCart);

function productById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
function updateOrderTotal() {
  const p = productById(select.value);
  const qty = Number(document.getElementById("orderQty").value) || 1;
  document.getElementById("orderTotal").textContent = rupee(p.price * qty);
}
select.addEventListener("change", updateOrderTotal);
document.getElementById("orderQty").addEventListener("input", updateOrderTotal);
document.querySelectorAll("[data-qty]").forEach((b) => {
  b.addEventListener("click", () => {
    const input = document.getElementById("orderQty");
    const next = Math.min(50, Math.max(1, Number(input.value) + Number(b.dataset.qty)));
    input.value = next;
    updateOrderTotal();
  });
});

function formatOrder(form) {
  const data = Object.fromEntries(new FormData(form));
  const p = productById(data.product);
  return [
    "🧁 *New Order — Soma's Cakes & Flakes*",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Product: ${p.name}`,
    `Quantity: ${data.qty}`,
    `Delivery date: ${data.date}`,
    `Estimated total: ${rupee(p.price * Number(data.qty))}`,
    data.notes ? `Notes: ${data.notes}` : "",
    "",
    "Kishanganj, Bihar"
  ].filter(Boolean).join("\n");
}

let orderChannel = "whatsapp";
document.querySelectorAll("#orderForm [data-channel]").forEach((btn) => {
  btn.addEventListener("click", () => { orderChannel = btn.dataset.channel; });
});
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = formatOrder(e.target);
  if (orderChannel === "email") {
    const data = Object.fromEntries(new FormData(e.target));
    const href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent("Order from " + data.name)}&body=${encodeURIComponent(message.replace(/\*/g, ""))}`;
    window.location.href = href;
  } else {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const body = `Name: ${data.name}\nPhone: ${data.phone || "—"}\nEmail: ${data.email}\n\n${data.message}`;
  document.getElementById("contactNote").hidden = false;
  window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent("Message from " + data.name)}&body=${encodeURIComponent(body)}`;
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      const show = f === "all" || item.dataset.cat === f;
      item.classList.toggle("is-shown", show);
    });
  });
});

const lightbox = document.getElementById("lightbox");
function openLightbox(src, caption) {
  document.getElementById("lbImage").src = src;
  document.getElementById("lbImage").alt = caption || "";
  document.getElementById("lbCaption").textContent = caption || "";
  lightbox.hidden = false;
}
function closeLightbox() { lightbox.hidden = true; }
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
document.querySelectorAll("#cakeGallery, #treatGallery, #igGrid").forEach((root) => {
  root.addEventListener("click", (e) => {
    const img = e.target.closest("figure")?.querySelector("img");
    if (!img) return;
    openLightbox(img.src, e.target.closest("figure").querySelector("figcaption, span")?.textContent);
  });
});

const track = document.getElementById("carouselTrack");
const dots = document.getElementById("carouselDots");
track.innerHTML = REVIEWS.map((r, i) => `
  <article class="testimonial${i === 0 ? " is-active" : ""}">
    <img src="${r.img}" alt="Photo of ${r.name}" width="84" height="84">
    <p class="stars">${stars(r.stars)}</p>
    <p>“${r.text}”</p>
    <strong>${r.name}</strong>
  </article>
`).join("");
dots.innerHTML = REVIEWS.map((_, i) => `<button type="button" aria-label="Go to review ${i + 1}" ${i === 0 ? 'class="is-active"' : ""}></button>`).join("");
let slide = 0;
function go(n) {
  const cards = [...track.children];
  slide = (n + cards.length) % cards.length;
  cards.forEach((c, i) => c.classList.toggle("is-active", i === slide));
  [...dots.children].forEach((d, i) => d.classList.toggle("is-active", i === slide));
}
document.getElementById("prevTestimonial").addEventListener("click", () => go(slide - 1));
document.getElementById("nextTestimonial").addEventListener("click", () => go(slide + 1));
dots.addEventListener("click", (e) => {
  const i = [...dots.children].indexOf(e.target);
  if (i >= 0) go(i);
});
setInterval(() => go(slide + 1), 6500);

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-inview");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "80px 0px -8px 0px" });
document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom").forEach((el) => io.observe(el));

const statIo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = target >= 100 ? `${val}+` : String(val);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    statIo.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach((el) => statIo.observe(el));

const nav = document.querySelector(".nav");
const toggle = document.getElementById("navToggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));

const header = document.querySelector(".site-header");
function syncHeaderOffset() {
  const extra = 12;
  const h = (header?.offsetHeight || 96) + extra;
  document.documentElement.style.setProperty("--header-offset", `${h}px`);
  return h;
}
syncHeaderOffset();
window.addEventListener("resize", syncHeaderOffset);

function revealSection(el) {
  el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom").forEach((n) => {
    n.classList.add("is-inview");
  });
}

function scrollToSection(el, behavior = "smooth") {
  if (!el) return;
  syncHeaderOffset();
  revealSection(el);
  const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-offset")) || header.offsetHeight + 12;
  const y = Math.max(0, Math.round(window.scrollY + el.getBoundingClientRect().top - offset));
  window.scrollTo({ top: y, behavior });
}

function goToHash(hash, behavior = "smooth") {
  const id = (hash || "").replace("#", "");
  if (!id || id === "top" || id === "main") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  scrollToSection(document.getElementById(id), behavior);
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    const run = () => {
      goToHash(href);
      history.pushState(null, "", href === "#top" ? location.pathname : href);
    };
    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      setTimeout(run, 50);
    } else {
      requestAnimationFrame(run);
    }
  });
});

window.addEventListener("load", () => {
  syncHeaderOffset();
  if (location.hash) goToHash(location.hash, "auto");
});

const navLinks = [...document.querySelectorAll(".nav-menu a[href^='#']")];
const watched = navLinks
  .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
  .filter(Boolean);

const spy = new IntersectionObserver((entries) => {
  const onScreen = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!onScreen) return;
  navLinks.forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${onScreen.target.id}`);
  });
}, {
  rootMargin: "-22% 0px -58% 0px",
  threshold: [0.12, 0.28, 0.5, 0.75]
});
watched.forEach((section) => spy.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

function spawnSprinkle() {
  const el = document.createElement("span");
  el.className = "sprinkle";
  el.style.left = `${Math.random() * 100}%`;
  el.style.background = ["#ff8cd8", "#ffd166", "#ff9f1c", "#7ad7ff", "#c9a8ff", "#b8f26e", "#fff"][Math.floor(Math.random() * 7)];
  el.style.animationDuration = `${4 + Math.random() * 5}s`;
  el.style.transform = `rotate(${Math.random() * 180}deg)`;
  document.getElementById("sprinkleLayer").appendChild(el);
  el.addEventListener("animationend", () => el.remove());
}
function spawnBubble() {
  const el = document.createElement("span");
  el.className = "bubble";
  const size = 10 + Math.random() * 22;
  el.style.width = el.style.height = `${size}px`;
  el.style.left = `${Math.random() * 100}%`;
  el.style.animationDuration = `${8 + Math.random() * 10}s`;
  document.getElementById("bubbleLayer").appendChild(el);
  el.addEventListener("animationend", () => el.remove());
}
const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (motionOk) {
  setInterval(spawnSprinkle, 380);
  setInterval(spawnBubble, 1200);
}

renderCart();
updateOrderTotal();
