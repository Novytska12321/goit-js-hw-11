import{i as c}from"./vendor-I1I71QQ2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector(".main-button");const a=document.querySelector(".main-form"),l=document.querySelector(".main-input"),u=document.querySelector(".js-list"),d=o=>` <li class="gallery-card">
        <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" />
        <div class="gallery-info">
            <p><b>Likes:</b> ${o.likes}</p>
            <p><b>Views:</b> ${o.views}</p>
            <p><b>Comments:</b> ${o.comments}</p>
            <p><b>Downloads:</b> ${o.downloads}</p>
        </div>
    </li>`,m=o=>{o.preventDefault();const s=l.value.trim();s===""&&c.show({message:"Будь ласка заповніть поле!",position:"topRight",color:"red"}),fetch(`https://pixabay.com/api/?key=46112845-f959e042da8238bb9faecb37a&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)return c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});const i=r.hits.map(d).join("");u.innerHTML=i}).catch(r=>{console.log(r)})};a.addEventListener("submit",m);
//# sourceMappingURL=main-JUE9HFor.js.map
