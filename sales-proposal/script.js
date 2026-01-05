(async function(){
  const $ = (s, r=document)=>r.querySelector(s);

  let cfg=null;
  try{
    const res = await fetch('assets/img/photos.json', {cache:'no-store'});
    cfg = await res.json();
  }catch(e){
    console.warn('photos.json not loaded. Use placeholders.', e);
  }

  const setText = (sel, t)=>{ const el=$(sel); if(el && typeof t==='string') el.textContent=t; };

  if(cfg?.proposal){
    setText('#pName', cfg.proposal.name || '【公司 / 方案名稱】');
    setText('#heroTitle', cfg.proposal.name || '【公司 / 方案名稱】');
    setText('#pSub', cfg.proposal.subtitle || '業務提案 Demo｜Go / No-Go 快速溝通');
    setText('#heroLine', cfg.proposal.hero_line || '快速、穩定、可落地的解決方案。');
    setText('#cta1', cfg.proposal.cta_primary || '看我們怎麼做');
    setText('#cta2', cfg.proposal.cta_secondary || '看下一步');
  }

  if(cfg?.hero?.image){
    const img = $('#heroImg');
    img.src = cfg.hero.image;
  }

  if(cfg?.problems){
    setText('#problemsTitle', cfg.problems.title || '我們解決什麼問題');
    const wrap = document.getElementById('problemsGrid');
    if(wrap){
      wrap.innerHTML='';
      (cfg.problems.items||[]).slice(0,6).forEach(it=>{
        const div=document.createElement('div');
        div.className='card';
        div.innerHTML = `<h3>${it.title||''}</h3><p>${it.desc||''}</p>`;
        wrap.appendChild(div);
      });
    }
  }

  if(cfg?.approach){
    setText('#approachTitle', cfg.approach.title || '我們怎麼做（流程 / 能力）');
    const steps = document.getElementById('stepsGrid');
    if(steps){
      steps.innerHTML='';
      (cfg.approach.steps||[]).slice(0,6).forEach((s, idx)=>{
        const div=document.createElement('div');
        div.className='step';
        div.innerHTML = `<b>${idx+1}. ${s.title||''}</b><p>${s.desc||''}</p>`;
        steps.appendChild(div);
      });
    }
    const caps = document.getElementById('capsList');
    if(caps){
      caps.innerHTML='';
      (cfg.approach.capabilities||[]).slice(0,12).forEach(c=>{
        const li=document.createElement('li');
        li.textContent = c;
        caps.appendChild(li);
      });
    }
  }

  if(cfg?.proof){
    setText('#proofTitle', cfg.proof.title || '成果或實拍（Proof）');
    const g = document.getElementById('proofGrid');
    if(g){
      g.innerHTML='';
      (cfg.proof.items||[]).slice(0,6).forEach(it=>{
        const tile=document.createElement('article');
        tile.className='tile';
        tile.innerHTML = `<img src="${it.src}" alt="${it.caption||'proof'}" loading="lazy"><div class="cap">${it.caption||''}</div>`;
        g.appendChild(tile);
      });
    }
  }

  if(cfg?.next){
    setText('#nextTitle', cfg.next.title || '下一步合作方式');
    const c = document.getElementById('choices');
    if(c){
      c.innerHTML='';
      (cfg.next.choices||[]).slice(0,4).forEach(it=>{
        const div=document.createElement('div');
        div.className='choice';
        div.innerHTML = `<h3>${it.title||''}</h3><p>${it.desc||''}</p>`;
        c.appendChild(div);
      });
    }
    const ask = document.getElementById('askList');
    if(ask){
      ask.innerHTML='';
      (cfg.next.ask||[]).slice(0,10).forEach(t=>{
        const li=document.createElement('li');
        li.textContent=t;
        ask.appendChild(li);
      });
    }
    const email = cfg.next.contact_email || 'your-email@example.com';
    const a = $('#contactEmail');
    if(a){ a.textContent=email; a.href=`mailto:${email}`; }
  }

  $('#year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-target]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const t = el.getAttribute('data-target');
      const node = document.querySelector(t);
      if(node){ e.preventDefault(); node.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
})();
