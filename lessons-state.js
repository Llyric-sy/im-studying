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

  const tabs = document.querySelector('.tabs');
  const units = [...document.querySelectorAll('.unit[id]')];
  if (!tabs || !units.length) return;

  const existingLinks = [...tabs.querySelectorAll('a[href^="#"]')];
  existingLinks.forEach(link => {
    link.dataset.unitFilter = link.getAttribute('href').slice(1);
  });

  if (!tabs.querySelector('[data-unit-filter="all"]')) {
    const allLink = document.createElement('a');
    allLink.href = '#all';
    allLink.dataset.unitFilter = 'all';
    allLink.textContent = 'All';
    tabs.prepend(allLink);
  }

  const filterLinks = [...tabs.querySelectorAll('[data-unit-filter]')];
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
    });
  });

  window.addEventListener('hashchange', () => {
    const hashFilter = location.hash.replace('#', '');
    if (validFilters.has(hashFilter)) applyFilter(hashFilter, { updateUrl: false });
  });

  const initialFilter = location.hash.replace('#', '');
  applyFilter(validFilters.has(initialFilter) ? initialFilter : 'all', { updateUrl: false });
})();
