/**
 * FIND YOUR WATCH — Interactive Application Logic
 * Haute Horlogerie & Engineering Case Study Portfolio
 * Engineered for Fozan
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Global Toast Notification Helper ---
  window.showToast = function(message, icon = 'check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i data-lucide="${icon}"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  // --- Real-time Clock Hands Movement ---
  function updateWatchHands() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    const secDeg = seconds * 6;
    const minDeg = minutes * 6;
    const hourDeg = hours * 30;

    const heroSec = document.getElementById('heroSecondHand');
    const heroMin = document.getElementById('heroMinuteHand');
    const heroHour = document.getElementById('heroHourHand');

    if (heroSec) heroSec.setAttribute('transform', `rotate(${secDeg} 200 200)`);
    if (heroMin) heroMin.setAttribute('transform', `rotate(${minDeg} 200 200)`);
    if (heroHour) heroHour.setAttribute('transform', `rotate(${hourDeg} 200 200)`);

    requestAnimationFrame(updateWatchHands);
  }
  requestAnimationFrame(updateWatchHands);

  // ==========================================================================
  // 1. PRODUCT CATALOG DATA
  // ==========================================================================
  const WATCH_CATALOG = [
    {
      id: 'fyw-01',
      name: 'The Royal Chronograph',
      category: 'chronograph',
      price: 12400,
      badge: 'Flagship Edition',
      calibre: 'Calibre FYW-4130 Automatic',
      powerReserve: '72 Hours',
      caseSize: '41mm',
      material: '18K Rose Gold & Obsidian Enamel',
      waterResist: '100m / 330ft',
      crystal: 'Domed Anti-Reflective Sapphire',
      strap: 'Hand-stitched Tuscan Alligator',
      description: 'The definitive architectural chronograph. Featuring twin balance wheels, column-wheel precision chronometry, and a deep obsidian sunburst dial with solid 18k rose gold hands.',
      colors: { case: '#D4AF37', dial: '#0B0C10', strap: '#1F1A14' }
    },
    {
      id: 'fyw-02',
      name: 'Aethelgard Tourbillon',
      category: 'tourbillon',
      price: 28500,
      badge: 'Haute Horlogerie',
      calibre: 'Calibre FYW-9900 Flying Tourbillon',
      powerReserve: '96 Hours',
      caseSize: '42mm',
      material: 'Grade 5 Satin Titanium',
      waterResist: '50m / 165ft',
      crystal: 'Double Curved Glareproof Sapphire',
      strap: 'Titanium Integral Mesh Bracelet',
      description: 'Defying gravity through a 60-second flying tourbillon cage floating within a skeletonized architectural titanium chassis. Finished entirely with hand-beveled anglage.',
      colors: { case: '#8A95A5', dial: '#12151B', strap: '#5B6472' }
    },
    {
      id: 'fyw-03',
      name: 'Nautilus Deep Diver',
      category: 'diver',
      price: 8900,
      badge: 'Professional Instrument',
      calibre: 'Calibre FYW-3235 Chronometer',
      powerReserve: '70 Hours',
      caseSize: '43mm',
      material: '904L Corrosion-Proof Steel',
      waterResist: '300m / 1000ft',
      crystal: '5.5mm Scratch-Proof Sapphire',
      strap: 'FKM High-Tension Black Rubber',
      description: 'Forged for oceanic abysses. Unidirectional 120-click ceramic dive bezel inlaid with platinum gradation markers, equipped with an automatic helium escape valve.',
      colors: { case: '#C4CCD8', dial: '#061325', strap: '#11141A' }
    },
    {
      id: 'fyw-04',
      name: 'The Minimalist Classic',
      category: 'classic',
      price: 5200,
      badge: 'Timeless Elegance',
      calibre: 'Ultra-Thin Calibre FYW-1120 (3.2mm)',
      powerReserve: '48 Hours',
      caseSize: '39mm',
      material: 'Polished 18K Yellow Gold',
      waterResist: '30m / 100ft',
      crystal: 'Box Sapphire Crystal',
      strap: 'Black Italian Cordovan Leather',
      description: 'Understated purity. An ultra-thin silhouette measuring just 6.8mm total thickness, pairing a champagne sunray dial with minimalist dauphine hands.',
      colors: { case: '#E5C158', dial: '#2A2518', strap: '#1A1816' }
    },
    {
      id: 'fyw-05',
      name: 'Cosmic Starlight Edition',
      category: 'tourbillon',
      price: 34000,
      badge: 'Limited to 25 Pieces',
      calibre: 'Calibre FYW-8800 Celestial Automatic',
      powerReserve: '80 Hours',
      caseSize: '41mm',
      material: 'Solid 18K White Gold & Gibeon Meteorite',
      waterResist: '50m / 165ft',
      crystal: 'Crystallized Sapphire Dome',
      strap: 'Midnight Blue Nubuck Leather',
      description: 'Crafted from authentic extraterrestrial Gibeon meteorite showcasing unique Widmanstätten etching. 12 baguette diamond indices indicate the passage of cosmic time.',
      colors: { case: '#DDE2E8', dial: '#16192E', strap: '#0E1626' }
    },
    {
      id: 'fyw-06',
      name: 'Heritage Automatic',
      category: 'classic',
      price: 7800,
      badge: 'Patina Collector',
      calibre: 'Calibre FYW-2824 Chronometre',
      powerReserve: '65 Hours',
      caseSize: '40mm',
      material: 'Marine Grade CuSn8 Bronze',
      waterResist: '150m / 500ft',
      crystal: 'Vintage Bubble Sapphire',
      strap: 'Distressed Cognac Saddle Leather',
      description: 'A tribute to early aviation navigation watches. The CuSn8 bronze case develops a singular, personal patina over decades of wear, making each watch completely unique.',
      colors: { case: '#B87333', dial: '#1B241C', strap: '#4A2A14' }
    }
  ];

  // ==========================================================================
  // 2. PRODUCT GRID RENDERING & SVG GRAPHICS
  // ==========================================================================
  function generateWatchSvg(watch) {
    return `
      <svg viewBox="0 0 200 200" class="card-watch-svg" aria-hidden="true">
        <!-- Top Strap -->
        <path d="M70 10 L130 10 L122 50 L78 50 Z" fill="${watch.colors.strap}" stroke="${watch.colors.case}" stroke-width="1"/>
        <!-- Bottom Strap -->
        <path d="M78 150 L122 150 L130 190 L70 190 Z" fill="${watch.colors.strap}" stroke="${watch.colors.case}" stroke-width="1"/>
        <!-- Outer Case -->
        <circle cx="100" cy="100" r="62" fill="#12161E" stroke="${watch.colors.case}" stroke-width="4"/>
        <!-- Inner Bezel -->
        <circle cx="100" cy="100" r="54" fill="${watch.colors.dial}" stroke="${watch.colors.case}" stroke-width="1.2" stroke-dasharray="2, 2"/>
        <!-- Crown -->
        <rect x="162" y="93" width="8" height="14" rx="2" fill="${watch.colors.case}"/>
        <!-- Dial Markers -->
        <line x1="100" y1="52" x2="100" y2="60" stroke="${watch.colors.case}" stroke-width="2"/>
        <line x1="148" y1="100" x2="140" y2="100" stroke="${watch.colors.case}" stroke-width="2"/>
        <line x1="100" y1="148" x2="100" y2="140" stroke="${watch.colors.case}" stroke-width="2"/>
        <line x1="52" y1="100" x2="60" y2="100" stroke="${watch.colors.case}" stroke-width="2"/>
        <!-- Hands -->
        <line x1="100" y1="100" x2="100" y2="70" stroke="${watch.colors.case}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="100" y1="100" x2="128" y2="90" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="3" fill="${watch.colors.case}"/>
      </svg>
    `;
  }

  function renderProductGrid(watches) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    if (watches.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i data-lucide="search-x" style="width: 48px; height: 48px; margin: 0 auto 16px; opacity: 0.5;"></i>
          <h3 style="color: #FFF; margin-bottom: 8px;">No Timepieces Found</h3>
          <p>Try modifying your search criteria or selecting a different category filter.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const wishlist = getWishlist();

    grid.innerHTML = watches.map(w => {
      const inWishlist = wishlist.some(item => item.id === w.id);
      return `
        <article class="product-card" data-id="${w.id}">
          <div class="card-visual-wrapper">
            <span class="card-badge">${w.badge}</span>
            <div class="card-actions-float">
              <button class="card-icon-btn ${inWishlist ? 'active' : ''}" 
                      onclick="window.toggleWishlist('${w.id}')" 
                      title="${inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                      aria-label="Wishlist">
                <i data-lucide="bookmark"></i>
              </button>
              <button class="card-icon-btn" 
                      onclick="window.openQuickView('${w.id}')" 
                      title="Quick View Details"
                      aria-label="Quick View">
                <i data-lucide="eye"></i>
              </button>
            </div>
            ${generateWatchSvg(w)}
          </div>
          <div class="card-details">
            <span class="card-category">${w.category}</span>
            <h3 class="card-title">${w.name}</h3>
            <div class="card-spec-tags">
              <span class="spec-pill">${w.caseSize}</span>
              <span class="spec-pill">${w.waterResist}</span>
              <span class="spec-pill">${w.powerReserve}</span>
            </div>
            <div class="card-footer">
              <div class="card-price">$${w.price.toLocaleString()}</div>
              <button class="btn btn-glass btn-sm" onclick="window.openQuickView('${w.id}')">
                <span>Inspect</span>
                <i data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Initial Render
  renderProductGrid(WATCH_CATALOG);

  // ==========================================================================
  // 3. FILTER, SEARCH & SORT FUNCTIONALITY
  // ==========================================================================
  let currentCategory = 'all';
  let currentSearchQuery = '';
  let currentSort = 'featured';

  function applyFilters() {
    let filtered = [...WATCH_CATALOG];

    // Category Filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(w => w.category === currentCategory);
    }

    // Search Query
    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(w => 
        w.name.toLowerCase().includes(q) ||
        w.calibre.toLowerCase().includes(q) ||
        w.material.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProductGrid(filtered);
  }

  // Category Pills Event
  const categoryFilters = document.getElementById('categoryFilters');
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;

      categoryFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      applyFilters();
    });
  }

  // Search Input Event
  const searchInput = document.getElementById('watchSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      applyFilters();
    });
  }

  // Sort Select Event
  const sortSelect = document.getElementById('priceSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  // Footer Category Quick-links
  document.querySelectorAll('.footer-links [data-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.dataset.cat;
      if (cat) {
        currentCategory = cat;
        if (categoryFilters) {
          categoryFilters.querySelectorAll('.filter-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.category === cat);
          });
        }
        applyFilters();
      }
    });
  });

  // ==========================================================================
  // 4. QUICK VIEW MODAL
  // ==========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  window.openQuickView = function(watchId) {
    const watch = WATCH_CATALOG.find(w => w.id === watchId);
    if (!watch || !modalBody || !quickViewModal) return;

    const inWishlist = getWishlist().some(item => item.id === watch.id);

    modalBody.innerHTML = `
      <div class="modal-visual">
        ${generateWatchSvg(watch)}
      </div>
      <div class="modal-info">
        <span class="modal-category">${watch.category} &bull; ${watch.badge}</span>
        <h2 class="modal-title" id="modalWatchTitle">${watch.name}</h2>
        <div class="modal-price">$${watch.price.toLocaleString()}</div>
        <p class="modal-desc">${watch.description}</p>
        
        <div class="modal-specs-table">
          <div class="modal-spec-row">
            <span class="modal-spec-key">Manufacture Movement:</span>
            <span class="modal-spec-val">${watch.calibre}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-key">Case Dimensions:</span>
            <span class="modal-spec-val">${watch.caseSize}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-key">Casing Metallurgy:</span>
            <span class="modal-spec-val">${watch.material}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-key">Water Ingress Protection:</span>
            <span class="modal-spec-val">${watch.waterResist}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-key">Sapphire & Optics:</span>
            <span class="modal-spec-val">${watch.crystal}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-key">Strap & Buckle:</span>
            <span class="modal-spec-val">${watch.strap}</span>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-gold w-100" onclick="window.toggleWishlist('${watch.id}'); window.closeQuickView();">
            <i data-lucide="bookmark"></i>
            <span>${inWishlist ? 'Remove from Wishlist' : 'Add to Curated Wishlist'}</span>
          </button>
        </div>
      </div>
    `;

    quickViewModal.classList.add('active');
    quickViewModal.setAttribute('aria-hidden', 'false');
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeQuickView = function() {
    if (quickViewModal) {
      quickViewModal.classList.remove('active');
      quickViewModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeQuickView);
  }
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) window.closeQuickView();
    });
  }

  // ==========================================================================
  // 5. WISHLIST MANAGEMENT (CLIENT-SIDE LOCALSTORAGE)
  // ==========================================================================
  function getWishlist() {
    try {
      const stored = localStorage.getItem('fyw_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  function saveWishlist(items) {
    try {
      localStorage.setItem('fyw_wishlist', JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateWishlistUI();
  }

  function updateWishlistUI() {
    const list = getWishlist();
    const countBadge = document.getElementById('wishlist-count');
    if (countBadge) countBadge.textContent = list.length;

    const drawerItems = document.getElementById('wishlistItems');
    const wishlistTotal = document.getElementById('wishlistTotal');

    if (drawerItems) {
      if (list.length === 0) {
        drawerItems.innerHTML = `
          <div class="drawer-empty">
            <i data-lucide="bookmark" style="width: 44px; height: 44px; margin-bottom: 12px; opacity: 0.3;"></i>
            <p>Your curated wishlist is empty.<br>Explore the collection or atelier to save timepieces.</p>
          </div>
        `;
        if (wishlistTotal) wishlistTotal.textContent = '$0';
      } else {
        let total = 0;
        drawerItems.innerHTML = list.map(item => {
          total += (item.price || 0);
          return `
            <div class="drawer-item">
              <div class="drawer-item-img">
                <i data-lucide="watch" style="color: var(--gold-light);"></i>
              </div>
              <div class="drawer-item-info">
                <div class="drawer-item-name">${item.name}</div>
                <div class="drawer-item-price">$${(item.price || 0).toLocaleString()}</div>
              </div>
              <button class="drawer-remove-btn" onclick="window.toggleWishlist('${item.id}')" title="Remove">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          `;
        }).join('');
        if (wishlistTotal) wishlistTotal.textContent = `$${total.toLocaleString()}`;
      }
      if (window.lucide) window.lucide.createIcons();
    }
  }

  window.toggleWishlist = function(watchId) {
    let list = getWishlist();
    const existsIndex = list.findIndex(item => item.id === watchId);

    if (existsIndex > -1) {
      const removed = list.splice(existsIndex, 1)[0];
      saveWishlist(list);
      window.showToast(`Removed "${removed.name}" from wishlist`, 'bookmark-x');
    } else {
      let watch = WATCH_CATALOG.find(w => w.id === watchId);
      if (!watch && watchId.startsWith('bespoke')) {
        // Special bespoke item handled in customizer section
        return;
      }
      if (watch) {
        list.push({ id: watch.id, name: watch.name, price: watch.price });
        saveWishlist(list);
        window.showToast(`Added "${watch.name}" to wishlist`, 'bookmark-check');
      }
    }

    // Re-render catalog cards to update active bookmark icon state
    applyFilters();
  };

  // Wishlist Drawer Toggles
  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  if (wishlistBtn && wishlistDrawer) {
    wishlistBtn.addEventListener('click', () => {
      updateWishlistUI();
      wishlistDrawer.classList.add('active');
    });
  }
  if (drawerCloseBtn && wishlistDrawer) {
    drawerCloseBtn.addEventListener('click', () => {
      wishlistDrawer.classList.remove('active');
    });
  }
  if (wishlistDrawer) {
    wishlistDrawer.addEventListener('click', (e) => {
      if (e.target === wishlistDrawer) {
        wishlistDrawer.classList.remove('active');
      }
    });
  }

  const inquireWishlistBtn = document.getElementById('inquireWishlistBtn');
  if (inquireWishlistBtn) {
    inquireWishlistBtn.addEventListener('click', () => {
      const list = getWishlist();
      if (list.length === 0) {
        window.showToast('Please add timepieces to your wishlist first.', 'info');
        return;
      }
      if (wishlistDrawer) wishlistDrawer.classList.remove('active');
      window.openContactModal('Acquisition Inquiry for ' + list.length + ' Timepiece(s)');
    });
  }

  updateWishlistUI();

  // ==========================================================================
  // 6. 360° INTERACTIVE TIMEPIECE VIEWER
  // ==========================================================================
  const viewerStage = document.getElementById('viewerStage');
  const interactiveWatch = document.getElementById('interactiveWatch');
  const rotationDeg = document.getElementById('rotationDeg');
  const autoRotateBtn = document.getElementById('autoRotateBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const reset3dBtn = document.getElementById('reset3dBtn');

  let currentRotY = 0;
  let currentZoom = 1;
  let isDragging = false;
  let startX = 0;
  let autoRotateInterval = null;

  function updateWatchTransform() {
    if (!interactiveWatch) return;
    interactiveWatch.style.transform = `scale(${currentZoom}) rotateY(${currentRotY}deg) rotateZ(${currentRotY * 0.05}deg)`;
    if (rotationDeg) {
      const normalized = Math.round(((currentRotY % 360) + 360) % 360);
      rotationDeg.textContent = `${normalized}°`;
    }
  }

  // Mouse Drag Events
  if (viewerStage) {
    viewerStage.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      stopAutoRotate();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      currentRotY += deltaX * 0.75;
      startX = e.clientX;
      updateWatchTransform();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Drag Events
    viewerStage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        stopAutoRotate();
      }
    }, { passive: true });

    viewerStage.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - startX;
      currentRotY += deltaX * 0.75;
      startX = e.touches[0].clientX;
      updateWatchTransform();
    }, { passive: true });

    viewerStage.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  function stopAutoRotate() {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
      if (autoRotateBtn) {
        autoRotateBtn.innerHTML = '<i data-lucide="play"></i><span>Auto Spin</span>';
        if (window.lucide) window.lucide.createIcons();
      }
    }
  }

  if (autoRotateBtn) {
    autoRotateBtn.addEventListener('click', () => {
      if (autoRotateInterval) {
        stopAutoRotate();
      } else {
        autoRotateInterval = setInterval(() => {
          currentRotY += 1.2;
          updateWatchTransform();
        }, 30);
        autoRotateBtn.innerHTML = '<i data-lucide="pause"></i><span>Pause Spin</span>';
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      if (currentZoom < 1.35) {
        currentZoom += 0.1;
        updateWatchTransform();
      }
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      if (currentZoom > 0.8) {
        currentZoom -= 0.1;
        updateWatchTransform();
      }
    });
  }

  if (reset3dBtn) {
    reset3dBtn.addEventListener('click', () => {
      stopAutoRotate();
      currentRotY = 0;
      currentZoom = 1;
      updateWatchTransform();
      window.showToast('Viewer reset to factory angle.', 'rotate-ccw');
    });
  }

  // Hotspots click events
  const HOTSPOT_INFO = {
    bezel: {
      title: 'Precision Ceramic Bezel',
      desc: 'High-tech zirconium ceramic bezel ring with 120 unidirectional micro-notches, resistant to ultraviolet radiation and scratching.',
      specs: [
        { label: 'Hardness', val: '1,500 Vickers' },
        { label: 'Graduation', val: 'Liquid Platinum Coating' },
        { label: 'Action', val: '120 Ratchet Clicks' }
      ]
    },
    dial: {
      title: 'Obsidian Sunburst Enamel',
      desc: 'Meticulously crafted with translucent grand feu enamel layers on a guilloché plate, capturing ambient light dynamically.',
      specs: [
        { label: 'Luminescence', val: 'Super-LumiNova Grade X1' },
        { label: 'Indices', val: '18K Hand-Polished Gold' },
        { label: 'Dial Base', val: 'Solid Sterling Silver 925' }
      ]
    },
    crown: {
      title: 'Triplock Winding Crown',
      desc: 'Equipped with a quadruple polymer gasket system screwed directly against the monobloc middle case for absolute water resistance.',
      specs: [
        { label: 'Pressure Rating', val: '30 BAR / 300 Metres' },
        { label: 'Thread', val: 'Dual Helicoidal Locking' },
        { label: 'Material', val: 'Grade 5 Titanium Inset' }
      ]
    }
  };

  document.querySelectorAll('.hotspot-group').forEach(spot => {
    spot.addEventListener('click', (e) => {
      e.stopPropagation();
      const spotKey = spot.dataset.spot;
      const data = HOTSPOT_INFO[spotKey];
      if (!data) return;

      const titleEl = document.getElementById('infoTitle');
      const descEl = document.getElementById('infoDesc');
      const specsEl = document.getElementById('infoSpecs');

      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (specsEl) {
        specsEl.innerHTML = data.specs.map(s => `
          <div class="spec-item">
            <span class="spec-label">${s.label}</span>
            <span class="spec-val">${s.val}</span>
          </div>
        `).join('');
      }

      window.showToast(`Inspecting: ${data.title}`, 'info');
    });
  });

  // ==========================================================================
  // 7. BESPOKE WATCH STUDIO (CUSTOMIZER)
  // ==========================================================================
  const bespokeState = {
    basePrice: 8900,
    case: { val: 'rosegold', cost: 2800, color: '#D4AF37', label: '18K Rose Gold' },
    dial: { val: 'obsidian', cost: 0, color: '#0B0C10', label: 'Obsidian Sunburst' },
    strap: { val: 'leather', cost: 0, color: '#2B1F17', label: 'Italian Leather' }
  };

  const custCase = document.getElementById('custCase');
  const custCrown = document.getElementById('custCrown');
  const custDial = document.getElementById('custDial');
  const custStrapTop = document.getElementById('custStrapTop');
  const custStrapBottom = document.getElementById('custStrapBottom');
  const custPrice = document.getElementById('custPrice');
  const configHash = document.getElementById('configHash');

  function updateBespokeVisuals() {
    // Update Case Metal
    if (custCase) custCase.setAttribute('stroke', bespokeState.case.color);
    if (custCrown) custCrown.setAttribute('fill', bespokeState.case.color);

    // Update Dial
    if (custDial) custDial.setAttribute('fill', bespokeState.dial.color);

    // Update Straps
    if (custStrapTop) custStrapTop.setAttribute('fill', bespokeState.strap.color);
    if (custStrapBottom) custStrapBottom.setAttribute('fill', bespokeState.strap.color);

    // Calculate Price
    const total = bespokeState.basePrice + bespokeState.case.cost + bespokeState.dial.cost + bespokeState.strap.cost;
    if (custPrice) custPrice.textContent = `$${total.toLocaleString()}`;

    // Update Hash
    const hash = `FYW-${bespokeState.case.val.toUpperCase().slice(0, 2)}-${bespokeState.dial.val.toUpperCase().slice(0, 3)}-${bespokeState.strap.val.toUpperCase().slice(0, 3)}`;
    if (configHash) configHash.textContent = hash;
  }

  // Handle Swatch Clicks
  document.querySelectorAll('.swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const val = btn.dataset.val;
      const label = btn.dataset.label;
      const cost = parseInt(btn.dataset.cost || 0, 10);
      const color = btn.dataset.color;

      // Toggle active styling
      const parentGrid = btn.closest('.swatch-grid');
      if (parentGrid) {
        parentGrid.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      }
      btn.classList.add('active');

      if (type === 'case') {
        bespokeState.case = { val, cost, color, label };
        const lbl = document.getElementById('selectedCaseLabel');
        if (lbl) lbl.textContent = `${label} (+$${cost.toLocaleString()})`;
      } else if (type === 'dial') {
        bespokeState.dial = { val, cost, color, label };
        const lbl = document.getElementById('selectedDialLabel');
        if (lbl) lbl.textContent = `${label} (+$${cost.toLocaleString()})`;
      } else if (type === 'strap') {
        bespokeState.strap = { val, cost, color, label };
        const lbl = document.getElementById('selectedStrapLabel');
        if (lbl) lbl.textContent = `${label} (+$${cost.toLocaleString()})`;
      }

      updateBespokeVisuals();
    });
  });

  // Save Bespoke Watch Button
  const saveBespokeBtn = document.getElementById('saveBespokeBtn');
  if (saveBespokeBtn) {
    saveBespokeBtn.addEventListener('click', () => {
      const total = bespokeState.basePrice + bespokeState.case.cost + bespokeState.dial.cost + bespokeState.strap.cost;
      const hash = `FYW-${bespokeState.case.val.toUpperCase().slice(0, 2)}-${bespokeState.dial.val.toUpperCase().slice(0, 3)}-${bespokeState.strap.val.toUpperCase().slice(0, 3)}`;
      const bespokeItem = {
        id: `bespoke-${Date.now()}`,
        name: `Bespoke Atelier (${bespokeState.case.label})`,
        price: total,
        config: hash
      };

      const list = getWishlist();
      list.push(bespokeItem);
      saveWishlist(list);
      window.showToast(`Bespoke configuration [${hash}] saved to wishlist!`, 'bookmark-check');
    });
  }

  // Copy Config Button
  const copyConfigBtn = document.getElementById('copyConfigBtn');
  if (copyConfigBtn) {
    copyConfigBtn.addEventListener('click', () => {
      const hash = configHash ? configHash.textContent : 'FYW-BESPOKE';
      navigator.clipboard.writeText(hash).then(() => {
        window.showToast(`Configuration code ${hash} copied to clipboard!`, 'copy');
      }).catch(() => {
        window.showToast(`Configuration code: ${hash}`, 'copy');
      });
    });
  }

  // ==========================================================================
  // 8. CASE STUDY TABS
  // ==========================================================================
  const caseTabs = document.getElementById('caseTabs');
  if (caseTabs) {
    caseTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.case-tab');
      if (!tab) return;

      const tabKey = tab.dataset.tab;
      caseTabs.querySelectorAll('.case-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.case-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`tab-${tabKey}`);
      if (activePanel) activePanel.classList.add('active');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // ==========================================================================
  // 9. CONTACT MODAL & FOZAN INQUIRY
  // ==========================================================================
  const contactModal = document.getElementById('contactModal');
  const contactCloseBtn = document.getElementById('contactCloseBtn');
  const contactForm = document.getElementById('contactForm');
  const openContactBtn = document.getElementById('openContactBtn');
  const footerContactBtn = document.getElementById('footerContactBtn');

  window.openContactModal = function(defaultMessage = '') {
    if (!contactModal) return;
    if (defaultMessage && contactForm) {
      const msgArea = contactForm.querySelector('#contactMessage');
      if (msgArea) msgArea.value = defaultMessage;
    }
    contactModal.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
  };

  window.closeContactModal = function() {
    if (contactModal) {
      contactModal.classList.remove('active');
      contactModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (openContactBtn) openContactBtn.addEventListener('click', () => window.openContactModal());
  if (footerContactBtn) footerContactBtn.addEventListener('click', () => window.openContactModal());
  if (contactCloseBtn) contactCloseBtn.addEventListener('click', window.closeContactModal);
  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) window.closeContactModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      window.showToast(`Thank you, ${name}! Your inquiry has been transmitted to Fozan.`, 'send');
      contactForm.reset();
      window.closeContactModal();
    });
  }

  // ==========================================================================
  // 10. MOBILE NAVBAR TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Navbar scroll blur styling
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 5%';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
    } else {
      navbar.style.padding = '16px 5%';
      navbar.style.boxShadow = 'none';
    }
  });
});
