// Tarım Devrimi: Zaman, Mekân ve İnsan Etkileşimli Etkinliği

const cardsData = [
  // MEZOPOTAMYA
  {
    id: 'mezopotamya-bolge',
    region: 'mezopotamya',
    category: 'bolge',
    title: 'Mezopotamya',
    text: 'Mezopotamya — MÖ 10.000'
  },
  {
    id: 'mezopotamya-arazi',
    region: 'mezopotamya',
    category: 'arazi',
    title: 'Mezopotamya Tarım Arazisi',
    text: 'Fırat ve Dicle suladığı geniş verimli düzlükler'
  },
  {
    id: 'mezopotamya-iklim',
    region: 'mezopotamya',
    category: 'iklim',
    title: 'Mezopotamya İklimi',
    text: 'Yazları kurak geçen iklim koşulları'
  },
  {
    id: 'mezopotamya-urun',
    region: 'mezopotamya',
    category: 'urun',
    title: 'Mezopotamya Tarım Ürünleri',
    text: 'Yabani buğday, arpa, mercimek ve bezelye'
  },
  {
    id: 'mezopotamya-yerlesim',
    region: 'mezopotamya',
    category: 'yerlesim',
    title: 'Mezopotamya Yerleşimi',
    text: 'Köy benzeri ilk toplu yerleşimler ve bitişik evler'
  },
  {
    id: 'mezopotamya-isbolumu',
    region: 'mezopotamya',
    category: 'isbolumu',
    title: 'Mezopotamya İş Bölümü ve Ekonomi',
    text: 'Sulama kanalları, artı ürün ve takas ekonomisi'
  },
  {
    id: 'mezopotamya-hayvan',
    region: 'mezopotamya',
    category: 'hayvan',
    title: 'Mezopotamya Evcilleştirilen Hayvanlar',
    text: 'Koyun, keçi ve sığırın evcilleştirilmesi'
  },

  // GÜNEYDOĞU ASYA
  {
    id: 'guneydogu-asya-bolge',
    region: 'guneydogu-asya',
    category: 'bolge',
    title: 'Güneydoğu Asya',
    text: 'Güneydoğu Asya — MÖ 8.000'
  },
  {
    id: 'guneydogu-asya-arazi',
    region: 'guneydogu-asya',
    category: 'arazi',
    title: 'Güneydoğu Asya Tarım Arazisi',
    text: 'Sarı ve Gök Irmak suladığı bol, geniş düz araziler'
  },
  {
    id: 'guneydogu-asya-iklim',
    region: 'guneydogu-asya',
    category: 'iklim',
    title: 'Güneydoğu Asya İklimi',
    text: 'Muson ikliminin getirdiği bol yağışlar'
  },
  {
    id: 'guneydogu-asya-urun',
    region: 'guneydogu-asya',
    category: 'urun',
    title: 'Güneydoğu Asya Tarım Ürünleri',
    text: 'Pirinç (çeltik), darı, soya fasulyesi ve muz'
  },
  {
    id: 'guneydogu-asya-yerlesim',
    region: 'guneydogu-asya',
    category: 'yerlesim',
    title: 'Güneydoğu Asya Yerleşimi',
    text: 'Nehir havzalarında kalıcı, yoğun nüfuslu köyler'
  },
  {
    id: 'guneydogu-asya-isbolumu',
    region: 'guneydogu-asya',
    category: 'isbolumu',
    title: 'Güneydoğu Asya İş Bölümü ve Ekonomi',
    text: 'Sulu çeltik tarımı ve ortak sulama iş gücü'
  },
  {
    id: 'guneydogu-asya-hayvan',
    region: 'guneydogu-asya',
    category: 'hayvan',
    title: 'Güneydoğu Asya Evcilleştirilen Hayvanlar',
    text: 'Su mandası (bufalo), domuz ve kümes hayvanları'
  },

  // ORTA AMERİKA
  {
    id: 'orta-amerika-bolge',
    region: 'orta-amerika',
    category: 'bolge',
    title: 'Orta Amerika (Mesoamerika)',
    text: 'Orta Amerika — MÖ 7.000'
  },
  {
    id: 'orta-amerika-arazi',
    region: 'orta-amerika',
    category: 'arazi',
    title: 'Orta Amerika Tarım Arazisi',
    text: 'İrili ufaklı göl ve nehirlerin bulunduğu verimli düzlükler'
  },
  {
    id: 'orta-amerika-iklim',
    region: 'orta-amerika',
    category: 'iklim',
    title: 'Orta Amerika İklimi',
    text: 'Tarıma elverişli ılıman iklim ve yağışlar'
  },
  {
    id: 'orta-amerika-urun',
    region: 'orta-amerika',
    category: 'urun',
    title: 'Orta Amerika Tarım Ürünleri',
    text: 'Mısır (teosinte bitkisi), fasulye, avokado ve kabak'
  },
  {
    id: 'orta-amerika-yerlesim',
    region: 'orta-amerika',
    category: 'yerlesim',
    title: 'Orta Amerika Yerleşimi',
    text: 'Göl ve akarsu kenarında kalıcı köy yerleşimleri'
  },
  {
    id: 'orta-amerika-isbolumu',
    region: 'orta-amerika',
    category: 'isbolumu',
    title: 'Orta Amerika İş Bölümü ve Ekonomi',
    text: 'Mısır tarımına dayalı aile içi iş bölümü'
  },
  {
    id: 'orta-amerika-hayvan',
    region: 'orta-amerika',
    category: 'hayvan',
    title: 'Orta Amerika Evcilleştirilen Hayvanlar',
    text: 'Köpek ve hindi evcilleştirilmesi (büyükbaş yoktur)'
  }
];

// Bölge Görünen İsimleri
const regionDisplayNames = {
  'mezopotamya': 'Mezopotamya (Bereketli Hilal)',
  'guneydogu-asya': 'Güneydoğu Asya',
  'orta-amerika': 'Orta Amerika (Mesoamerika)'
};

// Durum Takip Değişkenleri
let remainingCards = [];
let placedCards = new Map(); // cardId -> { region, category }
let selectedCardId = null;
let draggedCardId = null;
let isMatchingLocked = false;
let matchingLockTimeout = null;

// Genel Geri Bildirim Banner Elemanı ve Fonksiyonu (Tanımsız Hata Düzeltmesi)
const feedbackBanner = document.getElementById('feedback-banner');

function showFeedback(message, isSuccess = true) {
  // feedbackBanner varsa göster, yoksa sessizce atla
  if (feedbackBanner) {
    feedbackBanner.textContent = message;
    feedbackBanner.className = isSuccess
      ? 'fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-sm font-bold shadow-lg bg-[#166534]/90 text-white border border-[#22c55e]/60 animate-in fade-in duration-200'
      : 'fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-sm font-bold shadow-lg bg-[#b91c1c]/90 text-white border border-[#ef4444]/60 animate-in fade-in duration-200';
    feedbackBanner.classList.remove('hidden');
    setTimeout(() => {
      feedbackBanner.classList.add('hidden');
    }, 2500);
  }
}

// DOM Elemanları
const activeCardContainer = document.getElementById('active-card-container');
const resetBtn = document.getElementById('reset-btn');

// Rastgele Karıştırma (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Geri Bildirim Gösterme Fonksiyonu (Doğrudan Soru / Kart Alanında Gösterilir)
function showCardFeedback(message, isSuccess = true) {
  const bgClass = isSuccess 
    ? 'bg-[#166534]/90 text-white border-[#22c55e]/60 shadow-[0_8px_24px_rgba(22,101,52,0.40)]' 
    : 'bg-[#b91c1c]/90 text-white border-[#ef4444]/60 shadow-[0_8px_24px_rgba(185,28,28,0.40)]';
  
  const iconSymbol = isSuccess ? '✓' : '✗';

  // 1. Masaüstü Harita İçi Aktif Kart Alanı
  if (activeCardContainer) {
    activeCardContainer.innerHTML = `
      <div class="active-card-feedback ${bgClass} backdrop-blur-md rounded-[10px] border-2 px-4 py-2 sm:px-5 sm:py-2.5 transition-all text-xs sm:text-[13.5px] md:text-[15px] font-bold text-center select-none break-words leading-snug flex items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-200">
        <span class="text-sm sm:text-base md:text-lg font-black shrink-0 leading-none">${iconSymbol}</span>
        <span>${message}</span>
      </div>
    `;
  }

  // 2. Mobil Slot Alanı
  const mobileSlot = document.getElementById('active-card-mobile-slot');
  if (mobileSlot) {
    mobileSlot.innerHTML = `
      <div class="active-card-feedback ${bgClass} backdrop-blur-md rounded-[10px] border-2 px-4 py-3 text-xs sm:text-sm md:text-base font-bold text-center select-none break-words leading-snug shadow-md flex items-center justify-center gap-2 animate-in fade-in duration-200">
        <span class="text-base sm:text-lg font-black shrink-0 leading-none">${iconSymbol}</span>
        <span>${message}</span>
      </div>
    `;
  }
}

// Kart Seçimini Temizleme
function clearSelection() {
  selectedCardId = null;
  document.querySelectorAll('.active-card-item').forEach(el => {
    el.classList.remove('card-selected');
  });
}

// Kart Seçimi (Dokunmatik ve Akıllı Tahta Desteği)
function toggleCardSelection() {
  if (isMatchingLocked || !remainingCards.length) return;
  const currentCard = remainingCards[0];

  if (selectedCardId === currentCard.id) {
    clearSelection();
  } else {
    selectedCardId = currentCard.id;
    document.querySelectorAll('.active-card-item').forEach(el => {
      el.classList.add('card-selected');
    });
  }
}

// Aktif Kartı Harita İçinde veya Mobil Alanda Gösterme
function renderActiveCard() {
  if (!activeCardContainer) return;
  clearSelection();

  const mobileSlot = document.getElementById('active-card-mobile-slot');

  // Tüm kartlar tamamlandı mı?
  if (remainingCards.length === 0) {
    const completeHTML = `
      <div class="flex items-center justify-center py-1">
        <button id="btn-goto-stage2-from-map" class="bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] rounded-[12px] px-6 py-3.5 text-xs sm:text-sm font-bold border border-[#d49d3d]/50 shadow-[0_8px_24px_rgba(30,59,46,0.3)] hover:shadow-[0_12px_32px_rgba(30,59,46,0.45)] transition-all flex items-center gap-2 cursor-pointer select-none font-body">
          2. Aşamaya Geç ➔
        </button>
      </div>
    `;

    activeCardContainer.innerHTML = completeHTML;
    if (mobileSlot) mobileSlot.innerHTML = completeHTML;

    document.querySelectorAll('#btn-goto-stage2-from-map').forEach(btn => {
      btn.addEventListener('click', () => {
        switchStage(2);
      });
    });

    showFeedback('Tüm eşleştirmeleri başarıyla tamamladınız. 2. Aşamaya geçebilirsiniz.', true);
    return;
  }

  const currentCard = remainingCards[0];

  // Masaüstü Harita İçi Kart (draggable kaldırıldı, özel mouse drag kullanılacak)
  activeCardContainer.innerHTML = `
    <div id="active-card"
         class="active-card-item card-draggable active-card-pulse bg-gradient-to-br from-[#fffdfa] via-[#fcf6ea] to-[#f5ebd6] rounded-[12px] border-[2.5px] border-[#9e4e34] px-4 py-2 sm:px-5 sm:py-2.5 shadow-[0_8px_25px_rgba(45,34,18,0.22)] hover:border-[#833d25] transition-all text-center cursor-grab active:cursor-grabbing select-none break-words"
         data-card-id="${currentCard.id}">
      <div class="active-card-hint text-[10.5px] sm:text-[11.5px] font-bold text-[#9e4e34] tracking-wider uppercase mb-1 select-none pointer-events-none">
        Sürükleyiniz veya Dokunarak Seçiniz
      </div>
      <div class="text-xs sm:text-[13.5px] md:text-[15px] font-bold text-[#1e3b2e] leading-snug pointer-events-none">
        ${currentCard.text}
      </div>
    </div>
  `;

  // Mobil Slot Kartı
  if (mobileSlot) {
    mobileSlot.innerHTML = `
      <div id="active-card-mobile"
           class="active-card-item card-draggable active-card-pulse bg-gradient-to-br from-[#fffdfa] via-[#fcf6ea] to-[#f5ebd6] rounded-[12px] border-[2.5px] border-[#9e4e34] px-4 py-3 text-center cursor-pointer select-none break-words transition-all shadow-[0_4px_16px_rgba(45,34,18,0.15)] hover:border-[#833d25]"
           data-card-id="${currentCard.id}">
        <div class="active-card-hint text-[10.5px] sm:text-[11px] font-bold text-[#9e4e34] tracking-wider uppercase mb-1 select-none pointer-events-none">
          Sürükleyiniz veya Dokunarak Seçiniz
        </div>
        <div class="text-xs sm:text-sm md:text-base font-bold text-[#1e3b2e] leading-snug pointer-events-none">
          ${currentCard.text}
        </div>
      </div>
    `;

    const mobileCardEl = document.getElementById('active-card-mobile');
    if (mobileCardEl) {
      setupMouseDrag(mobileCardEl, currentCard.id);
      setupTouchDrag(mobileCardEl, currentCard.id);
    }
  }

  const activeCardEl = document.getElementById('active-card');
  if (activeCardEl) {
    setupMouseDrag(activeCardEl, currentCard.id);
    setupTouchDrag(activeCardEl, currentCard.id);
  }
}

// Dokunmatik Ekranlar (Tablet, Akıllı Tahta) İçin Sürükle - Bırak Desteği
function setupTouchDrag(el, cardId) {
  let touchClone = null;
  let startX = 0;
  let startY = 0;

  el.addEventListener('touchstart', (e) => {
    if (isMatchingLocked) return;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    draggedCardId = cardId;
  }, { passive: true });

  el.addEventListener('touchmove', (e) => {
    if (isMatchingLocked || !draggedCardId) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    if (Math.hypot(dx, dy) > 8) {
      if (!touchClone) {
        touchClone = el.cloneNode(true);
        touchClone.id = 'touch-drag-clone';
        touchClone.style.position = 'fixed';
        touchClone.style.pointerEvents = 'none';
        touchClone.style.zIndex = '9999';
        touchClone.style.opacity = '0.90';
        touchClone.style.width = `${el.offsetWidth}px`;
        touchClone.style.transform = 'translate(-50%, -50%) scale(0.96)';
        touchClone.style.boxShadow = '0 12px 28px rgba(45,34,18,0.35)';
        touchClone.style.animation = 'none';
        document.body.appendChild(touchClone);
        el.classList.add('opacity-40');
      }

      touchClone.style.left = `${touch.clientX}px`;
      touchClone.style.top = `${touch.clientY}px`;

      const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
      const target = elemBelow?.closest('.map-focus-target, .region-summary-card');
      document.querySelectorAll('.map-focus-target, .region-summary-card').forEach(t => {
        if (t === target) {
          t.classList.add('drag-over-region');
        } else {
          t.classList.remove('drag-over-region');
        }
      });
    }
  }, { passive: true });

  el.addEventListener('touchend', (e) => {
    if (touchClone) {
      touchClone.remove();
      touchClone = null;
    }
    el.classList.remove('opacity-40');

    document.querySelectorAll('.map-focus-target, .region-summary-card').forEach(t => {
      t.classList.remove('drag-over-region');
    });

    if (isMatchingLocked || !draggedCardId) return;

    const touch = e.changedTouches[0];
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const target = elemBelow?.closest('.map-focus-target, .region-summary-card');
    
    if (target) {
      const region = target.getAttribute('data-region');
      if (region) {
        handlePlacementAttempt(draggedCardId, region);
      }
    }
    draggedCardId = null;
  });
}

// Kartı Doğrudan Haritadaki İlgili Hedef Alana ve Bölge Kartına Yerleştirme
function placeCardIntoTarget(cardData, targetRegion) {
  const targetList = document.getElementById(`list-${targetRegion}`);
  const targetEl = document.getElementById(`target-${targetRegion}`);
  const regionCard = document.getElementById(`region-card-${targetRegion}`);
  const regionItems = document.getElementById(`region-items-${targetRegion}`);

  // 1. Masaüstü harita hedefi içine yerleştir (Başlık + 2 Sütunlu Kompakt Düzen)
  if (targetList) {
    if (cardData.category === 'bolge') {
      let headerEl = targetList.querySelector('.target-card-header');
      if (!headerEl) {
        headerEl = document.createElement('div');
        headerEl.className = 'target-card-header font-bold text-[#1e3b2e] text-[12px] sm:text-[13px] md:text-[14px] leading-snug pb-0.5 mb-1 border-b border-[#beab8f]/60 flex items-center gap-1.5 animate-in fade-in duration-200';
        targetList.prepend(headerEl);
      }
      headerEl.innerHTML = `<span class="text-[#9e4e34] font-black shrink-0 text-sm leading-none">•</span><span class="flex-1">${cardData.text}</span>`;
    } else {
      let gridEl = targetList.querySelector('.target-card-grid');
      if (!gridEl) {
        gridEl = document.createElement('div');
        gridEl.className = 'target-card-grid grid grid-cols-2 gap-x-2.5 gap-y-0.5 w-full';
        targetList.appendChild(gridEl);
      }
      const itemEl = document.createElement('div');
      itemEl.className = 'text-[#2c261e] text-[10px] sm:text-[10.5px] md:text-[11.5px] lg:text-[12px] font-semibold leading-snug flex items-start gap-1 py-[1px] animate-in fade-in duration-200';
      itemEl.innerHTML = `<span class="text-[#9e4e34] font-bold shrink-0 text-xs leading-none mt-0.5">•</span><span class="flex-1">${cardData.text}</span>`;
      gridEl.appendChild(itemEl);
    }
  }

  // 2. Alt kısımdaki bölge alanına ekle
  if (regionItems) {
    const placeholder = regionItems.querySelector('.region-placeholder');
    if (placeholder) placeholder.remove();

    const rItemEl = document.createElement('div');
    if (cardData.category === 'bolge') {
      rItemEl.className = 'font-bold text-[#1e3b2e] text-xs sm:text-[12.5px] leading-tight pb-1 mb-1 border-b border-[#beab8f]/60 flex items-start gap-1.5 animate-in fade-in duration-200';
      rItemEl.innerHTML = `<span class="text-[#9e4e34] font-black shrink-0 text-sm leading-none mt-0.5">•</span><span class="flex-1">${cardData.text}</span>`;
      regionItems.prepend(rItemEl);
    } else {
      rItemEl.className = 'text-[#2c261e] text-[10.5px] sm:text-[11px] md:text-[11.5px] font-medium leading-tight flex items-start gap-1.5 py-0.5 animate-in fade-in duration-200';
      rItemEl.innerHTML = `<span class="text-[#9e4e34] font-bold shrink-0 text-xs leading-none mt-0.5">•</span><span class="flex-1">${cardData.text}</span>`;
      regionItems.appendChild(rItemEl);
    }
  }

  // Kalan kartlar dizisinden kaldır
  remainingCards = remainingCards.filter(c => c.id !== cardData.id);

  // Durumu kaydet
  placedCards.set(cardData.id, { region: cardData.region, category: cardData.category });
  clearSelection();
  updateProgress();

  // Hedef alanına ve bölge kartına başarı animasyonu (Neolitik koyu yeşil ring)
  if (targetEl) {
    targetEl.classList.add('ring-4', 'ring-[#1e3b2e]/60');
    setTimeout(() => targetEl.classList.remove('ring-4', 'ring-[#1e3b2e]/60'), 700);
  }
  if (regionCard) {
    regionCard.classList.add('ring-2', 'ring-[#1e3b2e]');
    setTimeout(() => regionCard.classList.remove('ring-2', 'ring-[#1e3b2e]'), 700);
  }

  // Bölge kartı yerleştirildiğinde: mobil rozette ve alt kartta adı açığa çıkar
  if (cardData.category === 'bolge') {
    // Haritadaki mobil rozet adını güncelle
    if (targetEl) {
      const badge = targetEl.querySelector('.map-badge-title');
      if (badge) badge.textContent = cardData.title;
    }
    // Alt bölge kartının başlık ve tarihini göster
    if (regionCard) {
      const headerName = regionCard.querySelector('.region-header-name');
      const headerDate = regionCard.querySelector('.region-header-date');
      if (headerName) headerName.textContent = cardData.title;
      if (headerDate) headerDate.classList.remove('hidden');
    }
  }
}

// Hatalı Yerleştirme Efekti (Pişmiş kil / kiremit rengi ring ve arka plan tonu)
function triggerErrorEffect(targetRegion) {
  const mapTarget = document.getElementById(`target-${targetRegion}`);
  const regionCard = document.getElementById(`region-card-${targetRegion}`);

  [mapTarget, regionCard].forEach(element => {
    if (!element) return;
    element.classList.add('ring-4', 'ring-[#9e4e34]', 'bg-[#9e4e34]/20');
    setTimeout(() => {
      element.classList.remove('ring-4', 'ring-[#9e4e34]', 'bg-[#9e4e34]/20');
    }, 800);
  });
}

// Doğrulama ve Eşleştirme Mantığı (1 Saniyelik Kilit ve Kart Alanında Geri Bildirim)
function handlePlacementAttempt(cardId, targetRegion) {
  if (isMatchingLocked) return;

  const cardData = cardsData.find(c => c.id === cardId);
  if (!cardData) return;

  const stage1Container = document.getElementById('stage-1-container');
  isMatchingLocked = true;
  if (stage1Container) stage1Container.classList.add('matching-locked');
  clearSelection();

  // Bölge kontrolü (Hatalı Eşleştirme)
  if (cardData.region !== targetRegion) {
    triggerErrorEffect(targetRegion);
    showCardFeedback('Yanlış eşleştirme', false);

    matchingLockTimeout = setTimeout(() => {
      isMatchingLocked = false;
      if (stage1Container) stage1Container.classList.remove('matching-locked');
      renderActiveCard();
    }, 1000);
    return;
  }

  // Doğru Eşleştirme
  placeCardIntoTarget(cardData, targetRegion);

  showCardFeedback('Doğru eşleştirme', true);

  matchingLockTimeout = setTimeout(() => {
    isMatchingLocked = false;
    if (stage1Container) stage1Container.classList.remove('matching-locked');
    renderActiveCard();
  }, 1000);
}

// Tamamlanma Durumu Kontrolü (Sayaçsız, sade pedagojik durum)
function updateProgress() {
  const regions = ['mezopotamya', 'guneydogu-asya', 'orta-amerika'];
  regions.forEach(r => {
    let regionCompletedCount = 0;
    const regionTotal = cardsData.filter(c => c.region === r).length;
    cardsData.filter(c => c.region === r).forEach(c => {
      if (placedCards.has(c.id)) regionCompletedCount++;
    });

    const isFinished = regionCompletedCount === regionTotal;

    // Harita üzerindeki durum göstergesi
    const mapTarget = document.getElementById(`target-${r}`);
    if (mapTarget) {
      const statusIndicator = mapTarget.querySelector('.map-status-indicator');
      if (statusIndicator) {
        statusIndicator.classList.toggle('hidden', !isFinished);
      }

      if (isFinished) {
        mapTarget.classList.add('completed');
      } else {
        mapTarget.classList.remove('completed');
      }
    }

    // Alt kısımdaki bölge kartı tamamlanma durumu
    const regionCard = document.getElementById(`region-card-${r}`);
    if (regionCard) {
      if (isFinished) {
        regionCard.classList.add('completed');
      } else {
        regionCard.classList.remove('completed');
      }
    }
  });
}

// Etkinliği Sıfırlama
function resetActivity() {
  placedCards.clear();
  isMatchingLocked = false;
  if (matchingLockTimeout) clearTimeout(matchingLockTimeout);
  const stage1Container = document.getElementById('stage-1-container');
  if (stage1Container) stage1Container.classList.remove('matching-locked');

  // İlk olarak bölge isimleri (kendi içinde rastgele sırada) gelir, ardından kalan tüm bilgi kartları karışık olarak sunulur
  const regionCards = shuffleArray(cardsData.filter(c => c.category === 'bolge'));
  const infoCards = shuffleArray(cardsData.filter(c => c.category !== 'bolge'));
  remainingCards = [...regionCards, ...infoCards];

  // Değerlendirme sorularını ve seçeneklerini her yenilendiğinde yeniden karıştır
  prepareQuizQuestions();

  clearSelection();

  // Hedef alanlardaki kart listelerini ve alt panelleri sıfırla
  ['mezopotamya', 'guneydogu-asya', 'orta-amerika'].forEach(r => {
    // 1. Masaüstü harita hedef listesini temizle
    const listEl = document.getElementById(`list-${r}`);
    if (listEl) listEl.innerHTML = '';

    const mapTarget = document.getElementById(`target-${r}`);
    if (mapTarget) {
      mapTarget.classList.remove('completed');
      mapTarget.removeAttribute('title');
      // Mobil rozet adını sıfırla
      const badge = mapTarget.querySelector('.map-badge-title');
      if (badge) badge.textContent = '?';
    }

    // 2. Alt kısımdaki bölge kartını sıfırla
    const regionItems = document.getElementById(`region-items-${r}`);
    if (regionItems) {
      regionItems.innerHTML = `
        <div class="region-placeholder text-[11px] text-[#637065]/70 italic py-1">
          Henüz özellik eşleştirilmedi. Kartı seçip buraya veya haritaya dokununuz.
        </div>
      `;
    }

    const regionCard = document.getElementById(`region-card-${r}`);
    if (regionCard) {
      regionCard.classList.remove('completed');
      // Alt kart başlığını ve tarihini sıfırla
      const headerName = regionCard.querySelector('.region-header-name');
      const headerDate = regionCard.querySelector('.region-header-date');
      if (headerName) headerName.textContent = '?';
      if (headerDate) headerDate.classList.add('hidden');
    }
  });

  updateProgress();
  renderActiveCard();
}

// Özel Mouse Sürükle-Bırak Sistemi (HTML5 Drag API kullanılmaz, kilitlenme riski sıfır)
function setupMouseDrag(el, cardId) {
  let mouseClone = null;
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let didDrag = false;

  function onMouseDown(e) {
    if (isMatchingLocked || e.button !== 0) return;
    // Tarayıcının native drag davranışını engelle (kilitlenme kaynağı)
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    isDragging = false;
    didDrag = false;
    draggedCardId = cardId;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(e) {
    if (isMatchingLocked) { cleanUp(); return; }
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (!isDragging && Math.hypot(dx, dy) > 6) {
      isDragging = true;
      didDrag = true;
      mouseClone = el.cloneNode(true);
      mouseClone.id = 'mouse-drag-clone';
      mouseClone.style.position = 'fixed';
      mouseClone.style.pointerEvents = 'none';
      mouseClone.style.zIndex = '9999';
      mouseClone.style.opacity = '0.92';
      mouseClone.style.width = `${el.offsetWidth}px`;
      mouseClone.style.transform = 'translate(-50%, -50%) scale(0.97)';
      mouseClone.style.boxShadow = '0 12px 28px rgba(45,34,18,0.35)';
      mouseClone.style.transition = 'none';
      mouseClone.style.animation = 'none';
      document.body.appendChild(mouseClone);
      el.classList.add('opacity-40');
    }

    if (isDragging && mouseClone) {
      mouseClone.style.left = `${e.clientX}px`;
      mouseClone.style.top = `${e.clientY}px`;

      // Hedef alanları vurgula
      const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
      const target = elemBelow?.closest('.map-focus-target, .region-summary-card');
      document.querySelectorAll('.map-focus-target, .region-summary-card').forEach(t => {
        if (t === target) {
          t.classList.add('drag-over-region');
        } else {
          t.classList.remove('drag-over-region');
        }
      });
    }
  }

  function onMouseUp(e) {
    if (isDragging) {
      // Hedef alanı bul ve yerleştir
      const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
      const target = elemBelow?.closest('.map-focus-target, .region-summary-card');

      if (target && draggedCardId) {
        const region = target.getAttribute('data-region');
        if (region) {
          handlePlacementAttempt(draggedCardId, region);
        }
      }
    } else {
      // Sürükleme yapılmadıysa (kısa tıklama), kart seçimini tetikle
      toggleCardSelection();
    }
    cleanUp();
  }

  function cleanUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    if (mouseClone) {
      mouseClone.remove();
      mouseClone = null;
    }
    el.classList.remove('opacity-40');
    isDragging = false;
    draggedCardId = null;
    document.querySelectorAll('.drag-over-region').forEach(t => {
      t.classList.remove('drag-over-region');
    });
  }

  el.addEventListener('mousedown', onMouseDown);
}

// Hedef Alanları Dinleyicilerini Kurma (Tıklama / Dokunma Desteği)
function setupDropTargets() {
  const allTargets = document.querySelectorAll('.map-focus-target, .region-summary-card');
  allTargets.forEach(target => {
    const region = target.getAttribute('data-region');
    if (!region) return;

    // Tıklama / Dokunma (Seçili kart varsa doğrudan yerleştir)
    target.addEventListener('click', () => {
      if (selectedCardId) {
        handlePlacementAttempt(selectedCardId, region);
      }
    });
  });

  // Boş alana tıklanınca seçimi temizleme
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.active-card-item') && !e.target.closest('.map-focus-target') && !e.target.closest('.region-summary-card')) {
      clearSelection();
    }
  });
}

// Genel Durum Değişkenleri
let currentStage = 0;

// Yüzen Aşama Değiştirme Butonlarını Güncelleme
function updateFloatingStageNav() {
  const prevBtn = document.getElementById('floating-prev-stage-btn');
  const nextBtn = document.getElementById('floating-next-stage-btn');

  if (prevBtn) {
    prevBtn.disabled = currentStage <= 0;
  }
  if (nextBtn) {
    nextBtn.disabled = currentStage >= 2;
  }
}

// ==========================================
// ==========================================
// 2. AŞAMA: DEĞERLENDİRME VE ÇIKARIM SORULARI
// ==========================================

const videoQuizQuestions = [
  {
    id: 1,
    question: "İlk insanların akıllarını ve ellerini kullanarak yaptıkları ilk aletler hangi temel malzemeden üretilmiştir?",
    options: [
      { letter: "A", text: "Bakır", correct: false },
      { letter: "B", text: "Bronz (tunç)", correct: false },
      { letter: "C", text: "Taş", correct: true },
      { letter: "D", text: "Demir", correct: false }
    ],
    explanation: "İnsanlık tarihinin ilk aletleri doğada kolayca bulunabilen ve yontulabilen taşlardan üretilmiştir. Madenlerin keşfedilip işlenmesi ise çok daha sonraki devirlerde gerçekleşmiştir."
  },
  {
    id: 2,
    question: "Tarım üretiminin artmasıyla ortaya çıkan ve toplumun tüketim ihtiyacının üzerinde kalan ürüne ne ad verilir?",
    options: [
      { letter: "A", text: "Vergi", correct: false },
      { letter: "B", text: "Ticaret malı", correct: false },
      { letter: "C", text: "Rant", correct: false },
      { letter: "D", text: "Artı ürün", correct: true }
    ],
    explanation: "Tarımsal üretimde üreticilerin kendi ihtiyaçlarının ötesinde elde ettikleri gıda fazlasına 'artı ürün' denir. Artı ürün, ticaretin ve mesleki uzmanlaşmanın temelini oluşturmuştur."
  },
  {
    id: 3,
    question: "Artı ürünün ortaya çıkmasıyla birlikte insan yaşamında ve toplum düzeninde aşağıdakilerden hangisi gerçekleşmemiştir?",
    options: [
      { letter: "A", text: "Takas ekonomisinin ve yerel pazar yerlerinin gelişmesi", correct: false },
      { letter: "B", text: "Göçebe yaşam tarzının dünya genelinde yaygınlaşması", correct: true },
      { letter: "C", text: "Sosyal sınıfların ve mesleki tabakalaşmanın oluşması", correct: false },
      { letter: "D", text: "Toprak üzerinde özel mülkiyet anlayışının doğması", correct: false }
    ],
    explanation: "Artı ürün göçebe yaşamı yaygınlaştırmamış; tam aksine ambarların, tarlaların ve yerleşimin korunması gereği nedeniyle kalıcı yerleşik köy ve şehir hayatını güçlendirmiştir."
  },
  {
    id: 4,
    question: "Avcı-toplayıcı göçebe yaşamdan tarımsal üretime geçiş değerlendirildiğinde; bu dönüşümün insan ile doğa arasındaki ilişki üzerindeki en temel etkisi aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Doğal kaynakların zamanla azalması sebebiyle insanın çevre üzerindeki bütün etkisini ve müdahalesini tamamen sonlandırması", correct: false },
      { letter: "B", text: "İnsanın doğada hazır bulduğunu tüketen konumdan çıkarak doğayı kendi ihtiyaçları doğrultusunda dönüştüren üretici konuma gelmesi", correct: true },
      { letter: "C", text: "İklim ve coğrafya şartlarının insan yaşamı, barınma biçimleri ve üretim faaliyetleri üzerindeki belirleyici rolünün tamamen bitmesi", correct: false },
      { letter: "D", text: "İnsan topluluklarının çevredeki yabani bitki ve hayvan türlerini koruma amacıyla kendi istekleriyle korunaklı köyler inşa etmesi", correct: false }
    ],
    explanation: "Tarım Devrimi ile birlikte insan, çevresinde hazır bulduğunu tüketen pasif bir canlı olmaktan çıkmış; toprağı işleyerek, tohumu ekerek ve suları yönlendirerek doğayı kendi lehine dönüştüren aktif üretici bir konuma ulaşmıştır."
  },
  {
    id: 5,
    question: "Tarımsal üretimin başlamasıyla önce küçük köyler, ardından surlarla çevrili ve ambarlara sahip kalabalık şehirler kurulmuştur. Yerleşimlerin zamanla büyümesinde ve savunma yapılarının inşa edilmesinde etkili olan temel neden aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Avcı-toplayıcı göçebelerin yerleşik hayata geçmesini kesin olarak engelleyerek şehir nüfusunu sabit tutma arzusu", correct: false },
      { letter: "B", text: "Farklı bölgelerdeki üretici kabilelerin birbirleriyle ticari temas kurmasını önlemek için fiziksel sınırlar çekme isteği", correct: false },
      { letter: "C", text: "Hasat edilen artı ürünün, tohum ambarlarının ve yerleşik düzenin dışarıdan gelebilecek yağmalara karşı korunma zorunluluğu", correct: true },
      { letter: "D", text: "Tarım alanlarının yetersizliği nedeniyle şehir halkının tarlalarını surların içindeki dar parsellere taşıma mecburiyeti", correct: false }
    ],
    explanation: "Tarımla birlikte biriktirilen gıda stoku ve tohumluklar yaşamsal bir zenginlik oluşturmuştur. Bu birikimi dışarıdan gelecek saldırılara karşı koruma gereği; surların, ortak ambarların ve organize şehirlerin kurulmasını sağlamıştır."
  },
  {
    id: 6,
    question: "Tarım Devrimi ile birlikte dünya nüfusunda avcı-toplayıcı döneme göre belirgin bir artış yaşanmıştır. Bu nüfus artışını doğrudan hazırlayan koşullar aşağıdakilerden hangisinde birlikte verilmiştir?",
    options: [
      { letter: "A", text: "Besin bulma kaygısının azalması, gıdanın depolanabilmesi ve tarlaların işlenmesi için sürekli iş gücüne duyulan ihtiyacın artması", correct: true },
      { letter: "B", text: "Salgın hastalıkların tıp sayesinde tamamen son bulması ve insanların vahşi doğayla olan tüm temasının kesilmesi", correct: false },
      { letter: "C", text: "Avcılık faaliyetlerinin yasaklanmasıyla birlikte tüm nüfusun eşit kurallarla sadece kamu tarlalarında çalıştırılması", correct: false },
      { letter: "D", text: "Topluluklar arasındaki savaşların tamamen durması ve yerleşik köylerin hiçbir dış tehditle karşılaşmaması", correct: false }
    ],
    explanation: "Besin arzının düzenli hale gelmesi kıtlık riskini azaltırken, tarlaların sürülmesi, ekilmesi ve hasadı için insan emeğine duyulan yoğun gereksinim aileleri daha fazla çocuk sahibi olmaya yöneltmiş ve nüfusu hızla katlamıştır."
  },
  {
    id: 7,
    question: "Artı ürünün varlığı, toplumun tüm üyelerinin tarlada çalışma zorunluluğunu ortadan kaldırmıştır. Bu durumun toplumsal yapı ve ekonomik yaşamdaki en doğrudan sonucu aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Tarımsal üretimin tamamen durdurulmasıyla halkın tüm ihtiyaçlarını yalnızca takas pazarlarından karşılamaya başlaması", correct: false },
      { letter: "B", text: "Zanaatkârların üretimden tamamen çekilerek kendi istekleriyle yeniden göçebe avcılık ve toplayıcılığa geri dönmesi", correct: false },
      { letter: "C", text: "Toplumdaki bütün bireylerin yalnızca tek bir zanaat dalında toplanması ve tarım arazilerinin tamamen terk edilmesi", correct: false },
      { letter: "D", text: "Çömlekçilik, dokumacılık, maden işlemeciliği ve ticaret gibi yeni iş kollarının ortaya çıkarak mesleki uzmanlaşmanın başlaması", correct: true }
    ],
    explanation: "Artı ürün sayesinde herkesin tarlada çalışmasına gerek kalmamıştır. Bir grup insan besin üretirken; diğerleri çömlekçilik, dokumacılık, maden işlemeciliği, yöneticilik veya ticaret gibi alanlara ayrılarak uzmanlaşmıştır."
  },
  {
    id: 8,
    question: "Tarımsal üretim fazlası (artı ürün) elde eden topluluklar, ellerindeki fazla ürünleri kendilerinde bulunmayan ihtiyaç maddeleriyle değiştirmeye başlamışlardır. Bu sürecin ortaya çıkardığı en önemli ekonomik gelişme aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Takas yoluyla ticari faaliyetlerin başlaması, pazar yerlerinin kurulması ve ekonomik hayatın çeşitlenmesi", correct: true },
      { letter: "B", text: "Toplulukların dış dünyayla olan tüm ilişkilerini keserek yalnızca kendi köylerinde kapalı ekonomik düzen kurması", correct: false },
      { letter: "C", text: "Madeni paranın henüz kullanılmaması sebebiyle yerleşimler arasındaki tüm ürün alışverişinin tamamen durması", correct: false },
      { letter: "D", text: "İhtiyaç fazlası tarım ürünlerinin diğer topluluklara verilmesini önlemek amacıyla doğrudan toprağa gömülmesi", correct: false }
    ],
    explanation: "Üretilen artı ürünler takas yoluyla başka toplulukların ürünleriyle değiştirilmeye başlanmış; bu durum pazar yerlerinin kurulmasını, ticaret yollarının doğmasını ve zengin bir ekonomik yapıyı ortaya çıkarmıştır."
  },
  {
    id: 9,
    question: "Avcı-toplayıcı topluluklarda doğadaki kaynaklar ortaklaşa kullanılırken, tarım ve artı ürünle birlikte tarlalar ve hasat edilen ürünler belirli kişi veya ailelerin sahipliğine geçmiştir. Bu gelişmenin toplum yapısında yol açtığı en belirgin sonuç aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Bütün toplum üyelerinin eşit ekonomik hak ve mülkiyete sahip olduğu sınıfsız bir yaşam düzeninin kalıcı hale gelmesi", correct: false },
      { letter: "B", text: "Özel mülkiyet anlayışının doğmasıyla birlikte zenginlik farklarının, köleliğin ve sosyal sınıfların ortaya çıkması", correct: true },
      { letter: "C", text: "Mülkiyet kavgaları nedeniyle yerleşik köylerin hızla dağılarak insanların yeniden mağara yaşamına kesin dönüş yapması", correct: false },
      { letter: "D", text: "Üretilen ürünlerin doğrudan tüketilmesi sebebiyle bireyler arasındaki kazanç ve birikim arzusunun tamamen bitmesi", correct: false }
    ],
    explanation: "Tarlaların ve artı ürünün kime ait olacağı sorusu özel mülkiyeti doğurmuş; zamanla üretim araçlarına sahip olanlar ile çalıştırılanlar (köleler ve borçlular) arasında sınıfsal tabakalaşma başlamıştır."
  },
  {
    id: 10,
    question: "Artı ürünün ambarlarda toplanıp dağıtılması, geniş sulama kanallarının organize biçimde açılması, özel mülkiyet anlaşmazlıklarının çözülmesi ve farklı sosyal sınıflar arasındaki düzenin korunması gerekmiştir. Bu zorunluluklar insanlık tarihinde hangi kurumsal yapının ortaya çıkmasını sağlamıştır?",
    options: [
      { letter: "A", text: "Şehirler arasındaki tüm ticareti ve pazar yerlerini tamamen yasaklayan kapalı kale topluluklarının", correct: false },
      { letter: "B", text: "Her ailenin kendi savunmasını ve adaletini yalnızca kaba kuvvet kullanarak sağladığı kuralsız bir yapının", correct: false },
      { letter: "C", text: "Ortak üretimi, savunmayı, mülkiyet hukukunu ve toplumsal düzeni sağlayan merkezi otorite ve devlet teşkilatının", correct: true },
      { letter: "D", text: "Yazının kullanımını engelleyerek toplumu yalnızca sözlü kabile gelenekleriyle yöneten ilkel meclislerin", correct: false }
    ],
    explanation: "Sulama kanalları gibi devasa bayındırlık işleri bireysel güçle yapılamazdı. Artı ürünün idaresi, sınıflar arası adaletin sağlanması ve dış savunma ihtiyacı, örgütlü bir kamu otoritesini yani devlet teşkilatını ve yazılı hukuku zorunlu kılmıştır."
  }
];

let activeQuizQuestions = [];
let currentQuizIndex = 0;
let quizAnswered = false;

// Soru ve Seçenekleri Dinamik Olarak Karıştırma Fonksiyonu
function prepareQuizQuestions() {
  const shuffledQuestions = shuffleArray(videoQuizQuestions);

  activeQuizQuestions = shuffledQuestions.map(q => {
    const shuffledOptions = shuffleArray(q.options);
    const letters = ['A', 'B', 'C', 'D'];
    const optionsWithLetters = shuffledOptions.map((opt, idx) => ({
      ...opt,
      letter: letters[idx]
    }));

    return {
      ...q,
      options: optionsWithLetters
    };
  });

  currentQuizIndex = 0;
  quizAnswered = false;
}

// Soru Sahnesi ve Video Görünüm Geçişleri
function showQuizView() {
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  if (videoEl && !videoEl.paused) {
    videoEl.pause();
  }

  // Soru butonunu gizle
  if (quizPrompt) quizPrompt.classList.add('hidden');

  // Soru modalını bu modalın/videonun üzerinde katman olarak aç
  if (quizWrapper) {
    quizWrapper.classList.remove('hidden');
    quizWrapper.classList.add('flex');
  }

  // Sorular henüz hazırlanmadıysa karıştır
  if (!activeQuizQuestions.length) {
    prepareQuizQuestions();
  }

  renderQuizQuestion();
}

function showVideoView() {
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  // Soru modalını kapat
  if (quizWrapper) {
    quizWrapper.classList.add('hidden');
    quizWrapper.classList.remove('flex');
  }

  // Video daha önce tamamlandıysa buton görünür kalır
  if (videoEl && videoEl.ended && quizPrompt) {
    quizPrompt.classList.remove('hidden');
  }
}

// Soru Render Etme
function renderQuizQuestion() {
  const container = document.getElementById('quiz-question-container');
  if (!container) return;

  if (!activeQuizQuestions.length) {
    prepareQuizQuestions();
  }

  quizAnswered = false;

  // Tüm sorular tamamlandı mı?
  if (currentQuizIndex >= activeQuizQuestions.length) {
    container.innerHTML = `
      <div class="text-center py-5 px-3 space-y-4 animate-in fade-in zoom-in duration-300">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1e3b2e] text-[#fffdfa] text-2xl font-bold border-2 border-[#d49d3d] shadow-md">
          ✓
        </div>
        <h3 class="font-monumental text-lg sm:text-xl font-bold text-[#1e3b2e]">
          Değerlendirmeyi Tamamladınız!
        </h3>
        <p class="text-xs sm:text-sm text-[#38332b] max-w-xl mx-auto leading-relaxed">
          Tarım Devrimi'nin yerleşmeye, ekonomik hayata, mesleki iş bölümüne ve günümüz medeniyetine etkilerini başarıyla tamamladınız.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button id="btn-restart-entire-activity" class="px-6 py-3 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] text-xs sm:text-sm font-semibold rounded-[10px] border border-[#d49d3d]/50 transition-all shadow-md cursor-pointer select-none">
            Etkinliği Yeniden Başlat
          </button>
          <button id="btn-finish-activity" class="px-6 py-3 bg-[#9e4e34] hover:bg-[#833d25] text-[#fffdfa] text-xs sm:text-sm font-semibold rounded-[10px] border border-[#beab8f] transition-all shadow-md cursor-pointer select-none">
            Etkinliği Bitir
          </button>
        </div>
      </div>
    `;

    // SCORM Tamamlandı Bildirimi Yardımcısı
    function notifyScormCompleted() {
      try {
        if (typeof scorm !== 'undefined' && scorm.set) {
          scorm.set("cmi.core.lesson_status", "completed");
          scorm.set("cmi.completion_status", "completed");
          if (scorm.save) scorm.save();
        } else if (window.pipwerks && window.pipwerks.SCORM) {
          window.pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
          window.pipwerks.SCORM.set("cmi.completion_status", "completed");
          window.pipwerks.SCORM.save();
        }
      } catch (e) {}
    }

    // Etkinliği Yeniden Başlat Butonu Dinleyicisi (En Başa Döner)
    const restartActivityBtn = document.getElementById('btn-restart-entire-activity');
    if (restartActivityBtn) {
      restartActivityBtn.addEventListener('click', () => {
        notifyScormCompleted();
        resetActivity();
        const videoEl = document.getElementById('stage2-video');
        if (videoEl) {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
        const quizWrapper = document.getElementById('stage2-quiz-wrapper');
        if (quizWrapper) {
          quizWrapper.classList.add('hidden');
          quizWrapper.classList.remove('flex');
        }
        const quizPrompt = document.getElementById('stage2-quiz-prompt');
        if (quizPrompt) quizPrompt.classList.add('hidden');
        switchStage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Etkinliği Bitir Butonu Dinleyicisi (Tamamen Kapanır)
    const finishActivityBtn = document.getElementById('btn-finish-activity');
    if (finishActivityBtn) {
      finishActivityBtn.addEventListener('click', () => {
        notifyScormCompleted();
        const videoEl = document.getElementById('stage2-video');
        if (videoEl) videoEl.pause();

        // Pencereyi kapatmayı dene
        try {
          window.close();
        } catch (e) {}

        // Tarayıcı güvenlik kısıtlaması nedeniyle doğrudan kapatamazsa tam ekran kapanış durumunu göster
        document.body.innerHTML = `
          <div class="fixed inset-0 z-50 bg-[#fbf7ee] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 select-none">
            <div class="max-w-md w-full p-8 rounded-[18px] bg-[#fffdfa] border-2 border-[#beab8f] shadow-2xl space-y-4">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3b2e] text-[#fffdfa] text-3xl font-bold border-2 border-[#d49d3d] shadow-md">
                ✓
              </div>
              <h2 class="font-monumental text-xl sm:text-2xl font-bold text-[#1e3b2e]">
                Etkinlik Tamamlandı
              </h2>
              <p class="text-sm text-[#38332b] leading-relaxed">
                Etkinliği başarıyla bitirdiniz. Bu pencereyi kapatabilirsiniz.
              </p>
            </div>
          </div>
        `;
      });
    }
    return;
  }

  const q = activeQuizQuestions[currentQuizIndex];

  container.innerHTML = `
    <!-- Soru Metni -->
    <p class="font-body font-bold text-base sm:text-lg md:text-[19px] text-[#1e3b2e] leading-snug">
      ${q.question}
    </p>

    <!-- Seçenekler Listesi -->
    <div class="flex flex-col gap-2 pt-1" id="quiz-options-list">
      ${q.options.map((opt, idx) => `
        <div class="quiz-option-card" data-index="${idx}" role="button" tabindex="0">
          <span class="quiz-option-letter">${opt.letter}</span>
          <span class="text-sm sm:text-[15px] md:text-[16px] text-[#2c261e] font-medium leading-snug flex-1">${opt.text}</span>
        </div>
      `).join('')}
    </div>

    <!-- Alt Etkileşim Alanı: Açıklama ve Sonraki Soru Butonu -->
    <div id="quiz-bottom-bar" class="hidden flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 animate-in fade-in duration-200">
      <div id="quiz-feedback-card" class="flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border transition-all shadow-2xs"></div>
      <button id="btn-next-quiz-question" class="shrink-0 px-6 py-3 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] font-bold text-sm sm:text-base rounded-[10px] border border-[#d49d3d]/50 transition-all shadow-sm select-none cursor-pointer text-center whitespace-nowrap">
        ${currentQuizIndex === activeQuizQuestions.length - 1 ? 'Sonucu Gör ➔' : 'Sonraki Soru ➔'}
      </button>
    </div>
  `;

  // Şık Tıklama Olayları
  container.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      if (quizAnswered) return;
      const optIdx = Number(card.getAttribute('data-index'));
      handleQuizAnswerSelection(optIdx);
    });
  });

  // Sonraki Soru Butonu Olayı
  const nextBtn = document.getElementById('btn-next-quiz-question');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuizIndex++;
      renderQuizQuestion();
    });
  }
}

// Şık Seçimi Değerlendirme
function handleQuizAnswerSelection(selectedIndex) {
  quizAnswered = true;
  const q = activeQuizQuestions[currentQuizIndex];
  const selectedOpt = q.options[selectedIndex];
  const optionsList = document.getElementById('quiz-options-list');
  const feedbackCard = document.getElementById('quiz-feedback-card');
  const bottomBar = document.getElementById('quiz-bottom-bar');
  const nextBtn = document.getElementById('btn-next-quiz-question');

  if (!optionsList) return;

  const optionCards = optionsList.querySelectorAll('.quiz-option-card');
  optionCards.forEach((card, idx) => {
    card.classList.add('locked');
    const isThisCorrect = q.options[idx].correct;

    if (idx === selectedIndex) {
      if (selectedOpt.correct) {
        card.classList.add('correct');
      } else {
        card.classList.add('wrong');
      }
    } else if (isThisCorrect) {
      card.classList.add('correct');
    }
  });

  if (bottomBar) {
    bottomBar.classList.remove('hidden');
    bottomBar.classList.add('flex');
  }

  if (feedbackCard) {
    if (selectedOpt.correct) {
      feedbackCard.className = 'flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border bg-[#eaf1e8] border-[#1e3b2e] text-[#1e3b2e] font-medium';
      feedbackCard.innerHTML = `<strong>Doğru Değerlendirme:</strong> ${q.explanation}`;
    } else {
      feedbackCard.className = 'flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border bg-[#fdf3f0] border-[#9e4e34] text-[#9e4e34] font-medium';
      feedbackCard.innerHTML = `<strong>Açıklama:</strong> ${q.explanation}`;
    }
  }

  if (nextBtn) {
    nextBtn.classList.remove('hidden');
  }
}

// Aşama Değiştirme
function switchStage(stageNum) {
  currentStage = stageNum;
  const stageIntroContainer = document.getElementById('stage-intro-container');
  const stage1Container = document.getElementById('stage-1-container');
  const stage2Container = document.getElementById('stage-2-container');
  const videoEl = document.getElementById('stage2-video');

  if (stageIntroContainer) stageIntroContainer.classList.toggle('hidden', stageNum !== 0);
  if (stage1Container) stage1Container.classList.toggle('hidden', stageNum !== 1);
  if (stage2Container) stage2Container.classList.toggle('hidden', stageNum !== 2);

  // Video başka aşamaya geçildiğinde otomatik duraklatılsın
  if (stageNum !== 2 && videoEl && !videoEl.paused) {
    videoEl.pause();
  }

  updateFloatingStageNav();

  if (feedbackBanner) feedbackBanner.classList.add('hidden');

  if (stageNum === 0) {
    // Giriş ekranı
  } else if (stageNum === 1) {
    renderActiveCard();
  } else if (stageNum === 2) {
    // Video görünümünü varsayılan yap
    showVideoView();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Başlatma Olayları
function init() {
  resetActivity();
  setupDropTargets();

  // Giriş Ekranı Butonları
  const btnStartActivity = document.getElementById('btn-start-activity');
  if (btnStartActivity) {
    btnStartActivity.addEventListener('click', () => {
      switchStage(1);
    });
  }

  const btnBackToIntro = document.getElementById('btn-back-to-intro');
  if (btnBackToIntro) {
    btnBackToIntro.addEventListener('click', () => {
      switchStage(0);
    });
  }

  // 1. Aşama Butonları
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetActivity();
      showFeedback('Etkinlik sıfırlandı. Kartlar yeniden karıştırıldı.', true);
    });
  }

  // 2. Aşama Video ve Soru Geçiş Dinleyicileri
  const stage2Video = document.getElementById('stage2-video');
  const stage2QuizPrompt = document.getElementById('stage2-quiz-prompt');
  if (stage2Video) {
    stage2Video.addEventListener('ended', () => {
      // Video bitince altta ortada "Sorulara Geç ➔" butonunu göster
      if (stage2QuizPrompt) {
        stage2QuizPrompt.classList.remove('hidden');
        stage2QuizPrompt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    stage2Video.addEventListener('play', () => {
      // Video başa sarılıp tekrar oynatılırsa butonu gizle (bitene kadar)
      if (stage2Video.currentTime < 1 && stage2QuizPrompt) {
        stage2QuizPrompt.classList.add('hidden');
      }
    });
  }

  const btnToggleQuiz = document.getElementById('btn-toggle-quiz');
  if (btnToggleQuiz) {
    btnToggleQuiz.addEventListener('click', () => {
      showQuizView();
    });
  }

  const btnToggleVideo = document.getElementById('btn-toggle-video');
  if (btnToggleVideo) {
    btnToggleVideo.addEventListener('click', () => {
      showVideoView();
    });
  }



  // Yüzen Aşama Değiştirme Butonları Dinleyicileri (Sağ ve Sol Ok)
  const floatingPrevBtn = document.getElementById('floating-prev-stage-btn');
  if (floatingPrevBtn) {
    floatingPrevBtn.addEventListener('click', () => {
      if (currentStage > 0) switchStage(currentStage - 1);
    });
  }

  const floatingNextBtn = document.getElementById('floating-next-stage-btn');
  if (floatingNextBtn) {
    floatingNextBtn.addEventListener('click', () => {
      if (currentStage < 2) switchStage(currentStage + 1);
    });
  }

  switchStage(0);
}

// Uygulamayı Başlat
document.addEventListener('DOMContentLoaded', init);
