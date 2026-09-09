/*
  User-confirmed semester baseline as at 9 Sep 2026.
  Past assessments remain completed. Past lesson blocks are ONLY partial:
  the initial learning pass is pre-ticked, while practice, solution checking and
  final-understanding remain open until the user finishes the lesson themselves.
*/
(function () {
  const cutoff = new Date('2026-09-09T23:59:59+08:00');

  // Restore early TAXA topics so the dashboard reflects the taught sequence.
  const taxa = units.find(u => u.id === 'taxa');
  if (taxa && !taxa.topics.some(t => t.id === 'taxa1')) {
    taxa.topics.unshift(
      {
        id:'taxa1', week:1, title:'Income', source:'Unit outline · detailed source pack to come', received:false,
        plain:'Identify what amounts are assessable income before working out the taxpayer’s taxable position.',
        terms:[['assessable income','income amounts included for tax purposes'],['ordinary income','income according to ordinary concepts']]
      },
      {
        id:'taxa2', week:2, title:'Deductions', source:'Unit outline · detailed source pack to come', received:false,
        plain:'Work out which expenses can reduce assessable income and which are private, capital or otherwise denied.',
        terms:[['deduction','eligible amount subtracted in working out taxable income'],['nexus','connection between the expense and income-producing activity']]
      },
      {
        id:'taxa3', week:3, title:'Uniform Capital Allowances & depreciation schedules', source:'Unit outline · detailed source pack to come', received:false,
        plain:'Work out deductions for eligible depreciating assets over time rather than treating the whole asset cost as an immediate expense.',
        terms:[['depreciating asset','asset with a limited effective life that declines in value'],['decline in value','tax deduction calculated over the asset’s effective life'],['depreciation schedule','working schedule tracking asset cost and decline in value']]
      },
      {
        id:'taxa4', week:4, title:'Capital Gains Tax — introduction', source:'Unit outline · detailed source pack to come', received:false,
        plain:'Identify when a CGT event happens and the basic amounts used to work out a capital gain or capital loss.',
        terms:[['CGT event','event that can trigger a capital gain or loss'],['cost base','amount used in calculating a capital gain']]
      }
    );
  }

  if (taxa) {
    const week6 = taxa.topics.find(t => t.id === 'taxa6');
    if (week6) {
      week6.title = 'CGT application';
      week6.plain = 'Apply the CGT rules to transactions and work through the calculation steps before the test-revision block.';
    }
  }

  const partialBaseline = [
    ['acct','acct1'],['acct','acct2'],['acct','acct3'],['acct','acct4'],['acct','acct5'],['acct','acct6'],
    ['ecom','ecom1'],['ecom','ecom2'],['ecom','ecom3'],['ecom','ecom4'],['ecom','ecom5'],['ecom','ecomPrep'],
    ['econ','econ1'],['econ','econ2'],['econ','econ3'],['econ','econ4'],['econ','econ5'],
    ['taxa','taxa1'],['taxa','taxa2'],['taxa','taxa3']
  ];

  // Important migration from the older build: it had auto-filled all four checks.
  // Unless the user has explicitly used the new lesson reader to mark a lesson FULL,
  // keep only the initial learning pass and clear the remaining auto-filled checks.
  partialBaseline.forEach(([unitId, topicId]) => {
    const explicitlyFull = localStorage.getItem(`imstudying:lessonfull:${topicId}`) === '1';
    localStorage.setItem(`imstudying:topic:${unitId}:${topicId}:learn`, '1');
    if (!explicitlyFull) {
      ['practice','check','understood'].forEach(step => {
        localStorage.removeItem(`imstudying:topic:${unitId}:${topicId}:${step}`);
      });
    }
  });

  const completedAssessmentIds = assessments
    .filter(a => new Date(a.due) <= cutoff)
    .map(a => a.id);
  completedAssessmentIds.forEach(id => localStorage.setItem(`imstudying:assessment:${id}`, '1'));

  const oldDashboard = renderDashboard;
  renderDashboard = function () {
    oldDashboard();
    const root = document.querySelector('#view-dashboard');
    if (!root) return;

    const progressTitle = [...root.querySelectorAll('h3')].find(el => el.textContent.trim() === 'fresh-start progress');
    if (progressTitle) {
      progressTitle.textContent = 'semester progress';
      const p = progressTitle.parentElement?.querySelector('p');
      if (p) p.textContent = 'past lessons count as partial only; full completion is yours to mark.';
    }

    root.querySelectorAll('.unit-card').forEach(card => {
      const meta = card.querySelector('.progress-meta span:first-child');
      if (meta) meta.textContent = 'lesson progress';
    });
  };

  renderAssessments = function () {
    const sorted = [...assessments].sort((a,b)=>new Date(a.due)-new Date(b.due));
    document.querySelector('#view-assessments').innerHTML = `
      <div class="section-head"><div><h2>assessments & deadlines</h2><p>Anything completed by 9 Sep stays permanently checked; upcoming work stays open.</p></div></div>
      <div class="assessment-grid">${sorted.map(a=>{
        const lockedDone = completedAssessmentIds.includes(a.id);
        const checked = lockedDone || store.get(assessmentKey(a.id));
        const state = deadlineState(a);
        const days = daysUntil(a.due);
        const status = lockedDone ? 'completed' : a.tba ? 'exact time TBA' : state === 'past' ? 'date has passed' : days === 0 ? 'due today' : `${days} days away`;
        return `<article class="assessment-card ${checked?'done':''}">
          <input type="checkbox" data-assessment-check="${a.id}" ${checked?'checked':''} ${lockedDone?'disabled':''} aria-label="${lockedDone?'Completed':'Mark complete'} ${esc(a.name)}">
          <div><div class="assessment-name">${a.unit} · ${esc(a.name)}</div><div class="assessment-detail">${a.weight}${a.note?` · ${esc(a.note)}`:''}</div></div>
          <div class="assessment-due"><strong>${esc(a.display)}</strong><span>${status}</span></div>
        </article>`;
      }).join('')}</div>`;
  };

  renderDashboard();
  renderAssessments();
})();
