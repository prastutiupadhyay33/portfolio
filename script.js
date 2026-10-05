const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let p=0;const iv=setInterval(()=>{p=Math.min(100,p+(RM?25:1+Math.floor(Math.random()*8)));$('#pc').textContent=p+'%';$('#pb').style.width=p+'%';if(p>=100){clearInterval(iv);const l=$('#ld');l.style.opacity=0;l.style.visibility='hidden'}},50);
$$('#h1 span').forEach((s,k)=>{const t=s.textContent;s.innerHTML=[...t].map((c,i)=>`<span class="l" style="--i:${i+k*8}">${c}</span>`).join('')});
/* skills cylinder */
const SK=[['Python','🐍','Core language for data work and ML.'],['Machine Learning','🧠','Regression, classification, tuning.'],['Deep Learning','🕸️','Neural networks, learning in progress.'],['Computer Vision','👁️','Image-based AI, exploring.'],['SQL','🗄️','Querying relational data.'],['MongoDB','🍃','Document-based NoSQL storage.']];
const cyl=$('#cyl');cyl.innerHTML=SK.map((s,i)=>`<div class="sc" tabindex="0" style="transform:rotateY(${i*60}deg) translateZ(var(--R,250px))"><span class="ic" aria-hidden="true">${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p></div>`).join('');
if(RM)$('#sw').classList.add('flat');
let ang=0,vel=RM?0:.18,drag=false,lx=0;
const cy=$('#cy');
cy.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;cy.style.cursor='grabbing'});
addEventListener('pointerup',()=>{drag=false;cy.style.cursor='grab'});
addEventListener('pointermove',e=>{if(drag){ang+=(e.clientX-lx)*.4;lx=e.clientX}});
$('#pv').onclick=()=>ang+=60;$('#nx').onclick=()=>ang-=60;
let sx=1;function rsz(){const R=innerWidth<600?200:250;cyl.style.setProperty('--R',R+'px')}rsz();addEventListener('resize',rsz);
let lt=0;(function sp(t=0){const dt=Math.min(50,t-lt||16.7);lt=t;if(!drag&&!RM)ang+=vel*dt/16.7;cyl.style.transform=`rotateX(-8deg) rotateY(${ang}deg)`;requestAnimationFrame(sp)})();
cy.addEventListener('pointerenter',()=>vel=.04);cy.addEventListener('pointerleave',()=>vel=RM?0:.18);
/* projects */
const B='https://github.com/prastutiupadhyay33/Machine-Learning-1/blob/main/';
const PR=[['Auto MPG','Regression','Predicts vehicle fuel efficiency from engine and weight features.',['Python','Pandas','Scikit-Learn'],'Auto%20mpg.ipynb'],['Stock Analysis','Analysis','Explores stock price trends and patterns with data analysis.',['Python','Pandas','NumPy'],'Stock%20Analysis.ipynb'],['German Credit Logistic Regression','Classification','Classifies credit risk of applicants using logistic regression.',['Python','Scikit-Learn'],'German%20Credit%20Logistic%20Regression.ipynb'],['INN Hotel','Classification','Predicts hotel booking outcomes from customer data.',['Python','Pandas','Scikit-Learn'],'INN%20Hotel.ipynb'],['Breast Cancer KNN','Classification','Diagnoses tumors with the K-Nearest Neighbors algorithm.',['Python','KNN','Scikit-Learn'],'Breast%20Cancer%20KNN.ipynb'],['Breast Cancer Naive Bayes','Classification','Tumor classification using a Naive Bayes model.',['Python','Naive Bayes'],'Breast%20Cancer%20Naive%20Bayes.ipynb'],['Simple Linear Regression','Regression','Fits and evaluates a one-variable regression model.',['Python','NumPy','Scikit-Learn'],'Simple%20Linear%20Regression.ipynb'],['BigMart Sales Linear Regression','Regression','Forecasts retail product sales with linear regression.',['Python','Pandas','Scikit-Learn'],'BigMart-Sales-LinearRegression.ipynb']];
let cat='All';
function rp(){$('#pg').innerHTML=PR.filter(x=>cat=='All'||x[1]==cat).map((x,i)=>`<article class="g pc t3" style="animation-delay:${i*.07}s"><div class="pv" aria-hidden="true"><svg viewBox="0 0 260 120" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#5ef2c2" stroke-opacity=".6"><path d="M0 95 Q45 25 90 70 T170 38 T260 62"/><circle cx="90" cy="70" r="5" fill="#ff7a59" stroke="none"/><circle cx="170" cy="38" r="5" fill="#ff7a59" stroke="none"/><path d="M0 100H260M0 60H260" stroke-opacity=".12"/></svg></div><div class="pb"><span class="ct">${x[1]}</span><h3>${x[0]}</h3><p>${x[2]}</p><div class="tg">${x[3].map(t=>`<span>${t}</span>`).join('')}</div><a class="btn" href="${B+x[4]}" target="_blank" rel="noopener noreferrer">GitHub</a></div></article>`).join('');tilt()}
$('#fl').innerHTML=['All','Regression','Classification','Analysis'].map(c=>`<button class="${c=='All'?'on':''}" aria-pressed="${c=='All'}">${c}</button>`).join('');
$('#fl').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#fl button').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed',false)});b.classList.add('on');b.setAttribute('aria-pressed',true);cat=b.textContent;rp()};
function tilt(){if(RM)return;$$('.t3:not(.tb)').forEach(el=>{el.classList.add('tb');el.addEventListener('pointermove',e=>{if(e.pointerType=='touch')return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--gx',(x+.5)*100+'%');el.style.setProperty('--gy',(y+.5)*100+'%');el.style.transform=`perspective(900px) rotateY(${x*16}deg) rotateX(${-y*16}deg) scale(1.02)`});el.addEventListener('pointerleave',()=>el.style.transform='')})}
/* reveals */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');if(e.target.classList.contains('tn')){const i=$$('.tn').indexOf(e.target);setTimeout(()=>e.target.classList.add('on'),400+i*300)}{const t=e.target;setTimeout(()=>t.classList.remove('rv','v'),1300)}io.unobserve(e.target)}}),{threshold:.15});
$$('.rv').forEach(e=>io.observe(e));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=+e.target.dataset.n;let v=0;const s=setInterval(()=>{e.target.textContent=++v;if(v>=t)clearInterval(s)},90);cio.unobserve(e.target)}}));
$$('[data-n]').forEach(e=>cio.observe(e));rp();tilt();
/* typing */
const W=['AI Enthusiast','Machine Learning Enthusiast','Data & AI Learner','Computer Vision Enthusiast'];let wi=0,ci=0,dl=false;
(function ty(){const w=W[wi],T=$('#ty');if(RM){T.textContent=w;wi=(wi+1)%4;return setTimeout(ty,2200)}T.textContent=w.slice(0,ci+=dl?-1:1);let d=dl?35:70;if(!dl&&ci==w.length){dl=true;d=1400}else if(dl&&ci==0){dl=false;wi=(wi+1)%4;d=300}setTimeout(ty,d)})();
/* nav */
const nav=$('#nav'),ls=$('#ls'),bg=$('#bg'),pill=$('#pill'),as=$$('#ls a'),secs=$$('main section');
bg.onclick=()=>{const o=ls.classList.toggle('o');bg.classList.toggle('o',o);bg.setAttribute('aria-expanded',o)};
ls.onclick=e=>{if(e.target.tagName=='A'){ls.classList.remove('o');bg.classList.remove('o')}};
function act(){nav.classList.toggle('s',scrollY>30);let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)c=i});as.forEach((a,i)=>{a.classList.toggle('on',i==c);if(i==c){pill.style.left=a.offsetLeft+'px';pill.style.width=a.offsetWidth+'px'}})}
addEventListener('scroll',act,{passive:true});addEventListener('resize',act);act();if(document.fonts)document.fonts.ready.then(act);
/* cursor + magnetic */
const cr=$('#cr');addEventListener('pointermove',e=>{if(e.pointerType!='touch')cr.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.addEventListener('pointerover',e=>cr.classList.toggle('h',!!e.target.closest('a,button,.g,input,textarea')));
if(!RM)$$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
/* WebGL scene */
(function(){if(!window.THREE)return;const cv=$('#gl'),mob=innerWidth<700;
const r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:!mob});r.setPixelRatio(Math.min(devicePixelRatio,mob?1.25:1.75));
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,100);cam.position.z=9;
const G=new THREE.Group();sc.add(G);
const ico=new THREE.Mesh(new THREE.IcosahedronGeometry(2.1,1),new THREE.MeshBasicMaterial({color:0x5ef2c2,wireframe:true,transparent:true,opacity:.55}));
const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.35,0),new THREE.MeshBasicMaterial({color:0xff7a59,wireframe:true,transparent:true,opacity:.9}));
const nodes=new THREE.Points(ico.geometry,new THREE.PointsMaterial({color:0xffd9a0,size:.09}));
const rings=[0x5ef2c2,0xff7a59].map((c,i)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(3+i*.7,.012,8,120),new THREE.MeshBasicMaterial({color:c}));m.rotation.x=1.2+i*.6;m.rotation.y=i;G.add(m);return m});
G.add(ico,core,nodes);
const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(.55,.14,90,12),new THREE.MeshBasicMaterial({color:0xffd9a0,wireframe:true,transparent:true,opacity:.7}));sc.add(knot);
const NN=[];for(let i=0;i<(mob?26:44);i++){const u=Math.random()*6.283,v=Math.acos(2*Math.random()-1);NN.push(new THREE.Vector3(3.9*Math.sin(v)*Math.cos(u),3.9*Math.sin(v)*Math.sin(u),3.9*Math.cos(v)))}
const lp=[];NN.forEach((a,i)=>NN.forEach((b,j)=>{if(j>i&&a.distanceTo(b)<2.8)lp.push(a.x,a.y,a.z,b.x,b.y,b.z)}));
const net=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(lp,3)),new THREE.LineBasicMaterial({color:0x5ef2c2,transparent:true,opacity:.25}));
const nn=new THREE.Points(new THREE.BufferGeometry().setFromPoints(NN),new THREE.PointsMaterial({color:0xff7a59,size:.15}));G.add(net,nn);
const rip=[];addEventListener('pointerdown',e=>{if(RM||e.target.closest('a,button,input,textarea'))return;const m=new THREE.Mesh(new THREE.RingGeometry(.92,1,64),new THREE.MeshBasicMaterial({color:0x5ef2c2,transparent:true,side:2}));m.position.set(G.position.x,G.position.y,0);m.userData.t=0;sc.add(m);rip.push(m)});
const n=mob?350:900,pa=new Float32Array(n*3);for(let i=0;i<n*3;i++)pa[i]=(Math.random()-.5)*(i%3==2?30:24);
const pts=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(pa,3)),new THREE.PointsMaterial({color:0x93b5ab,size:.04,transparent:true,opacity:.7}));sc.add(pts);
const gem=[0,1,2,3,4].map(i=>{const m=new THREE.Mesh(new THREE.OctahedronGeometry(.3),new THREE.MeshBasicMaterial({color:i?0x5ef2c2:0xffd9a0,wireframe:true}));m.userData.o=i*2.1;sc.add(m);return m});
function rs(){const w=innerWidth,h=innerHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();G.position.x=w>1000?3.2:0;G.scale.setScalar(w>1000?1:w>600?.75:.55);G.position.y=w>1000?0:1.3}
rs();addEventListener('resize',rs);
let mx=0,my=0,sy=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
let on=true;
function loop(t=0){if(!on)return;const s=t/1000,pr=Math.min(scrollY/innerHeight,6);
if(!RM){ico.rotation.y=s*.15+pr*.8;ico.rotation.x=s*.08;core.rotation.y=-s*.35;core.rotation.x=s*.2;nodes.rotation.copy(ico.rotation);rings[0].rotation.z=s*.3;rings[1].rotation.z=-s*.22;pts.rotation.y=s*.015+pr*.12;
G.rotation.y+=((mx*.6)-G.rotation.y)*.05;G.rotation.x+=((my*.4)-G.rotation.x)*.05;
G.position.y+=(((innerWidth>1000?0:1.3)+pr*.35)-G.position.y)*.05;cam.position.z=9+Math.min(pr,3)*.7;
gem.forEach(g=>{const a=s*.5+g.userData.o;g.position.set(Math.cos(a)*4.5+G.position.x,Math.sin(a*1.3)*2.2,Math.sin(a)*2);g.rotation.x=s;g.rotation.y=s*.7});
net.rotation.y=nn.rotation.y=-s*.1+pr*.5;net.rotation.x=nn.rotation.x=s*.05;net.material.opacity=.16+.14*Math.sin(s*2);
knot.position.set(-5+Math.cos(s*.35)*1.5,Math.sin(s*.5)*1.6-1,-2);knot.rotation.x=s*.6;knot.rotation.y=s*.4;
cam.position.x+=((Math.sin(pr*1.2)*1.6+mx*.8)-cam.position.x)*.04;cam.lookAt(0,0,0);
for(let i=rip.length-1;i>=0;i--){const m=rip[i];m.userData.t+=.025;m.scale.setScalar(1+m.userData.t*9);m.material.opacity=1-m.userData.t;if(m.userData.t>=1){sc.remove(m);rip.splice(i,1)}}}
r.render(sc,cam);if(!RM)requestAnimationFrame(loop)}loop();})();
if(!RM)addEventListener('pointermove',e=>{if(e.pointerType=='touch')return;const d=document.documentElement.style;d.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));d.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))});
/* form */
$('#cf').onsubmit=e=>{e.preventDefault();const to='prastutiupadhyay33@gmail.com',su='Portfolio message from '+$('#n').value,bd=$('#m').value+'\n\n'+$('#n').value+' ('+$('#e').value+')',q='&su='+encodeURIComponent(su)+'&body='+encodeURIComponent(bd);const w=window.open('https://mail.google.com/mail/?view=cm&fs=1&to='+to+q,'_blank');if(w)w.opener=null;else location.href='mailto:'+to+'?subject='+encodeURIComponent(su)+'&body='+encodeURIComponent(bd)};

/* resume viewer */
const rm=document.getElementById("rm");
document.getElementById("vr").onclick=()=>{rm.hidden=false;document.getElementById("rc").focus()};
document.getElementById("rc").onclick=()=>{rm.hidden=true;document.getElementById("vr").focus()};
rm.addEventListener("keydown",e=>{if(e.key=="Escape")document.getElementById("rc").click()});
