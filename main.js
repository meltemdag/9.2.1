// Tarım Devrimi: Zaman, Mekân ve İnsan Etkileşimli Etkinliği

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
    'bg-[#eaf1e8]',
    'text-[#1e3b2e]',
    'border-[#1e3b2e]',
    'bg-[#fdf3f0]',
    'text-[#9e4e34]',
    'border-[#9e4e34]',
    'bg-[#e8ede2]',
    'text-[#244c3b]',
    'border-[#244c3b]',
    'bg-[#fbf4f1]',
    'text-[#ab654e]',
    'border-[#ab654e]'
  );
  
  if (isSuccess) {
    feedbackBanner.classList.add('bg-[#eaf1e8]', 'text-[#1e3b2e]', 'border-[#1e3b2e]');
  } else {
    feedbackBanner.classList.add('bg-[#fdf3f0]', 'text-[#9e4e34]', 'border-[#9e4e34]');
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

  // Masaüstü Harita İçi Kart
  activeCardContainer.innerHTML = `
    <div id="active-card"
         class="active-card-item card-draggable bg-gradient-to-br from-[#fffdfa] to-[#f6eedd] rounded-[10px] border-2 border-[#9e4e34] px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_6px_20px_rgba(45,34,18,0.20)] hover:shadow-[0_10px_26px_rgba(45,34,18,0.26)] hover:border-[#833d25] transition-all text-xs sm:text-[13px] md:text-sm font-semibold text-[#1e3b2e] text-center cursor-grab active:cursor-grabbing select-none break-words leading-snug"
         draggable="true"
         data-card-id="${currentCard.id}">
      ${currentCard.text}
    </div>
  `;

  // Mobil Slot Kartı
  if (mobileSlot) {
    mobileSlot.innerHTML = `
      <div class="bg-gradient-to-br from-[#fffdfa] to-[#f6eedd] border-2 border-[#beab8f] rounded-[12px] p-3 shadow-sm">
        <div class="flex items-center justify-between text-[11px] font-semibold mb-1.5">
          <span class="inline-flex items-center gap-1.5 text-[#9e4e34]">
            <span class="w-2 h-2 rounded-full bg-[#9e4e34]"></span>
            Eşleştirilecek Bilgi Kartı
          </span>
        </div>
        <div id="active-card-mobile"
             class="active-card-item card-draggable bg-gradient-to-br from-[#fffdfa] to-[#fcf8f0] rounded-[10px] border-2 border-[#9e4e34] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1e3b2e] text-center cursor-pointer select-none break-words leading-snug hover:border-[#833d25] transition-all shadow-xs"
             data-card-id="${currentCard.id}">
          ${currentCard.text}
        </div>
        <p class="text-[11px] text-[#554d42] text-center mt-2 font-medium">
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
      itemEl.className = 'bg-gradient-to-r from-[#1e3b2e] to-[#254b3b] text-[#fffdfa] rounded-[8px] p-1.5 sm:p-2 text-[10px] sm:text-[11px] md:text-xs font-bold border border-[#d49d3d]/50 shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
    } else {
      itemEl.className = 'bg-[#fffdfa] rounded-[8px] p-1.2 sm:p-1.5 text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#2c261e] border border-[#d0c3ae] shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
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
      rItemEl.className = 'bg-[#1e3b2e] text-[#fffdfa] rounded-[8px] p-2 border border-[#d49d3d]/50 text-[11.5px] sm:text-xs font-bold leading-snug animate-in fade-in zoom-in duration-200';
    } else {
      rItemEl.className = 'bg-[#fffdfa] text-[#2c261e] rounded-[8px] p-2 border border-[#d0c3ae] text-[11.5px] sm:text-xs font-medium leading-snug animate-in fade-in zoom-in duration-200';
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

  // Hedef alanına ve bölge kartına başarı animasyonu (Neolitik koyu yeşil ring)
  if (targetEl) {
    targetEl.classList.add('ring-4', 'ring-[#1e3b2e]/60');
    setTimeout(() => targetEl.classList.remove('ring-4', 'ring-[#1e3b2e]/60'), 700);
  }
  if (regionCard) {
    regionCard.classList.add('ring-2', 'ring-[#1e3b2e]');
    setTimeout(() => regionCard.classList.remove('ring-2', 'ring-[#1e3b2e]'), 700);
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

// Hatalı Yerleştirme Efekti (Pişmiş kil / kiremit rengi ring ve arka plan tonu)
function triggerErrorEffect(targetRegion, customMessage) {
  const mapTarget = document.getElementById(`target-${targetRegion}`);
  const regionCard = document.getElementById(`region-card-${targetRegion}`);

  [mapTarget, regionCard].forEach(element => {
    if (!element) return;
    element.classList.add('ring-4', 'ring-[#9e4e34]', 'bg-[#9e4e34]/20');
    setTimeout(() => {
      element.classList.remove('ring-4', 'ring-[#9e4e34]', 'bg-[#9e4e34]/20');
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

// Tamamlanma Durumu Kontrolü (Sayaçsız, sade pedagojik durum)
function updateProgress() {
  const regions = ['mezopotamya', 'guneydogu-asya', 'orta-amerika'];
  regions.forEach(r => {
    let regionCompletedCount = 0;
    cardsData.filter(c => c.region === r).forEach(c => {
      if (placedCards.has(c.id)) regionCompletedCount++;
    });

    const isFinished = regionCompletedCount === 4;

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
    question: "İzlediklerinizden ve edindiğiniz bilgilerden yola çıkarak bu dönemi düşündüğünüzde; kaba taş aletlerden toprağı işlemeye yarayan çapa, orak ve öğütme taşlarına geçilmesinin insan yaşamındaki en temel sonucu aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Doğaya bağımlı tüketici yaşamdan, kendi besinini üreten üretici yaşama geçilmesi", correct: true },
      { letter: "B", text: "Göçebe avcılığın dünya genelinde tek geçim kaynağı haline gelmesi", correct: false },
      { letter: "C", text: "Hayvanların evcilleştirilmesinden ve barınak yapımından tamamen vazgeçilmesi", correct: false },
      { letter: "D", text: "Maden aletlerin taş aletlerden önce günlük hayatta yaygınlaşması", correct: false }
    ],
    explanation: "İlkel taş aletlerden toprağı işleyen çapa, orak ve ezme taşlarına geçiş; insanlığı doğada hazır bulduğunu tüketen göçebelikten, kendi besinini üreten yerleşik düzene taşımıştır."
  },
  {
    id: 2,
    question: "Bu dönemi ve bölgelerin gelişimini düşündüğünüzde; Mezopotamya'da buğday, Güneydoğu Asya'da pirinç ve Orta Amerika'da mısır gibi farklı tarım ürünlerinin farklı zaman dilimlerinde evcilleştirilmesi aşağıdakilerden hangisini doğrulamaktadır?",
    options: [
      { letter: "A", text: "Tarım Devrimi'nin dünyada tek bir merkezden yayılmadığını, farklı coğrafyalarda bağımsız ortaya çıktığını", correct: true },
      { letter: "B", text: "Dünyadaki bütün toplumların aynı yüzyılda ve aynı yöntemlerle yerleşik hayata geçtiğini", correct: false },
      { letter: "C", text: "İklim ve nehir havzalarının tarımsal üretimde hiçbir belirleyici etkisinin bulunmadığını", correct: false },
      { letter: "D", text: "Tarımın yalnızca kutup ve dağ buzullarının yakınlarında gelişebildiğini", correct: false }
    ],
    explanation: "Farklı coğrafyalarda yerel yabani bitkilerin (buğday, pirinç, mısır) farklı zaman dilimlerinde evcilleştirilmesi, Tarım Devrimi'nin bağımsız merkezlerde ortaya çıktığını kanıtlar."
  },
  {
    id: 3,
    question: "İlk yerleşik köylerin mimari yapısını ve yaşam koşullarını düşündüğünüzde; Çatalhöyük gibi merkezlerde evlerin birbirine bitişik inşa edilmesi, sokakların bulunmaması ve girişlerin damdan yapılması öncelikle hangi ihtiyacın sonucudur?",
    options: [
      { letter: "A", text: "Tarlaları, hasat edilen ürünleri koruma ve toplu savunma güvenliğini sağlama ihtiyacı", correct: true },
      { letter: "B", text: "İnsanların sürekli yer değiştirerek göçebe yaşamını sürdürmesini kolaylaştırma isteği", correct: false },
      { letter: "C", text: "Hayvanların evlerin içinden serbestçe geçiş yapmasını sağlama düşüncesi", correct: false },
      { letter: "D", text: "Kerpiç ve taş malzeme yerine çadır kullanımını yaygınlaştırma amacı", correct: false }
    ],
    explanation: "Tarımla birlikte emek verilen tarlaları ve depolanan hasadı yabani hayvanlardan ve dış tehlikelerden koruma gereği, damdan girişli bitişik ve güvenli köy mimarisini doğurmuştur."
  },
  {
    id: 4,
    question: "İzlediklerinizden yola çıkarak pazar yerlerinin ve mesleki uzmanlaşmanın ortaya çıktığı bu dönemi düşündüğünüzde; tarımsal üretimde elde edilen 'artı ürün' bu çeşitliliği nasıl sağlamıştır?",
    options: [
      { letter: "A", text: "Besin fazlalığı sayesinde toplumun bir kısmının tarladan ayrılarak çömlekçilik, dokumacılık ve ticaret gibi alanlarda uzmanlaşmasını sağlamıştır", correct: true },
      { letter: "B", text: "Bütün insanların istisnasız yalnızca tarla işlerinde çalışmasını zorunlu kılmıştır", correct: false },
      { letter: "C", text: "Takas ekonomisini ve pazar yerlerindeki alışverişi tamamen sona erdirmiştir", correct: false },
      { letter: "D", text: "İnsanların köyleri terk ederek yeniden mağaralara dönmesine yol açmıştır", correct: false }
    ],
    explanation: "Artı ürün (ihtiyaç fazlası besin), tüm insanların tarlada çalışma zorunluluğunu ortadan kaldırarak zanaat, ticaret, yönetim ve sanat alanlarında mesleki iş bölümünü başlatmıştır."
  },
  {
    id: 5,
    question: "Üretici yaşama geçiş sürecini ve ortaya çıkan yeni gereksinimleri düşündüğünüzde; kilden yapılan çanak-çömleklerin ve tahıl ambarlarının insan yaşamında büyük önem kazanmasının temel sebebi aşağıdakilerden hangisidir?",
    options: [
      { letter: "A", text: "Hasat edilen ihtiyaç fazlası ürünlerin saklanması, depolanması ve bozulmadan korunması", correct: true },
      { letter: "B", text: "Avlanan hayvanların göç yollarını takip etmek için hafif malzeme arayışı", correct: false },
      { letter: "C", text: "Mağara duvarlarındaki av resimlerini kapatma ve gizleme düşüncesi", correct: false },
      { letter: "D", text: "Tarım faaliyetlerinin sonlandırılarak tamamen madenciliğe geçilmek istenmesi", correct: false }
    ],
    explanation: "Üretilen tahılların mevsimler boyunca saklanması ve kurak dönemlerde kullanılması ambar yapımını ve pişmiş kilden saklama kaplarını (çanak-çömlek) zorunlu kılmıştır."
  },
  {
    id: 6,
    question: "Güneydoğu Asya'nın coğrafi koşulları ve su kaynakları dikkate alındığında; Sarı Irmak ve Gök Irmak havzalarındaki doğal çevre bu bölgede hangi üretim ve yerleşme modelini ortaya çıkarmıştır?",
    options: [
      { letter: "A", text: "Bol suya dayalı çeltik (pirinç) tarımı ve sulama kanalları etrafında yoğun nüfuslu yerleşimler", correct: true },
      { letter: "B", text: "Yalnızca kurak bozkırlarda yetişen tek yıllık yabani buğday tarımı", correct: false },
      { letter: "C", text: "Nehir kenarlarının tamamen boşaltılarak sadece dağ eteklerinde konaklanması", correct: false },
      { letter: "D", text: "Kalıcı köyler yerine sadece kıl çadırlardan oluşan göçebe oba düzeni", correct: false }
    ],
    explanation: "Muson yağmurları ve geniş ırmak deltaları sulu tarıma imkân sağlamış; pirinç tarımı ortak sulama organizasyonunu ve yoğun nüfuslu yerleşimleri beraberinde getirmiştir."
  },
  {
    id: 7,
    question: "Bu dönemde ambarlarda toplanan artı ürünlerin miktarlarının, dağıtımının ve tapınak vergilerinin kayıt altına alınması gerekliliği düşünüldüğünde; bu durum insanlık tarihinde hangi köklü gelişmenin zeminini hazırlamıştır?",
    options: [
      { letter: "A", text: "Ürünlerin ve vergilerin kaydını tutma gereksinimiyle yazının icat edilmesine", correct: true },
      { letter: "B", text: "Takas uygulamasından vazgeçilerek avcı-toplayıcı düzene dönülmesine", correct: false },
      { letter: "C", text: "Yerleşik köylerin terk edilerek nehir boylarının boşaltılmasına", correct: false },
      { letter: "D", text: "Toplumsal iş bölümünün ve mesleki uzmanlaşmanın sona ermesine", correct: false }
    ],
    explanation: "Tapınaklarda ve depolarda toplanan artı ürünlerin kime ait olduğunu, vergi oranlarını ve dağıtımını kayıt altına alma zorunluluğu Sümerlerde yazının icadını tetiklemiştir."
  },
  {
    id: 8,
    question: "İzlediklerinizden ve edindiğiniz bilgilerden yola çıkarak ilk üretici köylerden günümüzün modern şehirlerine uzanan süreci düşündüğünüzde; bu köklü dönüşümün ortaya koyduğu ana fikir nedir?",
    options: [
      { letter: "A", text: "Günümüz modern şehir ve teknoloji medeniyetinin temellerinin, Tarım Devrimi ile başlayan yerleşme ve üretim sürecine dayanması", correct: true },
      { letter: "B", text: "Modern insanın artık tarım ürünlerine ve besin üretimine hiçbir ihtiyaç duymadığı", correct: false },
      { letter: "C", text: "Avcı-toplayıcı göçebe yaşam tarzının modern şehirlerde hiçbir değişikliğe uğramadan sürdüğü", correct: false },
      { letter: "D", text: "Tarım Devrimi'nin insanlık tarihini gerilettiği ve toplumsal gelişmeyi durdurduğu", correct: false }
    ],
    explanation: "Modern çağın şehirleri, bilimi, hukuku ve teknolojisi; köklerini Neolitik Dönem'de toprağın işlenmesi, yerleşik hayat ve toplumsal iş bölümünün başlamasından alır."
  }
];

let currentQuizIndex = 0;
let quizAnswered = false;

// Soru Sahnesi ve Video Görünüm Geçişleri
function showQuizView() {
  const videoWrapper = document.getElementById('stage2-video-wrapper');
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const instructionsBar = document.getElementById('stage2-instructions-bar');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  if (videoEl && !videoEl.paused) {
    videoEl.pause();
  }

  // Video, açıklama çubuğu ve soru butonunu gizle
  if (videoWrapper) videoWrapper.classList.add('hidden');
  if (instructionsBar) instructionsBar.classList.add('hidden');
  if (quizPrompt) quizPrompt.classList.add('hidden');

  // Soru sahnesini aç
  if (quizWrapper) quizWrapper.classList.remove('hidden');

  renderQuizQuestion();
}

function showVideoView() {
  const videoWrapper = document.getElementById('stage2-video-wrapper');
  const quizWrapper = document.getElementById('stage2-quiz-wrapper');
  const instructionsBar = document.getElementById('stage2-instructions-bar');
  const quizPrompt = document.getElementById('stage2-quiz-prompt');
  const videoEl = document.getElementById('stage2-video');

  // Soru sahnesini gizle
  if (quizWrapper) quizWrapper.classList.add('hidden');

  // Video ve açıklama çubuğunu göster
  if (videoWrapper) videoWrapper.classList.remove('hidden');
  if (instructionsBar) instructionsBar.classList.remove('hidden');

  // Video daha önce tamamlandıysa buton görünür kalır
  if (videoEl && videoEl.ended && quizPrompt) {
    quizPrompt.classList.remove('hidden');
  }
}

// Soru Render Etme
function renderQuizQuestion() {
  const container = document.getElementById('quiz-question-container');
  if (!container) return;

  quizAnswered = false;

  // Tüm sorular tamamlandı mı?
  if (currentQuizIndex >= videoQuizQuestions.length) {
    container.innerHTML = `
      <div class="text-center py-6 px-4 space-y-4 animate-in fade-in zoom-in duration-300">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3b2e] text-[#fffdfa] text-2xl font-bold border-2 border-[#d49d3d] shadow-md">
          ✓
        </div>
        <h3 class="font-monumental text-lg sm:text-xl font-bold text-[#1e3b2e]">
          Değerlendirmeyi Tamamladınız!
        </h3>
        <p class="text-xs sm:text-sm text-[#38332b] max-w-xl mx-auto leading-relaxed">
          Tebrikler! Tarım Devrimi'nin yerleşmeye, ekonomik hayata, mesleki iş bölümüne ve günümüz medeniyetine etkilerini başarıyla değerlendirdiniz.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button id="btn-restart-quiz" class="px-5 py-2.5 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] text-xs sm:text-sm font-semibold rounded-[8px] border border-[#d49d3d]/50 transition-all shadow-md cursor-pointer select-none">
            Soruları Baştan Çöz
          </button>
          <button id="btn-replay-video" class="px-5 py-2.5 bg-transparent hover:bg-[#ebdcc6] text-[#2c261e] border border-[#beab8f] text-xs sm:text-sm font-semibold rounded-[8px] transition-all cursor-pointer select-none">
            Videoyu Yeniden İzle
          </button>
        </div>
      </div>
    `;

    const restartBtn = document.getElementById('btn-restart-quiz');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        currentQuizIndex = 0;
        renderQuizQuestion();
      });
    }

    const replayBtn = document.getElementById('btn-replay-video');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        showVideoView();
        const videoEl = document.getElementById('stage2-video');
        if (videoEl) {
          videoEl.currentTime = 0;
          videoEl.play();
        }
      });
    }
    return;
  }

  const q = videoQuizQuestions[currentQuizIndex];

  container.innerHTML = `
    <!-- Soru Metni (Doğrudan Ana Kart Zemininde) -->
    <p class="font-body font-bold text-[13.5px] sm:text-[15px] md:text-base text-[#1e3b2e] leading-relaxed py-1">
      ${q.question}
    </p>

    <!-- Seçenekler Listesi (Kompakt ve Birbirine Yakın Tek Sütun) -->
    <div class="flex flex-col gap-2 sm:gap-2.5 pt-0.5" id="quiz-options-list">
      ${q.options.map((opt, idx) => `
        <div class="quiz-option-card" data-index="${idx}" role="button" tabindex="0">
          <span class="quiz-option-letter">${opt.letter}</span>
          <span class="text-xs sm:text-[13px] md:text-[13.5px] text-[#2c261e] font-medium leading-snug flex-1">${opt.text}</span>
        </div>
      `).join('')}
    </div>

    <!-- Açıklama ve Çıkarım Geri Bildirim Kutusu -->
    <div id="quiz-feedback-card" class="hidden p-3 sm:p-3.5 rounded-[10px] text-xs sm:text-[13px] leading-relaxed border transition-all shadow-2xs"></div>

    <!-- Sonraki Soru Buton Alanı -->
    <div class="flex items-center justify-end pt-1">
      <button id="btn-next-quiz-question" class="hidden px-5 py-2.5 bg-[#1e3b2e] hover:bg-[#152a21] text-[#fffdfa] font-bold text-xs sm:text-sm rounded-[8px] border border-[#d49d3d]/50 transition-all shadow-xs select-none cursor-pointer">
        ${currentQuizIndex === videoQuizQuestions.length - 1 ? 'Sonucu Gör ➔' : 'Sonraki Soru ➔'}
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
  const q = videoQuizQuestions[currentQuizIndex];
  const selectedOpt = q.options[selectedIndex];
  const optionsList = document.getElementById('quiz-options-list');
  const feedbackCard = document.getElementById('quiz-feedback-card');
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

  if (feedbackCard) {
    feedbackCard.classList.remove('hidden');
    if (selectedOpt.correct) {
      feedbackCard.className = 'p-3 rounded-[10px] text-xs sm:text-[13px] leading-relaxed border bg-[#eaf1e8] border-[#1e3b2e] text-[#1e3b2e] font-medium';
      feedbackCard.innerHTML = `<strong>Doğru Değerlendirme:</strong> ${q.explanation}`;
    } else {
      feedbackCard.className = 'p-3 rounded-[10px] text-xs sm:text-[13px] leading-relaxed border bg-[#fdf3f0] border-[#9e4e34] text-[#9e4e34] font-medium';
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

  const btnBackToVideoFromQuiz = document.getElementById('btn-back-to-video-from-quiz');
  if (btnBackToVideoFromQuiz) {
    btnBackToVideoFromQuiz.addEventListener('click', () => {
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
