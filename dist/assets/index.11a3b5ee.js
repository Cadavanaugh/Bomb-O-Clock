import{j as h,r as m,P as v,R as B,a as C}from"./vendor.25b767fc.js";const _=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};_();const t=h.exports.jsx,u=h.exports.jsxs,S=h.exports.Fragment,g=m.exports.createContext();function y({children:r}){const[i,c]=m.exports.useState("000000"),[l,e]=m.exports.useState("00:00:00"),o=m.exports.useMemo(()=>({time:i,setTime:c,display:l,setDisplay:e}),[i,c,l,e]);return t(g.Provider,{value:o,children:r})}y.propTypes={children:v.node.isRequired};var k="/Bomb-O-Clock/assets/timer-bomb.73f0f562.webp";const w="_bomb_59xht_6",O="_sevenSeg_59xht_14",E="_reflex_59xht_14";var b={bomb:w,sevenSeg:O,reflex:E};function N(){const{display:r}=m.exports.useContext(g);return u("section",{className:b.bomb,children:[t("img",{src:k,alt:"Dynamite with timer."}),t("div",{className:b.reflex}),t("div",{className:b.sevenSeg,children:t("p",{children:r})})]})}var T="/Bomb-O-Clock/assets/Bomb C4 Explode Sound Effect [CS:GO].11e3736f.mp3",$="/Bomb-O-Clock/assets/Bomb Has Been Planted - Sound Effect  CS:GO.1085d932.mp3",A="/Bomb-O-Clock/assets/Button sound effect.f5a4b42b.ogg";const I="_buttons_18qtz_1",F="_zeroStart_18qtz_27";var P={buttons:I,zeroStart:F},j="/Bomb-O-Clock/assets/explosion.e18997d4.webp";const L=[7,8,9,4,5,6,1,2,3,0],R=new Audio(A),z=new Audio($),q=new Audio(T);function D(){const{time:r,setTime:i,display:c,setDisplay:l}=m.exports.useContext(g),e=r.split(""),o=({target:{value:n}})=>{for(let s=0;s<=4;s+=1)e[s]=e[s+1];e[5]=n,i(e.join("")),R.play()};m.exports.useEffect(()=>{l(`${r.substr(0,2)}:${r.substr(2,2)}:${r.substr(4,2)}`)},[r]);const p=()=>{z.play(),document.getElementById("buttons").style.display="none";let n=Number(c.split(":")[2]),s=Number(c.split(":")[1]),f=Number(c.split(":")[0]);n>=60&&(n%=60,s+=1),s>=60&&(s%=60,f+=1);const x=setInterval(()=>{const a=[f,s,n];for(const d in a)String(a[d]).length<2&&(a[d]=`0${a[d]}`);if(l(`${a[0]}:${a[1]}:${a[2]}`),n-=1,s<=0&&f!==0&&(f-=1,s=59,n=59),n<0&&s!==0&&(s-=1,n=59),f===0&&s===0&&n<0){clearInterval(x),i("000000"),q.play(),document.getElementById("buttons").style.display="flex";const d=document.createElement("img");d.src=j,document.getElementById("main").appendChild(d),setTimeout(()=>{document.getElementById("main").removeChild(d)},3710)}},1e3)};return u("section",{id:"buttons",className:P.buttons,children:[L.map(n=>t("button",{onClick:o,value:n,type:"button",children:n},n)),t("button",{type:"button",onClick:p,children:"START"})]})}var G="/Bomb-O-Clock/assets/githubLogo.a577e514.webp",M="/Bomb-O-Clock/assets/my-pic.af26c3e1.webp";const H="_footer_fv1an_1";var J={footer:H};function K(){return u("footer",{className:J.footer,children:[t("img",{src:M,alt:"Jovane no elevador con \xF3culos escuro.",width:"65"}),u("div",{children:[t("p",{children:"Jovane de Castro, Turma 19 - Tribo A"}),t("a",{href:"https://www.linkedin.com/in/jovanecastro/",target:"_blank",rel:"noreferrer",children:t("img",{src:"https://cdn-icons-png.flaticon.com/512/174/174857.png",alt:"LinkedIn",width:"25"})}),t("a",{href:"https://github.com/Cadavanaugh",target:"_blank",rel:"noreferrer",children:t("img",{src:G,alt:"Github",width:"25"})})]})]})}function Q(){return u(S,{children:[t("header",{className:"header",children:t("h1",{children:"\u{1F9E8} Bomb O'Clock \u23F1\uFE0F"})}),u("main",{className:"App",id:"main",children:[t(N,{}),t(D,{})]}),t(K,{})]})}B.render(t(C.StrictMode,{children:t(y,{children:t(Q,{})})}),document.getElementById("root"));