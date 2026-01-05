(async function(){
  const $ = (s, r=document)=>r.querySelector(s);
  const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));

  let cfg;
  try{
    const res = await fetch('assets/img/photos.json', {cache:'no-store'});
    cfg = await res.json();
  }catch(e){
    console.warn('photos.json not loaded, fallback to placeholders.', e);
    cfg = null;
  }

  if(cfg?.brand){
    $('#brandName').textContent = cfg.brand.name || '【工廠名稱】';
    $('#heroTitle').textContent = cfg.brand.name || '【工廠名稱】';
    $('#heroSub').textContent = cfg.brand.tagline || '用可靠的製程，做出一致的產品。';
    $('#heroPill').textContent = cfg.brand.subtitle || 'OEM／ODM 製造｜品質穩定｜交期可控';
  }

  const videoMp4 = cfg?.hero?.video_mp4 || 'assets/video/hero.mp4';
  const videoWebm = cfg?.hero?.video_webm || 'assets/video/hero.webm';
  const heroImg = cfg?.hero?.image || 'assets/img/hero-placeholder.svg';

  const video = $('#heroVideo');
  const img = $('#heroImg');

  img.src = heroImg;

  const sourceWebm = document.createElement('source');
  sourceWebm.src = videoWebm;
  sourceWebm.type = 'video/webm';

  const sourceMp4 = document.createElement('source');
  sourceMp4.src = videoMp4;
  sourceMp4.type = 'video/mp4';

  video.appendChild(sourceWebm);
  video.appendChild(sourceMp4);

  const showVideo = ()=>{ video.style.opacity = '1'; img.style.opacity = '0'; };
  const showImg = ()=>{ video.style.opacity = '0'; img.style.opacity = '1'; };

  video.style.opacity = '0';
  img.style.opacity = '1';

  video.addEventListener('canplay', showVideo, {once:true});
  video.addEventListener('error', showImg);

  const gallery = $('#gallery');
  const items = cfg?.gallery || [];
  if(items.length){
    gallery.innerHTML = '';
    for(const it of items.slice(0,6)){
      const a = document.createElement('article');
      a.className = 'tile fadeUp';
      a.innerHTML = `
        <img src="${it.src}" alt="${it.caption || '工廠照片'}" loading="lazy">
        <div class="cap">${it.caption || ''}</div>
      `;
      gallery.appendChild(a);
    }
  }

  if(cfg?.contact){
    $('#contactHint').textContent = cfg.contact.hint || '';
    const em = cfg.contact.email || '';
    const mail = $('#contactEmail');
    mail.textContent = em ? em : 'your-email@example.com';
    mail.href = em ? `mailto:${em}` : 'mailto:your-email@example.com';
  }

  $$('#toCapabilities, #toGallery, #toCoop').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = btn.getAttribute('data-target');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
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

  $$('.fadeUp').forEach(el=>obs.observe(el));
})();
