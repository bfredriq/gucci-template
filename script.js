const styles = String.raw`/* ===== Tokens ===== */
:root{
  --black:#050505; --green:#0b3b2e; --green-deep:#04221a; --green-lit:#17694f;
  --burgundy:#6d0f23; --burgundy-deep:#3a0612; --burgundy-lit:#a31d3d;
  --gold:#c9a96a; --ivory:#f3eee4; --muted:#b4ad9e;
  --serif:"Cormorant Garamond",Georgia,"Times New Roman",serif;
  --sans:"Jost","Helvetica Neue",Arial,sans-serif;
  --ease:cubic-bezier(.2,.7,.2,1);
  color-scheme:dark; box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px); padding-bottom:env(safe-area-inset-bottom,0px);
}
*,*::before,*::after{box-sizing:inherit}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{margin:0;background:var(--black);color:var(--ivory);font-family:var(--sans);font-weight:300;line-height:1.65;-webkit-font-smoothing:antialiased}
body::before{content:"Complimentary shipping on orders over $500  ·  Free returns";display:block;text-align:center;background:var(--burgundy);font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;padding:9px 12px}
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:60;opacity:.05;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
a{color:inherit;text-decoration:none}
::selection{background:var(--burgundy);color:var(--ivory)}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
img,svg{max-width:100%}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px}

/* ===== Header ===== */
header{position:sticky;top:0;z-index:30;background:rgba(5,5,5,.82);backdrop-filter:blur(14px) saturate(140%)}
header::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);opacity:.5}
.bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:76px}
.logo{font-family:var(--serif);font-weight:600;font-size:2.1rem;letter-spacing:.36em;padding-left:.36em;transition:color .3s}
.logo:hover{color:var(--gold)}
nav ul{display:flex;gap:34px;list-style:none;margin:0;padding:0;font-size:.76rem;letter-spacing:.2em;text-transform:uppercase}
nav a{padding:8px 0;background:linear-gradient(var(--gold),var(--gold)) 0 100%/0 1px no-repeat;transition:background-size .4s var(--ease),color .3s}
nav a:hover{background-size:100% 1px;color:var(--gold)}
.tools{display:flex;gap:24px;justify-content:flex-end;align-items:center;font-size:.76rem;letter-spacing:.18em;text-transform:uppercase}
.cart{background:none;border:1px solid rgba(201,169,106,.7);border-radius:100px;color:var(--ivory);padding:9px 22px;font:inherit;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .3s,color .3s,transform .3s}
.cart:hover{background:var(--gold);color:#000;transform:translateY(-1px)}
.menu-btn{display:none;background:none;border:0;color:var(--ivory);font:inherit;text-transform:uppercase;letter-spacing:.16em;cursor:pointer;justify-self:start}

/* ===== Hero ===== */
.hero{display:grid;grid-template-columns:1.3fr 1fr 1fr;min-height:90vh;transition:grid-template-columns .9s var(--ease)}
.hero:has(.p2:hover){grid-template-columns:1fr 1.5fr .9fr}
.hero:has(.p3:hover){grid-template-columns:1fr .9fr 1.5fr}
.panel{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:56px 44px}
.panel::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 45%,rgba(0,0,0,.5));pointer-events:none}
.panel>*:not(.shape){position:relative;z-index:2}
.p1{background:radial-gradient(circle at 15% 10%,#222,var(--black) 62%)}
.p1::before{content:"26";position:absolute;top:-4rem;right:-1.5rem;font-family:var(--serif);font-size:min(24rem,38vw);line-height:1;color:transparent;-webkit-text-stroke:1px rgba(201,169,106,.3)}
.p2{background:radial-gradient(ellipse at 50% 28%,var(--green-lit),var(--green) 45%,var(--green-deep))}
.p3{background:radial-gradient(ellipse at 50% 28%,var(--burgundy-lit),var(--burgundy) 45%,var(--burgundy-deep))}
.hero h1{font-family:var(--serif);font-weight:500;font-size:clamp(3rem,6.6vw,6.2rem);line-height:.95;margin:0 0 24px;letter-spacing:-.015em;background:linear-gradient(180deg,#fff,#d8ccb2);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero h1::before{content:"Autumn / Winter 2026";display:block;font-family:var(--sans);font-size:.72rem;font-weight:400;letter-spacing:.36em;text-transform:uppercase;color:var(--gold);-webkit-text-fill-color:var(--gold);margin-bottom:22px}
.hero p{max-width:36ch;margin:0 0 32px;color:var(--muted);font-size:1.05rem}
.panel .tag{font-family:var(--serif);font-style:italic;font-size:1.9rem;line-height:1.1;margin:0}
.panel .tag small{display:block;font-family:var(--sans);font-style:normal;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(243,238,228,.7);margin-top:10px}
.p1 h1,.p1 p,.p1 .btn{animation:rise 1.1s var(--ease) both}
.p1 p{animation-delay:.15s}.p1 .btn{animation-delay:.3s}
@keyframes rise{from{opacity:0;transform:translateY(30px)}}

/* Illustrated shapes */
.shape{position:absolute;top:56px;left:0;right:0;margin:0 auto;width:60%;max-width:250px;aspect-ratio:1/1.05;z-index:1;border:1.5px solid rgba(201,169,106,.75);background:linear-gradient(145deg,rgba(243,238,228,.2),rgba(0,0,0,.28));filter:drop-shadow(0 34px 34px rgba(0,0,0,.5));animation:float 6s ease-in-out infinite alternate;transition:scale .8s var(--ease)}
@keyframes float{to{translate:0 -14px}}
.panel:hover .shape{scale:1.07}
.bag{border-radius:8px 8px 22px 22px}
.bag::before{content:"";position:absolute;left:22%;right:22%;top:-34%;height:46%;border:1.5px solid rgba(201,169,106,.75);border-bottom:0;border-radius:100px 100px 0 0}
.bag::after{content:"";position:absolute;left:50%;top:32%;width:20px;height:20px;margin-left:-10px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f6e6bd,var(--gold));box-shadow:0 0 22px rgba(201,169,106,.7)}
.shoe{aspect-ratio:2/1;top:90px;border-radius:60% 40% 12% 12%/70% 60% 12% 12%}
.scarf{rotate:-8deg;background:repeating-linear-gradient(90deg,rgba(243,238,228,.34) 0 8px,transparent 8px 22px),linear-gradient(145deg,rgba(243,238,228,.12),rgba(0,0,0,.25))}

/* ===== Buttons ===== */
.btn{position:relative;z-index:0;overflow:hidden;display:inline-block;padding:16px 40px;background:var(--ivory);color:#000;font:500 .76rem var(--sans);letter-spacing:.26em;text-transform:uppercase;border:1px solid var(--ivory);cursor:pointer;transition:color .4s,border-color .4s}
.btn::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--gold);transform:translateY(101%);transition:transform .45s var(--ease)}
.btn:hover::before{transform:none}
.btn:hover{border-color:var(--gold)}
.btn.ghost{background:transparent;color:var(--ivory);border-color:rgba(243,238,228,.5)}
.btn.ghost:hover{color:#000}

/* ===== Stripe ===== */
.stripe{height:16px;border-block:1px solid rgba(201,169,106,.4);background:linear-gradient(var(--green) 0 33%,var(--burgundy) 33% 66%,var(--green) 66%)}

/* ===== Sections ===== */
section{padding:120px 0}
h2{font-family:var(--serif);font-weight:500;font-size:clamp(2.2rem,4.4vw,3.6rem);line-height:1.05;margin:0 0 16px;letter-spacing:-.01em}
h2::after{content:"";display:block;width:60px;height:1px;background:var(--gold);margin-top:22px}
.head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:44px}
.head p{margin:0;color:var(--muted);max-width:46ch}
#collection{background:radial-gradient(900px 520px at 92% 0,rgba(23,105,79,.35),transparent 62%),radial-gradient(700px 420px at 0 100%,rgba(109,15,35,.3),transparent 60%),var(--black)}

/* Filters */
.filters{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px}
.chip{background:none;border:1px solid rgba(243,238,228,.25);color:var(--ivory);padding:10px 26px;font:inherit;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:background .3s,border-color .3s,color .3s}
.chip:hover{border-color:var(--gold);color:var(--gold)}
.chip[aria-pressed="true"]{background:var(--green);border-color:var(--gold);color:var(--ivory)}

/* Products */
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
.card{display:flex;flex-direction:column;transition:transform .6s var(--ease)}
.card:hover{transform:translateY(-10px)}
.img{position:relative;aspect-ratio:4/5;overflow:hidden;isolation:isolate;box-shadow:0 30px 50px -28px #000}
.img::before{content:"";position:absolute;inset:0;z-index:0;background:radial-gradient(circle at 50% 28%,rgba(255,255,255,.2),transparent 58%)}
.img::after{content:"";position:absolute;inset:12px;z-index:2;border:1px solid transparent;transition:border-color .5s,inset .5s var(--ease);pointer-events:none}
.card:hover .img::after{border-color:rgba(201,169,106,.75);inset:16px}
.img .shape{top:22%;width:58%;animation:none}
.card:hover .img .shape{scale:1.1}
.c-green{background:linear-gradient(160deg,var(--green-lit),var(--green) 45%,var(--green-deep))}
.c-red{background:linear-gradient(160deg,var(--burgundy-lit),var(--burgundy) 45%,var(--burgundy-deep))}
.c-black{background:linear-gradient(160deg,#2a2a2a,#0a0a0a 55%,#000)}
.card h3{font-family:var(--serif);font-weight:500;font-size:1.4rem;line-height:1.2;margin:20px 0 4px}
.card .meta{color:var(--muted);font-size:.82rem;letter-spacing:.08em;margin:0}
.card .row{display:flex;justify-content:space-between;align-items:center;margin-top:14px}
.card .row span{font-family:var(--serif);font-size:1.3rem;color:var(--gold)}
.add{background:none;border:1px solid rgba(243,238,228,.35);border-radius:100px;color:var(--ivory);font:inherit;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding:8px 18px;cursor:pointer;transition:background .3s,color .3s,border-color .3s}
.add:hover{background:var(--ivory);color:#000;border-color:var(--ivory)}

/* Heritage */
.story{background:radial-gradient(800px 520px at 12% 10%,rgba(23,105,79,.7),transparent 62%),linear-gradient(160deg,var(--green),var(--green-deep))}
.story .cols{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.story p{color:#d4dccf;max-width:52ch;font-size:1.05rem}
.stats{display:grid;grid-template-columns:repeat(3,1fr);margin-top:40px;border-top:1px solid rgba(201,169,106,.5)}
.stats div{padding:26px 16px 0 0}
.stats b{display:block;font-family:var(--serif);font-weight:500;font-size:2.8rem;line-height:1;color:var(--gold)}
.stats span{font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:#c3cdbf}
.art{position:relative;aspect-ratio:1;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,var(--burgundy-lit),var(--burgundy) 50%,var(--burgundy-deep));outline:1px solid rgba(201,169,106,.65);outline-offset:-22px;box-shadow:0 50px 90px -35px #000}
.art::before{content:"\201C";position:absolute;top:7%;left:0;right:0;text-align:center;font-family:var(--serif);font-size:9rem;line-height:1;color:var(--gold);opacity:.8}
.art q{font-family:var(--serif);font-style:italic;font-size:clamp(1.6rem,3vw,2.4rem);text-align:center;padding:60px 14% 0;line-height:1.25;quotes:none}

/* Editorial split */
.split{display:grid;grid-template-columns:1fr 1fr}
.split .half{position:relative;overflow:hidden;padding:100px 56px;min-height:480px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}
.split .half:first-child{background:radial-gradient(circle at 20% 10%,#1d1d1d,#000 65%)!important}
.split .red{background:radial-gradient(circle at 80% 10%,var(--burgundy-lit),var(--burgundy) 45%,var(--burgundy-deep))}
.split .half::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 100%,rgba(201,169,106,.18),transparent 55%);opacity:0;transition:opacity .6s}
.split .half:hover::before{opacity:1}
.split .half>*{position:relative}
.split .half p{color:var(--muted);max-width:38ch;margin:0 0 30px}
.split .red p{color:#ecd3d9}

/* Newsletter */
.news{text-align:center;background:radial-gradient(700px 420px at 50% 120%,rgba(109,15,35,.65),transparent 65%),var(--black)}
.news h2::after{margin-inline:auto}
.news p{color:var(--muted);margin:0 auto 32px;max-width:46ch}
.news form{display:flex;max-width:560px;margin:0 auto;border:1px solid rgba(201,169,106,.6);background:rgba(255,255,255,.03);transition:border-color .3s,box-shadow .3s}
.news form:focus-within{border-color:var(--gold);box-shadow:0 0 0 4px rgba(201,169,106,.15)}
.news input{flex:1;min-width:0;background:none;border:0;color:var(--ivory);padding:16px 22px;font:inherit}
.news input::placeholder{color:#8a8578}
.news input:focus-visible{outline:none}
.note{min-height:1.6em;margin-top:16px;font-size:.9rem}

/* Footer */
footer{background:linear-gradient(180deg,var(--burgundy-deep),#150106);padding:80px 0 36px;border-top:1px solid rgba(201,169,106,.4)}
.fgrid{display:grid;grid-template-columns:1.5fr repeat(3,1fr);gap:48px}
footer h4{margin:0 0 18px;font-family:var(--sans);font-size:.74rem;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:var(--gold)}
footer ul{list-style:none;margin:0;padding:0;font-size:.92rem;color:#dcc4ca}
footer li{margin-bottom:10px}
footer li a{transition:color .3s,padding .3s}
footer li a:hover{color:var(--ivory);padding-left:6px}
.legal{margin-top:56px;padding-top:22px;border-top:1px solid rgba(243,238,228,.15);font-size:.78rem;letter-spacing:.06em;color:#c8a9b1}

/* ===== Scroll reveal (modern browsers) ===== */
@supports (animation-timeline:view()){
  section .head,.card,.stats,.art,.half,.news form{animation:reveal linear both;animation-timeline:view();animation-range:entry 0% entry 45%}
}
@keyframes reveal{from{opacity:0;translate:0 44px}}

/* ===== Responsive ===== */
@media (max-width:960px){
  .hero,.hero:has(.p2:hover),.hero:has(.p3:hover){grid-template-columns:1fr;min-height:0}
  .panel{min-height:52vh}
  .grid{grid-template-columns:repeat(2,1fr)}
  .story .cols,.split{grid-template-columns:1fr;gap:56px}
  .fgrid{grid-template-columns:1fr 1fr}
  .menu-btn{display:block}
  nav{position:absolute;left:0;right:0;top:76px;background:rgba(5,5,5,.97);border-bottom:1px solid rgba(201,169,106,.4);display:none}
  nav.open{display:block}
  nav ul{flex-direction:column;gap:0;padding:8px 28px 22px}
  nav li a{display:block;padding:14px 0}
  .tools .hide-sm{display:none}
}
@media (max-width:520px){
  section{padding:76px 0}
  .wrap{padding:0 18px}
  .grid{gap:16px}
  .logo{font-size:1.5rem;letter-spacing:.24em}
  .panel{padding:44px 24px}
  .stats b{font-size:2rem}
  .split .half{padding:64px 24px}
  .card h3{font-size:1.15rem}
  .add{padding:7px 12px}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation:none!important;transition:none!important}
}`;

const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);