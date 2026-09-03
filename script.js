const guitars = [
  {brand:'Fender', model:'American Professional II Stratocaster', year:'2021', color:'Olympic white', type:'Electric · 2021', price:'$1,499', image:'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A beautifully balanced Strat with a comfortable deep C neck, silky-smooth tremolo, and the unmistakable clarity Fender is known for.', details:'Deep C maple neck, three V-Mod II single-coil pickups, and a 2-point tremolo.'},
  {brand:'Gibson', model:'Les Paul Standard 50s', year:'2020', color:'Heritage cherry sunburst', type:'Electric · 2020', price:'$2,499', image:'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=800&q=85', status:'Popular', description:'Warm, powerful, and full of character. This classic Les Paul delivers rich sustain and the kind of weighty tone that fills a room.', details:'Mahogany body, maple cap, two Burstbucker humbuckers, and a rounded 50s neck.'},
  {brand:'Martin', model:'D-18 Authentic', year:'2019', color:'Natural spruce', type:'Acoustic · 2019', price:'$3,999', image:'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A responsive mahogany-and-spruce dreadnought with clear projection, woody mids, and a voice that only gets better with time.', details:'Sitka spruce top, mahogany back and sides, and an aged-authentic neck profile.'},
  {brand:'Gretsch', model:'G5420T Electromatic', year:'2022', color:'Orange stain', type:'Hollow body · 2022', price:'$899', image:'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A lively hollow-body electric with unmistakable Gretsch sparkle, big low end, and an inviting, easy-playing neck.', details:'Full hollow maple body, Filter’Tron pickups, Bigsby vibrato, and vintage styling.'},
  {brand:'Fender', model:'Player Telecaster', year:'2022', color:'Butterscotch blonde', type:'Electric · 2022', price:'$749', image:'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Straightforward, dependable, and endlessly versatile. This Telecaster is ready for clean country twang or a little grit.', details:'Alder body, maple neck, two Player Series single-coil pickups, and string-through bridge.'},
  {brand:'Gibson', model:'ES-335 Figured', year:'2018', color:'Blueberry burst', type:'Semi-hollow · 2018', price:'$2,799', image:'https://images.unsplash.com/photo-1529518969858-8baa65152fc8?auto=format&fit=crop&w=800&q=85', status:'On loan', description:'A refined semi-hollow with singing sustain and a touch of air around every note. A natural fit for jazz, blues, and rock.', details:'Figured maple body, center block, Calibrated T-Type humbuckers, and a rounded C neck.'},
  {brand:'Martin', model:'000-15M StreetMaster', year:'2021', color:'Distressed mahogany', type:'Acoustic · 2021', price:'$1,299', image:'https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Compact, warm, and wonderfully direct. Its all-mahogany build makes it a relaxed fingerstyle companion and a strong songwriter tool.', details:'All-mahogany 000 body, satin finish, 24.9-inch scale, and a warm, focused voice.'},
  {brand:'Gretsch', model:'G6136TG Players Edition', year:'2020', color:'White falcon', type:'Hollow body · 2020', price:'$3,499', image:'https://images.unsplash.com/photo-1543069217-53f2d4b8a5f8?auto=format&fit=crop&w=800&q=85', status:'Available', description:'A polished hollow body with rich Filter’Tron bite, smooth playability, and enough headroom to make every chord shimmer.', details:'Maple body, Filter’Tron pickups, Bigsby vibrato, and ebony fingerboard.'},
  {brand:'Fender', model:'Vintera II 60s Jazzmaster', year:'2023', color:'Lake placid blue', type:'Electric · 2023', price:'$1,099', image:'https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&w=800&q=85', status:'Available', description:'Surf-inspired shape, wide tonal range, and a wonderfully expressive tremolo make this Jazzmaster a joy to explore.', details:'Alder body, vintage-style 60s pickups, maple neck, and rhythm/lead circuit.'}
];

const additionalImages = [
  'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1499415475580-3b20a7a103f0?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1532294220147-279b6b3a6a78?auto=format&fit=crop&w=800&q=85'
];
const conditions = ['Excellent', 'Excellent', 'Very good', 'Excellent', 'Good', 'Very good', 'Excellent', 'Excellent', 'Excellent'];
const listedDates = ['2026-08-25', '2026-08-18', '2026-08-29', '2026-08-31', '2026-08-21', '2026-08-14', '2026-08-27', '2026-08-23', '2026-09-01'];
const viewCounts = [184, 239, 316, 128, 207, 161, 276, 198, 352];
const recommendedOrder = [0, 2, 3, 8, 6, 1, 4, 7, 5];
const uniformGuitarImage = 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=800&q=85';
guitars.forEach((guitar, index) => {
  guitar.inventoryNumber = `QLG-${String(index + 1).padStart(3, '0')}`;
  guitar.serialNumber = `SN-QLG-${String(index + 1).padStart(3, '0')}`;
  guitar.sold = false;
  guitar.condition = conditions[index];
  guitar.image = uniformGuitarImage;
  guitar.images = Array(6).fill(uniformGuitarImage);
  guitar.listedAt = listedDates[index];
  guitar.views = viewCounts[index];
  guitar.recommendedRank = recommendedOrder.indexOf(index);
});

const clearanceGuitars = Array.from({length: 10}, (_, index) => {
  const source = guitars[index % guitars.length];
  return {...source, model: `${source.model} - Clearance ${String(index + 1).padStart(2, '0')}`, price: '$500', originalPrice: '$1,000', status: 'Clearance', inventoryNumber: `CLR-${String(index + 1).padStart(3, '0')}`};
});
const allGuitars = [...guitars, ...clearanceGuitars];

const card = guitar => `<article class="guitar-card" tabindex="0" data-model="${guitar.model}"><div class="guitar-photo"><img src="${guitar.image}" alt="${guitar.brand} ${guitar.model}" loading="lazy"><span class="availability">${guitar.status}</span></div><div class="guitar-info"><div><h3>${guitar.model}</h3><p>${guitar.brand} · ${guitar.type}</p></div><div class="price">${guitar.originalPrice ? `<del>${guitar.originalPrice}</del> ${guitar.price}` : guitar.price}</div></div><div class="card-actions"><button class="card-buy" type="button">Buy now <span>↗</span></button><button class="card-contact" type="button">Ask a question <span>→</span></button></div></article>`;
const featuredGrid = document.querySelector('#featured-grid');
const inventoryGrid = document.querySelector('#inventory-grid');
const clearanceGrid = document.querySelector('#clearance-grid');
featuredGrid.innerHTML = guitars.slice(0, 3).map(card).join('');
clearanceGrid.innerHTML = clearanceGuitars.map(card).join('');

let selectedBrand = 'All';
let selectedSort = 'recommended';
function renderInventory() {
  const filtered = selectedBrand === 'All' ? [...guitars] : guitars.filter(guitar => guitar.brand === selectedBrand);
  const sorters = {
    recommended: (first, second) => first.recommendedRank - second.recommendedRank,
    'price-low': (first, second) => parseInt(first.price.replace(/[$,]/g, ''), 10) - parseInt(second.price.replace(/[$,]/g, ''), 10),
    'price-high': (first, second) => parseInt(second.price.replace(/[$,]/g, ''), 10) - parseInt(first.price.replace(/[$,]/g, ''), 10),
    newest: (first, second) => new Date(second.listedAt) - new Date(first.listedAt),
    viewed: (first, second) => second.views - first.views
  };
  filtered.sort(sorters[selectedSort]);
  inventoryGrid.innerHTML = filtered.map(card).join('');
}
renderInventory();

const modal = document.querySelector('#guitar-modal');
const contactMessage = document.querySelector('#message');
const guitarInterest = document.querySelector('#guitar-interest');
let selectedGuitar;
let checkoutGuitar;
function goToCheckout(model) {
  checkoutGuitar = allGuitars.find(guitar => guitar.model === model);
  if (!checkoutGuitar) return;
  document.querySelector('#checkout-image').src = checkoutGuitar.image;
  document.querySelector('#checkout-image').alt = `${checkoutGuitar.brand} ${checkoutGuitar.model}`;
  document.querySelector('#checkout-brand').textContent = `${checkoutGuitar.brand} · ${checkoutGuitar.type}`;
  document.querySelector('#checkout-model').textContent = checkoutGuitar.model;
  document.querySelector('#checkout-price').textContent = checkoutGuitar.price;
  window.location.hash = 'checkout';
}
function goToContact(model) {
  window.location.hash = 'contact';
  guitarInterest.value = model;
  contactMessage.value = `Hi, I have a question about the ${model}. `;
  window.setTimeout(() => contactMessage.focus(), 0);
}
function openGuitarModal(model) {
  selectedGuitar = allGuitars.find(guitar => guitar.model === model);
  if (!selectedGuitar) return;
  document.querySelector('#modal-image').src = selectedGuitar.images[0];
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
  document.querySelector('#modal-thumbnails').innerHTML = selectedGuitar.images.map((image, index) => `<button class="modal-thumbnail${index === 0 ? ' active' : ''}" type="button" aria-label="View photo ${index + 1}"><img src="${image}" alt=""></button>`).join('');
  document.querySelectorAll('.modal-thumbnail').forEach((thumbnail, index) => thumbnail.addEventListener('click', () => {
    document.querySelector('#modal-image').src = selectedGuitar.images[index];
    document.querySelectorAll('.modal-thumbnail').forEach(item => item.classList.remove('active'));
    thumbnail.classList.add('active');
  }));
  modal.hidden = false;
  document.body.classList.add('modal-open');
  document.querySelector('.modal-close').focus();
}
function closeGuitarModal() { modal.hidden = true; document.body.classList.remove('modal-open'); }
document.querySelectorAll('.guitar-grid, .inventory-grid').forEach(grid => grid.addEventListener('click', event => {
  const guitarCard = event.target.closest('.guitar-card');
  if (!guitarCard) return;
  if (event.target.closest('.card-buy')) {
    goToCheckout(guitarCard.dataset.model);
    return;
  }
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
document.querySelector('#modal-buy').addEventListener('click', () => { closeGuitarModal(); goToCheckout(selectedGuitar.model); });
document.querySelector('#modal-contact').addEventListener('click', () => { closeGuitarModal(); goToContact(selectedGuitar.model); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeGuitarModal(); });

document.querySelectorAll('.brand-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.brand-tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  selectedBrand = tab.dataset.brand;
  renderInventory();
}));
document.querySelector('#inventory-sort').addEventListener('change', event => {
  selectedSort = event.target.value;
  renderInventory();
});

const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
function showView(viewName) {
  const target = ['inventory', 'clearance', 'service', 'contact', 'staff-inventory', 'checkout'].includes(viewName) ? viewName : 'home';
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

const inventoryLogin = document.querySelector('#inventory-login');
const inventorySheet = document.querySelector('#inventory-sheet');
const inventoryPassword = document.querySelector('#inventory-password');
const inventoryLoginStatus = document.querySelector('#inventory-login-status');
function renderPrivateInventory() {
  document.querySelector('#inventory-table-body').innerHTML = guitars.map((guitar, index) => `<tr><td>${guitar.serialNumber}</td><td>${guitar.inventoryNumber}</td><td><label class="sold-toggle"><input type="checkbox" data-sold-index="${index}"${guitar.sold ? ' checked' : ''}><span>${guitar.sold ? 'Sold' : 'Available'}</span></label></td><td>${guitar.price}</td><td>${guitar.brand}</td><td>${guitar.condition}</td><td>${guitar.description}</td><td>${guitar.color}</td></tr>`).join('');
  document.querySelectorAll('[data-sold-index]').forEach(input => input.addEventListener('change', event => {
    const guitar = guitars[Number(event.target.dataset.soldIndex)];
    guitar.sold = event.target.checked;
    event.target.nextElementSibling.textContent = guitar.sold ? 'Sold' : 'Available';
    sessionStorage.setItem('inventorySold', JSON.stringify(guitars.map(item => item.sold)));
  }));
}
function unlockInventory() {
  if (inventoryPassword.value === '2608') {
    inventoryLogin.hidden = true;
    inventorySheet.hidden = false;
    sessionStorage.setItem('inventoryUnlocked', 'true');
    inventoryLoginStatus.textContent = '';
  } else inventoryLoginStatus.textContent = 'That password is not correct.';
}
function lockInventory() {
  inventoryLogin.hidden = false;
  inventorySheet.hidden = true;
  inventoryPassword.value = '';
  sessionStorage.removeItem('inventoryUnlocked');
}
document.querySelector('#inventory-login-button').addEventListener('click', unlockInventory);
inventoryPassword.addEventListener('keydown', event => { if (event.key === 'Enter') unlockInventory(); });
document.querySelector('#inventory-lock').addEventListener('click', lockInventory);
renderPrivateInventory();
const savedSoldStatus = JSON.parse(sessionStorage.getItem('inventorySold') || '[]');
savedSoldStatus.forEach((sold, index) => { if (guitars[index]) guitars[index].sold = sold; });
renderPrivateInventory();
if (sessionStorage.getItem('inventoryUnlocked') === 'true') { inventoryLogin.hidden = true; inventorySheet.hidden = false; }

document.querySelector('#checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = `Purchase request: ${checkoutGuitar.model}`;
  const body = [`Guitar: ${checkoutGuitar.model}`, `Price: ${checkoutGuitar.price}`, `Name: ${formData.get('name')}`, `Email: ${formData.get('email')}`, `Phone: ${formData.get('phone')}`, '', 'Shipping or pickup details:', formData.get('address')].join('\n');
  form.querySelector('.form-status').textContent = 'Opening your email app to send the order request.';
  window.location.href = `mailto:info@qsloan.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

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
