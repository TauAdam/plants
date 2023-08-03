(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function v(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(s){if(s.ep)return;s.ep=!0;const c=v(s);fetch(s.href,c)}})();const i=document.querySelector(".burger-menu"),o=document.querySelector(".popup");var p;const L=(p=document.querySelector(".header__list"))==null?void 0:p.cloneNode(!0);i.onclick=e=>{e.preventDefault(),o==null||o.classList.toggle("active"),i.classList.toggle("active"),o==null||o.appendChild(L)};document.addEventListener("click",e=>{e.target instanceof HTMLElement&&e.target.closest(".menu__item")&&(o==null||o.classList.remove("active"),i==null||i.classList.remove("active"))});const h=document.querySelectorAll(".card");let r=[];const S=document.querySelectorAll(".btn_service");S.forEach(e=>{e.addEventListener("click",()=>{if(r.length===2&&!r.includes(e)){alert("пользователь не может нажать одновременно все три кнопки услуг.");return}r.includes(e)?(e.classList.remove("btn_active"),r=r.filter(t=>t!==e)):(e.classList.add("btn_active"),r.push(e)),q()})});function q(){h.forEach(e=>{r.length===0||r.some(t=>e.classList.contains(t.id))?e.classList.remove("blur"):e.classList.add("blur")})}const f=document.querySelectorAll(".accordion-item-closed"),d=document.querySelectorAll(".accordion-content"),m=document.querySelectorAll(".accordion__btn");for(let e=0;e<f.length;e++)f[e].addEventListener("click",function(){for(let t=0;t<d.length;t++)t!==e&&(d[t].classList.remove("show"),m[t].classList.remove("open"));document.querySelectorAll(".accordion-item")[e].classList.toggle("green"),d[e].classList.toggle("show"),m[e].classList.toggle("open")});const l=document.querySelector(".city-select-btn"),g=document.querySelector(".select-content"),n=document.querySelector(".select-placeholder");l==null||l.addEventListener("click",()=>{n==null||n.classList.toggle("select_active"),l.classList.toggle("open"),g.classList.toggle("open")});const C=document.querySelectorAll(".select-option");let y=null;C.forEach(e=>{e.addEventListener("click",()=>{n==null||n.classList.remove("select_active"),l.classList.remove("open"),g.classList.remove("open"),n.querySelector("p").textContent=e.innerText,y=+e.id,E(y)})});const b=[{city:"Canandaigua, NY",phone:"+1	585	393 0001",address:"151 Charlotte Street"},{city:"New York City",phone:"+1	212	456 0002",address:"9 East 91st Street"},{city:"Yonkers, NY",phone:"+1	914	678 0003",address:"511 Warburton Ave"},{city:"Sherrill, NY",phone:"+1	315	908 0004",address:"14 WEST Noyes BLVD"}],E=e=>{const t=b[e-1];document.querySelector("#city-card").innerHTML=`
						<div class="city-card">
							<p><span class="black">City:</span> ${t.city}</p>
              <p><span class="black">Phone:</span> ${t.phone}</p>
              <p><span class="black">Office adress:</span> ${t.address}</p>
							<a class="btn_call" href="tel:${t.phone}">Call Us</a>
						</div>
							`};console.log(`Самооценкa: 125/125

    При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
        При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
        Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20
        Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
    Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50

    При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
    Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25

    В разделе contacts реализован select с выбором городов +25
        В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
        При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10
`);