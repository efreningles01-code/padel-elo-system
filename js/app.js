/* ============================================
   APP.JS - Inicialización de la Aplicación
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // INICIALIZAR CARRUSEL DE ACTIVIDAD
  const activityCarousel = document.getElementById('activityCarousel');
  
  if (activityCarousel) {
    activityCarousel.scrollLeft = 0;
    updateActivityArrows();
    activityCarousel.addEventListener('scroll', updateActivityArrows);
    window.addEventListener('resize', updateActivityArrows);
  }
  
  // INICIALIZAR CARRUSEL DE TOP JUGADORES
  const podiumCarousel = document.getElementById('podiumCarousel');
  
  if (podiumCarousel) {
    podiumCarousel.scrollLeft = 0;
    updatePodiumArrows();
    podiumCarousel.addEventListener('scroll', updatePodiumArrows);
    window.addEventListener('resize', updatePodiumArrows);
  }
  
  console.log('Padel ELO System cargado correctamente ✅');
});
