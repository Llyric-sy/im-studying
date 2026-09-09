(() => {
  const $ = s => document.querySelector(s);
  const app = $('#lessonApp');
  const esc = (v='') => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c]));
  const id = new URLSearchParams(location.search).get('id');
  const lesson = window.lessonBank?.[id];
  const order = ['acct1','acct2','acct3','acct4','acct5','acct6','acct7','acct8','acct9','ecom1','ecom2','ecom3','ecom4','ecom5','ecomPrep','ecom6','ecom7','ecom8','ecom9','ecom10'];
  const partialIds = new Set(['acct1','acct2','acct3','acct4','acct5','acct6','ecom1','ecom2','ecom3','ecom4','ecom5','ecomPrep']);

  if (localStorage.getItem('imstudying:theme') === 'light') document.body.classList.add('light');
  $('#themeBtn')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('imstudying:theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  if (!lesson) {
    app.className = 'loading';
    app.innerHTML = '<b>This detailed lesson is not available yet.</b><br><br>The course source pack may still be pending. <a style="color:#a7a5ff" href="lessons.html?v=3">Back to lessons</a>';
    return;
  }

  const unitId = id.startsWith('acct') ? 'acct' : 'ecom';
  const fullKey = `imstudying:lessonfull:${id}`;
  const progressKey = suffix => `imstudying:deep:${id}:${suffix}`;
  const baselinePartial = partialIds.has(id) || localStorage.getItem(`imstudying:topic:${unitId}:${id}:learn`) === '1';
  if (baselinePartial) localStorage.setItem(`imstudying:topic:${unitId}:${id}:learn`,'1');

  function flow(items=[]) {
    return `<div class="flow-row">${items.map((x,i)=>`${i?'<span class="flow-arrow">→</span>':''}<span class="flow-node">${esc(x)}</span>`).join('')}</div>`;
  }
  function table(rows=[]) {
    if (!rows.length) return '';
    return `<div style="overflow:auto"><table class="data-table">${rows.map((r,ri)=>`<tr>${r.map(c=>ri===0?`<th>${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
  }
  function sectionMarkup(s, i) {
    return `<section class="lesson-section" id="section-${i+1}">
      <div class="section-kicker">${esc(s.kicker || 'lesson')}</div>
      <h2>${esc(s.title)}</h2>
      ${(s.body||[]).map(p=>`<p>${esc(p)}</p>`).join('')}
      ${s.bullets?.length?`<ul>${s.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
      ${s.table?.length?table(s.table):''}
      ${s.flow?.length?flow(s.flow):''}
      ${s.formulas?.length?`<div class="formula-box">${s.formulas.map(x=>`<code>${esc(x)}</code>`).join('')}</div>`:''}
      ${s.formulaNote?`<div class="formula-box"><code>${esc(s.formulaNote)}</code></div>`:''}
      ${s.callout?`<div class="callout"><b>Important:</b> ${esc(s.callout)}</div>`:''}
      ${s.practicePrompt?`<div class="practice-prompt"><b>Do this:</b> ${esc(s.practicePrompt)}</div>`:''}
      <label class="section-check"><input type="checkbox" data-progress="section-${i+1}" ${localStorage.getItem(progressKey(`section-${i+1}`))==='1'?'checked':''}><span><b>Section checkpoint:</b> ${esc(s.checkpoint || 'I can explain and apply this section without just rereading it.')}</span></label>
    </section>`;
  }

  const idx = order.indexOf(id);
  const prev = idx > 0 ? order[idx-1] : null;
  const next = idx >= 0 && idx < order.length-1 ? order[idx+1] : null;
  const objectiveItems = lesson.objectives.map(x=>`<li>${esc(x)}</li>`).join('');
  const toc = lesson.sections.map((s,i)=>`<a href="#section-${i+1}">${i+1}. ${esc(s.title.replace(/^\d+\.\s*/,''))}</a>`).join('');
  const practice = (lesson.practice||[]).map((p,i)=>`<div class="practice-item">
    <div class="practice-q">${i+1}. ${esc(p.q)}</div>
    ${p.hint?`<div class="practice-actions"><button type="button" class="reveal-btn" data-reveal="hint-${i}">show hint</button></div><div class="answer" id="hint-${i}"><b>Hint:</b> ${esc(p.hint)}</div>`:''}
    <div class="practice-actions"><button type="button" class="reveal-btn" data-reveal="answer-${i}">reveal answer</button><label class="practice-done"><input type="checkbox" data-progress="practice-${i+1}" ${localStorage.getItem(progressKey(`practice-${i+1}`))==='1'?'checked':''}> I attempted this before checking</label></div>
    <div class="answer" id="answer-${i}"><b>Answer:</b> ${esc(p.answer)}</div>
  </div>`).join('');

  app.className='';
  app.innerHTML = `
    <section class="lesson-hero">
      <div class="lesson-meta"><span class="pill unit">${esc(lesson.unit)}</span><span class="pill">${esc(lesson.date)} · Week ${lesson.week}</span><span class="pill duration">deep session · ${esc(lesson.duration)}</span></div>
      <h1>${esc(lesson.title)}</h1>
      <p class="source-basis"><b>Source basis:</b> ${esc(lesson.sourceBasis)} This page is a comprehensive paraphrased teaching layer; protected Curtin/Pearson originals are not copied into the public repo.</p>
    </section>
    <div class="reader-grid">
      <aside class="lesson-side">
        <div class="side-card"><h3>Your status</h3><p id="statusCopy"></p><div class="progress-line"><div class="progress-fill" id="progressFill"></div></div><div class="progress-text"><span>reader checkpoints</span><span id="progressText">0%</span></div><div id="fullState" class="full-state"></div></div>
        <div class="side-card toc-card"><h3>Lesson outline</h3><nav class="toc">${toc}<a href="#practice">Practice</a><a href="#finish">Finish check</a></nav></div>
      </aside>
      <main class="lesson-main">
        <section class="objectives"><div class="eyebrow">learning objectives</div><h2>What you should be able to do after this lesson</h2><ul>${objectiveItems}</ul></section>
        <section class="concept-map"><div class="eyebrow">mental map</div>${flow(lesson.map)}</section>
        ${lesson.sections.map(sectionMarkup).join('')}
        <section class="practice-zone" id="practice"><div class="eyebrow">active practice</div><h2>Stop reading. Use it.</h2><p style="color:var(--muted);margin-top:0">Attempt each question before revealing the answer. These are study questions built from the supplied course concepts; they are not presented as unreleased official assessment answers.</p>${practice}</section>
        <section class="finish-zone" id="finish"><div class="eyebrow">manual completion</div><h2>Before you call the lesson fully complete</h2><ul class="finish-list">${(lesson.finish||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><button id="fullCompleteBtn" class="full-complete-btn" type="button"></button><div class="full-note">Full completion is never automatic. The old “completed” baseline has been downgraded to partial; only you can promote a lesson to full.</div></section>
        <nav class="bottom-nav">${prev?`<a href="lesson-reader.html?v=3&id=${encodeURIComponent(prev)}">← previous detailed lesson</a>`:'<span></span>'}${next?`<a href="lesson-reader.html?v=3&id=${encodeURIComponent(next)}">next detailed lesson →</a>`:'<a href="lessons.html?v=3">back to lesson catalogue →</a>'}</nav>
      </main>
    </div>`;

  document.title = `${lesson.unit} · ${lesson.title} · im studying`;

  const progressBoxes = [...document.querySelectorAll('[data-progress]')];
  function isFull(){ return localStorage.getItem(fullKey)==='1'; }
  function updateProgress(){
    const done = progressBoxes.filter(x=>x.checked).length;
    const pct = progressBoxes.length ? Math.round(done/progressBoxes.length*100) : 0;
    $('#progressFill').style.width = `${pct}%`;
    $('#progressText').textContent = `${done}/${progressBoxes.length} · ${pct}%`;
    const full = isFull();
    $('#fullState').textContent = full ? '✓ fully complete — marked by you' : baselinePartial ? '◐ partial complete — initial pass only' : '○ open — not fully complete';
    $('#fullState').classList.toggle('done',full);
    $('#statusCopy').textContent = full ? 'You have explicitly marked this lesson fully complete.' : baselinePartial ? 'Earlier work is recognised as an initial pass only. Deep practice/checking remains yours to finish.' : 'Work through the sections at your own pace. Nothing here auto-completes.';
    const btn=$('#fullCompleteBtn');
    btn.textContent = full ? '✓ fully complete · click to undo' : 'mark this lesson fully complete';
    btn.classList.toggle('done',full);
  }

  progressBoxes.forEach(box=>box.addEventListener('change',()=>{
    localStorage.setItem(progressKey(box.dataset.progress),box.checked?'1':'0');
    updateProgress();
  }));

  document.addEventListener('click',e=>{
    const r=e.target.closest('[data-reveal]');
    if(r){
      const el=document.getElementById(r.dataset.reveal); if(!el)return;
      el.classList.toggle('show');
      r.textContent=el.classList.contains('show')?'hide':'reveal answer';
      if(r.dataset.reveal.startsWith('hint-')) r.textContent=el.classList.contains('show')?'hide hint':'show hint';
    }
  });

  $('#fullCompleteBtn').addEventListener('click',()=>{
    if(isFull()){
      localStorage.removeItem(fullKey);
      ['practice','check','understood'].forEach(step=>localStorage.removeItem(`imstudying:topic:${unitId}:${id}:${step}`));
      localStorage.setItem(`imstudying:topic:${unitId}:${id}:learn`,'1');
      updateProgress();
      return;
    }
    const unchecked = progressBoxes.filter(x=>!x.checked).length;
    if(unchecked && !confirm(`You still have ${unchecked} reader checkpoint${unchecked===1?'':'s'} unticked. Mark the lesson fully complete anyway?`)) return;
    localStorage.setItem(fullKey,'1');
    ['learn','practice','check','understood'].forEach(step=>localStorage.setItem(`imstudying:topic:${unitId}:${id}:${step}`,'1'));
    updateProgress();
  });

  updateProgress();
})();
