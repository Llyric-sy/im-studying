const semesterWeeks = [
  { week: 1, start: '2026-07-20', end: '2026-07-26', dates: '20–26 Jul', kind: 'teaching' },
  { week: 2, start: '2026-07-27', end: '2026-08-02', dates: '27 Jul–2 Aug', kind: 'teaching' },
  { week: 3, start: '2026-08-03', end: '2026-08-09', dates: '3–9 Aug', kind: 'teaching' },
  { week: 4, start: '2026-08-10', end: '2026-08-16', dates: '10–16 Aug', kind: 'teaching' },
  { week: 5, start: '2026-08-17', end: '2026-08-23', dates: '17–23 Aug', kind: 'tuition-free' },
  { week: 6, start: '2026-08-24', end: '2026-08-30', dates: '24–30 Aug', kind: 'teaching' },
  { week: 7, start: '2026-08-31', end: '2026-09-06', dates: '31 Aug–6 Sep', kind: 'teaching' },
  { week: 8, start: '2026-09-07', end: '2026-09-13', dates: '7–13 Sep', kind: 'teaching' },
  { week: 9, start: '2026-09-14', end: '2026-09-20', dates: '14–20 Sep', kind: 'teaching' },
  { week: 10, start: '2026-09-21', end: '2026-09-27', dates: '21–27 Sep', kind: 'teaching' },
  { week: 11, start: '2026-09-28', end: '2026-10-04', dates: '28 Sep–4 Oct', kind: 'tuition-free' },
  { week: 12, start: '2026-10-05', end: '2026-10-11', dates: '5–11 Oct', kind: 'teaching' },
  { week: 13, start: '2026-10-12', end: '2026-10-18', dates: '12–18 Oct', kind: 'teaching' },
  { week: 14, start: '2026-10-19', end: '2026-10-25', dates: '19–25 Oct', kind: 'teaching' },
  { week: 15, start: '2026-10-26', end: '2026-11-01', dates: '26 Oct–1 Nov', kind: 'study' },
  { week: 16, start: '2026-11-02', end: '2026-11-08', dates: '2–8 Nov', kind: 'exam' },
  { week: 17, start: '2026-11-09', end: '2026-11-15', dates: '9–15 Nov', kind: 'exam' }
];

const units = [
  {
    id: 'acct', code: 'ACCT2002', name: 'Cost Analysis for Decision Making', accent: '#a7a5ff',
    attendance: 'Self-study is fine when you are current; use tutorials when something still does not click.',
    topics: [
      { id: 'acct1', week: 1, title: 'Introduction to management accounting', source: 'Module 1 slides + Tutorial 1 + revision', received: true,
        plain: 'This is the “what is this subject even for?” topic. Management accounting is information made for people inside a business so they can plan, decide, control and improve what the business does.',
        terms: [['management accounting','internal decision support'],['financial accounting','external, standards-based reporting'],['planning','deciding what to do'],['control','checking results and learning']] },
      { id: 'acct2', week: 2, title: 'Strategy', source: 'Module 2 slides + Tutorial 2 + revision', received: true,
        plain: 'Strategy is the business choosing where it wants to go and how it plans to win. The core contrast is usually winning through lower cost or by being meaningfully different.',
        terms: [['cost leadership','compete by operating at lower cost'],['differentiation','compete by offering something customers value as different'],['competitive advantage','doing better than rivals in a way that matters']] },
      { id: 'acct3', week: 3, title: 'Cost terms and purposes', source: 'Module 3 slides + Tutorial 3 + revision + IQ1', received: true,
        plain: 'Before calculating anything, you need to know what kind of cost you are looking at. This topic is basically about labelling costs correctly so the later calculation actually means something.',
        terms: [['cost object','the thing whose cost you want to know'],['direct cost','can be traced conveniently to that thing'],['indirect cost','must be allocated'],['fixed / variable','whether total cost changes with activity']] },
      { id: 'acct4', week: 4, title: 'Determining how costs behave', source: 'Module 4 slides + Tutorial 4 + IQ2 + 10-32 data', received: true,
        plain: 'You are trying to predict how a cost changes when activity changes: what part exists anyway, and what part rises as the business does more work.',
        terms: [['cost driver','the activity that causes a cost to change'],['fixed component','cost that stays broadly unchanged in the relevant range'],['variable rate','extra cost per unit of activity'],['high-low','estimate using the highest and lowest activity points'],['regression','estimate using all available observations']] },
      { id: 'acct5', week: 6, title: 'Job costing', source: 'Module 5 slides + Tutorial 5 + IQ3/IQ4', received: true,
        plain: 'When each job is different, you track the costs job by job. Direct costs are traced to the job and shared overhead is allocated using a rate.',
        terms: [['job costing','costing distinct jobs separately'],['allocation base','measure used to spread overhead'],['predetermined OH rate','budgeted overhead ÷ budgeted allocation base'],['under/overallocated','difference between applied and actual overhead']] },
      { id: 'acct6', week: 7, title: 'Process costing', source: 'Module 6 slides', received: true,
        plain: 'When a business mass-produces lots of similar units, tracking each item separately is pointless. Process costing averages the production cost across those similar units.',
        terms: [['process costing','average costs across similar output'],['equivalent units','partly finished work expressed as fully completed units'],['weighted-average','combines opening work with current-period work']] },
      { id: 'acct7', week: 8, title: 'Activity-Based Costing & Management', source: 'Module 7 slides', received: true,
        plain: 'Instead of spreading overhead with one rough average, ABC asks what activities actually caused the overhead and assigns cost based on those activities. The goal is a fairer picture of what products really consume.',
        terms: [['activity','work that consumes resources'],['cost pool','bucket of costs linked to an activity'],['cost driver','what causes that activity cost'],['undercosting','too little cost assigned'],['overcosting','too much cost assigned']] },
      { id: 'acct8', week: 9, title: 'Pricing decisions & cost management', source: 'Module 8 slides', received: true,
        plain: 'Pricing is not simply “cost plus profit”. A useful price has to account for what customers will pay, what competitors are doing and what it costs you to supply the product.',
        terms: [['target costing','start from market price and target profit to find allowable cost'],['cost-plus','cost base plus a markup'],['locked-in cost','future cost largely determined by earlier design decisions'],['life-cycle cost','cost across the product’s whole life']] },
      { id: 'acct9', week: 10, title: 'Master budget & responsibility accounting', source: 'Module 9 slides', received: true,
        plain: 'A budget turns the business plan into numbers. A master budget links the smaller budgets together so managers can plan, coordinate and later compare what actually happened with what was expected.',
        terms: [['master budget','linked set of operating and financial budgets'],['responsibility centre','part of the business a manager is accountable for'],['sensitivity analysis','see how results change when assumptions change']] },
      { id: 'acct10', week: 12, title: 'Cost–Volume–Profit analysis', source: 'Unit outline only · attachments to come', received: false,
        plain: 'This will connect selling price, volume, variable cost and fixed cost to show how they drive profit and break-even. Full study notes will be added once the module resources arrive.',
        terms: [['CVP','relationship between cost, volume and profit'],['break-even','point where total revenue equals total cost']] }
    ]
  },
  {
    id: 'ecom', code: 'ECOM1000', name: 'Analytics for Decision Making', accent: '#8be3ca',
    attendance: 'Most material can be self-studied; prioritise assessment Q&A and genuine group discussion sessions.',
    topics: [
      { id:'ecom1', week:1, title:'Introduction to Business Analytics', source:'Module 1 + Welcome Lab', received:true, plain:'Business analytics is using data, technology and quantitative methods to make better decisions.', terms:[['descriptive','what happened?'],['predictive','what is likely to happen?'],['prescriptive','what should we do?']] },
      { id:'ecom2', week:2, title:'Tables, sorting & filtering', source:'Module 2 + Lab exercises', received:true, plain:'This is about structuring data so Excel can sort, filter, calculate and query it reliably.', terms:[['record','one row / one item'],['field','one column / attribute'],['Pareto','sort and examine cumulative proportions']] },
      { id:'ecom3', week:3, title:'Database analytics', source:'Module 3 + Lab exercises', received:true, plain:'Use Excel logic and lookup tools to pull useful answers from larger datasets rather than searching manually.', terms:[['IF','return one result when a condition is true and another when false'],['lookup','find a matching value'],['database function','calculation limited by criteria']] },
      { id:'ecom4', week:4, title:'Frequency, percentiles & averages', source:'Module 4 + Lab exercises', received:true, plain:'This is the first proper “describe the data” block: distributions, histograms, percentiles, mean, median and mode.', terms:[['frequency','how often a value/category occurs'],['percentile','position relative to the data'],['median','middle value'],['mean','arithmetic average']] },
      { id:'ecom5', week:6, title:'Measures of association', source:'Module 5 + Lab exercises', received:true, plain:'This asks whether variables move together and how strongly, while also looking for unusual observations that can distort the story.', terms:[['variance','spread around the mean'],['covariance','direction of joint movement'],['correlation','standardised strength/direction of association'],['outlier','unusually distant observation']] },
      { id:'ecomPrep', week:7, title:'Assessment 2 preparation', source:'Lecture recording + assessment prep material', received:true, plain:'No normal live lecture: this block is about getting ready for the Business Report and Individual Excel Model.', terms:[['assessment prep','use the recording and lab material as the priority']] },
      { id:'ecom6', week:8, title:'Data visualisation + assessment Q&A', source:'Module 6 + Lab 6 + assessment Q&A', received:true, plain:'Choose charts that make the pattern in the data easy to see without misleading the reader. This week also contains an assessment Q&A, so it is a high-priority session.', terms:[['visualisation','turn data into a readable visual pattern'],['chart choice','match the visual to the question and data type']] },
      { id:'ecom7', week:9, title:'PivotTables & charts', source:'Module 7 + Lab material', received:true, plain:'PivotTables let you summarise a large dataset quickly by grouping and aggregating fields without rewriting the underlying data.', terms:[['PivotTable','interactive grouped summary'],['aggregation','sum, count, average or other summary']] },
      { id:'ecom8', week:10, title:'Forecasting, regression & time-series', source:'Module 8 + Lab material', received:true, plain:'Use patterns in past data to estimate relationships and forecast future values, while checking whether the model actually fits.', terms:[['regression','estimate a relationship between variables'],['time series','observations arranged over time'],['forecast','model-based estimate of a future value']] },
      { id:'ecom9', week:12, title:'Statistical inference', source:'Module 9 + CadSoft case', received:true, plain:'Use a sample to make a reasoned statement about a wider population while recognising uncertainty.', terms:[['sample','observed subset'],['population','full group of interest'],['inference','use sample evidence to say something about the population']] },
      { id:'ecom10', week:13, title:'Data governance & ethics', source:'Module 10 + cases', received:true, plain:'Good analysis is not only about correct formulas. It also matters how data is collected, controlled, shared and used.', terms:[['governance','rules and responsibilities for data'],['ethics','whether the use of data is fair and responsible']] }
    ]
  },
  {
    id:'taxa', code:'TAXA2000', name:'Introduction to Australian Taxation Law', accent:'#ffd58a',
    attendance:'Tutorials are useful for application and MST revision, but there is no identified weekly graded in-class component in the outline.',
    topics:[
      { id:'taxa6', week:6, title:'Capital gains tax + capital allowances', source:'Unit outline · detailed attachments to come', received:false, plain:'Work out when a taxable capital gain or loss arises and how tax law treats certain depreciating assets and deductions.', terms:[['CGT','tax consequences of certain disposals/events'],['UCA','uniform capital allowance rules']] },
      { id:'taxa7', week:7, title:'Capital gains tax', source:'Unit outline only', received:false, plain:'Continue applying CGT rules to transactions and facts.', terms:[['cost base','amount used to help calculate a capital gain or loss']] },
      { id:'taxa8', week:8, title:'Partnerships + MST revision', source:'Unit outline + announcements', received:false, plain:'Partnership tax rules enter here, while the tutorial/revision work starts tightening up material for the mid-semester test.', terms:[['partnership','people carrying on business together with tax consequences allocated to partners'],['revision','assessment-focused consolidation']] },
      { id:'taxa9', week:9, title:'Trusts and minors', source:'Unit outline only', received:false, plain:'How tax law treats trust income and special rules that can apply to minors.', terms:[['trust','legal relationship where property/income is held for beneficiaries']] },
      { id:'taxa10', week:10, title:'Companies', source:'Unit outline only', received:false, plain:'Move into the tax treatment of companies and how company income is taxed.', terms:[['company','separate legal taxpayer']] },
      { id:'taxa12', week:12, title:'GST', source:'Unit outline only', received:false, plain:'How the goods and services tax system applies to taxable supplies, credits and business transactions.', terms:[['GST','broad consumption tax'],['input tax credit','credit for GST paid on eligible business purchases']] }
    ]
  },
  {
    id:'econ', code:'ECON1000', name:'Introductory Economics', accent:'#ff9f9f',
    attendance:'Tutorials help with application; assessed MyLabs activities must be completed separately online.',
    topics:[
      { id:'econ1', week:1, title:'Strategic interactions & economic outcomes I', source:'Unit outline · content attachments to come', received:false, plain:'Start thinking about choices where your best action depends on what other people choose.', terms:[['strategic interaction','your outcome depends on your action and others’ actions']] },
      { id:'econ2', week:2, title:'Strategic interactions & economic outcomes II', source:'Unit outline only', received:false, plain:'Continue game-theory style reasoning and how incentives shape outcomes.', terms:[['incentive','something that changes the payoff from a choice']] },
      { id:'econ3', week:4, title:'Economic fluctuations', source:'Unit outline + MyLabs announcements', received:false, plain:'Move from individual choices to economy-wide output and changes over time, including real versus nominal GDP.', terms:[['GDP','value of final output produced'],['real GDP','GDP adjusted for price changes']] },
      { id:'econ4', week:6, title:'Aggregate demand & fiscal policy', source:'Unit outline only', received:false, plain:'How economy-wide spending and government fiscal choices affect output and demand.', terms:[['aggregate demand','total planned spending in the economy'],['fiscal policy','government spending and taxation choices']] },
      { id:'econ5', week:7, title:'Supply side: labour & product markets', source:'Unit outline only', received:false, plain:'Look at production, labour and product-market forces that affect the economy’s capacity and outcomes.', terms:[['labour market','where workers and employers interact']] },
      { id:'econ6', week:8, title:'Unemployment & inequality', source:'Unit outline + MyLabs L5 announcement', received:false, plain:'Understand how unemployment is measured, why it occurs and how economic outcomes can be distributed unevenly. The assessed L5 MyLabs activity is now available.', terms:[['unemployment','people without work who are available and seeking work'],['inequality','uneven distribution of income or other resources']] },
      { id:'econ7', week:9, title:'Inflation & the Phillips Curve', source:'Unit outline · MyLabs L7 opens this week', received:false, plain:'Study sustained price-level changes and the relationship economists often examine between inflation and labour-market conditions.', terms:[['inflation','sustained rise in the general price level'],['Phillips Curve','relationship between inflation and labour-market slack in a model/context']] },
      { id:'econ8', week:10, title:'Monetary policy', source:'Unit outline only', received:false, plain:'How central-bank decisions and interest rates are used to influence inflation, demand and economic activity.', terms:[['monetary policy','central-bank actions affecting financial conditions']] }
    ]
  }
];

const assessments = [
  { id:'acct-test', unit:'ACCT2002', name:'Semester Test', weight:'30%', due:'2026-08-26T18:00:00+08:00', display:'26 Aug · 6:00 PM' },
  { id:'acct-portfolio', unit:'ACCT2002', name:'Portfolio', weight:'30%', due:'2026-09-21T23:59:00+08:00', display:'21 Sep · 11:59 PM' },
  { id:'acct-final', unit:'ACCT2002', name:'Final Examination', weight:'40%', due:'2026-11-02T00:00:00+08:00', display:'2–13 Nov · timetable TBA', tba:true },
  { id:'taxa-essay', unit:'TAXA2000', name:'Research Essay', weight:'25%', due:'2026-08-28T23:59:00+08:00', display:'28 Aug · 11:59 PM' },
  { id:'taxa-mst', unit:'TAXA2000', name:'Mid-Semester Test', weight:'25%', due:'2026-09-25T12:00:00+08:00', display:'25 Sep · 12:00 PM' },
  { id:'taxa-final', unit:'TAXA2000', name:'Final Examination', weight:'50%', due:'2026-11-02T00:00:00+08:00', display:'formal exam period · timetable TBA', tba:true },
  { id:'ecom-quiz', unit:'ECOM1000', name:'Quiz', weight:'15%', due:'2026-08-14T22:00:00+08:00', display:'14 Aug · closes 10:00 PM' },
  { id:'ecom-model', unit:'ECOM1000', name:'Individual Excel Model', weight:'15%', due:'2026-09-23T23:59:00+08:00', display:'23 Sep · 11:59 PM' },
  { id:'ecom-peer', unit:'ECOM1000', name:'Peer Evaluation', weight:'5%', due:'2026-10-14T23:59:00+08:00', display:'14 Oct · 11:59 PM' },
  { id:'ecom-group', unit:'ECOM1000', name:'Group Investment Report', weight:'15%', due:'2026-10-14T23:59:00+08:00', display:'14 Oct · 11:59 PM' },
  { id:'ecom-final', unit:'ECOM1000', name:'Final Examination', weight:'50%', due:'2026-11-02T00:00:00+08:00', display:'exam period · timetable TBA', tba:true },
  { id:'econ-exp', unit:'ECON1000', name:'MyLabs Public Goods Experiment', weight:'5%', due:'2026-08-16T21:00:00+08:00', display:'16 Aug · 9:00 PM' },
  { id:'econ-gtp', unit:'ECON1000', name:'Game Theory Presentation (written task)', weight:'30%', due:'2026-09-06T23:59:00+08:00', display:'2 Sep official · grace to 6 Sep' },
  { id:'econ-mylabs', unit:'ECON1000', name:'L3 + L5 + L7 MyLabs', weight:'15%', due:'2026-10-05T21:00:00+08:00', display:'5 Oct · 9:00 PM', note:'Each set includes the Digital Interactive + supplementary MCQs.' },
  { id:'econ-mra-a', unit:'ECON1000', name:'MRA Part A', weight:'part of 50%', due:'2026-10-21T20:00:00+08:00', display:'21 Oct · by 8:00 PM' },
  { id:'econ-mra-b', unit:'ECON1000', name:'MRA Part B', weight:'part of 50%', due:'2026-11-05T23:00:00+08:00', display:'5 Nov · 11:00 PM' }
];

const sourceMap = [
  { unit:'ACCT2002', status:'strong coverage', text:'Modules 1–9 are currently represented with lecture slides and supporting material. Tutorials/solutions, revision sets, additional questions, illustration questions and several audio clips are also in the source set. Module 10+ and later weekly releases can be added next.', items:['Unit outline + program calendar','Module 1–9 lecture decks','Tutorial solutions received through Tutorial 5','Revision questions/solutions for Modules 1–3','Illustration questions + worked solutions','Additional Questions bank','Selected Excel/audio support files'] },
  { unit:'ECOM1000', status:'strong coverage', text:'The learning chain is substantially mapped from the introduction through Data Governance & Ethics, with lab files and solution workbooks included where received.', items:['Unit outline + announcements','Welcome Lab','Modules 1–10','Lab problem/exercise workbooks','Assessment-prep material/transcripts','Data Governance & Ethics cases/material'] },
  { unit:'TAXA2000', status:'outline-first', text:'The unit outline and announcements are mapped. Detailed lecture/tutorial attachments will be added when available.', items:['Unit outline','Program calendar','Assessment dates','Announcements and special opportunities'] },
  { unit:'ECON1000', status:'outline-first', text:'The unit outline plus MyLabs and assessment announcements are mapped. Detailed teaching attachments can be added later.', items:['Unit outline','Program calendar','MyLabs instructions','Assessment announcements and deadline corrections'] }
];

const steps = [
  ['learn','learn concept'],
  ['practice','try practice'],
  ['check','check official solution'],
  ['understood','mark understood']
];

const store = {
  get(key) { return localStorage.getItem(`imstudying:${key}`) === '1'; },
  set(key, value) { localStorage.setItem(`imstudying:${key}`, value ? '1' : '0'); },
  clearProgress() {
    Object.keys(localStorage).filter(k => k.startsWith('imstudying:topic:') || k.startsWith('imstudying:assessment:')).forEach(k => localStorage.removeItem(k));
  }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const now = new Date();

function dateAtPerth(date, end = false) {
  return new Date(`${date}T${end ? '23:59:59' : '00:00:00'}+08:00`);
}

function currentWeek() {
  return semesterWeeks.find(w => now >= dateAtPerth(w.start) && now <= dateAtPerth(w.end, true)) || semesterWeeks[0];
}

function weekByNumber(n) { return semesterWeeks.find(w => w.week === n); }

function daysUntil(due) { return Math.ceil((new Date(due) - now) / 86400000); }

function deadlineState(a) {
  if (a.tba && new Date(a.due) >= now) return 'tba';
  const days = daysUntil(a.due);
  if (days < 0) return 'past';
  if (days <= 14) return 'soon';
  return 'upcoming';
}

function topicKey(unitId, topicId, step) { return `topic:${unitId}:${topicId}:${step}`; }
function assessmentKey(id) { return `assessment:${id}`; }

function unitProgress(unit) {
  const total = unit.topics.length * steps.length;
  const done = unit.topics.reduce((sum, topic) => sum + steps.filter(([s]) => store.get(topicKey(unit.id, topic.id, s))).length, 0);
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}

function topicProgress(unit, topic) {
  const done = steps.filter(([s]) => store.get(topicKey(unit.id, topic.id, s))).length;
  return { done, total: steps.length, pct: Math.round(done / steps.length * 100) };
}

function currentTopic(unit) {
  const cw = currentWeek();
  return unit.topics.find(t => t.week === cw.week) || unit.topics.find(t => t.week > cw.week) || unit.topics.at(-1);
}

function formatToday() {
  return new Intl.DateTimeFormat('en-AU', { weekday:'long', day:'numeric', month:'long', year:'numeric', timeZone:'Australia/Perth' }).format(now);
}

function esc(s='') { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function renderDashboard() {
  const cw = currentWeek();
  const totalChecks = units.reduce((n,u)=>n+u.topics.length*steps.length,0);
  const doneChecks = units.reduce((n,u)=>n+unitProgress(u).done,0);
  const upcoming = assessments.filter(a => new Date(a.due) >= now).sort((a,b)=>new Date(a.due)-new Date(b.due)).slice(0,6);

  $('#view-dashboard').innerHTML = `
    <div class="hero-grid">
      <article class="hero-card">
        <div class="hero-kicker">you are here</div>
        <div class="hero-week">${cw.kind === 'teaching' ? `week ${cw.week}` : esc(cw.kind)}</div>
        <div class="hero-dates">${esc(cw.dates)} · Curtin Semester 2</div>
        <div class="hero-status">${cw.kind === 'teaching' ? 'current teaching block' : cw.kind.replace('-', ' ')}</div>
      </article>
      <aside class="panel">
        <div class="panel-title"><div><h3>fresh-start progress</h3><p>nothing is assumed complete.</p></div></div>
        <div class="stat-list">
          <div class="stat-row"><span class="stat-label">study checks</span><span class="stat-value">${doneChecks}/${totalChecks}</span></div>
          <div class="stat-row"><span class="stat-label">overall</span><span class="stat-value">${totalChecks ? Math.round(doneChecks/totalChecks*100) : 0}%</span></div>
          <div class="stat-row"><span class="stat-label">next tuition-free</span><span class="stat-value">28 Sep</span></div>
          <div class="stat-row"><span class="stat-label">study week</span><span class="stat-value">26 Oct</span></div>
        </div>
      </aside>
    </div>

    <section class="section">
      <div class="section-head"><div><h2>what you are learning now</h2><p>Dates + topic first. Week number is there only as backup.</p></div></div>
      <div class="unit-grid">${units.map(unit => {
        const t = currentTopic(unit); const w = weekByNumber(t.week); const p = unitProgress(unit);
        const special = unit.id === 'ecom' && cw.week === 8 ? 'assessment Q&A · prioritise' : unit.id === 'econ' && cw.week === 8 ? 'L5 MyLabs assessed task available' : unit.id === 'acct' ? 'self-study okay if current' : unit.id === 'taxa' && cw.week === 8 ? 'MST revision useful' : '';
        return `<article class="unit-card" style="--unit-accent:${unit.accent}">
          <div class="unit-code">${unit.code}</div><h3 class="unit-name">${unit.name}</h3>
          <div class="current-topic">${w ? `${w.dates} · Week ${w.week}` : ''}<strong>${esc(t.title)}</strong></div>
          <div class="progress-wrap"><div class="progress-meta"><span>learning progress</span><span>${p.pct}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${p.pct}%"></div></div></div>
          <div class="badges"><span class="badge current">current</span>${special ? `<span class="badge important">${esc(special)}</span>`:''}</div>
        </article>`;
      }).join('')}</div>
    </section>

    <section class="section panel">
      <div class="panel-title"><div><h2>next deadlines</h2><p>assessment dates are separate from “did I learn this?” progress.</p></div><button class="small-button" data-go="assessments">see all</button></div>
      <div class="timeline">${upcoming.map(deadlineRow).join('')}</div>
    </section>
  `;
}

function deadlineRow(a) {
  const state = deadlineState(a);
  const date = new Date(a.due);
  const day = date.toLocaleDateString('en-AU',{day:'numeric',month:'short',timeZone:'Australia/Perth'});
  const days = daysUntil(a.due);
  const label = a.tba ? 'timetable TBA' : state === 'past' ? 'past date' : days === 0 ? 'today' : days === 1 ? 'tomorrow' : `${days} days`;
  return `<div class="deadline-row">
    <div class="deadline-date">${esc(day)}<small>${a.weight}</small></div>
    <div><div class="deadline-title">${a.unit} · ${esc(a.name)}</div><div class="deadline-meta">${esc(a.display)}${a.note?` · ${esc(a.note)}`:''}</div></div>
    <span class="deadline-pill ${state}">${esc(label)}</span>
  </div>`;
}

function renderUnits(filter = 'all') {
  const targetUnits = filter === 'all' ? units : units.filter(u => u.id === filter);
  $('#view-units').innerHTML = `
    <div class="section-head"><div><h2>learn by topic, not by mystery week numbers.</h2><p>Every card shows the actual date range and the week number together.</p></div></div>
    <div class="filters">${[{id:'all',label:'all units'},...units.map(u=>({id:u.id,label:u.code}))].map(f=>`<button class="filter-button ${f.id===filter?'active':''}" data-unit-filter="${f.id}">${f.label}</button>`).join('')}</div>
    ${targetUnits.map(unit => {
      return `<section class="section">
        <div class="section-head"><div><h2 style="color:${unit.accent}">${unit.code}</h2><p>${esc(unit.attendance)}</p></div><span class="badge">${unitProgress(unit).pct}% complete</span></div>
        <div class="topic-stack">${unit.topics.map(t=>topicCard(unit,t)).join('')}</div>
      </section>`;
    }).join('')}
  `;
}

function topicCard(unit, topic) {
  const w = weekByNumber(topic.week); const tp = topicProgress(unit,topic); const isCurrent = currentWeek().week === topic.week;
  const termHtml = topic.terms?.map(([a,b])=>`<div class="term"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('') || '';
  return `<article class="topic-card ${isCurrent?'current':''}" style="--unit-accent:${unit.accent}">
    <div class="topic-top">
      <div><div class="topic-date">${w ? `${w.dates} · Week ${w.week}`:''}${isCurrent?' · CURRENT':''}</div><h3 class="topic-title">${esc(topic.title)}</h3></div>
      <span class="badge">${tp.done}/${tp.total} checks</span>
    </div>
    <p class="topic-summary">${esc(topic.plain)}</p>
    <div class="topic-details">
      <div class="explain-box"><div class="box-label">what this really means</div><p>${esc(topic.plain)}</p></div>
      <div class="terms-box"><div class="box-label">terms in normal language</div><div class="term-list">${termHtml}</div></div>
    </div>
    <div class="study-flow">${steps.map(([step,label]) => {
      const key = topicKey(unit.id,topic.id,step); const checked = store.get(key);
      const disabled = step === 'check' && !topic.received ? 'title="Official supporting material still pending"' : '';
      return `<label class="check-chip" ${disabled}><input type="checkbox" data-topic-check="${key}" ${checked?'checked':''}> ${esc(label)}</label>`;
    }).join('')}</div>
    <div class="source-line"><span>source: ${esc(topic.source)}</span><span class="source-state ${topic.received?'':'pending'}">${topic.received?'source material mapped':'more source material pending'}</span></div>
  </article>`;
}

function renderAssessments() {
  const sorted = [...assessments].sort((a,b)=>new Date(a.due)-new Date(b.due));
  $('#view-assessments').innerHTML = `
    <div class="section-head"><div><h2>assessments & deadlines</h2><p>All boxes start unticked, including past dates, because you asked for a fresh-start state.</p></div></div>
    <div class="assessment-grid">${sorted.map(a=>{
      const checked = store.get(assessmentKey(a.id)); const state=deadlineState(a); const days=daysUntil(a.due);
      return `<article class="assessment-card ${checked?'done':''}">
        <input type="checkbox" data-assessment-check="${a.id}" ${checked?'checked':''} aria-label="Mark ${esc(a.name)} complete">
        <div><div class="assessment-name">${a.unit} · ${esc(a.name)}</div><div class="assessment-detail">${a.weight}${a.note?` · ${esc(a.note)}`:''}</div></div>
        <div class="assessment-due"><strong>${esc(a.display)}</strong><span>${a.tba?'exact time TBA':state==='past'?'date has passed':days===0?'due today':`${days} days away`}</span></div>
      </article>`;
    }).join('')}</div>
  `;
}

function renderResources() {
  $('#view-resources').innerHTML = `
    <div class="section-head"><div><h2>source map</h2><p>The site teaches from derived notes; the university source files are not copied into this public repo.</p></div></div>
    <div class="source-grid">${sourceMap.map(s=>`<article class="source-card"><div class="unit-code">${s.unit}</div><h3>${s.status}</h3><p>${esc(s.text)}</p><ul class="source-list">${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></article>`).join('')}</div>
    <div class="notice"><strong>Copyright-safe setup:</strong> lecture decks, textbooks, tutorial PDFs and other Curtin/Pearson files stay outside this public GitHub repository. The page stores our own study structure, plain-language explanations, progress state and source labels. Links to authorised originals can be added later where appropriate.</div>
  `;
}

function setView(view) {
  $$('.view').forEach(v=>v.classList.remove('active'));
  $(`#view-${view}`).classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.view === view));
  const titles = {
    dashboard:'your semester, without the blackboard maze.',
    units:'learn the idea first. jargon second.',
    assessments:'know what is due before it becomes a problem.',
    resources:'original sources stay traceable.'
  };
  $('#pageTitle').textContent = titles[view];
  if (view==='dashboard') renderDashboard();
  if (view==='units') renderUnits(document.querySelector('.filter-button.active')?.dataset.unitFilter || 'all');
  if (view==='assessments') renderAssessments();
  if (view==='resources') renderResources();
}

function bindEvents() {
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-view]'); if (nav) setView(nav.dataset.view);
    const go = e.target.closest('[data-go]'); if (go) setView(go.dataset.go);
    const filter = e.target.closest('[data-unit-filter]'); if (filter) renderUnits(filter.dataset.unitFilter);
  });

  document.addEventListener('change', e => {
    if (e.target.matches('[data-topic-check]')) {
      store.set(e.target.dataset.topicCheck, e.target.checked);
      const activeView = document.querySelector('.view.active')?.id.replace('view-','') || 'dashboard';
      if (activeView === 'units') {
        const activeFilter = document.querySelector('.filter-button.active')?.dataset.unitFilter || 'all'; renderUnits(activeFilter);
      } else renderDashboard();
    }
    if (e.target.matches('[data-assessment-check]')) {
      store.set(assessmentKey(e.target.dataset.assessmentCheck), e.target.checked); renderAssessments();
    }
  });

  $('#themeToggle').addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('imstudying:theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  $('#resetProgress').addEventListener('click', ()=>{
    if (confirm('Reset every study and assessment tick back to unticked?')) { store.clearProgress(); setView(document.querySelector('.nav-item.active')?.dataset.view || 'dashboard'); }
  });
}

function init() {
  if (localStorage.getItem('imstudying:theme') === 'light') document.body.classList.add('light');
  $('#todayLabel').textContent = formatToday();
  renderDashboard(); renderUnits(); renderAssessments(); renderResources(); bindEvents();
}

init();
