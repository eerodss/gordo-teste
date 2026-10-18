const WA_URL = 'https://wa.me/5544999187735';

// Ativa o preset de fotos (bloco salvo em index.html dentro de <template id="preset-fotos">)
const MOSTRAR_FOTOS = true;

const CAT_LABEL = {salgadas:'Salgadas', especiais:'Especiais', doces:'Doces', docesesp:'Doces especiais'};

const DATA = {
  salgadas: {
    prices: [["Esfiha","R$ 13,00"],["Pizza","R$ 94,00"],["Pizza de Metro","R$ 179,00"]],
    items: [
      ["Atum","Molho, muçarela, atum, cebola e orégano"],
      ["Bacon","Molho, muçarela, bacon e orégano"],
      ["Baiana","Molho, muçarela, calabresa moída, pimenta calabresa, cebola e orégano"],
      ["Brócolis c/ Requeijão","Molho, muçarela, creme de leite, brócolis, requeijão e orégano"],
      ["Calabresa","Molho, muçarela, calabresa fatiada, cebola e orégano",true],
      ["Carne","Carne moída temperada e tomate (sabor exclusivo p/ esfiha)"],
      ["Escarola c/ Bacon","Molho, muçarela, escarola refogada ao alho, bacon, muçarela e orégano"],
      ["Catfrango","Molho, muçarela, requeijão, frango desfiado cremoso e batata palha",true],
      ["Catupyresa","Molho, muçarela, calabresa fatiada e requeijão"],
      ["Cinco Queijos","Molho, muçarela, parmesão, provolone, queijo prato, cheddar e orégano",true],
      ["Lombo Canadense","Molho, muçarela, lombo canadense, requeijão e orégano"],
      ["Lombo c/ Abacaxi","Molho, muçarela, lombo e abacaxi"],
      ["Margherita","Molho, muçarela, tomate cereja fresco, manjericão seco e fresco"],
      ["Milho","Molho, muçarela, milho e orégano"],
      ["MilhiBacon","Molho, muçarela, milho, bacon e orégano",true],
      ["Moda da Casa","Molho, muçarela, frango desfiado cremoso, bacon, milho, palmito, requeijão, azeitona, ovos e orégano"],
      ["Palmito Cremoso","Molho, muçarela, requeijão, palmito cremoso e gergelim preto",true],
      ["Molinella","Molho, muçarela, peito de peru, bacon, palmito, cream cheese e orégano"],
      ["Pepperoni","Molho, muçarela, salame pepperoni e orégano"],
      ["Quatro Queijos","Molho, muçarela, parmesão, provolone, queijo prato e orégano"],
      ["Rúcula c/ Tomate Seco","Molho, muçarela, rúcula, tomate seco e orégano"],
      ["Strogonoff de Frango","Molho, muçarela, strogonoff de frango e batata palha"],
      ["Toscana","Molho, muçarela, calabresa, bacon, ovos, cebola e orégano"]
    ]
  },
  especiais: {
    prices: [["Esfiha","R$ 15,00"],["Pizza","R$ 107,00"],["Pizza de Metro","R$ 194,00"]],
    items: [
      ["Barbecue de Carne","Molho, muçarela, filé em cubos, tomate, cebola picada, molho barbecue e orégano",true],
      ["Camarão","Molho, muçarela, camarão ao creme de leite, cheiro verde e orégano"],
      ["Chicken Cheese","Molho, muçarela, frango cremoso, bacon, cream cheese e orégano",true],
      ["Costela Bovina","Molho, muçarela, costela bovina desfiada, requeijão, cebola roxa e orégano"],
      ["Filé do Chef","Molho, muçarela, filé em cubos, cebola picada, bacon, requeijão e orégano"],
      ["Frango c/ Alho Poró","Molho, muçarela, frango em cubos, alho poró, manjericão seco e orégano"],
      ["Gorgonzola c/ Mel","Creme de leite, muçarela, gorgonzola, gergelim branco e mel"],
      ["Parmegiana","Molho, muçarela, filé em cubos ao molho de tomate, presunto e orégano"],
      ["Strogonoff de Carne","Molho, muçarela, strogonoff de carne e batata palha",true]
    ]
  },
  doces: {
    prices: [["Esfiha","R$ 13,00"],["Pizza","R$ 94,00"],["Pizza de Metro","R$ 179,00"]],
    items: [
      ["Banana Nevada","Creme de leite, muçarela, banana, doce de leite, canela e chocolate branco"],
      ["Brigadeiro","Creme de leite, chocolate ao leite, granulado e leite condensado"],
      ["Charge","Creme de leite, chocolate ao leite, castanha de caju e leite condensado"],
      ["Chocolate","Creme de leite, chocolate ao leite e leite condensado"],
      ["Confeti","Creme de leite, chocolate ao leite, confeti e leite condensado"],
      ["Marnata","Creme de leite, chocolate ao leite, morango e leite condensado",true],
      ["Ouro Negro","Creme de leite, chocolate, gotas de chocolate branco e leite condensado"],
      ["Romeu e Julieta","Creme de leite, muçarela e goiabada"],
      ["Tropical","Creme de leite, muçarela, lascas de abacaxi e leite condensado"]
    ]
  },
  docesesp: {
    prices: [["Esfiha","R$ 15,00"],["Pizza","R$ 107,00"],["Pizza de Metro","R$ 194,00"]],
    items: [
      ["Bombom com Nutella","Creme de leite, nutella e bombom ouro branco em pedaços",true],
      ["Morango com Nutella","Creme de leite, nutella e morango"],
      ["Ninho com Nutella","Creme de leite, nutella e leite em pó"]
    ]
  }
};

const BORDAS = [
  {title:"Pizza", rows:[["Catupiry / Cheddar / Mista salgada","R$ 17,00"],["Chocolate ao leite / branco / mista doce","R$ 20,00"]]},
  {title:"Pizza de Metro", rows:[["Catupiry / Cheddar / Mista salgada","R$ 23,00"],["Chocolate ao leite / branco / mista doce","R$ 26,00"]]}
];

const DRINKS = [
  ["Água mineral","500 ml, com ou sem gás","R$ 6,00"],
  ["Coca-Cola lata","220 ml, normal e zero","R$ 5,00"],
  ["Coca-Cola KS","290 ml, normal e zero","R$ 8,00"],
  ["Coca-Cola","600 ml, normal e zero","R$ 11,00"],
  ["Coca-Cola","1 litro, normal e zero","R$ 15,00"],
  ["Guaraná Gold Scrin","1 litro","R$ 11,00"],
  ["H2O Limoneto","500 ml","R$ 9,00"],
  ["Refrigerante lata","350 ml, Coca, Guaraná, Tônica, Sprite, Fanta Citrus","R$ 7,50"],
  ["Suco Prats laranja","300 ml","R$ 9,50"],
  ["Suco Prats laranja","900 ml","R$ 21,00"],
  ["Suco natural de laranja","300 ml viagem R$12 · 500 ml viagem R$16 · copo 350 ml R$10,50 · jarra 1,5L R$39","a partir de R$ 10,50"],
  ["Suco de polpa (água ou leite)","copo 350 ml ou jarra 1,5L · sabores: abacaxi c/ hortelã, abacaxi, maracujá, acerola, morango, laranja c/ acerola, laranja c/ morango","a partir de R$ 9,00"]
];

// Top 10: edite nomes e ordem conforme o cardápio físico (nome exatamente como em DATA)
const TOP10 = ["Calabresa","Catfrango","Cinco Queijos","MilhiBacon","Palmito Cremoso","Barbecue de Carne","Chicken Cheese","Strogonoff de Carne","Marnata","Bombom com Nutella"];

const COMBOS = [
  ["8 Esfihas","Até 4 sabores tradicionais","R$ 92,00"],
  ["12 Esfihas","Até 4 sabores tradicionais","R$ 126,00"],
  ["20 Esfihas","Até 4 sabores tradicionais","R$ 170,00"]
];

function renderPrices(prices){
  return '<div class="group-price-row">' + prices.map(p =>
    `<div class="price-chip">${p[0]}<b>A partir de ${p[1]}</b></div>`
  ).join('') + '</div>';
}

// Formato de cada sabor: [nome, descrição, (não usado), foto, preço]
// foto: caminho da imagem ou "" (sem foto)
// preço: "R$ 00,00" do sabor, que varia conforme os ingredientes; sem preço, a linha não aparece
function waLink(msg){
  return `${WA_URL}?text=${encodeURIComponent(msg)}`;
}

function renderItems(items, catLabel){
  return '<div class="item-grid">' + items.map(it => `
    <article class="item-card">
      <div class="item-photo">
        ${it[3] ? `<img src="${it[3]}" alt="${it[0]}" loading="lazy">` : '<i class="ti ti-photo"></i>'}
        ${TOP10.includes(it[0]) ? '<span class="tag">Top 10</span>' : ''}
      </div>
      <div class="item-body">
        <h4>${it[0]}</h4>
        <p>${it[1]}</p>
        ${it[4] ? `<p class="price">Pizza a partir de ${it[4]}</p>` : ''}
        <div class="item-actions">
          <button type="button" class="add-btn" data-add="${esc(it[0])}" data-cat="${esc(catLabel || '')}" aria-label="Adicionar ${esc(it[0])} ao carrinho"><svg class="ico"><use href="#i-plus"/></svg></button>
          <a class="item-buy" href="${waLink(`Olá! Quero pedir a pizza de ${it[0]}.`)}" target="_blank" rel="noopener">
            Pedir este sabor <svg class="ico"><use href="#i-arrow"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('') + '</div>';
}

function buildMenu(){
  const wrap = document.getElementById('menuContent');
  let html = '';
  for (const key in DATA) {
    const g = DATA[key];
    html += `<div class="menu-group" id="grp-${key}" data-cat="${key}" role="tabpanel">
      ${renderPrices(g.prices)}
      ${renderItems(g.items, CAT_LABEL[key])}
    </div>`;
  }
  html += `<div class="menu-group" id="grp-bordas" data-cat="bordas" role="tabpanel">
    <div class="borda-grid">
    ${BORDAS.map(b => `
      <div class="borda-table">
        <h4>${b.title}</h4>
        ${b.rows.map(r => `<div class="borda-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('')}
      </div>
    `).join('')}
    </div>
  </div>`;
  html += `<div class="menu-group" id="grp-bebidas" data-cat="bebidas" role="tabpanel">
    <div class="drinks-grid">
    ${DRINKS.map(d => `
      <div class="drink-row">
        <div>
          <div class="dn">${d[0]}</div>
          <div class="dv">${d[1]}</div>
        </div>
        <div class="dp">${d[2]}</div>
      </div>
    `).join('')}
    </div>
  </div>`;
  wrap.innerHTML = html;

  document.getElementById('combosWrap').innerHTML = COMBOS.map(c => `
    <div class="combo-card">
      <div class="cn">${c[0]}</div>
      <div class="cd">${c[1]}</div>
      <div class="cp">${c[2]}</div>
      <div class="item-actions">
        <button type="button" class="add-btn" data-add="${esc(c[0])}" data-cat="Combo" aria-label="Adicionar ${esc(c[0])} ao carrinho"><svg class="ico"><use href="#i-plus"/></svg></button>
        <a class="item-buy" href="${waLink(`Olá! Quero o combo de ${c[0]} (${c[1].toLowerCase()}).`)}" target="_blank" rel="noopener">
          Pedir este combo <svg class="ico"><use href="#i-arrow"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  document.getElementById('topWrap').innerHTML = TOP10.map((name, i) => {
    let it = null;
    for (const k in DATA) { const f = DATA[k].items.find(x => x[0] === name); if (f) { it = f; break; } }
    if (!it) return '';
    return `<div class="top-card reveal">
      <div class="top-num">${String(i + 1).padStart(2, '0')}</div>
      ${it[3] ? `<img class="top-img" src="${it[3]}" alt="${name}" loading="lazy">` : ''}
      <div class="top-body"><h4>${name}</h4><p>${it[1]}</p>${it[4] ? `<p class="tp">Pizza a partir de ${it[4]}</p>` : ''}</div>
    </div>`;
  }).join('');

  document.getElementById('grp-salgadas').classList.add('active');
}

function setupTabs(){
  const tabs = [...document.querySelectorAll('.cat-tab')];
  const select = (tab, focus) => {
    tabs.forEach(t => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('.menu-group').forEach(g => g.classList.toggle('active', g.id === 'grp-' + tab.dataset.cat));
    if (focus) tab.focus();
    tab.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next, true);
    });
  });
}

function setupOpenStatus(){
  const el = document.getElementById('openStatus');
  if (!el) return;
  const OPEN = 18 * 60, CLOSE = 23 * 60 + 30;
  const update = () => {
    // Horário de Cianorte (PR), fuso de Brasília
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/Sao_Paulo'}));
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const isOpenDay = day !== 1;
    let text, open = false;
    if (isOpenDay && mins >= OPEN && mins < CLOSE) {
      text = 'Aberto agora · fecha às 23h30'; open = true;
    } else if (isOpenDay && mins < OPEN) {
      text = 'Fechado · abre hoje às 18h';
    } else {
      const next = (day + 1) % 7;
      text = next === 1 ? 'Fechado · abre terça às 18h' : 'Fechado · abre amanhã às 18h';
    }
    el.innerHTML = `<span class="status-dot ${open ? 'on' : ''}"></span> ${text}`;
    el.hidden = false;
  };
  update();
  setInterval(update, 60 * 1000);
}

function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => obs.observe(el));
}

function setupHeaderScroll(){
  const header = document.querySelector('header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupCounters(){
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate);
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(el => obs.observe(el));
}

function norm(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function esc(s){ return s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function setupSearch(){
  const input = document.getElementById('menuSearch');
  const clear = document.getElementById('searchClear');
  const res = document.getElementById('searchResults');
  const menu = document.getElementById('menuContent');
  const CATS = {salgadas:'Salgadas', especiais:'Especiais', doces:'Doces', docesesp:'Doces especiais'};
  if (!input) return;

  const run = () => {
    const raw = input.value.trim();
    const q = norm(raw);
    clear.hidden = !q;
    if (!q) { res.hidden = true; res.innerHTML = ''; menu.hidden = false; return; }
    const terms = q.split(/\s+/);
    const match = text => { const t = norm(text); return terms.every(w => t.includes(w)); };
    let html = '', total = 0;
    for (const k in DATA) {
      const hits = DATA[k].items.filter(it => match(it[0] + ' ' + it[1]));
      if (hits.length) { total += hits.length; html += `<h5 class="res-title">${CATS[k]}</h5>` + renderItems(hits, CAT_LABEL[k]); }
    }
    const drinks = DRINKS.filter(d => match(d[0] + ' ' + d[1]));
    if (drinks.length) {
      total += drinks.length;
      html += '<h5 class="res-title">Bebidas</h5><div class="drinks-grid">' + drinks.map(d => `
        <div class="drink-row"><div><div class="dn">${d[0]}</div><div class="dv">${d[1]}</div></div><div class="dp">${d[2]}</div></div>`).join('') + '</div>';
    }
    menu.hidden = true; res.hidden = false;
    res.innerHTML = total
      ? `<p class="res-count">${total} ${total === 1 ? 'resultado' : 'resultados'} para “${esc(raw)}”</p>` + html
      : `<p class="res-empty">Nenhum resultado para “${esc(raw)}”.<br>Tente outro sabor ou ingrediente.</p>`;
  };

  input.addEventListener('input', run);
  clear.addEventListener('click', () => { input.value = ''; run(); input.focus(); });
  input.addEventListener('keydown', e => { if (e.key === 'Escape') { input.value = ''; run(); } });
  document.querySelectorAll('.cat-tab').forEach(t => t.addEventListener('click', () => { if (input.value) { input.value = ''; run(); } }));
}

function setupMore(){
  const ROWS = 3;
  const mq2 = window.matchMedia('(min-width:640px)'), mq3 = window.matchMedia('(min-width:980px)');
  const cols = () => mq3.matches ? 3 : mq2.matches ? 2 : 1;
  document.querySelectorAll('#menuContent .item-grid').forEach(grid => {
    const cards = [...grid.children];
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'more-btn';
    grid.after(btn);
    let open = false;
    const apply = () => {
      const limit = ROWS * cols();
      const need = cards.length > limit;
      cards.forEach((c, i) => { c.hidden = need && !open && i >= limit; });
      btn.hidden = !need;
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = open ? 'Ver menos <i class="ti ti-chevron-up"></i>' : `Ver mais sabores (${cards.length - limit}) <i class="ti ti-chevron-down"></i>`;
    };
    btn.addEventListener('click', () => {
      open = !open; apply();
      if (!open) document.querySelector('.menu-wrap').scrollIntoView({behavior:'smooth', block:'start'});
    });
    mq2.addEventListener('change', apply); mq3.addEventListener('change', apply);
    apply();
  });
}

function setupNav(){
  const links = document.querySelectorAll('.nav-links a');
  const secs = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach(s => obs.observe(s));
}

function setupPresetFotos(){
  if (!MOSTRAR_FOTOS) return;
  const tpl = document.getElementById('preset-fotos');
  const grid = document.getElementById('aboutGrid');
  if (!tpl || !grid) return;
  const fotos = tpl.content.cloneNode(true);
  const [aboutPhoto, gallery] = [fotos.querySelector('.photo-placeholder'), fotos.querySelector('.gallery-strip')];
  grid.classList.add('has-photo');
  grid.append(aboutPhoto);
  grid.after(gallery);
}

// Carrinho: guarda seleção em localStorage (só para este navegador)
const CART_KEY = 'gordo-carrinho';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { cart = {}; }

function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

function cartTotal(){
  return Object.values(cart).reduce((n, it) => n + it.qty, 0);
}

function cartMessage(){
  const lines = Object.values(cart).map(it => `- ${it.qty}x ${it.name}${it.cat ? ` (${it.cat})` : ''}`);
  return 'Olá! Quero pedir:\n' + lines.join('\n');
}

function renderCart(){
  const list = document.getElementById('cartList');
  const empty = document.getElementById('cartEmpty');
  const count = document.getElementById('cartCount');
  const send = document.getElementById('cartSend');
  const items = Object.entries(cart);
  const total = cartTotal();

  list.innerHTML = items.map(([key, it]) => `
    <li class="cart-item">
      <div class="cart-info">
        <span class="cart-name">${esc(it.name)}</span>
        ${it.cat ? `<span class="cart-cat">${esc(it.cat)}</span>` : ''}
      </div>
      <div class="cart-qty">
        <button type="button" data-dec="${esc(key)}" aria-label="Diminuir ${esc(it.name)}">−</button>
        <span>${it.qty}</span>
        <button type="button" data-inc="${esc(key)}" aria-label="Aumentar ${esc(it.name)}"><svg class="ico"><use href="#i-plus"/></svg></button>
      </div>
    </li>
  `).join('');

  empty.hidden = items.length > 0;
  count.textContent = total;
  count.hidden = total === 0;
  send.href = total ? waLink(cartMessage()) : WA_URL;
  document.getElementById('cartClear').hidden = !items.length;
}

function changeCart(key, name, cat, delta){
  const current = cart[key] ? cart[key].qty : 0;
  const qty = current + delta;
  if (qty <= 0) delete cart[key];
  else cart[key] = {name, cat, qty};
  saveCart();
  renderCart();
}

function setupCart(){
  const panel = document.getElementById('cart');
  const overlay = document.getElementById('cartOverlay');
  const open = () => {
    panel.classList.add('open'); overlay.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.getElementById('cartClose').focus();
  };
  const close = () => {
    panel.classList.remove('open'); overlay.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.getElementById('cartBtn').focus();
  };
  document.getElementById('cartBtn').addEventListener('click', open);
  document.getElementById('cartClose').addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });

  // Botão + nos cards (sabores e combos)
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      const name = add.dataset.add, cat = add.dataset.cat;
      changeCart(cat + '|' + name, name, cat, 1);
      add.classList.add('added');
      setTimeout(() => add.classList.remove('added'), 600);
      return;
    }
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    if (inc || dec) {
      const key = (inc || dec).dataset[inc ? 'inc' : 'dec'];
      const it = cart[key];
      if (it) changeCart(key, it.name, it.cat, inc ? 1 : -1);
    }
  });

  document.getElementById('cartClear').addEventListener('click', () => {
    cart = {}; saveCart(); renderCart();
  });

  renderCart();
}

buildMenu();
setupPresetFotos();
setupCart();
setupMore();
setupNav();
setupSearch();
setupTabs();
setupReveal();
setupHeaderScroll();
setupCounters();
setupOpenStatus();
