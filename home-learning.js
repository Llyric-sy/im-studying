/* Make learning the obvious entry point from the dashboard. */
(function () {
  const originalRenderDashboard = renderDashboard;

  function esc(value = '') {
    return String(value).replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[ch]));
  }

  function firstReadyTopic(unit) {
    return unit.topics.find(topic => lessonData[topic.id]);
  }

  function currentReadyTopics() {
    const current = getCurrentWeek();
    if (!current) return [];
    return units.flatMap(unit => unit.topics
      .filter(topic => topic.week === current.week && lessonData[topic.id])
      .map(topic => ({ unit, topic }))
    );
  }

  function learningHomeMarkup() {
    const current = getCurrentWeek();
    const currentReady = currentReadyTopics();

    const unitCards = units.map(unit => {
      const topic = firstReadyTopic(unit);
      const readyCount = unit.topics.filter(t => lessonData[t.id]).length;
      if (!topic) {
        return `
          <article class="learn-home-unit muted" style="--unit-accent:${unit.accent}">
            <div class="unit-code">${esc(unit.code)}</div>
            <h3>${esc(unit.name)}</h3>
            <p>Detailed teaching files are still pending, so I am not filling this unit with made-up lessons.</p>
            <span class="learn-home-status">source pack pending</span>
          </article>`;
      }

      return `
        <article class="learn-home-unit" style="--unit-accent:${unit.accent}">
          <div class="unit-code">${esc(unit.code)}</div>
          <h3>${esc(unit.name)}</h3>
          <p>${readyCount} lesson${readyCount === 1 ? '' : 's'} ready. Start from the beginning rather than guessing which week you are up to.</p>
          <button class="learn-home-button" data-jump-lesson="${unit.id}:${topic.id}">start lesson 1 →</button>
        </article>`;
    }).join('');

    const currentMarkup = currentReady.length
      ? `<div class="learn-current-list">${currentReady.map(({ unit, topic }) => `
          <button class="learn-current-button" data-jump-lesson="${unit.id}:${topic.id}" style="--unit-accent:${unit.accent}">
            <span><b>${esc(unit.code)}</b> · ${esc(topic.title)}</span>
            <small>${current ? esc(current.dates) + ' · Week ' + current.week : ''}</small>
            <strong>learn this now →</strong>
          </button>`).join('')}</div>`
      : `<p class="learn-home-empty">No fully sourced lesson is mapped to the current teaching week yet. Use “start lesson 1” below.</p>`;

    return `
      <section class="learning-home">
        <div class="learning-home-head">
          <div>
            <div class="hero-kicker">actual learning starts here</div>
            <h2>do the lesson, not just the tracker.</h2>
            <p>Each ready lesson goes: plain-English idea → visual map → teaching sections → worked example → common trap → self-check.</p>
          </div>
          <button class="learn-all-button" data-go="units">open all lessons</button>
        </div>

        <div class="learn-current-block">
          <div class="lesson-label">current-week lessons that are ready</div>
          ${currentMarkup}
        </div>

        <div class="lesson-label learn-start-label">or start fresh by unit</div>
        <div class="learn-home-grid">${unitCards}</div>
      </section>`;
  }

  renderDashboard = function () {
    originalRenderDashboard();
    const target = document.querySelector('#view-dashboard');
    if (!target) return;
    target.insertAdjacentHTML('afterbegin', learningHomeMarkup());
  };

  document.addEventListener('click', event => {
    const jump = event.target.closest('[data-jump-lesson]');
    if (!jump) return;

    const [unitId, topicId] = jump.dataset.jumpLesson.split(':');
    setView('units');
    renderUnits(unitId);

    requestAnimationFrame(() => {
      const card = document.querySelector(`[data-lesson-topic="${topicId}"]`);
      if (!card) return;
      const details = card.querySelector('details');
      if (details) details.open = true;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Add stable topic hooks to lesson cards without changing the stored course data.
  const originalLearningTopic = renderLearningTopic;
  renderLearningTopic = function (unit, topic) {
    return originalLearningTopic(unit, topic).replace(
      '<article class="topic-card learning-card',
      `<article data-lesson-topic="${topic.id}" class="topic-card learning-card`
    );
  };

  // Re-render once so this is the first thing visible on the dashboard after deployment.
  renderDashboard();
})();
