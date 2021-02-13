!function(){var e={353:function(e){e.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>Meeting calendar</title> <script defer="defer" src="https://kit.fontawesome.com/668b42271a.js" crossorigin="anonymous"><\/script> </head> <body> <div class="app"> <div class="controls"> <h2 class="title">Calendar</h2> <div id="filter"></div> <button class="btn js-modal-open" data-modal="modal-event"> <span>New event</span> <span class="fas fa-plus"></span> </button> </div> <div class="calendar-grid"> </div> </div> <div class="modal modal--m" id="modal-event"> <div class="modal__dialog"> <div class="modal__dialog-header"> <div class="modal__dialog-header-wrapper"> <div class="modal__dialog-header-content"><h4>Add Event</h4></div> <div class="modal__dialog-header-close"> <button class="js-modal-close modal__dialog-header-close-btn"> <span class="fas fa-times"></span> </button> </div> </div> <div class="modal__dialog-header-warning" id="modal-warning"> <span class="fas fa-exclamation-circle"></span> <span class="modal__dialog-header-warning-text"></span> <span class="modal__dialog-header-warning-close fas fa-times-circle"></span> </div> </div> <form name="event-form" id="event-form"> <div class="modal__dialog-body"> <div class="control-wrapper"> <div class="label">Event name</div> <input type="text" name="name" id="event-name" class="name__event control-input" placeholder="Enter event name"> </div> <div class="control-wrapper"> <div class="label">Participants</div> <div id="participants"></div> </div> <div class="control-wrapper"> <div class="label">Day</div> <div id="day"></div> </div> <div class="control-wrapper"> <div class="label">Time</div> <div id="time"></div> </div> <div class="control-wrapper"> <button name="create" type="submit" class="js-modal-submit btn">Create</button> <button type="button" class="js-modal-close btn btn-close">Cancel</button> </div> </div> </form> </div> </div> <div class="modal modal--s" id="event-remove"> <div class="modal__dialog"> <div class="modal__dialog-header"> <div class="modal__dialog-header-content"> <h4>Remove event</h4> </div> <div class="modal__dialog-header-close"> <button class="js-modal-close modal__dialog-header-close-btn"> <span class="fas fa-times"></span> </button> </div> </div> <div class="modal__dialog-body"> Are you sure you want to delete "Event name" event? </div> <div class="modal__dialog-footer"> <button name="yes" type="submit" class="js-modal-submit btn">Yes</button> <button name="no" type="button" class="js-modal-close btn btn-close">No</button> </div> </div> </div> </body> </html>'}},t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}!function(){"use strict";a(353);var e="modal--active",t="js-modal-open",n="js-modal-close",s="meeting-cell",i="meeting-cell--bisy",r="cancel-event",o="modal__dialog-header-warning",c=[{id:"1",value:"Maria"},{id:"2",value:"Max"},{id:"3",value:"John"},{id:"4",value:"Nick"},{id:"5",value:"Natali"}],l=[{id:"1",value:"Mon"},{id:"2",value:"Tue"},{id:"3",value:"Wed"},{id:"4",value:"Thu"},{id:"5",value:"Fri"}],d=function(){var e=l.map((function(e){return'\n        <div class="grid-header">'.concat(e.value,"</div>\n    ")}));return'\n    <div class="row-header">\n        <div class="grid-header">Time</div>\n        '.concat(e.join(""),"\n    </div>     \n    ")},v=function(e){var t=["cell","meeting-cell","js-modal-open"],a=l.map((function(a){return'<div class="'.concat(t.join(" "),'" data-day="').concat(a.id,'" data-time="').concat(e,'" data-modal="modal-event">\n                        <span class="cancel-event fas fa-times"></span>\n                    </div>')}));return'\n        <div class="row-meeting" data-time="'.concat(e,'">\n            <div class="cell time-cell">').concat(e,":00</div>\n            ").concat(a.join(""),"\n        </div>\n    ")};function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=function(e){document.querySelectorAll(".row-meeting").forEach((function(a){e.time===a.dataset.time&&a.querySelectorAll(".meeting-cell").forEach((function(a){a.dataset.day===e.day&&(a.classList.add(i),a.classList.remove(t),a.setAttribute("data-event-id",e.id),a.setAttribute("draggable",!0),a.querySelector(".cancel-event").style.display="inline",a.insertAdjacentHTML("afterbegin",'<span class="name" data-type="event-name">'.concat(e.name,"</span>")))}))}))},h=function(){document.querySelectorAll(".row-meeting").forEach((function(e){e.querySelectorAll(".meeting-cell").forEach((function(e){e.classList.remove(i),e.classList.add(t),e.removeAttribute("data-event-id");var a=e.querySelector('[data-type="event-name"]'),n=e.querySelector(".cancel-event");a&&a.remove(),n.style.display="none"}))}))},p=function(){var e={events:[]};return localStorage.getItem("eventStore")&&(e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},JSON.parse(localStorage.getItem("eventStore")))),e};function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b="select",S="selected",w="select--open",L="fa-chevron-right",E="fa-chevron-down",j="select__dropdown",O=function(){function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];y(this,e),this.elem=document.querySelector(t),this.options=a,this.multi=n,this.selectedId=a.defaultSeleted,this.selectedItems=[],this.init()}var t,a;return t=e,(a=[{key:"init",value:function(){this.render(),this.setup()}},{key:"render",value:function(){var e,t,a,n,s=this.options.data;this.elem.classList.add("select"),this.elem.insertAdjacentHTML("beforeend",(e={data:s,selectedId:this.selectedId},a=null!==(t=e.defaultValue)&&void 0!==t?t:"Choose option...",n=e.data.map((function(t){var n="";return e.selectedId&&t.id===e.selectedId&&(a=t.value,n=S),'\n            <li class="'.concat(j,"-item ").concat(n,'"\n                data-type="item"\n                data-id="').concat(t.id,'"\n            >\n                ').concat(t.value,"\n            </li>\n        ")})),'        \n            <div class="'.concat(b,'__backdrop" data-type="backdrop"></div>\n            <div class="').concat(b,'__wrapper">\n                <div class="').concat(b,'__input" data-type="input" data-action="toggle">\n                    <span data-type="value">').concat(a,'</span>\n                    <span class="fas fa-chevron-right" data-type="arrow"></span>\n                </div>\n                <div class="').concat(j,'">\n                    <ul class="').concat(j,'-list">\n                        ').concat(n.join(""),"\n                    </ul>\n                </div>\n            </div>\n    ")))}},{key:"setup",value:function(){var e=this,t=this.options.data;this.clickHandler=this.clickHandler.bind(this),this.elem.addEventListener("click",this.clickHandler),this.arrow=this.elem.querySelector('[data-type="arrow"]'),this.value=this.elem.querySelector('[data-type="value"]'),this.selectedItems=t.reduce((function(t,a){return a.id===e.selectedId&&t.push(a.value),t}),[])}},{key:"clickHandler",value:function(e){var t=e.target,a=t.dataset.type;t.closest('[data-type="input"]')&&this.toggle(),"item"===a&&(this.multi?this.multiSelect(t.dataset.id):this.select(t.dataset.id)),"backdrop"===a&&this.close()}},{key:"open",value:function(){this.arrow.classList.remove(L),this.arrow.classList.add(E),this.elem.classList.add(w)}},{key:"close",value:function(){this.arrow.classList.remove(E),this.arrow.classList.add(L),this.elem.classList.remove(w),this.selectionResult()}},{key:"isOpen",get:function(){return this.elem.classList.contains(w)}},{key:"current",get:function(){var e=this;return this.options.data.find((function(t){return t.id===e.selectedId}))}},{key:"isSelected",get:function(){var e=this;return this.selectedItems.findIndex((function(t){return t===e.current.value}))}},{key:"select",value:function(e){this.selectedId=e,this.value.textContent=this.current.value,this.elem.querySelectorAll('[data-type="item"]').forEach((function(e){e.classList.remove("selected")})),this.elem.querySelector('[data-id="'.concat(e,'"]')).classList.add("selected"),this.close()}},{key:"multiSelect",value:function(e){this.selectedItems.length<=1&&"All members"===this.selectedItems[0]&&(this.elem.querySelector('[data-id="'.concat(this.selectedId,'"]')).classList.remove(S),this.selectedItems.splice(this.isSelected,1),this.elem.querySelectorAll('[data-type="item"]').forEach((function(e){e.classList.remove(S)}))),this.selectedId=e;var t=this.elem.querySelector('[data-id="'.concat(this.selectedId,'"]'));if("0"===this.selectedId&&!t.classList.contains(S))return console.log(e),this.selectedItems=[],this.selectedItems.push(this.current.value),this.elem.querySelectorAll('[data-type="item"]').forEach((function(e){e.classList.add(S)})),void(this.value.textContent=this.selectedItems.join(", "));this.isSelected<0?(this.selectedItems.push(this.current.value),t.classList.add(S)):this.selectedItems.length>1&&(console.log(this.selectedItems.length),this.selectedItems.splice(this.isSelected,1),t.classList.remove(S)),this.value.textContent=this.selectedItems.join(", ")}},{key:"selectionResult",value:function(){this.options.onSelect&&(this.multi?this.options.onSelect(this.selectedItems):this.options.onSelect(this.current))}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"destroy",value:function(){this.elem.removeEventListener("click",this.clickHandler),this.elem.textContent=""}}])&&g(t.prototype,a),e}();function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var q={event:{partisipants:[]},isBooked:!1};const P=function(t,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.getElementById(t),d=r.querySelector("#event-form"),v=r.querySelector(".".concat(o)),u={nameWarn:"Enter event name, please",inputWarn:"Only letters a-z and space, please",timeErr:"Failed to create event. This time is already booked",regExpNameReplace:/[^a-z\s]/gi,regExpNameTest:/[a-z\s]/gi};r.classList.add(e);for(var m=new O("#participants",{defaultSeleted:"0",data:[{id:"0",value:"All members"}].concat(A(c)),onSelect:function(e){var t;t=e.length<=1&&e[0]===this.data[0].value?this.data.reduce((function(t,a){return e.forEach((function(e){e!==a.value&&t.push(a)})),t}),[]):this.data.reduce((function(t,a){return e.forEach((function(e){e===a.value&&t.push(a)})),t}),[]),q.event.partisipants=A(t)}},!0),h=new O("#day",{placeholder:"Choose day...",defaultSeleted:s,data:A(l),onSelect:function(e){v.classList.remove("active"),q.event=I(I({},q.event),{},{day:e.id})}}),p=[],y=10;y<=18;y+=1){var g={id:"".concat(y),value:"".concat(y,":00")};p.push(g)}var b=new O("#time",{placeholder:"Choose time...",defaultSeleted:i,data:p,onSelect:function(e){v.classList.remove("active"),q.event=I(I({},q.event),{},{time:e.id})}}),S=function(e){var t=e.target;t===d.name&&(u.regExpNameTest.test(t.value)?v.classList.remove("active"):(v.children[1].textContent=u.inputWarn,v.classList.add("active")),t.value=t.value.replace(u.regExpNameReplace,""))},w=function(e){if(e.preventDefault(),""===d.name.value.trim())return v.children[1].textContent=u.nameWarn,void v.classList.add("active");q.event.id="e".concat(Math.trunc(1e8*Math.random()).toString(16)),m.selectionResult(),h.selectionResult(),b.selectionResult(),A(d.elements).forEach((function(e){(e.matches("input")||e.matches("select"))&&(e.matches("input[type=checkbox]")||(q.event=I(I({},q.event),{},k({},e.name,e.value))))})),a.events.length>=0&&a.events.forEach((function(e){e.day===q.event.day&&e.time===q.event.time?q.isBooked=!0:q.isBooked=!1})),q.isBooked?(v.children[1].textContent=u.timeErr,v.classList.add("active")):(a.events.push(q.event),localStorage.eventStore=JSON.stringify(a),f(q.event),E())},L=function(t){var a=t.target;(a.closest(".".concat(n))||a.classList.contains(e))&&E(),a.closest(".".concat(o))&&v.classList.remove("active")};function E(){r.removeEventListener("click",L),d.removeEventListener("submit",w),d.removeEventListener("input",S),m.destroy(),h.destroy(),b.destroy(),d.reset(),v.classList.remove("active"),r.classList.remove(e)}r.addEventListener("click",L),d.addEventListener("input",S),d.addEventListener("submit",w)},C=function(t,a,s){var r=document.getElementById(t);r.classList.add(e);var o=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.removeEventListener("click",a.clickHandler),r.classList.remove(e)};r.addEventListener("click",(function t(r){var c=r.target;"yes"===c.name&&(console.log(a.dataset.eventId),function(e,t){console.log(e);var a=t.children,n=e.events.findIndex((function(e){return e.id===t.dataset.eventId}));e.events.splice(n,1),t.removeAttribute("data-event-id"),t.classList.remove(i),a[0].textContent="",a[1].style.display="none",localStorage.eventStore=JSON.stringify(e)}(s,a),o(t)),(c.closest(".".concat(n))||c.classList.contains(e))&&o(t)}))};function T(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var N={events:[]};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".calendar-grid",t=document.querySelector(e);t.insertAdjacentHTML("beforeend",d());for(var a=10;a<=18;a+=1)t.insertAdjacentHTML("beforeend",v(a))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".app",a=document.querySelector(e),n=(new O("#filter",{label:"Filter",placeholder:"Choose member...",defaultSeleted:"0",data:[{id:"0",value:"All members"}].concat(T(c)),onSelect:function(e){if(console.log(e),"0"===e.id)return h(),void N.events.forEach(f);var t=N.events.reduce((function(t,a){return a.partisipants.forEach((function(n){n.id===e.id&&t.push(a)})),t}),[]);N.filtered=t,h(),console.log(t),t.forEach(f)}}),function(){var e="",t="";return l.forEach((function(n){a.querySelectorAll('.cell[data-day="'.concat(n.id,'"]')).forEach((function(a){a.dataset.eventId&&""!==a.dataset.eventId.trim()||""===t&&""===e&&(t=a.dataset.day,e=a.dataset.time)}))})),{day:t,time:e}});N.events=p().events,console.log(N),N.events.length>0&&N.events.forEach(f),a.addEventListener("click",(function(e){var a=e.target;if(a.closest(".".concat(t))){var s=a.closest(".".concat(t)),o=n(),c=s.dataset.day?s.dataset.day:o.day,l=s.dataset.time?s.dataset.time:o.time,d=s.dataset.modal;d&&P(d,N,c,l)}if(a.closest(".".concat(r))){var v=a.closest(".".concat(i));v?C("event-remove",v,N):console.warn("No event")}})),a.addEventListener("dragstart",(function(e){var t=e.target,a=e.dataTransfer,n=t.closest(".".concat(i));n&&a.setData("text/plain",n.dataset.eventId)})),a.addEventListener("dragenter",(function(e){var t=e.target;!t.closest(".".concat(i))&&t.closest(".".concat(s))&&e.target.classList.add("drag-hover")})),a.addEventListener("dragover",(function(e){var t=e.target;!t.closest(".".concat(i))&&t.closest(".".concat(s))&&e.preventDefault()})),a.addEventListener("dragleave",(function(e){e.target.classList.remove("drag-hover")})),a.addEventListener("drop",(function(e){var t=e.target,a=e.dataTransfer;if(!t.closest(".".concat(i))&&t.closest(".".concat(s))){e.preventDefault(),t.classList.remove("drag-hover");var n=a.getData("text/plain");a.setData("text/plain","");var r=N.events.findIndex((function(e){return e.id===n}));N.events[r].time=t.dataset.time,N.events[r].day=t.dataset.day,localStorage.eventStore=JSON.stringify(N),h(),N.events.forEach(f)}}))}()}()}();