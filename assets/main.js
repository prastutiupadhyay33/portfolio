(function(){
var P='stroke-linecap="round" stroke-linejoin="round"';
var I={
python:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
ml:'<path d="M3 3v18h18M7 14l4-4 3 3 5-6"/>',
dl:'<path d="M6 6l12 3M6 12l12-3M6 12l12 3M6 18l12-3M6 6v0M6 12v0M6 18v0M18 9v0M18 15v0" stroke-width="3"/>',
cv:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>',
db:'<path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
leaf:'<path d="M12 2c4 4 6 8 6 12a6 6 0 01-12 0c0-4 2-8 6-12zM12 22V10"/>',
pulse:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"/>',
bldg:'<path d="M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M3 21h18"/>',
github:'<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
linkedin:'<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>',
mail:'<path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6"/>'};
function svg(n){return '<svg viewBox="0 0 24 24" '+P+' aria-hidden="true">'+I[n]+'</svg>'}
function fill(){document.querySelectorAll('[data-i]').forEach(function(e){e.innerHTML=svg(e.dataset.i)})}

var skills=[
['python','Python','Core language for data work, automation and building ML models.'],
['ml','Machine Learning','Regression, classification and model evaluation with scikit-learn.'],
['dl','Deep Learning','Understanding neural networks and how they learn from data.'],
['cv','Computer Vision','Exploring how machines interpret and analyse images.'],
['db','SQL','Querying and organising relational data for analysis.'],
['leaf','MongoDB','Working with flexible, document-based NoSQL data.']];
var B='https://github.com/prastutiupadhyay33/Machine-Learning-1/blob/main/';
var projects=[
['Auto MPG','Predicts vehicle fuel efficiency from engine and weight features using regression.',['Regression','Machine Learning'],['Python','Pandas','scikit-learn'],'ml','Auto%20mpg.ipynb'],
['Stock Analysis','Explores stock price data to uncover trends, patterns and insights.',['Data Analysis'],['Python','Pandas','Matplotlib'],'pulse','Stock%20Analysis.ipynb'],
['German Credit Logistic Regression','Classifies credit applicants as good or bad risk with logistic regression.',['Classification','Machine Learning'],['Python','Logistic Regression','scikit-learn'],'shield','German%20Credit%20Logistic%20Regression.ipynb'],
['INN Hotel','Analyses hotel booking data and builds a model to understand booking outcomes.',['Classification','Machine Learning','Data Analysis'],['Python','Pandas','scikit-learn'],'bldg','INN%20Hotel.ipynb'],
['Breast Cancer KNN','Classifies tumours as benign or malignant using the K-Nearest Neighbors algorithm.',['Classification','Machine Learning'],['Python','KNN','scikit-learn'],'dl','Breast%20Cancer%20KNN.ipynb'],
['Breast Cancer Naive Bayes','Applies a Naive Bayes classifier to diagnose tumours from clinical features.',['Classification','Machine Learning'],['Python','Naive Bayes','scikit-learn'],'dl','Breast%20Cancer%20Naive%20Bayes.ipynb'],
['Simple Linear Regression','Fits a simple linear model to study the relationship between two variables.',['Regression','Machine Learning'],['Python','Linear Regression','Matplotlib'],'ml','Simple%20Linear%20Regression.ipynb'],
['BigMart Sales Linear Regression','Forecasts retail product sales using linear regression on store and item data.',['Regression','Machine Learning'],['Python','Pandas','Linear Regression'],'db','BigMart-Sales-LinearRegression.ipynb']];
var cats=['All','Machine Learning','Regression','Classification','Data Analysis'];

document.getElementById('skillGrid').innerHTML=skills.map(function(s){return '<div class="card"><i class="ico">'+svg(s[0])+'</i><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join('');
document.getElementById('projectGrid').innerHTML=projects.map(function(p){return '<article class="card pcard" data-c="'+p[2].join('|')+'"><i>'+svg(p[4])+'</i><h3>'+p[0]+'</h3><p>'+p[1]+'</p><div class="tags">'+p[3].concat(p[2]).filter(function(v,i,a){return a.indexOf(v)==i}).map(function(t){return '<span>'+t+'</span>'}).join('')+'</div><a class="btn ghost" href="'+B+p[5]+'" target="_blank" rel="noopener noreferrer">View on GitHub</a></article>'}).join('');
var fl=document.getElementById('filters');
fl.innerHTML=cats.map(function(c,i){return '<button type="button" aria-pressed="'+(i==0)+'">'+c+'</button>'}).join('');
fl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
fl.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
var c=b.textContent;document.querySelectorAll('.pcard').forEach(function(card){card.classList.toggle('hide',c!=='All'&&card.dataset.c.split('|').indexOf(c)<0)})});
fill();

/* menu */
var bur=document.getElementById('burger'),menu=document.getElementById('menu');
bur.addEventListener('click',function(){var o=menu.classList.toggle('open');bur.setAttribute('aria-expanded',o)});
menu.addEventListener('click',function(e){if(e.target.tagName=='A'){menu.classList.remove('open');bur.setAttribute('aria-expanded',false)}});

/* reveal + active link */
var links=[].slice.call(menu.querySelectorAll('a'));
if('IntersectionObserver' in window){
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){ro.observe(el)});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(function(s){so.observe(s)});
}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});

/* contact form (Web3Forms -> email registered with the access key) */
var f=document.getElementById('form'),st=document.getElementById('status'),btn=document.getElementById('send');
function msg(t,c){st.textContent=t;st.className=c}
f.addEventListener('submit',function(e){e.preventDefault();
var n=f.name,m=f.email,g=f.message,ok=true;
[n,m,g].forEach(function(x){x.classList.remove('bad')});
if(!n.value.trim()){n.classList.add('bad');ok=false}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.value.trim())){m.classList.add('bad');ok=false}
if(!g.value.trim()){g.classList.add('bad');ok=false}
if(!ok)return msg('Please fill in your name, a valid email and a message.','err');
if(f.botcheck.checked)return;
var key=(document.querySelector('meta[name=web3forms-key]')||{}).content;
if(!key||key.indexOf('YOUR_')==0)return msg('The contact form is not configured yet. Please email me directly.','err');
btn.disabled=true;btn.textContent='Sending...';msg('','');
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
body:JSON.stringify({access_key:key,subject:'New portfolio message from '+n.value.trim(),name:n.value.trim(),email:m.value.trim(),message:g.value.trim(),botcheck:''})})
.then(function(r){return r.json()}).then(function(d){
if(d.success){msg('Thank you! Your message was sent successfully.','ok');f.reset()}else throw new Error(d.message)})
.catch(function(){msg('Sorry, your message could not be sent. Please try again or email me directly.','err')})
.finally(function(){btn.disabled=false;btn.textContent='Send Message'})});

/* neural network background */
var cv=document.getElementById('bg'),x=cv.getContext('2d'),W,H,pts=[],still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;var n=Math.min(70,Math.floor(W*H/22000));pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.6+.6})}
function draw(){x.clearRect(0,0,W,H);
for(var i=0;i<pts.length;i++){var a=pts[i];
if(!still){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}
for(var j=i+1;j<pts.length;j++){var b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle='rgba(168,85,247,'+(.16*(1-d/130))+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
x.fillStyle='rgba(192,132,252,.7)';x.beginPath();x.arc(a.x,a.y,a.r,0,7);x.fill()}
if(!still)requestAnimationFrame(draw)}
addEventListener('resize',function(){size();if(still)draw()});size();draw();
})();
