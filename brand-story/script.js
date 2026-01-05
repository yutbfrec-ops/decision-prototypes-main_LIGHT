(async function(){
  const $ = (s, r=document)=>r.querySelector(s);
  const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));

  let cfg = null;
  try{
    const res = await fetch('assets/img/photos.json', {cache:'no-store'});
    cfg = await res.json();
  }catch(e){
    console.warn('photos.json not loaded. Use placeholders.', e);
  }

  if(cfg?.brand){
    $('#brandName').textContent = cfg.brand.name || '【品牌名稱】';
    $('#heroTitle').textContent = cfg.brand.name || '【品牌名稱】';
    $('#heroLine').textContent = cfg.brand.hero_line || '為了長期而設計的選擇。';
    $('#navSub').textContent = cfg.brand.subtitle || '品牌形象官網｜一頁式 Demo';
    $('#ctaPrimary').textContent = cfg.brand.cta_primary || '看品牌理念';
    $('#ctaSecondary').textContent = cfg.brand.cta_secondary || '看視覺圖庫';
  }

  const heroImgSrc = cfg?.hero?.image || 'assets/img/hero-placeholder.svg';
  const vMp4 = cfg?.hero?.video_mp4 || 'assets/video/hero.mp4';
  const vWebm = cfg?.hero?.video_webm || 'assets/video/hero.webm';

  const video = $('#heroVideo');
  const img = $('#heroImg');
  img.src = heroImgSrc;

  const s1 = document.createElement('source');
  s1.src = vWebm; s1.type = 'video/webm';
  const s2 = document.createElement('source');
  s2.src = vMp4; s2.type = 'video/mp4';
  video.appendChild(s1); video.appendChild(s2);

  const showVideo = ()=>{ video.style.opacity='1'; img.style.opacity='0'; };
  const showImg = ()=>{ video.style.opacity='0'; img.style.opacity='1'; };

  video.style.opacity='0';
  img.style.opacity='1';
  video.addEventListener('canplay', showVideo, {once:true});
  video.addEventListener('error', showImg);

  if(cfg?.why){
    $('#whyTitle').textContent = cfg.why.title || 'Why we exist';
    $('#whyLine').textContent = cfg.why.one_liner || '';
  }

  if(cfg?.values){
    $('#valuesTitle').textContent = cfg.values.title || '品牌理念 / 價值觀';
    const box = $('#valuesBox');
    // Keep one optional extra card from HTML; only replace first 3 if json provided
    const extra = box.querySelector('.card:last-child');
    box.innerHTML = '';
    for(const p of (cfg.values.paragraphs || []).slice(0,3)){
      const div = document.createElement('div');
      div.className = 'card fade';
      div.innerHTML = `<h3>理念</h3><p>${p}</p>`;
      box.appendChild(div);
    }
    if(extra){
      extra.classList.add('fade');
      box.appendChild(extra);
    }
  }

  if(cfg?.gallery){
    $('#galleryTitle').textContent = cfg.gallery.title || '視覺圖庫';
    const g = $('#galleryGrid');
    g.innerHTML = '';
    for(const it of (cfg.gallery.items || []).slice(0,6)){
      const tile = document.createElement('article');
      tile.className = 'tile fade';
      tile.innerHTML = `
        <img src="${it.src}" alt="${it.caption || '情境圖'}" loading="lazy">
        <div class="cap">${it.caption || ''}</div>
      `;
      g.appendChild(tile);
    }
  }

  if(cfg?.contact){
    $('#contactTitle').textContent = cfg.contact.title || '品牌聯絡方式';
    $('#contactHint').textContent = cfg.contact.hint || '';
    const em = cfg.contact.email || 'your-email@example.com';
    const a = $('#contactEmail');
    a.textContent = em;
    a.href = `mailto:${em}`;
  }

  $$('#btnWhy, #btnGallery').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const target = btn.getAttribute('data-target');
      const el = document.querySelector(target);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  const obs = new IntersectionObserver((entries)=>{
    for(const ent of entries){
      if(ent.isIntersecting){
        ent.target.classList.add('in');
        obs.unobserve(ent.target);
      }
    }
  }, {threshold: 0.12});

  $$('.fade').forEach(el=>obs.observe(el));
  $('#year').textContent = new Date().getFullYear();
})();
