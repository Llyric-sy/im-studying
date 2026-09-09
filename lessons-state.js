(() => {
  const cards = [...document.querySelectorAll('[data-lesson-id]')];
  cards.forEach(card => {
    const id = card.dataset.lessonId;
    if (localStorage.getItem(`imstudying:lessonfull:${id}`) !== '1') return;
    card.classList.remove('partial','current');
    card.classList.add('done');
    const status = card.querySelector('.status');
    if (status) status.innerHTML = '✓ fully complete<small>marked complete by you</small>';
  });
})();
