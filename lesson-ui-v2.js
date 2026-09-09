/*
  Lesson UI v2: make the learning content impossible to miss.
  This layer replaces the expandable tracker-style topic list with a clickable
  lesson catalogue and a dedicated full lesson reader.
*/
(function () {
  const $unitsView = () => document.querySelector('#view-units');

  function safe(value = '') {
    return String(value).replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[ch]));
  }

  function weekMeta(topic) {
    const week = semesterWeeks.find(w => w.week === topic.week);
    return week ? `${week.dates} · Week ${week.week}` : `Week ${topic.week}`;
  }

  function readyCount(unit) {
    return unit.topics.filter(t => lessonData[t.id]).length;
  }

  function renderLessonCatalogue(filter = 'all') {
    const target = $unitsView();
    if (!target) return;
    const visibleUnits = filter === 'all' ? units : units.filter(u => u.id === filter);
    const currentWeek = getCurrentWeek();

    target.innerHTML = `
      <div class="lesson-catalogue-head">
        <div>
          <p class="lesson-catalogue-kicker">choose something to learn</p>
          <h2>lessons</h2>
          <p>Click a lesson card. It opens the actual teaching page — explanation, diagram, worked example, traps and self-checks.</p>
        </div>
      </div>

      <div class="filters lesson-unit-filters">
        ${[{ id: 'all', label: 'all units' }, ...units.map(u => ({ id: u.id, label: u.code }))]
          .map(f => `<button class="filter-button ${f.id === filter ? 'active' : ''}" data-unit-filter-v2="${f.id}">${safe(f.label)}</button>`)
          .join('')}
      </div>

      ${visibleUnits.map(unit => `
        <section class="lesson-catalogue-unit" style="--unit-accent:${unit.accent}">
          <div class="lesson-catalogue-unit-head">
            <div>
              <div class="unit-code">${safe(unit.code)}</div>
              <h3>${safe(unit.name)}</h3>
            </div>
            <span>${readyCount(unit)} lesson${readyCount(unit) === 1 ? '' : 's'} ready</span>
          </div>

          <div class="lesson-card-grid">
            ${unit.topics.map((topic, index) => {
              const ready = !!lessonData[topic.id];
              const current = currentWeek && currentWeek.week === topic.week;
              return `
                <article
                  class="lesson-choice-card ${ready ? 'ready' : 'pending'} ${current ? 'current' : ''}"
                  ${ready ? `data-open-lesson="${unit.id}:${topic.id}" tabindex="0" role="button" aria-label="Open ${safe(topic.title)} lesson"` : ''}
                >
                  <div class="lesson-choice-top">
                    <span class="lesson-number">${String(index + 1).padStart(2, '0')}</span>
                    <span class="lesson-choice-status">${ready ? 'LESSON READY' : 'SOURCE PACK PENDING'}</span>
                  </div>
                  <div class="lesson-choice-date">${safe(weekMeta(topic))}${current ? ' · CURRENT' : ''}</div>
                  <h4>${safe(topic.title)}</h4>
                  <p>${safe(topic.plain)}</p>
                  ${ready
                    ? `<button class="view-lesson-button" type="button" data-open-lesson="${unit.id}:${topic.id}">VIEW LESSON →</button>`
                    : `<div class="view-lesson-disabled">lesson will appear when the source material is added</div>`}
                </article>`;
            }).join('')}
          </div>
        </section>`).join('')}
    `;
  }

  function renderFullLesson(unitId, topicId) {
    const unit = units.find(u => u.id === unitId);
    const topic = unit?.topics.find(t => t.id === topicId);
    const lesson = topic ? lessonData[topic.id] : null;
    const target = $unitsView();
    if (!target || !unit || !topic || !lesson) return;

    const index = unit.topics.findIndex(t => t.id === topicId);
    const previous = [...unit.topics.slice(0, index)].reverse().find(t => lessonData[t.id]);
    const next = unit.topics.slice(index + 1).find(t => lessonData[t.id]);

    target.innerHTML = `
      <div class="lesson-reader" style="--unit-accent:${unit.accent}">
        <div class="lesson-reader-nav">
          <button type="button" class="back-to-lessons" data-back-lessons="${unit.id}">← ALL ${safe(unit.code)} LESSONS</button>
          <div class="lesson-reader-step">${safe(weekMeta(topic))}</div>
        </div>

        <header class="lesson-reader-hero">
          <div class="unit-code">${safe(unit.code)}</div>
          <h2>${safe(topic.title)}</h2>
          <p>${safe(topic.plain)}</p>
        </header>

        ${renderLessonBody(unit, topic, lesson)}

        <div class="study-flow lesson-reader-progress">
          ${steps.map(([step, label]) => {
            const key = topicKey(unit.id, topic.id, step);
            const checked = store.get(key);
            return `<label class="check-chip"><input type="checkbox" data-topic-check="${key}" ${checked ? 'checked' : ''}> ${safe(label)}</label>`;
          }).join('')}
        </div>

        <nav class="lesson-reader-bottom-nav" aria-label="Lesson navigation">
          ${previous
            ? `<button type="button" data-open-lesson="${unit.id}:${previous.id}">← ${safe(previous.title)}</button>`
            : '<span></span>'}
          ${next
            ? `<button type="button" data-open-lesson="${unit.id}:${next.id}">${safe(next.title)} →</button>`
            : '<span></span>'}
        </nav>
      </div>
    `;

    if (typeof restoreLessonSelfChecks === 'function') restoreLessonSelfChecks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // This is now the canonical Lessons screen.
  renderUnits = function (filter = 'all') {
    renderLessonCatalogue(filter);
  };

  // Expose this for dashboard jump buttons and future links.
  window.openStudyLesson = function (unitId, topicId) {
    setView('units');
    renderFullLesson(unitId, topicId);
  };

  document.addEventListener('click', event => {
    const filter = event.target.closest('[data-unit-filter-v2]');
    if (filter) {
      renderLessonCatalogue(filter.dataset.unitFilterV2);
      return;
    }

    const opener = event.target.closest('[data-open-lesson]');
    if (opener) {
      const [unitId, topicId] = opener.dataset.openLesson.split(':');
      renderFullLesson(unitId, topicId);
      return;
    }

    const back = event.target.closest('[data-back-lessons]');
    if (back) {
      renderLessonCatalogue(back.dataset.backLessons || 'all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Existing dashboard buttons from home-learning.js now use the dedicated reader.
    const jump = event.target.closest('[data-jump-lesson]');
    if (jump) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const [unitId, topicId] = jump.dataset.jumpLesson.split(':');
      window.openStudyLesson(unitId, topicId);
    }
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.lesson-choice-card[data-open-lesson]');
    if (!card || event.target.closest('button')) return;
    event.preventDefault();
    const [unitId, topicId] = card.dataset.openLesson.split(':');
    renderFullLesson(unitId, topicId);
  });

  // Replace whatever lesson catalogue an older cached renderer produced.
  renderLessonCatalogue('all');
})();