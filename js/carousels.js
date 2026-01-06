/* ============================================
   CAROUSELS.JS - Lógica de Carruseles
   ============================================ */

// ACTUALIZAR FLECHAS DE ACTIVIDAD
function updateActivityArrows() {
  const carousel = document.getElementById('activityCarousel');
  const leftArrow = document.getElementById('activityArrowLeft');
  const rightArrow = document.getElementById('activityArrowRight');
  
  if (!carousel || !leftArrow || !rightArrow) return;
  
  const scrollLeft = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
  if (scrollLeft > 10) {
    leftArrow.classList.add('visible');
  } else {
    leftArrow.classList.remove('visible');
  }
  
  if (scrollLeft < maxScroll - 10) {
    rightArrow.classList.add('visible');
  } else {
    rightArrow.classList.remove('visible');
  }
}

// ACTUALIZAR FLECHAS DE TOP JUGADORES
function updatePodiumArrows() {
  const carousel = document.getElementById('podiumCarousel');
  const leftArrow = document.getElementById('podiumArrowLeft');
  const rightArrow = document.getElementById('podiumArrowRight');
  
  if (!carousel || !leftArrow || !rightArrow) return;
  
  const scrollLeft = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
  // Solo mostrar flechas si HAY overflow real
  if (maxScroll > 10) {
    if (scrollLeft > 10) {
      leftArrow.classList.add('visible');
    } else {
      leftArrow.classList.remove('visible');
    }
    
    if (scrollLeft < maxScroll - 10) {
      rightArrow.classList.add('visible');
    } else {
      rightArrow.classList.remove('visible');
    }
  } else {
    // No hay overflow = no mostrar flechas
    leftArrow.classList.remove('visible');
    rightArrow.classList.remove('visible');
  }
}

// SCROLL ACTIVIDAD
function scrollActivity(direction) {
  const carousel = document.getElementById('activityCarousel');
  const scrollAmount = 155;
  
  if (direction === 'left') {
    carousel.scrollLeft -= scrollAmount;
  } else {
    carousel.scrollLeft += scrollAmount;
  }
  
  setTimeout(updateActivityArrows, 100);
}

// SCROLL TOP JUGADORES
function scrollPodium(direction) {
  const carousel = document.getElementById('podiumCarousel');
  const scrollAmount = 185;
  
  if (direction === 'left') {
    carousel.scrollLeft -= scrollAmount;
  } else {
    carousel.scrollLeft += scrollAmount;
  }
  
  setTimeout(updatePodiumArrows, 100);
}
