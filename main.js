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
  const activeCardEl = document.getElementById('active-card');
  if (activeCardEl) {
    activeCardEl.classList.remove('card-selected');
  }
}

// Kart Seçimi (Dokunmatik ve Akıllı Tahta Desteği)
function toggleCardSelection() {
  if (!remainingCards.length) return;
  const currentCard = remainingCards[0];
  const activeCardEl = document.getElementById('active-card');
  if (!activeCardEl) return;

  if (selectedCardId === currentCard.id) {
    clearSelection();
  } else {
    selectedCardId = currentCard.id;
    activeCardEl.classList.add('card-selected');
    showFeedback('Bilgi kartı seçildi. Şimdi harita üzerindeki ilgili odak bölgesine dokununuz.', true);
  }
}

// Aktif Kartı Harita İçinde Gösterme
function renderActiveCard() {
  if (!activeCardContainer) return;
  clearSelection();

  // Tüm kartlar tamamlandı mı?
  if (remainingCards.length === 0) {
    activeCardContainer.innerHTML = `
      <div id="reopen-modal-card" class="bg-[#fffef9] rounded-[10px] border-2 border-[#244c3b] px-6 py-2.5 shadow-[0_5px_16px_rgba(49,73,52,0.12)] text-center text-xs sm:text-sm font-semibold text-[#244c3b] animate-in fade-in duration-200 cursor-pointer hover:bg-[#e8ede2] transition-colors" title="Tabloyu tekrar açmak için tıklayınız">
        Tüm bilgiler başarıyla eşleştirildi. (Tabloyu görmek için tıklayınız)
      </div>
    `;

    const reopenBtn = document.getElementById('reopen-modal-card');
    if (reopenBtn) {
      reopenBtn.addEventListener('click', () => {
        if (completionModal) completionModal.classList.remove('hidden');
      });
    }

    setTimeout(() => {
      if (completionModal) completionModal.classList.remove('hidden');
    }, 600);
    return;
  }

  const currentCard = remainingCards[0];

  // SADECE eşleştirilmesi istenen cümle
  activeCardContainer.innerHTML = `
    <div id="active-card" 
         class="card-draggable bg-[#fffef9] rounded-[10px] border-2 border-[#244c3b] px-5 py-2.5 sm:py-3 shadow-[0_5px_16px_rgba(49,73,52,0.12)] hover:shadow-[0_8px_24px_rgba(49,73,52,0.18)] hover:border-[#173d2b] transition-all text-xs sm:text-sm md:text-[15px] font-medium text-[#243e32] text-center cursor-grab active:cursor-grabbing select-none"
         draggable="true"
         data-card-id="${currentCard.id}">
      ${currentCard.text}
    </div>
  `;

  const activeCardEl = document.getElementById('active-card');

  // Sürükleme ve Tıklama Olayları
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

    // Dokunmatik / Tıklama Seçimi
    activeCardEl.addEventListener('click', () => {
      toggleCardSelection();
    });
  }
}

// Kartı Doğrudan Haritadaki İlgili Hedef Alana Yerleştirme
function placeCardIntoTarget(cardData, targetRegion) {
  const targetList = document.getElementById(`list-${targetRegion}`);
  const targetEl = document.getElementById(`target-${targetRegion}`);
  if (!targetList || !targetEl) return;

  // Kartı doğrudan hedef alanın içine yerleştir (bölge kartı belirgin ve tek başlık niteliğinde)
  const itemEl = document.createElement('div');
  if (cardData.category === 'bolge') {
    itemEl.className = 'bg-[#e8ede2] rounded-[8px] p-1.5 sm:p-2 text-[10px] sm:text-[11px] md:text-xs font-bold text-[#244c3b] border border-[#244c3b] shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
  } else {
    itemEl.className = 'bg-[#fffef9] rounded-[8px] p-1 sm:p-1.5 text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#243e32] border border-[#d9ddd0] shadow-xs leading-tight animate-in fade-in zoom-in duration-200';
  }
  itemEl.textContent = cardData.text;
  targetList.appendChild(itemEl);

  // Kalan kartlar dizisinden kaldır
  remainingCards = remainingCards.filter(c => c.id !== cardData.id);

  // Durumu kaydet
  placedCards.set(cardData.id, { region: cardData.region, category: cardData.category });
  clearSelection();
  updateProgress();

  // Hedef alanına başarı animasyonu (Forest rengi ring)
  targetEl.classList.add('ring-4', 'ring-[#244c3b]/50');
  setTimeout(() => targetEl.classList.remove('ring-4', 'ring-[#244c3b]/50'), 700);

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
function triggerErrorEffect(element, customMessage) {
  element.classList.add('ring-4', 'ring-[#ab654e]', 'bg-[#ab654e]/20');
  setTimeout(() => {
    element.classList.remove('ring-4', 'ring-[#ab654e]', 'bg-[#ab654e]/20');
  }, 800);

  showFeedback(customMessage || 'Bu bilgi seçilen alan ile uyuşmamaktadır. Lütfen bilgileri tekrar inceleyiniz.', false);
}

// Doğrulama ve Eşleştirme Mantığı
function handlePlacementAttempt(cardId, targetRegion) {
  const cardData = cardsData.find(c => c.id === cardId);
  if (!cardData) return;

  const targetEl = document.getElementById(`target-${targetRegion}`);

  // Bölge kontrolü
  if (cardData.region !== targetRegion) {
    if (cardData.category === 'bolge') {
      if (targetEl) triggerErrorEffect(targetEl, 'Bu bölge haritada seçtiğiniz alanda yer almamaktadır. Coğrafi konumu tekrar inceleyiniz.');
    } else {
      if (targetEl) triggerErrorEffect(targetEl, 'Bu bilgi bu coğrafi bölgeye ait değildir. Haritadaki diğer alanları değerlendiriniz.');
    }
    return;
  }

  // Doğru ise doğrudan haritadaki hedefin içine yerleştir
  placeCardIntoTarget(cardData, targetRegion);
}

// Tamamlanma Durumu Kontrolü (Sayaçsız)
function updateProgress() {
  // Bölge bazında tamamlanma kontrolü
  const regions = ['mezopotamya', 'guneydogu-asya', 'orta-amerika'];
  regions.forEach(r => {
    let regionCompletedCount = 0;
    cardsData.filter(c => c.region === r).forEach(c => {
      if (placedCards.has(c.id)) regionCompletedCount++;
    });

    const mapTarget = document.getElementById(`target-${r}`);
    if (mapTarget) {
      if (regionCompletedCount === 4) {
        mapTarget.classList.add('completed');
      } else {
        mapTarget.classList.remove('completed');
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

  // Hedef alanlardaki kart listelerini sıfırla (başlangıçta tamamen boş)
  ['mezopotamya', 'guneydogu-asya', 'orta-amerika'].forEach(r => {
    const listEl = document.getElementById(`list-${r}`);
    if (listEl) listEl.innerHTML = '';

    const mapTarget = document.getElementById(`target-${r}`);
    if (mapTarget) {
      mapTarget.classList.remove('completed');
      mapTarget.removeAttribute('title');
    }
  });

  updateProgress();
  renderActiveCard();
}

// Hedef Alanları Dinleyicilerini Kurma
function setupDropTargets() {
  const mapTargets = document.querySelectorAll('.map-focus-target');
  mapTargets.forEach(target => {
    const region = target.getAttribute('data-region');

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

    // Tıklama (Seçili kart varsa doğrudan yerleştir)
    target.addEventListener('click', () => {
      if (selectedCardId) {
        handlePlacementAttempt(selectedCardId, region);
      }
    });
  });

  // Boş alana tıklanınca seçimi temizleme
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#active-card') && !e.target.closest('.map-focus-target')) {
      clearSelection();
    }
  });
}

// Başlatma Olayları
function init() {
  resetActivity();
  setupDropTargets();

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetActivity();
      showFeedback('Etkinlik sıfırlandı. Kartlar yeniden karıştırıldı.', true);
    });
  }

  if (modalRestartBtn) {
    modalRestartBtn.addEventListener('click', () => {
      if (completionModal) completionModal.classList.add('hidden');
      resetActivity();
      showFeedback('Etkinlik yeniden başlatıldı.', true);
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
}

// Uygulamayı Başlat
document.addEventListener('DOMContentLoaded', init);
