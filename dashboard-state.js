/*
  User-confirmed semester baseline as at 9 Sep 2026.
  Past completed assessments stay checked. Past lesson blocks are pre-completed,
  while TAXA initial learning through depreciation schedules is marked done without
  marking the later practice/revision checks as complete.
*/
(function () {
  const cutoff = new Date('2026-09-09T23:59:59+08:00');

  // Restore the missing early TAXA learning map so progress reflects what was actually taught.
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

  const allSteps = ['learn','practice','check','understood'];
  const fullyCompletedTopics = [
    'acct1','acct2','acct3','acct4','acct5','acct6',
    'ecom1','ecom2','ecom3','ecom4','ecom5','ecomPrep',
    'econ1','econ2','econ3','econ4','econ5'
  ];

  // Past lesson blocks are treated as completed and re-applied on every load.
  fullyCompletedTopics.forEach(topicId => {
    const unitId = topicId.startsWith('acct') ? 'acct' : topicId.startsWith('ecom') ? 'ecom' : 'econ';
    allSteps.forEach(step => localStorage.setItem(`imstudying:topic:${unitId}:${topicId}:${step}`, '1'));
  });

  // TAXA: initial learning is done through the depreciation-schedule topic,
  // but practice / official-solution / revision work is deliberately NOT marked done.
  ['taxa1','taxa2','taxa3'].forEach(topicId => {
    localStorage.setItem(`imstudying:topic:taxa:${topicId}:learn`, '1');
    localStorage.setItem(`imstudying:topic:taxa:${topicId}:understood`, '1');
    localStorage.removeItem(`imstudying:topic:taxa:${topicId}:practice`);
    localStorage.removeItem(`imstudying:topic:taxa:${topicId}:check`);
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
      if (p) p.textContent = 'completed work up to 9 Sep is already counted.';
    }
  };

  renderAssessments = function () {
    const sorted = [...assessments].sort((a,b)=>new Date(a.due)-new Date(b.due));
    document.querySelector('#view-assessments').innerHTML = `
      <div class="section-head"><div><h2>assessments & deadlines</h2><p>Anything completed by 9 Sep is permanently checked; upcoming work stays open.</p></div></div>
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

  // Re-render after applying the baseline so the first visible state is correct.
  renderDashboard();
  renderAssessments();
})();
