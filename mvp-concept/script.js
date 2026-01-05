(async function(){
  const $=(s,r=document)=>r.querySelector(s);
  let cfg=null;
  try{
    const res = await fetch('assets/img/photos.json', {cache:'no-store'});
    cfg = await res.json();
  }catch(e){
    console.warn('photos.json not loaded.', e);
  }
  const setText=(sel,t)=>{const el=$(sel); if(el && typeof t==='string') el.textContent=t;};

  if(cfg?.mvp){
    setText('#brandName', cfg.mvp.name || '【產品 / 概念名稱】');
    setText('#heroTitle', cfg.mvp.name || '【產品 / 概念名稱】');
    setText('#oneLiner', cfg.mvp.one_liner || '');
    setText('#forWho', cfg.mvp.for_who || '');
    setText('#ctaBtn', cfg.mvp.cta || '留下聯絡 / 取得試用');
  }
  if(cfg?.hero?.image){ $('#heroImg').src = cfg.hero.image; }

  if(cfg?.scenes){
    setText('#scenesTitle', cfg.scenes.title || '使用場景');
    const g=document.getElementById('scenesGrid');
    if(g){
      g.innerHTML='';
      (cfg.scenes.items||[]).slice(0,6).forEach(it=>{
        const d=document.createElement('div');
        d.className='card';
        d.innerHTML = `<h3>${it.title||''}</h3><p>${it.desc||''}</p>`;
        g.appendChild(d);
      });
    }
  }

  if(cfg?.value){
    setText('#valueTitle', cfg.value.title || '核心價值 / 差異');
    const ul=document.getElementById('valueList');
    if(ul){
      ul.innerHTML='';
      (cfg.value.bullets||[]).slice(0,12).forEach(t=>{
        const li=document.createElement('li'); li.textContent=t; ul.appendChild(li);
      });
    }
  }

  if(cfg?.gallery){
    setText('#galleryTitle', cfg.gallery.title || '示意圖 / 情境圖');
    const g=document.getElementById('galleryGrid');
    if(g){
      g.innerHTML='';
      (cfg.gallery.items||[]).slice(0,9).forEach(it=>{
        const a=document.createElement('article');
        a.className='tile';
        a.innerHTML = `<img src="${it.src}" alt="${it.caption||'image'}" loading="lazy"><div class="cap">${it.caption||''}</div>`;
        g.appendChild(a);
      });
    }
  }

  if(cfg?.next){
    setText('#nextTitle', cfg.next.title || '下一步');
    setText('#nextNote', cfg.next.note || '');
    const ul=document.getElementById('askList');
    if(ul){
      ul.innerHTML='';
      (cfg.next.ask||[]).slice(0,10).forEach(t=>{
        const li=document.createElement('li'); li.textContent=t; ul.appendChild(li);
      });
    }
    const email = cfg.next.contact_email || 'your-email@example.com';
    const a=$('#email'); if(a){a.textContent=email; a.href=`mailto:${email}`;}
  }

  $('#year').textContent = new Date().getFullYear();
})();
