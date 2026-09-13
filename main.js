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
    question: "İlk insanların doğadaki taşları yontarak ve kemikleri işleyerek alet üretmelerinin temel amaçları arasında hangileri yer alır?",
    options: [
      { text: "Besin maddelerini kesmek ve avlanan hayvanların derilerini işlemek", correct: true },
      { text: "Avcılık ve vahşi hayvanlara karşı savunma faaliyetlerini kolaylaştırmak", correct: true },
      { text: "Madenleri yüksek ısıda eritip kalıplara dökerek süs eşyası yapmak", correct: false },
      { text: "Toprağı kazmak ve yabani bitki köklerini çıkarmak", correct: true }
    ],
    explanation: "İlk insanlar taştan ve kemikten aletleri avlanmak, bitki köklerini topraktan sökmek, et ve derileri parçalamak amacıyla üretmişlerdir. Madenlerin eritilip işlenmesi ise insanlık tarihinde çok daha sonraki devirlerde başlamıştır."
  },
  {
    id: 2,
    question: "Tarımsal üretimin artmasıyla ortaya çıkan artı ürün ile ilgili aşağıdaki yargılardan hangileri doğrudur?",
    options: [
      { text: "Toplumun kendi tüketim ihtiyacının üzerinde kalan mahsul fazlasıdır.", correct: true },
      { text: "Ürünlerin saklanabilmesi için ambar ve kiler yapımını zorunlu kılmıştır.", correct: true },
      { text: "İnsanların yerleşik yaşamı terk ederek tamamen göçebeliğe dönmesine yol açmıştır.", correct: false },
      { text: "Takas usulüyle ticaretin başlamasına ve pazar yerlerinin kurulmasına zemin hazırlamıştır.", correct: true }
    ],
    explanation: "Artı ürün; tüketim ihtiyacının üzerindeki mahsul fazlasıdır. Ambarların yapılmasını sağlamış, ticareti ve yerleşik köy hayatını güçlendirmiştir. Göçebeliğe yol açmamıştır."
  },
  {
    id: 3,
    question: "Avcı-toplayıcı yaşamdan tarımsal üretime geçişin insan yaşamı üzerindeki etkileri arasında hangileri yer alır?",
    options: [
      { text: "İnsanın doğada hazır bulduğunu tüketen durumdan üretici duruma geçmesi", correct: true },
      { text: "Tarlaların ve ürünlerin başında kalma gereğiyle kalıcı köylerin inşa edilmesi", correct: true },
      { text: "İnsanın çevre ve doğa üzerindeki müdahalesinin tamamen son bulması", correct: false },
      { text: "Gıdanın depolanabilmesi sayesinde kıtlık ve açlık riskinin azalması", correct: true }
    ],
    explanation: "Tarımla birlikte insan üretici konuma gelmiş, kalıcı konutlar ve köyler yapmış, besin stoklayarak kıtlığı azaltmıştır. Doğaya müdahalesi son bulmamış, aksine artmıştır."
  },
  {
    id: 4,
    question: "Tarım Devrimi ile birlikte yerleşimlerin etrafına surlar örülmesinde ve savunma yapılarının inşa edilmesinde hangi gerekçeler etkilidir?",
    options: [
      { text: "Ambarlarda toplanan artı ürünü ve tohumlukları yağmalara karşı koruma zorunluluğu", correct: true },
      { text: "Yerleşik halkın tarlalarını, evlerini ve yaşam alanlarını güvenceye alma isteği", correct: true },
      { text: "Yerleşik köyler arasındaki tüm ticari ilişkileri ve takası tamamen durdurma arzusu", correct: false },
      { text: "Dışarıdan gelebilecek saldırı ve baskınlara karşı ortak savunma ihtiyacı", correct: true }
    ],
    explanation: "Surlar ve savunma yapıları; biriktirilen artı ürünün, tohum ambarlarının ve yerleşim yerlerinin dış tehditlere karşı korunması amacıyla yapılmıştır. Amaç ticareti durdurmak değil, güvenliği sağlamaktır."
  },
  {
    id: 5,
    question: "Tarım toplumlarında nüfusun avcı-toplayıcı döneme göre belirgin şekilde artmasını sağlayan etkenler arasında hangileri bulunur?",
    options: [
      { text: "Düzenli besin üretiminin ve depolamanın açlık tehlikesini azaltması", correct: true },
      { text: "Tarlaların ekimi, sürülmesi ve hasadı için insan iş gücüne duyulan ihtiyacın artması", correct: true },
      { text: "Salgın hastalıkların tamamen yok edilmesi ve tıp biliminin zirveye ulaşması", correct: false },
      { text: "Yerleşik yaşamın çocuk bakımını ve aile hayatını daha elverişli hale getirmesi", correct: true }
    ],
    explanation: "Düzenli gıda arzı, yerleşik yaşamın sağladığı korunaklı çevre ve tarlada çalışacak iş gücüne duyulan gereksinim nüfus artışını hızlandırmıştır. O devirde salgın hastalıklar tamamen yok olmamıştır."
  },
  {
    id: 6,
    question: "Artı ürünün ortaya çıkması ve toplumun tüm bireylerinin tarlada çalışmak zorunda kalmaması hangi sonuçları doğurmuştur?",
    options: [
      { text: "Çömlekçilik, dokumacılık ve maden işlemeciliği gibi zanaat kollarının gelişmesi", correct: true },
      { text: "Mesleki uzmanlaşmanın ve iş bölümünün başlaması", correct: true },
      { text: "Toplumdaki bütün insanların üretimden çekilerek yalnızca avcılık yapması", correct: false },
      { text: "Yöneticilik, din ve savunma gibi farklı toplumsal görevlerin belirmesi", correct: true }
    ],
    explanation: "Besin fazlası sayesinde toplumun bir kesimi zanaat, ticaret, yönetim ve savunma işlerine ayrılmış; böylece mesleki uzmanlaşma ve toplumsal iş bölümü doğmuştur."
  },
  {
    id: 7,
    question: "Tarımsal üretim ve artı ürünün gelişimi sonucunda ekonomik alanda hangi yenilikler ortaya çıkmıştır?",
    options: [
      { text: "İhtiyaç fazlası ürünlerin farklı topluluklarla takas edilmesi", correct: true },
      { text: "Ürünlerin alınıp satıldığı ilk yerel pazar yerlerinin kurulması", correct: true },
      { text: "Madeni paranın icadıyla birlikte takas usulünün tamamen unutulması", correct: false },
      { text: "Ham maddelerin ve işlenmiş eşyaların taşındığı ilk ticaret yollarının oluşması", correct: true }
    ],
    explanation: "Artı ürün; takas usulüne dayalı ticareti, pazar yerlerini ve ticaret yollarını ortaya çıkarmıştır. Madeni para ise bu dönemde değil, çok sonraları Lidyalılar tarafından icat edilmiştir."
  },
  {
    id: 8,
    question: "Toprağın işlenmesi ve kalıcı yerleşime geçilmesiyle birlikte mülkiyet ve toplum yapısında hangi değişimler yaşanmıştır?",
    options: [
      { text: "Tarlalar ve hasat edilen ürünler üzerinde özel mülkiyet anlayışının doğması", correct: true },
      { text: "Zenginlik ve üretim araçlarına sahip olma durumuna göre sosyal sınıfların oluşması", correct: true },
      { text: "Mülkiyet anlaşmazlıkları sebebiyle insanların tamamen mağara yaşamına geri dönmesi", correct: false },
      { text: "Toprak sınırlarının ve miras hukukunun belirlenmesi gereksiniminin ortaya çıkması", correct: true }
    ],
    explanation: "Tarımla birlikte ortak kullanım yerini özel mülkiyete bırakmış; bu durum sosyal sınıfları, mülkiyet anlaşmazlıklarını ve hukuk kurallarını ortaya çıkarmıştır."
  },
  {
    id: 9,
    question: "Kalıcı köylerin büyümesi, sulama kanallarının açılması ve ambarların yönetimi insanlık tarihinde hangi kurumsal yapıların doğmasında etkili olmuştur?",
    options: [
      { text: "Toplumsal düzeni ve adaleti sağlayan kamu otoritesi ve devlet teşkilatının", correct: true },
      { text: "Ambar kayıtlarını tutma ihtiyacından doğan ilk yazı ve hesaplama sistemlerinin", correct: true },
      { text: "Toplumun tüm üyelerinin kanunsuz ve kuralsız biçimde kendi güvenliğini sağladığı düzensizliğin", correct: false },
      { text: "Mülkiyet ve miras anlaşmazlıklarını çözen hukuk kurallarının", correct: true }
    ],
    explanation: "Büyük bayındırlık işleri, ambarların yönetimi ve sınır anlaşmazlıkları; merkezi otoriteyi, devlet yönetimini, hukuku ve kaydetme zorunluluğu nedeniyle yazıyı ortaya çıkarmıştır."
  },
  {
    id: 10,
    question: "Tarım Devrimi'nin gerçekleştiği bölgelerin (Bereketli Hilal, Güneydoğu Asya ve Orta Amerika) ortak coğrafi özellikleri arasında hangileri sayılabilir?",
    options: [
      { text: "Su kaynaklarına (akarsu, göl veya düzenli yağışlara) yakın konumda bulunmaları", correct: true },
      { text: "Tarıma ve tohum ekimine elverişli verimli alüvyal topraklara sahip olmaları", correct: true },
      { text: "Yıl boyunca dondurucu kutup soğuklarının ve buzul ikliminin hâkim olması", correct: false },
      { text: "Ilıman ve bitki yetiştiriciliğine uygun iklim koşullarının hüküm sürmesi", correct: true }
    ],
    explanation: "İlk tarım merkezleri; akarsu boylarında, alüvyal toprakların zengin olduğu, suyun bol bulunduğu ve ılıman iklim şartlarının yaşandığı coğrafyalarda kurulmuştur."
  }
];

let activeQuizQuestions = [];
let currentQuizIndex = 0;
let quizAnswered = false;
let selectedOptionIndices = new Set();

// Soru ve Seçenekleri Dinamik Olarak Karıştırma Fonksiyonu
function prepareQuizQuestions() {
  const shuffledQuestions = shuffleArray(videoQuizQuestions);

  activeQuizQuestions = shuffledQuestions.map(q => {
    return {
      ...q,
      options: shuffleArray(q.options)
    };
  });

  currentQuizIndex = 0;
  quizAnswered = false;
  selectedOptionIndices.clear();
}

// Soru Sahnesi ve Video Görünüm Geçişleri
function showQuizView() {
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  if (videoEl && !videoEl.paused) {
    videoEl.pause();
  }

  if (quizPrompt) quizPrompt.classList.add('hidden');

  if (quizWrapper) {
    quizWrapper.classList.remove('hidden');
    quizWrapper.classList.add('flex');
    quizWrapper.scrollTop = 0;
  }

  if (!activeQuizQuestions.length) {
    prepareQuizQuestions();
  }

  renderQuizQuestion();
}

function hideQuizView() {
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  if (quizWrapper) {
    quizWrapper.classList.add('hidden');
    quizWrapper.classList.remove('flex');
  }

  if (videoEl && videoEl.ended && quizPrompt) {
    quizPrompt.classList.remove('hidden');
  }
}

function showVideoView() {
  hideQuizView();
}

// Soru Render Etme (Çoklu Seçim Sistemi)
function renderQuizQuestion() {
  const container = document.getElementById('quiz-question-container');
  if (!container) return;

  if (!activeQuizQuestions.length) {
    prepareQuizQuestions();
  }

  quizAnswered = false;
  selectedOptionIndices.clear();

  // Tüm sorular tamamlandı mı?
  if (currentQuizIndex >= activeQuizQuestions.length) {
    container.innerHTML = `
      <div class="text-center py-5 px-3 space-y-4 animate-in fade-in zoom-in duration-300">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1e3b2e] text-[#fffdfa] text-2xl font-bold border-2 border-[#d49d3d] shadow-md">
          ✓
        </div>
        <h3 class="font-monumental text-lg sm:text-xl font-bold text-[#1e3b2e]">
          Etkinliği Tamamladınız!
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

    // Etkinliği Yeniden Başlat Butonu Dinleyicisi
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

    // Etkinliği Bitir Butonu Dinleyicisi
    const finishActivityBtn = document.getElementById('btn-finish-activity');
    if (finishActivityBtn) {
      finishActivityBtn.addEventListener('click', () => {
        notifyScormCompleted();
        const videoEl = document.getElementById('stage2-video');
        if (videoEl) videoEl.pause();

        try {
          window.close();
        } catch (e) {}

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
    <!-- Soru Metni ve Çoklu Seçim Yönlendirmesi -->
    <div class="space-y-1">
      <p class="font-body font-bold text-base sm:text-lg md:text-[19px] text-[#1e3b2e] leading-snug">
        ${q.question}
      </p>
      <p class="text-xs sm:text-[13px] font-medium text-[#9e4e34] italic select-none">
        (Doğru olduğunu düşündüğünüz tüm seçenekleri işaretleyiniz)
      </p>
    </div>

    <!-- Seçenekler Listesi -->
    <div class="flex flex-col gap-2 pt-1" id="quiz-options-list">
      ${q.options.map((opt, idx) => `
        <div class="quiz-option-card" data-index="${idx}" role="button" tabindex="0">
          <span class="quiz-option-checkbox"></span>
          <span class="text-sm sm:text-[15px] md:text-[16px] text-[#2c261e] font-medium leading-snug flex-1">${opt.text}</span>
        </div>
      `).join('')}
    </div>

    <!-- Alt Etkileşim Alanı: Butonlar ve Geri Bildirim -->
    <div id="quiz-bottom-bar" class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
      <div id="quiz-feedback-card" class="hidden flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border transition-all shadow-2xs"></div>
      
      <!-- Kontrol Et Butonu -->
      <button id="btn-check-quiz-answer" class="shrink-0 px-6 py-3 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] font-bold text-sm sm:text-base rounded-[10px] border border-[#d49d3d]/50 transition-all shadow-sm select-none cursor-pointer text-center whitespace-nowrap disabled:opacity-40 disabled:pointer-events-none" disabled>
        Cevabı Kontrol Et
      </button>

      <!-- Sonraki Soru Butonu -->
      <button id="btn-next-quiz-question" class="hidden shrink-0 px-6 py-3 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] font-bold text-sm sm:text-base rounded-[10px] border border-[#d49d3d]/50 transition-all shadow-sm select-none cursor-pointer text-center whitespace-nowrap">
        ${currentQuizIndex === activeQuizQuestions.length - 1 ? 'Sonucu Gör ➔' : 'Sonraki Soru ➔'}
      </button>
    </div>
  `;

  // Şık Tıklama Olayları (Çoklu Seçim Toggle)
  container.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      if (quizAnswered) return;
      const optIdx = Number(card.getAttribute('data-index'));
      
      if (selectedOptionIndices.has(optIdx)) {
        selectedOptionIndices.delete(optIdx);
        card.classList.remove('selected');
      } else {
        selectedOptionIndices.add(optIdx);
        card.classList.add('selected');
      }

      const checkBtn = document.getElementById('btn-check-quiz-answer');
      if (checkBtn) {
        checkBtn.disabled = selectedOptionIndices.size === 0;
      }
    });
  });

  // Cevabı Kontrol Et Butonu Olayı
  const checkBtn = document.getElementById('btn-check-quiz-answer');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      if (quizAnswered || selectedOptionIndices.size === 0) return;
      evaluateQuizAnswer();
    });
  }

  // Sonraki Soru Butonu Olayı
  const nextBtn = document.getElementById('btn-next-quiz-question');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuizIndex++;
      renderQuizQuestion();
    });
  }
}

// Çoklu Seçim Değerlendirmesi
function evaluateQuizAnswer() {
  quizAnswered = true;
  const q = activeQuizQuestions[currentQuizIndex];
  const optionsList = document.getElementById('quiz-options-list');
  const feedbackCard = document.getElementById('quiz-feedback-card');
  const checkBtn = document.getElementById('btn-check-quiz-answer');
  const nextBtn = document.getElementById('btn-next-quiz-question');

  if (!optionsList) return;

  let allCorrectChosen = true;
  let noWrongChosen = true;

  const optionCards = optionsList.querySelectorAll('.quiz-option-card');
  optionCards.forEach((card, idx) => {
    card.classList.add('locked');
    const isChosen = selectedOptionIndices.has(idx);
    const isThisCorrect = q.options[idx].correct;

    if (isChosen && isThisCorrect) {
      // Doğru seçilmiş şık (Yeşil)
      card.classList.remove('selected');
      card.classList.add('correct');
    } else if (isChosen && !isThisCorrect) {
      // Yanlış seçilmiş şık (Kırmızı)
      card.classList.remove('selected');
      card.classList.add('wrong');
      noWrongChosen = false;
    } else if (!isChosen && isThisCorrect) {
      // Seçilmesi gerektiği halde seçilmemiş doğru şık (Yeşil kesikli kenarlık)
      card.classList.add('missed');
      allCorrectChosen = false;
    }
  });

  const isFullSuccess = allCorrectChosen && noWrongChosen;

  if (feedbackCard) {
    feedbackCard.classList.remove('hidden');
    if (isFullSuccess) {
      feedbackCard.className = 'flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border bg-[#eaf1e8] border-[#1e3b2e] text-[#1e3b2e] font-medium animate-in fade-in duration-200';
      feedbackCard.innerHTML = `<strong>Tebrikler!</strong> Doğru seçenekleri eksiksiz belirlediniz. ${q.explanation}`;
    } else {
      feedbackCard.className = 'flex-1 p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13.5px] leading-snug border bg-[#fdf3f0] border-[#9e4e34] text-[#9e4e34] font-medium animate-in fade-in duration-200';
      feedbackCard.innerHTML = `<strong>Açıklama:</strong> ${q.explanation}`;
    }
  }

  if (checkBtn) {
    checkBtn.classList.add('hidden');
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
