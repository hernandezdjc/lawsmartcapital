const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){document.querySelectorAll('details[open]').forEach(other=>{if(other!==item)other.open=false})}}));
document.querySelector('#project-form').addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const line=v=>encodeURIComponent(v||'Por definir');
  const msg=`Hola, LawSmart Capital. Deseo solicitar una evaluación inicial.%0A%0A*Nombre:* ${line(d.get('name'))}%0A*Empresa:* ${line(d.get('company'))}%0A*Correo:* ${line(d.get('email'))}%0A*Tipo de activo:* ${line(d.get('type'))}%0A*Capital buscado:* ${line(d.get('amount'))}%0A*Proyecto:* ${line(d.get('message'))}`;
  window.open(`https://wa.me/50372357396?text=${msg}`,'_blank','noopener');
});
