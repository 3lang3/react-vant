import{j as s}from"./vendor.3dd70841.js";const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};l();const u=navigator.userAgent.toLowerCase(),m=/ios|iphone|ipod|ipad|android/.test(u);function h(r,o="-"){return r.replace(/([a-z\d])([A-Z])/g,`$1${o}$2`).replace(/([A-Z]+)([A-Z][a-z\d]+)/g,`$1${o}$2`).toLowerCase()}const y=s.exports.jsx,L=s.exports.jsxs,x=s.exports.Fragment,d="zh-CN",f="en-US",g="vant-cli-lang";let i=d;function j(){return i}function A(r){const o=localStorage.getItem(g);if(o){i=o;return}i=r||f}export{x as F,L as a,h as d,j as g,m as i,y as j,A as s};
