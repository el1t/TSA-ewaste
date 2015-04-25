/*!
 * VERSION: 1.16.1
 * DATE: 2015-03-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var r,i,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},p=a.prototype=new t("css");p.constructor=a,a.version="1.16.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",p="px",a.suffixMap={top:p,right:p,bottom:p,left:p,width:p,height:p,fontSize:p,padding:p,margin:p,perspective:p,lineHeight:""};var f,c,h,u,d,x,g=/(?:\d|\-\d|\.\d|\-\.\d)+/g,y=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,m=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,_=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,v=/(?:\d|\-|\+|=|#|\.)*/g,b=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,O=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,T=/([A-Z])/g,M=/-([a-z])/gi,X=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},S=/(?:Left|Right|Width)/i,R=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,F=/,(?=[^\)]*(?:\(|$))/gi,Y=Math.PI/180,z=180/Math.PI,C={},N=document,V=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},j=V("div"),L=V("img"),D=a._internals={_specialProps:l},I=navigator.userAgent,W=function(){var t=I.indexOf("Android"),e=V("a");return h=-1!==I.indexOf("Safari")&&-1===I.indexOf("Chrome")&&(-1===t||Number(I.substr(t+8,1))>3),d=h&&6>Number(I.substr(I.indexOf("Version/")+8,1)),u=-1!==I.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(I))&&(x=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),B=function(t){return b.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},Z=function(t){window.console&&console.log(t)},E="",q="",H=function(t,e){e=e||j;var r,i,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),r=["O","Moz","ms","Ms","Webkit"],i=5;--i>-1&&void 0===s[r[i]+t];);return i>=0?(q=3===i?"ms":r[i],E="-"+q.toLowerCase()+"-",q+t):null},G=N.defaultView?N.defaultView.getComputedStyle:function(){},U=a.getStyle=function(t,e,r,i,s){var n;return W||"opacity"!==e?(!i&&t.style[e]?n=t.style[e]:(r=r||G(t))?n=r[e]||r.getPropertyValue(e)||r.getPropertyValue(e.replace(T,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):B(t)},Q=D.convertToPixels=function(t,r,i,s,n){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var o,l,p,f=S.test(r),c=t,h=j.style,u=0>i;if(u&&(i=-i),"%"===s&&-1!==r.indexOf("border"))o=i/100*(f?t.clientWidth:t.clientHeight);else{if(h.cssText="border:0 solid red;position:"+U(t,"position")+";line-height:0;","%"!==s&&c.appendChild)h[f?"borderLeftWidth":"borderTopWidth"]=i+s;else{if(c=t.parentNode||N.body,l=c._gsCache,p=e.ticker.frame,l&&f&&l.time===p)return l.width*i/100;h[f?"width":"height"]=i+s}c.appendChild(j),o=parseFloat(j[f?"offsetWidth":"offsetHeight"]),c.removeChild(j),f&&"%"===s&&a.cacheWidths!==!1&&(l=c._gsCache=c._gsCache||{},l.time=p,l.width=100*(o/i)),0!==o||n||(o=Q(t,r,i,s,!0))}return u?-o:o},$=D.calculateOffset=function(t,e,r){if("absolute"!==U(t,"position",r))return 0;var i="left"===e?"Left":"Top",s=U(t,"margin"+i,r);return t["offset"+i]-(Q(t,e,parseFloat(s),s.replace(v,""))||0)},J=function(t,e){var r,i,s,n={};if(e=e||G(t,null))if(r=e.length)for(;--r>-1;)s=e[r],(-1===s.indexOf("-transform")||Oe===s)&&(n[s.replace(M,k)]=e.getPropertyValue(s));else for(r in e)(-1===r.indexOf("Transform")||we===r)&&(n[r]=e[r]);else if(e=t.currentStyle||t.style)for(r in e)"string"==typeof r&&void 0===n[r]&&(n[r.replace(M,k)]=e[r]);return W||(n.opacity=B(t)),i=Fe(t,e,!1),n.rotation=i.rotation,n.skewX=i.skewX,n.scaleX=i.scaleX,n.scaleY=i.scaleY,n.x=i.x,n.y=i.y,Te&&(n.z=i.z,n.rotationX=i.rotationX,n.rotationY=i.rotationY,n.scaleZ=i.scaleZ),n.filters&&delete n.filters,n},K=function(t,e,r,i,s){var n,a,o,l={},p=t.style;for(a in r)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=r[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(_,"")?n:0:$(t,a),void 0!==p[a]&&(o=new ue(p,a,p[a],o)));if(i)for(a in i)"className"!==a&&(l[a]=i[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],re=function(t,e,r){var i=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=te[e],n=s.length;for(r=r||G(t,null);--n>-1;)i-=parseFloat(U(t,"padding"+s[n],r,!0))||0,i-=parseFloat(U(t,"border"+s[n]+"Width",r,!0))||0;return i},ie=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var r=t.split(" "),i=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];return null==s?s="center"===i?"50%":"0":"center"===s&&(s="50%"),("center"===i||isNaN(parseFloat(i))&&-1===(i+"").indexOf("="))&&(i="50%"),t=i+" "+s+(r.length>2?" "+r[2]:""),e&&(e.oxp=-1!==i.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===i.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(i.replace(_,"")),e.oy=parseFloat(s.replace(_,"")),e.v=t),e||t},se=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,r,i){var s,n,a,o,l,p=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:z)-(l?0:e),n.length&&(i&&(i[r]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),p>o&&o>-p&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,r){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(r-e)*t:.5>t?r:2>3*t?e+6*(r-e)*(2/3-t):e)+.5},pe=a.parseColor=function(t){var e,r,i,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),r=t.charAt(2),i=t.charAt(3),t="#"+e+e+r+r+i+i),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(g),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,r=.5>=a?a*(n+1):a+n-a*n,e=2*a-r,t.length>3&&(t[3]=Number(t[3])),t[0]=le(s+1/3,e,r),t[1]=le(s,e,r),t[2]=le(s-1/3,e,r),t):(t=t.match(g)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},fe="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(p in oe)fe+="|"+p+"\\b";fe=RegExp(fe+")","gi");var ce=function(t,e,r,i){if(null==t)return function(t){return t};var s,n=e?(t.match(fe)||[""])[0]:"",a=t.split(n).join("").match(m)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",f=a.length,c=f>0?a[0].replace(g,""):"";return f?s=e?function(t){var e,h,u,d;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(d=t.replace(F,"|").split("|"),u=0;d.length>u;u++)d[u]=s(d[u]);return d.join(",")}if(e=(t.match(fe)||[n])[0],h=t.split(e).join("").match(m)||[],u=h.length,f>u--)for(;f>++u;)h[u]=r?h[0|(u-1)/2]:a[u];return o+h.join(p)+p+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,h;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(n=t.replace(F,"|").split("|"),h=0;n.length>h;h++)n[h]=s(n[h]);return n.join(",")}if(e=t.match(m)||[],h=e.length,f>h--)for(;f>++h;)e[h]=r?e[0|(h-1)/2]:a[h];return o+e.join(p)+l}:function(t){return t}},he=function(t){return t=t.split(","),function(e,r,i,s,n,a,o){var l,p=(r+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=p[l]=p[l]||p[(l-1)/2>>0];return s.parse(e,o,n,a)}},ue=(D._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,r,i,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(r=o.t,r.type){if(1===r.type){for(s=r.xs0+r.s+r.xs1,i=1;r.l>i;i++)s+=r["xn"+i]+r["xs"+(i+1)];r.e=s}}else r.e=r.s+r.xs0;o=o._next}},function(t,e,r,i,s){this.t=t,this.p=e,this.v=r,this.r=s,i&&(i._prev=this,this._next=i)}),de=(D._parseToProxy=function(t,e,r,i,s,n){var a,o,l,p,f,c=i,h={},u={},d=r._transform,x=C;for(r._transform=null,C=e,i=f=r.parse(t,e,i,s),C=x,n&&(r._transform=d,c&&(c._prev=null,c._prev&&(c._prev._next=null)));i&&i!==c;){if(1>=i.type&&(o=i.p,u[o]=i.s+i.c,h[o]=i.s,n||(p=new ue(i,"s",o,p,i.r),i.c=0),1===i.type))for(a=i.l;--a>0;)l="xn"+a,o=i.p+"_"+l,u[o]=i.data[l],h[o]=i[l],n||(p=new ue(i,l,o,p,i.rxp[l]));i=i._next}return{proxy:h,end:u,firstMPT:p,pt:f}},D.CSSPropTween=function(t,e,i,s,a,o,l,p,f,c,h){this.t=t,this.p=e,this.s=i,this.c=s,this.n=l||e,t instanceof de||n.push(this.n),this.r=p,this.type=o||0,f&&(this.pr=f,r=!0),this.b=void 0===c?i:c,this.e=void 0===h?i+s:h,a&&(this._next=a,a._prev=this)}),xe=a.parseComplex=function(t,e,r,i,s,n,a,o,l,p){r=r||n||"",a=new de(t,e,0,0,a,p?2:1,null,!1,o,r,i),i+="";var c,h,u,d,x,m,_,v,b,w,O,T,M=r.split(", ").join(",").split(" "),X=i.split(", ").join(",").split(" "),k=M.length,S=f!==!1;for((-1!==i.indexOf(",")||-1!==r.indexOf(","))&&(M=M.join(" ").replace(F,", ").split(" "),X=X.join(" ").replace(F,", ").split(" "),k=M.length),k!==X.length&&(M=(n||"").split(" "),k=M.length),a.plugin=l,a.setRatio=p,c=0;k>c;c++)if(d=M[c],x=X[c],v=parseFloat(d),v||0===v)a.appendXtra("",v,se(x,v),x.replace(y,""),S&&-1!==x.indexOf("px"),!0);else if(s&&("#"===d.charAt(0)||oe[d]||P.test(d)))T=","===x.charAt(x.length-1)?"),":")",d=pe(d),x=pe(x),b=d.length+x.length>6,b&&!W&&0===x[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(X[c]).join("transparent")):(W||(b=!1),a.appendXtra(b?"rgba(":"rgb(",d[0],x[0]-d[0],",",!0,!0).appendXtra("",d[1],x[1]-d[1],",",!0).appendXtra("",d[2],x[2]-d[2],b?",":T,!0),b&&(d=4>d.length?1:d[3],a.appendXtra("",d,(4>x.length?1:x[3])-d,T,!1)));else if(m=d.match(g)){if(_=x.match(y),!_||_.length!==m.length)return a;for(u=0,h=0;m.length>h;h++)O=m[h],w=d.indexOf(O,u),a.appendXtra(d.substr(u,w-u),Number(O),se(_[h],O),"",S&&"px"===d.substr(w+O.length,2),0===h),u=w+O.length;a["xs"+a.l]+=d.substr(u)}else a["xs"+a.l]+=a.l?" "+d:d;if(-1!==i.indexOf("=")&&a.data){for(T=a.xs0+a.data.s,c=1;a.l>c;c++)T+=a["xs"+c]+a.data["xn"+c];a.e=T+a["xs"+c]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(p=de.prototype,p.l=p.pr=0;--ge>0;)p["xn"+ge]=0,p["xs"+ge]="";p.xs0="",p._next=p._prev=p.xfirst=p.data=p.plugin=p.setRatio=p.rxp=null,p.appendXtra=function(t,e,r,i,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",r||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=i||"",o>0?(a.data["xn"+o]=e+r,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new de(a,"xn"+o,e,r,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+r},a.rxp={},a.s=e,a.c=r,a.r=s,a)):(a["xs"+o]+=e+(i||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?H(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=D._registerComplexSpecialProp=function(t,e,r){"object"!=typeof e&&(e={parser:r});var i,s,n=t.split(","),a=e.defaultValue;for(r=r||[a],i=0;n.length>i;i++)e.prefix=0===i&&e.prefix,e.defaultValue=r[i]||a,s=new ye(n[i],e)},_e=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,r,i,s,n,a,p){var f=o.com.greensock.plugins[e];return f?(f._cssRegister(),l[i].parse(t,r,i,s,n,a,p)):(Z("Error: "+e+" js file not loaded."),n)}})}};p=ye.prototype,p.parseComplex=function(t,e,r,i,s,n){var a,o,l,p,f,c,h=this.keyword;if(this.multi&&(F.test(r)||F.test(e)?(o=e.replace(F,"|").split("|"),l=r.replace(F,"|").split("|")):h&&(o=[e],l=[r])),l){for(p=l.length>o.length?l.length:o.length,a=0;p>a;a++)e=o[a]=o[a]||this.dflt,r=l[a]=l[a]||this.dflt,h&&(f=e.indexOf(h),c=r.indexOf(h),f!==c&&(-1===c?o[a]=o[a].split(h).join(""):-1===f&&(o[a]+=" "+h)));e=o.join(", "),r=l.join(", ")}return xe(t,this.p,e,r,this.clrs,this.dflt,i,this.pr,s,n)},p.parse=function(t,e,r,i,n,a){return this.parseComplex(t.style,this.format(U(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,r){me(t,{parser:function(t,i,s,n,a,o){var l=new de(t,s,0,0,a,2,s,!1,r);return l.plugin=o,l.setRatio=e(t,i,n._tween,s),l},priority:r})},a.useSVGTransformAttr=h;var ve,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),we=H("transform"),Oe=E+"transform",Pe=H("transformOrigin"),Te=null!==H("perspective"),Me=D.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Te?a.defaultForce3D||"auto":!1},Xe=window.SVGElement,ke=function(t,e,r){var i,s=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(i in r)s.setAttributeNS(null,i.replace(n,"$1-$2").toLowerCase(),r[i]);return e.appendChild(s),s},Se=N.documentElement,Re=function(){var t,e,r,i=x||/Android/i.test(I)&&!window.chrome;return N.createElementNS&&!i&&(t=ke("svg",Se),e=ke("rect",t,{width:100,height:50,x:100}),r=e.getBoundingClientRect().width,e.style[Pe]="50% 50%",e.style[we]="scaleX(0.5)",i=r===e.getBoundingClientRect().width&&!(u&&Te),Se.removeChild(t)),i}(),Ae=function(t,e,r,i){var s,n;i&&(n=i.split(" ")).length||(s=t.getBBox(),e=ie(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y]),r.xOrigin=parseFloat(n[0]),r.yOrigin=parseFloat(n[1]),t.setAttribute("data-svg-origin",n.join(" "))},Fe=D.getTransform=function(t,e,r,i){if(t._gsTransform&&r&&!i)return t._gsTransform;var n,o,l,p,f,c,h,u,d,x,g=r?t._gsTransform||new Me:new Me,y=0>g.scaleX,m=2e-5,_=1e5,v=Te?parseFloat(U(t,Pe,e,!1,"0 0 0").split(" ")[2])||g.zOrigin||0:0,b=parseFloat(a.defaultTransformPerspective)||0;if(we?o=U(t,Oe,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(R),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),g.x||0,g.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,g.svg=!!(Xe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),g.svg&&(n&&-1!==(t.style[we]+"").indexOf("matrix")&&(o=t.style[we],n=!1),Ae(t,U(t,Pe,s,!1,"50% 50%")+"",g,t.getAttribute("data-svg-origin")),ve=a.useSVGTransformAttr||Re,l=t.getAttribute("transform"),n&&l&&-1!==l.indexOf("matrix")&&(o=l,n=0)),!n){for(l=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],p=l.length;--p>-1;)f=Number(l[p]),l[p]=(c=f-(f|=0))?(0|c*_+(0>c?-.5:.5))/_+f:f;if(16===l.length){var w,O,P,T,M,X=l[0],k=l[1],S=l[2],A=l[3],F=l[4],Y=l[5],C=l[6],N=l[7],V=l[8],j=l[9],L=l[10],D=l[12],I=l[13],W=l[14],B=l[11],Z=Math.atan2(C,L);g.zOrigin&&(W=-g.zOrigin,D=V*W-l[12],I=j*W-l[13],W=L*W+g.zOrigin-l[14]),g.rotationX=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),w=F*T+V*M,O=Y*T+j*M,P=C*T+L*M,V=F*-M+V*T,j=Y*-M+j*T,L=C*-M+L*T,B=N*-M+B*T,F=w,Y=O,C=P),Z=Math.atan2(V,L),g.rotationY=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),w=X*T-V*M,O=k*T-j*M,P=S*T-L*M,j=k*M+j*T,L=S*M+L*T,B=A*M+B*T,X=w,k=O,S=P),Z=Math.atan2(k,X),g.rotation=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),X=X*T+F*M,O=k*T+Y*M,Y=k*-M+Y*T,C=S*-M+C*T,k=O),g.rotationX&&Math.abs(g.rotationX)+Math.abs(g.rotation)>359.9&&(g.rotationX=g.rotation=0,g.rotationY+=180),g.scaleX=(0|Math.sqrt(X*X+k*k)*_+.5)/_,g.scaleY=(0|Math.sqrt(Y*Y+j*j)*_+.5)/_,g.scaleZ=(0|Math.sqrt(C*C+L*L)*_+.5)/_,g.skewX=0,g.perspective=B?1/(0>B?-B:B):0,g.x=D,g.y=I,g.z=W,g.svg&&(g.x-=g.xOrigin-(g.xOrigin*X-g.yOrigin*F),g.y-=g.yOrigin-(g.yOrigin*k-g.xOrigin*Y))}else if(!(Te&&!i&&l.length&&g.x===l[4]&&g.y===l[5]&&(g.rotationX||g.rotationY)||void 0!==g.x&&"none"===U(t,"display",e))){var E=l.length>=6,q=E?l[0]:1,H=l[1]||0,G=l[2]||0,Q=E?l[3]:1;g.x=l[4]||0,g.y=l[5]||0,h=Math.sqrt(q*q+H*H),u=Math.sqrt(Q*Q+G*G),d=q||H?Math.atan2(H,q)*z:g.rotation||0,x=G||Q?Math.atan2(G,Q)*z+d:g.skewX||0,Math.abs(x)>90&&270>Math.abs(x)&&(y?(h*=-1,x+=0>=d?180:-180,d+=0>=d?180:-180):(u*=-1,x+=0>=x?180:-180)),g.scaleX=h,g.scaleY=u,g.rotation=d,g.skewX=x,Te&&(g.rotationX=g.rotationY=g.z=0,g.perspective=b,g.scaleZ=1),g.svg&&(g.x-=g.xOrigin-(g.xOrigin*q-g.yOrigin*H),g.y-=g.yOrigin-(g.yOrigin*Q-g.xOrigin*G))}g.zOrigin=v;for(p in g)m>g[p]&&g[p]>-m&&(g[p]=0)}return r&&(t._gsTransform=g,g.svg&&(ve&&t.style[we]?Ne(t.style,we):!ve&&t.getAttribute("transform")&&t.removeAttribute("transform"))),g},Ye=function(t){var e,r,i=this.data,s=-i.rotation*Y,n=s+i.skewX*Y,a=1e5,o=(0|Math.cos(s)*i.scaleX*a)/a,l=(0|Math.sin(s)*i.scaleX*a)/a,p=(0|Math.sin(n)*-i.scaleY*a)/a,f=(0|Math.cos(n)*i.scaleY*a)/a,c=this.t.style,h=this.t.currentStyle;if(h){r=l,l=-p,p=-r,e=h.filter,c.filter="";var u,d,g=this.t.offsetWidth,y=this.t.offsetHeight,m="absolute"!==h.position,_="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+p+", M22="+f,w=i.x+g*i.xPercent/100,O=i.y+y*i.yPercent/100;if(null!=i.ox&&(u=(i.oxp?.01*g*i.ox:i.ox)-g/2,d=(i.oyp?.01*y*i.oy:i.oy)-y/2,w+=u-(u*o+d*l),O+=d-(u*p+d*f)),m?(u=g/2,d=y/2,_+=", Dx="+(u-(u*o+d*l)+w)+", Dy="+(d-(u*p+d*f)+O)+")"):_+=", sizingMethod='auto expand')",c.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,_):_+" "+e,(0===t||1===t)&&1===o&&0===l&&0===p&&1===f&&(m&&-1===_.indexOf("Dx=0, Dy=0")||b.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&c.removeAttribute("filter")),!m){var P,T,M,X=8>x?1:-1;for(u=i.ieOffsetX||0,d=i.ieOffsetY||0,i.ieOffsetX=Math.round((g-((0>o?-o:o)*g+(0>l?-l:l)*y))/2+w),i.ieOffsetY=Math.round((y-((0>f?-f:f)*y+(0>p?-p:p)*g))/2+O),ge=0;4>ge;ge++)T=ee[ge],P=h[T],r=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,T,parseFloat(P),P.replace(v,""))||0,M=r!==i[T]?2>ge?-i.ieOffsetX:-i.ieOffsetY:2>ge?u-i.ieOffsetX:d-i.ieOffsetY,c[T]=(i[T]=Math.round(r-M*(0===ge||2===ge?1:X)))+"px"}}},ze=D.set3DTransformRatio=D.setTransformRatio=function(t){var e,r,i,s,n,a,o,l,p,f,c,h,d,x,g,y,m,_,v,b,w,O,P,T=this.data,M=this.t.style,X=T.rotation,k=T.rotationX,S=T.rotationY,R=T.scaleX,A=T.scaleY,F=T.scaleZ,z=T.x,C=T.y,N=T.z,V=T.svg,j=T.perspective,L=T.force3D;if(!((1!==t&&0!==t||"auto"!==L||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&L||N||j||S||k)||ve&&V||!Te)return void(X||T.skewX||V?(X*=Y,O=T.skewX*Y,P=1e5,e=Math.cos(X)*R,s=Math.sin(X)*R,r=Math.sin(X-O)*-A,n=Math.cos(X-O)*A,O&&"simple"===T.skewType&&(m=Math.tan(O),m=Math.sqrt(1+m*m),r*=m,n*=m),V&&(z+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r),C+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n),x=1e-6,x>z&&z>-x&&(z=0),x>C&&C>-x&&(C=0)),v=(0|e*P)/P+","+(0|s*P)/P+","+(0|r*P)/P+","+(0|n*P)/P+","+z+","+C+")",V&&ve?this.t.setAttribute("transform","matrix("+v):M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+v):M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+R+",0,0,"+A+","+z+","+C+")");if(u&&(x=1e-4,x>R&&R>-x&&(R=F=2e-5),x>A&&A>-x&&(A=F=2e-5),!j||T.z||T.rotationX||T.rotationY||(j=0)),X||T.skewX)X*=Y,g=e=Math.cos(X),y=s=Math.sin(X),T.skewX&&(X-=T.skewX*Y,g=Math.cos(X),y=Math.sin(X),"simple"===T.skewType&&(m=Math.tan(T.skewX*Y),m=Math.sqrt(1+m*m),g*=m,y*=m)),r=-y,n=g;else{if(!(S||k||1!==F||j||V))return void(M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) translate3d(":"translate3d(")+z+"px,"+C+"px,"+N+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""));e=n=1,r=s=0}p=1,i=a=o=l=f=c=0,h=j?-1/j:0,d=T.zOrigin,x=1e-6,b=",",w="0",X=S*Y,X&&(g=Math.cos(X),y=Math.sin(X),o=-y,f=h*-y,i=e*y,a=s*y,p=g,h*=g,e*=g,s*=g),X=k*Y,X&&(g=Math.cos(X),y=Math.sin(X),m=r*g+i*y,_=n*g+a*y,l=p*y,c=h*y,i=r*-y+i*g,a=n*-y+a*g,p*=g,h*=g,r=m,n=_),1!==F&&(i*=F,a*=F,p*=F,h*=F),1!==A&&(r*=A,n*=A,l*=A,c*=A),1!==R&&(e*=R,s*=R,o*=R,f*=R),(d||V)&&(d&&(z+=i*-d,C+=a*-d,N+=p*-d+d),V&&(z+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r),C+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n)),x>z&&z>-x&&(z=w),x>C&&C>-x&&(C=w),x>N&&N>-x&&(N=0)),v=T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix3d(":"matrix3d(",v+=(x>e&&e>-x?w:e)+b+(x>s&&s>-x?w:s)+b+(x>o&&o>-x?w:o),v+=b+(x>f&&f>-x?w:f)+b+(x>r&&r>-x?w:r)+b+(x>n&&n>-x?w:n),k||S?(v+=b+(x>l&&l>-x?w:l)+b+(x>c&&c>-x?w:c)+b+(x>i&&i>-x?w:i),v+=b+(x>a&&a>-x?w:a)+b+(x>p&&p>-x?w:p)+b+(x>h&&h>-x?w:h)+b):v+=",0,0,0,0,1,0,",v+=z+b+C+b+N+b+(j?1+-N/j:1)+")",M[we]=v};p=Me.prototype,p.x=p.y=p.z=p.skewX=p.skewY=p.rotation=p.rotationX=p.rotationY=p.zOrigin=p.xPercent=p.yPercent=0,p.scaleX=p.scaleY=p.scaleZ=1,me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,r,i,n,o,l){if(i._lastParsedTransform===l)return n;i._lastParsedTransform=l;var p,f,c,h,u,d,x,g=i._transform=Fe(t,s,!0,l.parseTransform),y=t.style,m=1e-6,_=be.length,v=l,b={};if("string"==typeof v.transform&&we)c=j.style,c[we]=v.transform,c.display="block",c.position="absolute",N.body.appendChild(j),p=Fe(j,null,!1),N.body.removeChild(j);else if("object"==typeof v){if(p={scaleX:ne(null!=v.scaleX?v.scaleX:v.scale,g.scaleX),scaleY:ne(null!=v.scaleY?v.scaleY:v.scale,g.scaleY),scaleZ:ne(v.scaleZ,g.scaleZ),x:ne(v.x,g.x),y:ne(v.y,g.y),z:ne(v.z,g.z),xPercent:ne(v.xPercent,g.xPercent),yPercent:ne(v.yPercent,g.yPercent),perspective:ne(v.transformPerspective,g.perspective)},x=v.directionalRotation,null!=x)if("object"==typeof x)for(c in x)v[c]=x[c];else v.rotation=x;"string"==typeof v.x&&-1!==v.x.indexOf("%")&&(p.x=0,p.xPercent=ne(v.x,g.xPercent)),"string"==typeof v.y&&-1!==v.y.indexOf("%")&&(p.y=0,p.yPercent=ne(v.y,g.yPercent)),p.rotation=ae("rotation"in v?v.rotation:"shortRotation"in v?v.shortRotation+"_short":"rotationZ"in v?v.rotationZ:g.rotation,g.rotation,"rotation",b),Te&&(p.rotationX=ae("rotationX"in v?v.rotationX:"shortRotationX"in v?v.shortRotationX+"_short":g.rotationX||0,g.rotationX,"rotationX",b),p.rotationY=ae("rotationY"in v?v.rotationY:"shortRotationY"in v?v.shortRotationY+"_short":g.rotationY||0,g.rotationY,"rotationY",b)),p.skewX=null==v.skewX?g.skewX:ae(v.skewX,g.skewX),p.skewY=null==v.skewY?g.skewY:ae(v.skewY,g.skewY),(f=p.skewY-g.skewY)&&(p.skewX+=f,p.rotation+=f)}for(Te&&null!=v.force3D&&(g.force3D=v.force3D,d=!0),g.skewType=v.skewType||g.skewType||a.defaultSkewType,u=g.force3D||g.z||g.rotationX||g.rotationY||p.z||p.rotationX||p.rotationY||p.perspective,u||null==v.scale||(p.scaleZ=1);--_>-1;)r=be[_],h=p[r]-g[r],(h>m||-m>h||null!=v[r]||null!=C[r])&&(d=!0,n=new de(g,r,g[r],h,n),r in b&&(n.e=b[r]),n.xs0=0,n.plugin=o,i._overwriteProps.push(n.n));return h=v.transformOrigin,g.svg&&(h||v.svgOrigin)&&(Ae(t,ie(h),p,v.svgOrigin),n=new de(g,"xOrigin",g.xOrigin,p.xOrigin-g.xOrigin,n,-1,"transformOrigin"),n.b=g.xOrigin,n.e=n.xs0=p.xOrigin,n=new de(g,"yOrigin",g.yOrigin,p.yOrigin-g.yOrigin,n,-1,"transformOrigin"),n.b=g.yOrigin,n.e=n.xs0=p.yOrigin,h=ve?null:"0px 0px"),(h||Te&&u&&g.zOrigin)&&(we?(d=!0,r=Pe,h=(h||U(t,r,s,!1,"50% 50%"))+"",n=new de(y,r,0,0,n,-1,"transformOrigin"),n.b=y[r],n.plugin=o,Te?(c=g.zOrigin,h=h.split(" "),g.zOrigin=(h.length>2&&(0===c||"0px"!==h[2])?parseFloat(h[2]):c)||0,n.xs0=n.e=h[0]+" "+(h[1]||"50%")+" 0px",n=new de(g,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=g.zOrigin):n.xs0=n.e=h):ie(h+"",g)),d&&(i._transformType=g.svg&&ve||!u&&3!==this._transformType?2:3),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,r,n,a){e=this.format(e);var o,l,p,f,c,h,u,d,x,g,y,m,_,v,b,w,O=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(x=parseFloat(t.offsetWidth),g=parseFloat(t.offsetHeight),o=e.split(" "),l=0;O.length>l;l++)this.p.indexOf("border")&&(O[l]=H(O[l])),c=f=U(t,O[l],s,!1,"0px"),-1!==c.indexOf(" ")&&(f=c.split(" "),c=f[0],f=f[1]),h=p=o[l],u=parseFloat(c),m=c.substr((u+"").length),_="="===h.charAt(1),_?(d=parseInt(h.charAt(0)+"1",10),h=h.substr(2),d*=parseFloat(h),y=h.substr((d+"").length-(0>d?1:0))||""):(d=parseFloat(h),y=h.substr((d+"").length)),""===y&&(y=i[r]||m),y!==m&&(v=Q(t,"borderLeft",u,m),b=Q(t,"borderTop",u,m),"%"===y?(c=100*(v/x)+"%",f=100*(b/g)+"%"):"em"===y?(w=Q(t,"borderLeft",1,"em"),c=v/w+"em",f=b/w+"em"):(c=v+"px",f=b+"px"),_&&(h=parseFloat(c)+d+y,p=parseFloat(f)+d+y)),a=xe(P,O[l],c+" "+f,h+" "+p,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,r,i,n,a){var o,l,p,f,c,h,u="background-position",d=s||G(t,null),g=this.format((d?x?d.getPropertyValue(u+"-x")+" "+d.getPropertyValue(u+"-y"):d.getPropertyValue(u):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),y=this.format(e);if(-1!==g.indexOf("%")!=(-1!==y.indexOf("%"))&&(h=U(t,"backgroundImage").replace(X,""),h&&"none"!==h)){for(o=g.split(" "),l=y.split(" "),L.setAttribute("src",h),p=2;--p>-1;)g=o[p],f=-1!==g.indexOf("%"),f!==(-1!==l[p].indexOf("%"))&&(c=0===p?t.offsetWidth-L.width:t.offsetHeight-L.height,o[p]=f?parseFloat(g)/100*c+"px":100*(parseFloat(g)/c)+"%");g=o.join(" ")}return this.parseComplex(t.style,g,y,n,a)},formatter:ie}),me("backgroundSize",{defaultValue:"0 0",formatter:ie}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:he("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:he("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,r,i,n,a){var o,l,p;return 9>x?(l=t.currentStyle,p=8>x?" ":",",o="rect("+l.clipTop+p+l.clipRight+p+l.clipBottom+p+l.clipLeft+")",e=this.format(e).split(",").join(p)):(o=this.format(U(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,r,i,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,r,i,n,a){return this.parseComplex(t.style,this.format(U(t,"borderTopWidth",s,!1,"0px")+" "+U(t,"borderTopStyle",s,!1,"solid")+" "+U(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(fe)||["#000"])[0]}}),me("borderWidth",{parser:he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,r,i,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new de(n,a,0,0,s,-1,r,!1,0,n[a],e)}});var Ce=function(t){var e,r=this.t,i=r.filter||U(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===i.indexOf("atrix(")&&-1===i.indexOf("radient(")&&-1===i.indexOf("oader(")?(r.removeAttribute("filter"),e=!U(this.data,"filter")):(r.filter=i.replace(O,""),e=!0)),e||(this.xn1&&(r.filter=i=i||"alpha(opacity="+s+")"),-1===i.indexOf("pacity")?0===s&&this.xn1||(r.filter=i+" alpha(opacity="+s+")"):r.filter=i.replace(b,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,r,i,n,a){var o=parseFloat(U(t,"opacity",s,!1,"1")),l=t.style,p="autoAlpha"===r;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),p&&1===o&&"hidden"===U(t,"visibility",s)&&0!==e&&(o=0),W?n=new de(l,"opacity",o,e-o,n):(n=new de(l,"opacity",100*o,100*(e-o),n),n.xn1=p?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ce),p&&(n=new de(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",i._overwriteProps.push(n.n),i._overwriteProps.push(r)),n}});var Ne=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(T,"-$1").toLowerCase())):t.removeAttribute(e))},Ve=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,r=this.t.style;e;)e.v?r[e.p]=e.v:Ne(r,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};me("className",{parser:function(t,e,i,n,a,o,l){var p,f,c,h,u,d=t.getAttribute("class")||"",x=t.style.cssText;if(a=n._classNamePT=new de(t,i,0,0,a,2),a.setRatio=Ve,a.pr=-11,r=!0,a.b=d,f=J(t,s),c=t._gsClassPT){for(h={},u=c.data;u;)h[u.p]=1,u=u._next;c.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:d.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),p=K(t,f,J(t),l,h),t.setAttribute("class",d),a.data=p.firstMPT,t.style.cssText=x,a=a.xfirst=n.parse(t,p.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,r,i,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),i=e.length;--i>-1;)r=e[i],l[r]&&(l[r].parse===o?s=!0:r="transformOrigin"===r?Pe:l[r].p),Ne(a,r);s&&(Ne(a,we),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(me("clearProps",{parser:function(t,e,i,s,n){return n=new de(t,i,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=s._tween,r=!0,n}}),p="bezier,throwProps,physicsProps,physics2D".split(","),ge=p.length;ge--;)_e(p[ge]);p=a.prototype,p._firstPT=p._lastParsedTransform=p._transform=null,p._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,f=e.autoRound,r=!1,i=e.suffixMap||a.suffixMap,s=G(t,""),n=this._overwriteProps;var p,u,x,g,y,m,_,v,b,O=t.style;if(c&&""===O.zIndex&&(p=U(t,"zIndex",s),("auto"===p||""===p)&&this._addLazySet(O,"zIndex",0)),"string"==typeof e&&(g=O.cssText,p=J(t,s),O.cssText=g+";"+e,p=K(t,p,J(t)).difs,!W&&w.test(e)&&(p.opacity=parseFloat(RegExp.$1)),e=p,O.cssText=g),this._firstPT=u=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(b=3===this._transformType,we?h&&(c=!0,""===O.zIndex&&(_=U(t,"zIndex",s),("auto"===_||""===_)&&this._addLazySet(O,"zIndex",0)),d&&this._addLazySet(O,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(b?"visible":"hidden"))):O.zoom=1,x=u;x&&x._next;)x=x._next;v=new de(t,"transform",0,0,null,2),this._linkCSSP(v,null,x),v.setRatio=we?ze:Ye,v.data=this._transform||Fe(t,s,!0),v.tween=o,v.pr=-1,n.pop()}if(r){for(;u;){for(m=u._next,x=g;x&&x.pr>u.pr;)x=x._next;(u._prev=x?x._prev:y)?u._prev._next=u:g=u,(u._next=x)?x._prev=u:y=u,u=m}this._firstPT=g}return!0},p.parse=function(t,e,r,n){var a,o,p,c,h,u,d,x,g,y,m=t.style;for(a in e)u=e[a],o=l[a],o?r=o.parse(t,u,a,this,r,n,e):(h=U(t,a,s)+"",g="string"==typeof u,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||g&&P.test(u)?(g||(u=pe(u),u=(u.length>3?"rgba(":"rgb(")+u.join(",")+")"),r=xe(m,a,h,u,!0,"transparent",r,0,n)):!g||-1===u.indexOf(" ")&&-1===u.indexOf(",")?(p=parseFloat(h),d=p||0===p?h.substr((p+"").length):"",(""===h||"auto"===h)&&("width"===a||"height"===a?(p=re(t,a,s),d="px"):"left"===a||"top"===a?(p=$(t,a,s),d="px"):(p="opacity"!==a?0:1,d="")),y=g&&"="===u.charAt(1),y?(c=parseInt(u.charAt(0)+"1",10),u=u.substr(2),c*=parseFloat(u),x=u.replace(v,"")):(c=parseFloat(u),x=g?u.replace(v,""):""),""===x&&(x=a in i?i[a]:d),u=c||0===c?(y?c+p:c)+x:e[a],d!==x&&""!==x&&(c||0===c)&&p&&(p=Q(t,a,p,d),"%"===x?(p/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(h=p+"%")):"em"===x?p/=Q(t,a,1,"em"):"px"!==x&&(c=Q(t,a,c,x),x="px"),y&&(c||0===c)&&(u=c+p+x)),y&&(c+=p),!p&&0!==p||!c&&0!==c?void 0!==m[a]&&(u||"NaN"!=u+""&&null!=u)?(r=new de(m,a,c||p||0,0,r,-1,a,!1,0,h,u),r.xs0="none"!==u||"display"!==a&&-1===a.indexOf("Style")?u:h):Z("invalid "+a+" tween value: "+e[a]):(r=new de(m,a,p,c-p,r,0,a,f!==!1&&("px"===x||"zIndex"===a),0,h,u),r.xs0=x)):r=xe(m,a,h,u,!0,null,r,0,n)),n&&r&&!r.plugin&&(r.plugin=n);
return r},p.setRatio=function(t){var e,r,i,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(i=s.l,2===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(r=s.xs0+e+s.xs1,i=1;s.l>i;i++)r+=s["xn"+i]+s["xs"+(i+1)];s.t[s.p]=r}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},p._enableTransforms=function(t){this._transform=this._transform||Fe(this._target,s,!0),this._transformType=this._transform.svg&&ve||!t&&3!==this._transformType?2:3};var Le=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};p._addLazySet=function(t,e,r){var i=this._firstPT=new de(t,e,0,0,this._firstPT,2);i.e=r,i.setRatio=Le,i.data=this},p._linkCSSP=function(t,e,r,i){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,i=!0),r?r._next=t:i||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=r),t},p._kill=function(e){var r,i,s,n=e;if(e.autoAlpha||e.alpha){n={};for(i in e)n[i]=e[i];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(r=this._classNamePT)&&(s=r.xfirst,s&&s._prev?this._linkCSSP(s._prev,r._next,s._prev._prev):s===this._firstPT&&(this._firstPT=r._next),r._next&&this._linkCSSP(r._next,r._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,r){var i,s,n,a;if(t.slice)for(s=t.length;--s>-1;)De(t[s],e,r);else for(i=t.childNodes,s=i.length;--s>-1;)n=i[s],a=n.type,n.style&&(e.push(J(n)),r&&r.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,r)};return a.cascadeTo=function(t,r,i){var s,n,a,o,l=e.to(t,r,i),p=[l],f=[],c=[],h=[],u=e._internals.reservedProps;for(t=l._targets||l.target,De(t,f,h),l.render(r,!0,!0),De(t,c),l.render(0,!0,!0),l._enabled(!0),s=h.length;--s>-1;)if(n=K(h[s],f[s],c[s]),n.firstMPT){n=n.difs;for(a in i)u[a]&&(n[a]=i[a]);o={};for(a in n)o[a]=f[s][a];p.push(e.fromTo(h[s],r,o,n))}return p},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");