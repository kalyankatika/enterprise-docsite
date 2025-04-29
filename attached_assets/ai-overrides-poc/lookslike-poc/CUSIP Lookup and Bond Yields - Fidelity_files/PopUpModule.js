
/*@preserve
***Version 2.28.0***
*/

/*@license
 *                       Copyright 2002 - 2018 Qualtrics, LLC.
 *                                All rights reserved.
 *
 * Notice: All code, text, concepts, and other information herein (collectively, the
 * "Materials") are the sole property of Qualtrics, LLC, except to the extent
 * otherwise indicated. The Materials are proprietary to Qualtrics and are protected
 * under all applicable laws, including copyright, patent (as applicable), trade
 * secret, and contract law. Disclosure or reproduction of any Materials is strictly
 * prohibited without the express prior written consent of an authorized signatory
 * of Qualtrics. For disclosure requests, please contact notice@qualtrics.com.
 */

try {
  !function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e){(void 0===window.QSI.PopUp||window.QTest)&&(QSI.PopUp=QSI.util.Creative({initialize:function(t){this.globalInitialize(t),window.QSI_INTERNAL=!1,this.shouldShow()&&this.setupPopup()},setupPopup:function(){var t=this,e=function(){t.popup()};if(this.options.creativeOptions.showOnClick){var n=document.body;this.f=function(){try{t.popupOnClick()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}},QSI.util.observe(n,"click",this.f)}else if(this.options.creativeOptions.showOnLoad)this.popup();else if(this.options.creativeOptions.showOnExit)QSI.util.observe(window,"pagehide",e);else if(this.options.creativeOptions.showOnSiteExit){var i=this.getInternalSubmitButtons().concat(this.getInternalLinks());this.addListenerToElements(i,"click",(function(){try{window.QSI_INTERNAL=!0}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}})),QSI.util.observe(document,"keydown",(function(t){try{82!==t.keyCode&&116!==t.keyCode||(window.QSI_INTERNAL=!0)}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}})),QSI.util.observe(window,"beforeunload",(function(){try{window.QSI_INTERNAL||e()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}}))}},popupOnClick:function(){var t=document.body;QSI.util.stopObserving(t,"click",this.f),this.popup()},refreshKeyPressed:function(t){return 82===t.keyCode&&(t.ctrlKey||t.metaKey)||116===t.keyCode},popup:function(){this.impress();var t=this.getTarget(),e=parseInt(this.options.creativeOptions.width,10),n=parseInt(this.options.creativeOptions.height,10),i="targetwindow_"+(new Date).valueOf().toString();this.win=QSI.util.openWin(t,i,{width:e,height:n,scrollbars:"yes"},this.id,this.requestId,this.options.targetURLType),this.displayed.resolve()},addListenerToElements:function(t,e,n){QSI.util.each(t,(function(t){QSI.util.observe(t,e,n)}))},getInternalSubmitButtons:function(){var t=this;return QSI.util.filter(this.getElementsByTag("input",{type:"submit"}),(function(e){var n=e.form;return t.isInternalLink(n.getAttribute("action"))}))},getInternalLinks:function(){var t=this,e=this.getElementsByTag("a");return QSI.util.filter(e,(function(e){return t.isInternalLink(e.getAttribute("href"))}))},getElementsByTag:function(t,e,n){var i=(n=n||document).getElementsByTagName(t);return QSI.util.filter(i,(function(t){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&(!t.getAttribute(n)||t.getAttribute(n)!==e[n]))return!1;return!0}))},getCurrentDomain:function(){return this.currentDomain||(this.currentDomain=this.getDomain(window.location.href)),this.currentDomain},getDomain:function(t){var e,n,i;if(this.isRelative(t))return this.getCurrentDomain();if(e=/(https?:\/\/)?([a-z0-9\-]+\.)*([a-z]+)/.exec(t)){var o=e.length;return i=e[o-1],n="",e[o-2]&&(n=e[o-2]),n+i}return this.getCurrentDomain()},isRelative:function(t){return!/https?\:\/\//.test(t)},isInternalLink:function(t){return this.getDomain(t)===this.getCurrentDomain()}}))}]);
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}