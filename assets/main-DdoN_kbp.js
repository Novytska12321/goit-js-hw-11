import{S as u,i as n}from"./vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=t=>`<li class="gallery-card">
        <a href="${t.largeImageURL}">
            <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="gallery-info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
    </li>`,m="https://pixabay.com",p=t=>{const s=new URLSearchParams({q:t,image_type:"photos",orientation:"horizontal",safesearch:!0,key:"46112845-f959e042da8238bb9faecb37a"});return fetch(`${m}/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})};document.querySelector(".main-button");const l=document.querySelector(".main-form"),h=document.querySelector(".main-input"),f=document.querySelector(".js-list"),c=document.querySelector(".loader"),y=new u(".gallery-card a",{captionsData:"alt",captionDelay:250}),g=t=>{t.preventDefault();const s=h.value.trim();if(s===""){n.show({message:"Будь ласка заповніть поле!",position:"topRight",color:"red"});return}c.classList.remove("is-hidden"),p(s).then(o=>{if(o.hits.length===0)return n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});const a=o.hits.map(d).join("");f.innerHTML=a,y.refresh()}).catch(o=>{console.log(o)}).finally(()=>{c.classList.add("is-hidden")}),l.reset()};l.addEventListener("submit",g);
//# sourceMappingURL=main-DdoN_kbp.js.map
