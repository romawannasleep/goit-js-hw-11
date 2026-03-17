import{a as u,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/";function m(s){return u.get(d,{params:{key:"55023028-a47613c23fe5e51542ebeaaa1",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new f(".gallery a");function h(s){const r=s.map(o=>`
   
    <li>
     <a class="link" href="${o.largeImageURL}">
    <img src="${o.webformatURL}"
    alt="${o.tags}"
    class="pixabay-photo"
   />
   </a>
     <p class="likes">likes: ${o.likes}</p>
    <p class="views">views: ${o.views}</p>
       <p class="comments">comments: ${o.comments}</p>
       <p class="downloads">downloads: ${o.downloads}</p>
    </li>
    
  `);l.innerHTML=r.join(""),p.refresh()}function y(){l.innerHTML=""}function g(){c.classList.add("visible")}function L(){c.classList.remove("visible")}const b=document.querySelector(".form");b.addEventListener("submit",s=>{if(s.preventDefault(),s.target.elements["search-text"].value===""){i.error({title:"Error"});return}y(),g(),m(s.target.elements["search-text"].value).then(r=>{r.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(r.hits)}).catch(r=>{i.error({title:"Error",message:`${r}`})}).finally(L)});
//# sourceMappingURL=index.js.map
