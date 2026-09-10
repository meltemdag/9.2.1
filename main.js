// Tarım Devrimi'nin Başladığı Merkezler Etkileşimli Etkinliği

const cardsData = [
  // MEZOPOTAMYA
  {
    id: 'mezopotamya-bolge',
    region: 'mezopotamya',
    category: 'bolge',
    title: 'Mezopotamya (Bereketli Hilal)',
    text: 'Mezopotamya (Bereketli Hilal) — Yaklaşık MÖ 10.000'
  },
  {
    id: 'mezopotamya-urun',
    region: 'mezopotamya',
    category: 'urun',
    title: 'Mezopotamya Tarım Ürünleri',
    text: 'Yabani buğday (evcilleştirilmiş), arpa, mercimek ve bezelye'
  },
  {
    id: 'mezopotamya-iklim',
    region: 'mezopotamya',
    category: 'iklim',
    title: 'Mezopotamya İklim ve Coğrafya',
    text: 'Fırat ve Dicle nehir vadileri, kurak geçen yaz mevsimi, dağ eteklerinden uzanan verimli alüvyal düzlükler'
  },
  {
    id: 'mezopotamya-yerlesim',
    region: 'mezopotamya',
    category: 'yerlesim',
    title: 'Mezopotamya Yerleşim ve Ekonomi',
    text: 'Sulama kanalları organizasyonu, artı ürün depolanması, ilk köy ve kasaba yerleşimleri (ör. Çatalhöyük), mesleki iş bölümü ve takas ticareti'
  },

  // GÜNEYDOĞU ASYA
  {
    id: 'guneydogu-asya-bolge',
    region: 'guneydogu-asya',
    category: 'bolge',
    title: 'Güneydoğu Asya',
    text: 'Güneydoğu Asya — Yaklaşık MÖ 8.000'
  },
  {
    id: 'guneydogu-asya-urun',
    region: 'guneydogu-asya',
    category: 'urun',
    title: 'Güneydoğu Asya Tarım Ürünleri',
    text: 'Pirinç (çeltik), darı, soya fasulyesi ve muz'
  },
  {
    id: 'guneydogu-asya-iklim',
    region: 'guneydogu-asya',
    category: 'iklim',
    title: 'Güneydoğu Asya İklim ve Coğrafya',
    text: 'Muson ikliminin getirdiği bol yağış, Sarı Irmak ve Gök Irmak nehir havzaları, sulak ve düz araziler'
  },
  {
    id: 'guneydogu-asya-yerlesim',
    region: 'guneydogu-asya',
    category: 'yerlesim',
    title: 'Güneydoğu Asya Yerleşim ve Ekonomi',
    text: 'Sulu tarıma dayalı çeltik üretimi, nehir boylarında yoğun nüfuslu kalıcı yerleşimler, ortak sulama ve iş gücü dayanışması'
  },

  // ORTA AMERİKA
  {
    id: 'orta-amerika-bolge',
    region: 'orta-amerika',
    category: 'bolge',
    title: 'Orta Amerika (Mesoamerika)',
    text: 'Orta Amerika (Mesoamerika) — Yaklaşık MÖ 7.000'
  },
  {
    id: 'orta-amerika-urun',
    region: 'orta-amerika',
    category: 'urun',
    title: 'Orta Amerika Tarım Ürünleri',
    text: 'Mısır (teosinte yabani bitkisinden evcilleştirilmiş), fasulye, avokado ve balkabağı'
  },
  {
    id: 'orta-amerika-iklim',
    region: 'orta-amerika',
    category: 'iklim',
    title: 'Orta Amerika İklim ve Coğrafya',
    text: 'Meksika Körfezi çevresi, irili ufaklı göl ve akarsu havzaları, tarıma elverişli ılıman düzlükler'
  },
  {
    id: 'orta-amerika-yerlesim',
    region: 'orta-amerika',
    category: 'yerlesim',
    title: 'Orta Amerika Yerleşim ve Ekonomi',
    text: 'Mısır tarımına dayalı ilk kalıcı köyler, göl kenarı yerleşimleri, bağımsız tarım kültürü'
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

// DOM Elemanları
const activeCardContainer = document.getElementById('active-card-container');
const feedbackBanner = document.getElementById('feedback-banner');
const feedbackText = document.getElementById('feedback-text');
const resetBtn = document.getElementById('reset-btn');
const modalRestartBtn = document.getElementById('modal-restart-btn');
const completionModal = document.getElementById('completion-modal');

// Rastgele Karıştırma (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Geri Bildirim Gösterme Fonksiyonu
let feedbackTimeout = null;
function showFeedback(message, isSuccess = true) {
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  if (!feedbackBanner || !feedbackText) return;
  
  feedbackBanner.classList.remove(
    'hidden',
    'bg-[#e8ede2]',
    'text-[#244c3b]',
    'border-[#244c3b]',
    'bg-[#fbf4f1]',
    'text-[#ab654e]',
    'border-[#ab654e]'
  );
  
  if (isSuccess) {
    feedbackBanner.classList.add('bg-[#e8ede2]', 'text-[#244c3b]', 'border-[#244c3b]');
  } else {
    feedbackBanner.classList.add('bg-[#fbf4f1]', 'text-[#ab654e]', 'border-[#ab654e]');
  }
  
  feedbackText.textContent = message;
  
  feedbackTimeout = setTimeout(() => {
    feedbackBanner.classList.add('hidden');
  }, 4000);
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
  if (!remainingCards.length) return;
  const currentCard = remainingCards[0];

  if (selectedCardId === currentCard.id) {
    clearSelection();
  } else {
    selectedCardId = currentCard.id;
    document.querySelectorAll('.active-card-item').forEach(el => {
      el.classList.add('card-selected');
    });
    showFeedback('Bilgi kartı seçildi. Şimdi harita üzerindeki veya aşağıdaki ilgili alana dokununuz.', true);
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
      <div class="flex flex-wrap items-center justify-center gap-2 py-1">
        <button id="reopen-modal-card" class="bg-[#fffef9] rounded-[8px] border border-[#d9ddd0] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#244c3b] hover:bg-[#e8ede2] transition-colors shadow-xs cursor-pointer select-none">
          Sonuç Tablosunu İncele
        </button>
        <button id="btn-goto-stage2-from-map" class="bg-[#244c3b] hover:bg-[#173d2b] text-[#fffef9] rounded-[8px] px-4 py-2 text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer select-none">
          2. Aşamaya Geç (Video Anlatımı) ➔
        </button>
      </div>
    `;

    activeCardContainer.innerHTML = completeHTML;
    if (mobileSlot) mobileSlot.innerHTML = completeHTML;

    document.querySelectorAll('#reopen-modal-card').forEach(btn => {
      btn.addEventListener('click', () => {
        if (completionModal) completionModal.classList.remove('hidden');
      });
    });

    document.querySelectorAll('#btn-goto-stage2-from-map').forEach(btn => {
      btn.addEventListener('click', () => {
        switchStage(2);
      });
    });

    setTimeout(() => {
      if (completionModal && currentStage === 1) completionModal.classList.remove('hidden');
    }, 600);
    return;
  }

  const currentCard = remainingCards[0];

  // Masaüstü Harita İçi Kart
  activeCardContainer.innerHTML = `
    <div id="active-card"
         class="active-card-item card-draggable bg-[#fffef9] rounded-[10px] border-2 border-[#244c3b] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_5px_16px_rgba(49,73,52,0.12)] hover:shadow-[0_8px_24px_rgba(49,73,52,0.18)] hover:border-[#173d2b] transition-all text-xs sm:text-sm md:text-[15px] font-medium text-[#243e32] text-center cursor-grab active:cursor-grabbing select-none break-words leading-snug"
         draggable="true"
         data-card-id="${currentCard.id}">
      ${currentCard.text}
    </div>
  `;

  // Mobil Slot Kartı
  if (mobileSlot) {
    mobileSlot.innerHTML = `
      <div class="bg-[#fffef9] border-1.5 border-[#d9ddd0] rounded-[10px] p-2.5 shadow-xs">
        <div class="flex items-center justify-between text-[11px] font-semibold mb-1.5">
          <span class="inline-flex items-center gap-1.5 text-[#ab654e]">
            <span class="w-2 h-2 rounded-full bg-[#ab654e] animate-pulse"></span>
            Eşleştirilecek Bilgi Kartı:
          </span>
          <span class="text-[10px] text-[#637065] font-medium bg-[#f5f3eb] px-2 py-0.5 rounded-full border border-[#d9ddd0]">
            Kalan: ${remainingCards.length}
          </span>
        </div>
        <div id="active-card-mobile"
             class="active-card-item card-draggable bg-[#fffef9] rounded-[8px] border-2 border-[#244c3b] px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#243e32] text-center cursor-pointer select-none break-words leading-snug hover:border-[#173d2b] transition-all"
             data-card-id="${currentCard.id}">
          ${currentCard.text}
        </div>
        <p class="text-[10px] text-[#637065] text-center mt-1.5 font-normal">
          Karta dokununuz, ardından haritadaki veya aşağıdaki ilgili merkeze dokununuz.
        </p>
      </div>
    `;

    const mobileCardEl = document.getElementById('active-card-mobile');
    if (mobileCardEl) {
      mobileCardEl.addEventListener('click', () => {
        toggleCardSelection();
      });
    }
  }

  const activeCardEl = document.getElementById('active-card');
  if (activeCardEl) {
    activeCardEl.addEventListener('dragstart', (e) => {
      draggedCardId = currentCard.id;
      activeCardEl.classList.add('opacity-50');
      e.dataTransfer.setData('text/plain', currentCard.id);
      e.dataTransfer.effectAllowed = 'move';
    });

    activeCardEl.addEventListener('dragend', () => {
      draggedCardId = null;
      activeCardEl.classList.remove('opacity-50');
    });

    activeCardEl.addEventListener('click', () => {
      toggleCardSelection();
    });
  }
}

// Kartı Doğrudan Haritadaki İlgili Hedef Alana ve Bölge Kartına Yerleştirme
function placeCardIntoTarget(cardData, targetRegion) {
  const targetList = document.getElementById(`list-${targetRegion}`);
  const targetEl = document.getElementById(`target-${targetRegion}`);
  const regionCard = document.getElementById(`region-card-${targetRegion}`);
  const regionItems = document.getElementById(`region-items-${targetRegion}`);

  // 1. Masaüstü harita hedefi içine kart ekle
  if (targetList) {
    const itemEl = document.createElement('div');
    if (cardData.category === 'bolge') {
      itemEl.className = 'bg-[#e8ede2] rounded-[8px] p-1.5 sm:p-2 text-[10px] sm:text-[11px] md:text-xs font-bold text-[#244c3b] border border-[#244c3b] shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
    } else {
      itemEl.className = 'bg-[#fffef9] rounded-[8px] p-1 sm:p-1.5 text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#243e32] border border-[#d9ddd0] shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
    }
    itemEl.textContent = cardData.text;
    targetList.appendChild(itemEl);
  }

  // 2. Alt kısımdaki bölge kartına ekle (Yalın ve okunaklı metin)
  if (regionItems) {
    const placeholder = regionItems.querySelector('.region-placeholder');
    if (placeholder) placeholder.remove();

    const rItemEl = document.createElement('div');
    if (cardData.category === 'bolge') {
      rItemEl.className = 'bg-[#e8ede2] rounded-[6px] p-2 border border-[#244c3b] text-[11.5px] sm:text-xs font-bold text-[#244c3b] leading-snug animate-in fade-in zoom-in duration-200';
    } else {
      rItemEl.className = 'bg-[#f5f3eb] rounded-[6px] p-2 border border-[#d9ddd0] text-[11.5px] sm:text-xs font-medium text-[#243e32] leading-snug animate-in fade-in zoom-in duration-200';
    }
    rItemEl.textContent = cardData.text;
    regionItems.appendChild(rItemEl);
  }

  // Kalan kartlar dizisinden kaldır
  remainingCards = remainingCards.filter(c => c.id !== cardData.id);

  // Durumu kaydet
  placedCards.set(cardData.id, { region: cardData.region, category: cardData.category });
  clearSelection();
  updateProgress();

  // Hedef alanına ve bölge kartına başarı animasyonu (Forest rengi ring)
  if (targetEl) {
    targetEl.classList.add('ring-4', 'ring-[#244c3b]/50');
    setTimeout(() => targetEl.classList.remove('ring-4', 'ring-[#244c3b]/50'), 700);
  }
  if (regionCard) {
    regionCard.classList.add('ring-2', 'ring-[#244c3b]');
    setTimeout(() => regionCard.classList.remove('ring-2', 'ring-[#244c3b]'), 700);
  }

  // Geri bildirim mesajı
  if (cardData.category === 'bolge') {
    const regionsCount = Array.from(placedCards.values()).filter(c => c.category === 'bolge').length;
    if (regionsCount === 3) {
      showFeedback('Tebrikler! Üç ana tarım merkezini de tespit ettiniz. Şimdi bu merkezlere ait özellikleri eşleştiriniz.', true);
    } else {
      showFeedback(`Tebrikler! ${regionDisplayNames[targetRegion]} merkezini doğru tespit ettiniz.`, true);
    }
  } else {
    showFeedback('Doğru eşleştirme yapıldı.', true);
  }

  // Sıradaki kartı getir
  renderActiveCard();
}

// Hatalı Yerleştirme Efekti (Clay rengi ring ve arka plan tonu)
function triggerErrorEffect(targetRegion, customMessage) {
  const mapTarget = document.getElementById(`target-${targetRegion}`);
  const regionCard = document.getElementById(`region-card-${targetRegion}`);

  [mapTarget, regionCard].forEach(element => {
    if (!element) return;
    element.classList.add('ring-4', 'ring-[#ab654e]', 'bg-[#ab654e]/20');
    setTimeout(() => {
      element.classList.remove('ring-4', 'ring-[#ab654e]', 'bg-[#ab654e]/20');
    }, 800);
  });

  showFeedback(customMessage || 'Bu bilgi seçilen alan ile uyuşmamaktadır. Lütfen bilgileri tekrar inceleyiniz.', false);
}

// Doğrulama ve Eşleştirme Mantığı
function handlePlacementAttempt(cardId, targetRegion) {
  const cardData = cardsData.find(c => c.id === cardId);
  if (!cardData) return;

  // Bölge kontrolü
  if (cardData.region !== targetRegion) {
    if (cardData.category === 'bolge') {
      triggerErrorEffect(targetRegion, 'Bu bölge seçtiğiniz alanda yer almamaktadır. Coğrafi konumu tekrar inceleyiniz.');
    } else {
      triggerErrorEffect(targetRegion, 'Bu bilgi bu coğrafi merkeze ait değildir. Diğer alanları değerlendiriniz.');
    }
    return;
  }

  // Doğru ise doğrudan haritadaki hedefin ve alt kartın içine yerleştir
  placeCardIntoTarget(cardData, targetRegion);
}

// Tamamlanma Durumu Kontrolü
function updateProgress() {
  const regions = ['mezopotamya', 'guneydogu-asya', 'orta-amerika'];
  regions.forEach(r => {
    let regionCompletedCount = 0;
    cardsData.filter(c => c.region === r).forEach(c => {
      if (placedCards.has(c.id)) regionCompletedCount++;
    });

    // Harita üzerindeki mobil rozet sayacı
    const mapTarget = document.getElementById(`target-${r}`);
    if (mapTarget) {
      const mobileCountEl = mapTarget.querySelector('.map-badge-count');
      if (mobileCountEl) {
        if (regionCompletedCount === 4) {
          mobileCountEl.textContent = '✓ 4/4';
          mobileCountEl.className = 'map-badge-count text-[8.5px] sm:text-[10px] font-bold text-[#244c3b] bg-[#e8ede2] px-1.5 py-0.2 rounded-full mt-0.5';
        } else {
          mobileCountEl.textContent = `${regionCompletedCount}/4`;
        }
      }

      if (regionCompletedCount === 4) {
        mapTarget.classList.add('completed');
      } else {
        mapTarget.classList.remove('completed');
      }
    }

    // Alt kısımdaki bölge kartı tamamlanma durumu
    const regionCard = document.getElementById(`region-card-${r}`);
    if (regionCard) {
      if (regionCompletedCount === 4) {
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

  // İlk 3 kart bölgelerin tespiti için bölge kartları, ardından kalan 9 özellik kartı karışık olarak gelir
  const regionCards = shuffleArray(cardsData.filter(c => c.category === 'bolge'));
  const otherCards = shuffleArray(cardsData.filter(c => c.category !== 'bolge'));
  remainingCards = [...regionCards, ...otherCards];

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
    }
  });

  updateProgress();
  renderActiveCard();
}

// Hedef Alanları Dinleyicilerini Kurma (Harita Odakları + Alt Bölge Kartları)
function setupDropTargets() {
  const allTargets = document.querySelectorAll('.map-focus-target, .region-summary-card');
  allTargets.forEach(target => {
    const region = target.getAttribute('data-region');
    if (!region) return;

    target.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      target.classList.add('drag-over-region');
    });

    target.addEventListener('dragleave', () => {
      target.classList.remove('drag-over-region');
    });

    target.addEventListener('drop', (e) => {
      e.preventDefault();
      target.classList.remove('drag-over-region');
      const cardId = e.dataTransfer.getData('text/plain') || draggedCardId;
      if (cardId) handlePlacementAttempt(cardId, region);
    });

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

// ==========================================
// 3. AŞAMA: TARİHSEL YARGI VE KANIT MASASI
// ==========================================

const claims = [
  {
    title: 'Zaman ve Mekân Yargısı',
    quote: 'Tarım Devrimi dünyada tek bir merkezden yayılmamış; farklı zamanlarda, farklı iklim ve nehir havzalarında bağımsız olarak ortaya çıkmıştır.',
    evidence: [
      { text: 'MÖ 10.000 Mezopotamya (buğday), MÖ 8.000 Çin (pirinç) ve MÖ 7.000 Meksika (mısır) aralıkları.', valid: true },
      { text: 'Fırat-Dicle, Yangtze ve Meksika nehir/göl havzalarının farklı iklim ve yerel yabani bitkilere sahip olması.', valid: true },
      { text: 'Dünyadaki bütün medeniyetlerin aynı yüzyılda ve aynı tohumu ekerek tarıma başlaması.', valid: false },
      { text: 'Tarımın yalnızca dağ buzullarında ve kutup tundralarında ortaya çıkması.', valid: false }
    ],
    why: 'Kronolojik tarihler ve genetik bitki araştırmaları, tarımın farklı coğrafyalarda o bölgenin kendi yerel yabani türleriyle bağımsız başladığını doğrular.'
  },
  {
    title: 'Yerleşme Biçimi Yargısı',
    quote: 'Kalıcı köy yerleşimleri ve bitişik mimari yapı, tarım arazilerinin sürekli bakım, sulama ve korunma ihtiyacının doğrudan bir sonucudur.',
    evidence: [
      { text: 'Çatalhöyük\'te tarlaların yanı başında kurulan, damdan merdivenle girilen bitişik kerpiç evler.', valid: true },
      { text: 'Kurak yaz mevsimlerinde tarlaları sulamak için ortak emekle açılan su kanalları ve ambarlar.', valid: true },
      { text: 'İnsanların tarlaları ektikten sonra tamamen bırakıp kıtalar arası göçebe yaşaması.', valid: false },
      { text: 'İlk kalıcı köylerin yalnızca göçebe çadırlarından oluşması.', valid: false }
    ],
    why: 'Tarlayı beklemek, su kanallarını yönetmek ve hasadı saklamak göçebe yaşam tarzını sona erdirmiş; savunmalı ve kalıcı köyleri zorunlu kılmıştır.'
  },
  {
    title: 'Ekonomik Faaliyet Yargısı',
    quote: 'İhtiyaç fazlası \'artı ürünün\' depolanması; toplumda uzmanlaşmayı, zanaatkarlığı ve takas ekonomisini doğurmuştur.',
    evidence: [
      { text: 'Denizli Ekşi Höyük kazılarında bulunan 8.750 yıllık kemik orak, tahıl kapları ve dokumacılık izleri.', valid: true },
      { text: 'Ambarlardaki artı ürün sayesinde toplumun bir kısmının tarladan ayrılıp çömlekçilik ve takasa yönelmesi.', valid: true },
      { text: 'Tarımla birlikte dünyadaki tüm alet yapımının ve alışverişin tamamen sona ermesi.', valid: false },
      { text: 'Bütün insanların yalnızca tek bir iş yapması ve ambarların hiçbir zaman kullanılmaması.', valid: false }
    ],
    why: 'Artı ürün toplumun bir bölümünü besin üretme zorunluluğundan kurtarmış; çömlekçilik, dokuma ve ürünlerin değiş tokuş edildiği pazar ekonomisini doğurmuştur.'
  }
];

// Genel Durum Değişkenleri
let currentStage = 1;

// 3. Aşama Durumu
let currentClaim = 0;
let selectedEvidence = [[], [], []];
let sealedClaims = [false, false, false];
let claimFeedback = null;

// Yüzen Aşama Değiştirme Butonlarını Güncelleme
function updateFloatingStageNav() {
  const prevBtn = document.getElementById('floating-prev-stage-btn');
  const nextBtn = document.getElementById('floating-next-stage-btn');

  if (prevBtn) {
    prevBtn.disabled = currentStage <= 1;
  }
  if (nextBtn) {
    nextBtn.disabled = currentStage >= 3;
  }
}

// Aşama Değiştirme
function switchStage(stageNum) {
  currentStage = stageNum;
  const stage1Container = document.getElementById('stage-1-container');
  const stage2Container = document.getElementById('stage-2-container');
  const stage3Container = document.getElementById('stage-3-container');
  const videoEl = document.getElementById('stage2-video');

  if (completionModal) completionModal.classList.add('hidden');

  if (stage1Container) stage1Container.classList.toggle('hidden', stageNum !== 1);
  if (stage2Container) stage2Container.classList.toggle('hidden', stageNum !== 2);
  if (stage3Container) stage3Container.classList.toggle('hidden', stageNum !== 3);

  // Video başka aşamaya geçildiğinde otomatik duraklatılsın
  if (stageNum !== 2 && videoEl && !videoEl.paused) {
    videoEl.pause();
  }

  updateFloatingStageNav();

  if (stageNum === 1) {
    renderActiveCard();
  } else if (stageNum === 2) {
    showFeedback('2. Aşamaya geçtiniz. Tarım Devrimi ve Yerleşme videosunu inceleyebilirsiniz.', true);
  } else if (stageNum === 3) {
    renderStage3();
    showFeedback('Tarihsel Yargı Masasına geçtiniz. Her iddia için 2 güvenilir kanıtı seçip mühürleyiniz.', true);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. AŞAMA: RENDER FONKSİYONU
function renderStage3() {
  const quoteEl = document.getElementById('stage3-claim-quote');
  const promptEl = document.getElementById('stage3-claim-prompt');
  const gridEl = document.getElementById('stage3-evidence-grid');
  const sealContainer = document.getElementById('stage3-seal-action-container');
  const nextClaimBtn = document.getElementById('btn-next-claim');
  const feedbackBox = document.getElementById('stage3-feedback-box');
  const feedbackTitle = document.getElementById('stage3-feedback-title');
  const feedbackTextEl = document.getElementById('stage3-feedback-text');

  if (!quoteEl || !gridEl) return;

  const cur = claims[currentClaim];
  const curSelected = selectedEvidence[currentClaim];
  const isSealed = sealedClaims[currentClaim];
  const allSealed = sealedClaims.every(Boolean);

  // Alıntı ve Yönlendirme Metni
  quoteEl.textContent = `“${cur.quote}”`;
  promptEl.innerHTML = `Bu iddiayı doğrulayan <strong>2 kanıtı</strong> seçiniz ve yargınızı mühürleyiniz.`;

  // Kanıt Kartları Izgarası
  gridEl.innerHTML = cur.evidence.map((ev, i) => `
    <div class="evidence-card ${curSelected.includes(i) ? 'selected' : ''} ${isSealed ? 'disabled' : ''}" data-evidence="${i}" role="button" tabindex="0">
      <div class="evidence-check">${curSelected.includes(i) ? '✓' : ''}</div>
      <div class="evidence-text">${ev.text}</div>
    </div>
  `).join('');

  gridEl.querySelectorAll('.evidence-card').forEach(card => {
    card.addEventListener('click', () => {
      if (isSealed) return;
      const evIdx = Number(card.getAttribute('data-evidence'));
      const list = selectedEvidence[currentClaim];
      if (list.includes(evIdx)) {
        selectedEvidence[currentClaim] = list.filter(x => x !== evIdx);
      } else if (list.length < 2) {
        list.push(evIdx);
      } else {
        showFeedback('En fazla 2 kanıt seçebilirsiniz. Yeni bir kanıt seçmek için öncekilerden birini kaldırınız.', false);
        return;
      }
      claimFeedback = null;
      renderStage3();
    });
  });

  // Mühür Alanı
  if (isSealed) {
    sealContainer.innerHTML = '';
  } else {
    sealContainer.innerHTML = `
      <button id="btn-seal-claim" class="px-5 py-2.5 bg-[#244c3b] hover:bg-[#173d2b] text-[#fffef9] font-semibold text-xs sm:text-sm rounded-[8px] transition-colors shadow-xs select-none disabled:opacity-50 disabled:cursor-not-allowed" ${curSelected.length !== 2 ? 'disabled' : ''}>
        Seçimi Kontrol Et
      </button>
    `;
    const sealBtn = document.getElementById('btn-seal-claim');
    if (sealBtn) {
      sealBtn.addEventListener('click', sealCurrentClaim);
    }
  }

  // Sonraki İddia Butonu
  if (nextClaimBtn) {
    if (isSealed && !allSealed) {
      nextClaimBtn.classList.remove('hidden');
    } else {
      nextClaimBtn.classList.add('hidden');
    }
  }

  // Geri Bildirim Mesajı Kutusu
  if (claimFeedback) {
    feedbackBox.classList.remove('hidden', 'bg-[#e8ede2]', 'border-[#244c3b]', 'text-[#244c3b]', 'bg-[#fbf4f1]', 'border-[#ab654e]', 'text-[#ab654e]');
    if (claimFeedback.type === 'success') {
      feedbackBox.classList.add('bg-[#e8ede2]', 'border-[#244c3b]', 'text-[#244c3b]');
    } else {
      feedbackBox.classList.add('bg-[#fbf4f1]', 'border-[#ab654e]', 'text-[#ab654e]');
    }
    feedbackTitle.textContent = claimFeedback.title;
    feedbackTextEl.textContent = claimFeedback.text;
  } else {
    feedbackBox.classList.add('hidden');
  }
}

// 3. Aşama: Yargıyı Mühürleme Mantığı
function sealCurrentClaim() {
  const cur = claims[currentClaim];
  const sel = selectedEvidence[currentClaim];
  const validIndices = cur.evidence.map((e, idx) => e.valid ? idx : -1).filter(idx => idx !== -1);
  const isOk = sel.length === 2 && sel.every(idx => validIndices.includes(idx));

  if (isOk) {
    sealedClaims[currentClaim] = true;
    claimFeedback = { type: 'success', title: 'Yargı Kanıtlandı!', text: cur.why };
    showFeedback('Yargı başarıyla mühürlendi.', true);
    if (sealedClaims.every(Boolean)) {
      showFeedback('Tebrikler! 3 tarihsel yargıyı da güvenilir kanıtlarla başarıyla mühürlediniz.', true);
    }
  } else {
    claimFeedback = {
      type: 'error',
      title: 'Kanıtları Yeniden Değerlendiriniz:',
      text: 'Seçtiğiniz ifadeler bu iddiayı doğrudan desteklememektedir. Gerçeklerle örtüşen kanıtları seçtiğinizden emin olunuz.'
    };
    showFeedback('Seçilen kanıtlar iddiayı doğrulamadı.', false);
  }
  renderStage3();
}

// 3. Aşama Sıfırlama
function resetStage3() {
  selectedEvidence = [[], [], []];
  sealedClaims = [false, false, false];
  claimFeedback = null;
  currentClaim = 0;
  renderStage3();
  showFeedback('Tarihsel yargı masası başlangıç durumuna getirildi.', true);
}

// Başlatma Olayları
function init() {
  resetActivity();
  setupDropTargets();

  // 1. Aşama Butonları
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetActivity();
      showFeedback('Etkinlik sıfırlandı. Kartlar yeniden karıştırıldı.', true);
    });
  }

  // Modal Butonları
  if (modalRestartBtn) {
    modalRestartBtn.addEventListener('click', () => {
      if (completionModal) completionModal.classList.add('hidden');
      resetActivity();
      showFeedback('Etkinlik yeniden başlatıldı.', true);
    });
  }

  const modalGotoStage2Btn = document.getElementById('modal-goto-stage2-btn');
  if (modalGotoStage2Btn) {
    modalGotoStage2Btn.addEventListener('click', () => {
      switchStage(2);
    });
  }

  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (completionModal) completionModal.classList.add('hidden');
    });
  }

  if (completionModal) {
    completionModal.addEventListener('click', (e) => {
      if (e.target === completionModal) {
        completionModal.classList.add('hidden');
      }
    });
  }

  // 2. Aşama (Video Anlatımı) Butonları
  const btnBackToStage1 = document.getElementById('btn-back-to-stage1');
  if (btnBackToStage1) {
    btnBackToStage1.addEventListener('click', () => {
      switchStage(1);
    });
  }

  const btnGotoStage3FromVideoTop = document.getElementById('btn-goto-stage3-from-video-top');
  if (btnGotoStage3FromVideoTop) {
    btnGotoStage3FromVideoTop.addEventListener('click', () => {
      switchStage(3);
    });
  }

  const btnGotoStage3FromVideo = document.getElementById('btn-goto-stage3-from-video');
  if (btnGotoStage3FromVideo) {
    btnGotoStage3FromVideo.addEventListener('click', () => {
      switchStage(3);
    });
  }

  // 3. Aşama Butonları
  const btnBackToStage2 = document.getElementById('btn-back-to-stage2');
  if (btnBackToStage2) {
    btnBackToStage2.addEventListener('click', () => {
      switchStage(2);
    });
  }

  const stage3ResetBtn = document.getElementById('stage3-reset-btn');
  if (stage3ResetBtn) {
    stage3ResetBtn.addEventListener('click', () => {
      resetStage3();
    });
  }

  const btnNextClaim = document.getElementById('btn-next-claim');
  if (btnNextClaim) {
    btnNextClaim.addEventListener('click', () => {
      const nextUnsealed = sealedClaims.findIndex(x => !x);
      if (nextUnsealed !== -1) {
        currentClaim = nextUnsealed;
      }
      claimFeedback = null;
      renderStage3();
    });
  }

  // Yüzen Aşama Değiştirme Butonları Dinleyicileri (Sağ ve Sol Ok)
  const floatingPrevBtn = document.getElementById('floating-prev-stage-btn');
  if (floatingPrevBtn) {
    floatingPrevBtn.addEventListener('click', () => {
      if (currentStage > 1) switchStage(currentStage - 1);
    });
  }

  const floatingNextBtn = document.getElementById('floating-next-stage-btn');
  if (floatingNextBtn) {
    floatingNextBtn.addEventListener('click', () => {
      if (currentStage < 3) switchStage(currentStage + 1);
    });
  }

  updateFloatingStageNav();
}

// Uygulamayı Başlat
document.addEventListener('DOMContentLoaded', init);
