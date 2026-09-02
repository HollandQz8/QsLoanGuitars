const guitars = [
  {brand:'Fender', model:'American Professional II Stratocaster', year:'2021', color:'Olympic white', type:'Electric · 2021', price:'$38 / day', image:'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A beautifully balanced Strat with a comfortable deep C neck, silky-smooth tremolo, and the unmistakable clarity Fender is known for.', details:'Deep C maple neck, three V-Mod II single-coil pickups, and a 2-point tremolo.'},
  {brand:'Gibson', model:'Les Paul Standard 50s', year:'2020', color:'Heritage cherry sunburst', type:'Electric · 2020', price:'$45 / day', image:'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=800&q=85', status:'Popular', description:'Warm, powerful, and full of character. This classic Les Paul delivers rich sustain and the kind of weighty tone that fills a room.', details:'Mahogany body, maple cap, two Burstbucker humbuckers, and a rounded 50s neck.'},
  {brand:'Martin', model:'D-18 Authentic', year:'2019', color:'Natural spruce', type:'Acoustic · 2019', price:'$32 / day', image:'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A responsive mahogany-and-spruce dreadnought with clear projection, woody mids, and a voice that only gets better with time.', details:'Sitka spruce top, mahogany back and sides, and an aged-authentic neck profile.'},
  {brand:'Gretsch', model:'G5420T Electromatic', year:'2022', color:'Orange stain', type:'Hollow body · 2022', price:'$29 / day', image:'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A lively hollow-body electric with unmistakable Gretsch sparkle, big low end, and an inviting, easy-playing neck.', details:'Full hollow maple body, Filter’Tron pickups, Bigsby vibrato, and vintage styling.'},
  {brand:'Fender', model:'Player Telecaster', year:'2022', color:'Butterscotch blonde', type:'Electric · 2022', price:'$30 / day', image:'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Straightforward, dependable, and endlessly versatile. This Telecaster is ready for clean country twang or a little grit.', details:'Alder body, maple neck, two Player Series single-coil pickups, and string-through bridge.'},
  {brand:'Gibson', model:'ES-335 Figured', year:'2018', color:'Blueberry burst', type:'Semi-hollow · 2018', price:'$48 / day', image:'https://images.unsplash.com/photo-1529518969858-8baa65152fc8?auto=format&fit=crop&w=800&q=85', status:'On loan', description:'A refined semi-hollow with singing sustain and a touch of air around every note. A natural fit for jazz, blues, and rock.', details:'Figured maple body, center block, Calibrated T-Type humbuckers, and a rounded C neck.'},
  {brand:'Martin', model:'000-15M StreetMaster', year:'2021', color:'Distressed mahogany', type:'Acoustic · 2021', price:'$27 / day', image:'https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Compact, warm, and wonderfully direct. Its all-mahogany build makes it a relaxed fingerstyle companion and a strong songwriter tool.', details:'All-mahogany 000 body, satin finish, 24.9-inch scale, and a warm, focused voice.'},
  {brand:'Gretsch', model:'G6136TG Players Edition', year:'2020', color:'White falcon', type:'Hollow body · 2020', price:'$42 / day', image:'https://images.unsplash.com/photo-1543069217-53f2d4b8a5f8?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A polished hollow body with rich Filter’Tron bite, smooth playability, and enough headroom to make every chord shimmer.', details:'Maple body, Filter’Tron pickups, Bigsby vibrato, and ebony fingerboard.'},
  {brand:'Fender', model:'Vintera II 60s Jazzmaster', year:'2023', color:'Lake placid blue', type:'Electric · 2023', price:'$35 / day', image:'https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Surf-inspired shape, wide tonal range, and a wonderfully expressive tremolo make this Jazzmaster a joy to explore.', details:'Alder body, vintage-style 60s pickups, maple neck, and rhythm/lead circuit.'}
];

const card = guitar => `<article class="guitar-card" tabindex="0" data-model="${guitar.model}"><div class="guitar-photo"><img src="${guitar.image}" alt="${guitar.brand} ${guitar.model}" loading="lazy"><span class="availability">${guitar.status}</span></div><div class="guitar-info"><div><h3>${guitar.model}</h3><p>${guitar.brand} · ${guitar.type}</p></div><div class="price">${guitar.price}</div></div><button class="card-contact" type="button">Contact us <span>↗</span></button></article>`;
const featuredGrid = document.querySelector('#featured-grid');
const inventoryGrid = document.querySelector('#inventory-grid');
featuredGrid.innerHTML = guitars.slice(0, 3).map(card).join('');

function renderInventory(brand = 'All') {
  const filtered = brand === 'All' ? guitars : guitars.filter(guitar => guitar.brand === brand);
  inventoryGrid.innerHTML = filtered.map(card).join('');
}
renderInventory();

const modal = document.querySelector('#guitar-modal');
const contactMessage = document.querySelector('#message');
const guitarInterest = document.querySelector('#guitar-interest');
let selectedGuitar;
function goToContact(model) {
  window.location.hash = 'contact';
  guitarInterest.value = model;
  contactMessage.value = `Hi, I have a question about the ${model}. `;
  window.setTimeout(() => contactMessage.focus(), 0);
}
function openGuitarModal(model) {
  selectedGuitar = guitars.find(guitar => guitar.model === model);
  if (!selectedGuitar) return;
  document.querySelector('#modal-image').src = selectedGuitar.image;
  document.querySelector('#modal-image').alt = `${selectedGuitar.brand} ${selectedGuitar.model}`;
  document.querySelector('#modal-kicker').textContent = `${selectedGuitar.brand} · ${selectedGuitar.type}`;
  document.querySelector('#modal-title').textContent = selectedGuitar.model;
  document.querySelector('#modal-description').textContent = selectedGuitar.description;
  document.querySelector('#modal-price').textContent = selectedGuitar.price;
  document.querySelector('#modal-year').textContent = selectedGuitar.year;
  document.querySelector('#modal-model').textContent = selectedGuitar.model;
  document.querySelector('#modal-make').textContent = selectedGuitar.brand;
  document.querySelector('#modal-color').textContent = selectedGuitar.color;
  document.querySelector('#modal-details').textContent = selectedGuitar.details;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  document.querySelector('.modal-close').focus();
}
function closeGuitarModal() { modal.hidden = true; document.body.classList.remove('modal-open'); }
document.querySelectorAll('.guitar-grid, .inventory-grid').forEach(grid => grid.addEventListener('click', event => {
  const guitarCard = event.target.closest('.guitar-card');
  if (!guitarCard) return;
  if (event.target.closest('.card-contact')) {
    goToContact(guitarCard.dataset.model);
    return;
  }
  openGuitarModal(guitarCard.dataset.model);
}));
document.querySelectorAll('.guitar-grid, .inventory-grid').forEach(grid => grid.addEventListener('keydown', event => {
  const guitarCard = event.target.closest('.guitar-card');
  if (event.target.closest('.card-contact')) return;
  if (guitarCard && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openGuitarModal(guitarCard.dataset.model); }
}));
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeGuitarModal));
document.querySelector('#modal-contact').addEventListener('click', () => { closeGuitarModal(); goToContact(selectedGuitar.model); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeGuitarModal(); });

document.querySelectorAll('.brand-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.brand-tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  renderInventory(tab.dataset.brand);
}));

const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
function showView(viewName) {
  const target = viewName === 'inventory' ? 'inventory' : viewName === 'contact' ? 'contact' : 'home';
  views.forEach(view => { view.hidden = view.id !== target; });
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.view === target));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function handleHash() { showView(window.location.hash.slice(1).split('/')[0] || 'home'); }
window.addEventListener('hashchange', handleHash);
handleHash();

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.main-nav');
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.main-nav').classList.remove('open')));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = `Guitar question from ${formData.get('name')}`;
  const body = [
    `Name: ${formData.get('name')}`,
    `Email or phone: ${formData.get('contactInfo')}`,
    `Guitar: ${formData.get('guitar') || 'General question'}`,
    '',
    'Questions:',
    formData.get('message')
  ].join('\n');
  const status = form.querySelector('.form-status');
  status.textContent = 'Thanks. We will be in touch shortly.';
  window.location.href = `mailto:info@qsloan.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.reset();
});
