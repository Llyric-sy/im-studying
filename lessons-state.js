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

  const filterLinks = [...document.querySelectorAll('[data-unit-filter]')];
  const units = [...document.querySelectorAll('.unit[id]')];
  const validFilters = new Set(['all', ...units.map(unit => unit.id)]);

  function applyFilter(filter, { updateUrl = true } = {}) {
    const next = validFilters.has(filter) ? filter : 'all';

    units.forEach(unit => {
      unit.hidden = next !== 'all' && unit.id !== next;
    });

    filterLinks.forEach(link => {
      const selected = link.dataset.unitFilter === next;
      link.classList.toggle('active', selected);
      link.setAttribute('aria-current', selected ? 'true' : 'false');
    });

    if (updateUrl) {
      const url = new URL(location.href);
      url.hash = next === 'all' ? '' : next;
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    }
  }

  filterLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      applyFilter(link.dataset.unitFilter);
      document.querySelector('.tabs')?.scrollIntoView({ block: 'nearest' });
    });
  });

  const initialFilter = location.hash.replace('#', '');
  applyFilter(validFilters.has(initialFilter) ? initialFilter : 'all', { updateUrl: false });
})();
