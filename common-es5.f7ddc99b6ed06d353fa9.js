!function(){function n(n,t,e,i,r,o,a){try{var c=n[o](a),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(i,r)}function t(t){return function(){var e=this,i=arguments;return new Promise(function(r,o){var a=t.apply(e,i);function c(t){n(a,r,o,c,u,"next",t)}function u(t){n(a,r,o,c,u,"throw",t)}c(void 0)})}}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function r(n,t,e){return t&&i(n.prototype,t),e&&i(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3E8E":function(n,t,i){"use strict";i.d(t,"a",function(){return s});var o=i("SxV6"),a=i("AytR"),c=i("fXoL"),u=i("tk/3"),s=function(){var n=function(){function n(t){e(this,n),this.http=t,this.daysUrl="".concat(a.a.backendUrl,"/days")}return r(n,[{key:"getDaysOfYearAndMonth",value:function(n,t){return this.http.get("".concat(this.daysUrl,"/").concat(n,"/").concat(t),{observe:"response"}).pipe(Object(o.a)())}},{key:"getDay",value:function(n,t,e){return this.http.get("".concat(this.daysUrl,"/").concat(n,"/").concat(t,"/").concat(e),{observe:"response"}).pipe(Object(o.a)())}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.Tb(u.b))},n.\u0275prov=c.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},"74mu":function(n,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return u});var r=function(n,t){return null!==t.closest(n)},o=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((e={"ion-color":!0},i="ion-color-".concat(n),r=!0,i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e),t):t;var e,i,r},a=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},c=/^[a-z][a-z0-9+\-.]*:/,u=function(){var n=t(regeneratorRuntime.mark(function n(t,e,i,r){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||c.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,i,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}},n)}));return function(t,e,i,r){return n.apply(this,arguments)}}()},JbSX:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e("wEJo"),r=e("qULd"),o=e("iWo5"),a=function(n,t){var e,a,c=function(n,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(n,i);o&&t(o)?o!==e&&(s(),u(o,r)):s()}},u=function(n,t){e=n,a||(a=e);var r=e;Object(i.f)(function(){return r.classList.add("ion-activated")}),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(i.f)(function(){return t.classList.remove("ion-activated")}),n&&a!==e&&e.click(),e=void 0}};return Object(o.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return c(n.currentX,n.currentY,r.a)},onMove:function(n){return c(n.currentX,n.currentY,r.b)},onEnd:function(){s(!0),Object(r.e)(),a=void 0}})}},acej:function(n,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var r=i("1vRN"),o=function(){var n=t(regeneratorRuntime.mark(function n(t,e,i,o,a){var c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,i,a,o));case 2:if("string"==typeof i||i instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:return c="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach(function(n){return c.classList.add(n)}),a&&Object.assign(c,a),e.appendChild(c),n.next=10,new Promise(function(n){return Object(r.c)(c,n)});case 10:return n.abrupt("return",c);case 11:case"end":return n.stop()}},n)}));return function(t,e,i,r,o){return n.apply(this,arguments)}}(),a=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var i=n*t/e-n+"ms",r=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var i=t/e,r=n*i-n+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},haYR:function(n,t,i){"use strict";i.d(t,"a",function(){return a});var o=i("fXoL"),a=function(){var n=function(){function n(){e(this,n),this.modals=[]}return r(n,[{key:"add",value:function(n){this.modals.push(n)}},{key:"remove",value:function(n){this.modals=this.modals.filter(function(t){return t.id!==n})}},{key:"open",value:function(n){this.modals.find(function(t){return t.id===n}).open()}},{key:"close",value:function(n){this.modals.find(function(t){return t.id===n}).close()}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},iz14:function(n,t,i){"use strict";i.d(t,"a",function(){return u});var o=i("fXoL"),a=i("haYR"),c=["*"],u=function(){var n=function(){function n(t,i){e(this,n),this.modalService=t,this.el=i,this.closeEvent=new o.o,this.element=i.nativeElement}return r(n,[{key:"ngOnInit",value:function(){var n=this;this.id?(document.body.appendChild(this.element),this.element.addEventListener("click",function(t){"jw-modal-background"===t.target.className&&n.close()}),this.modalService.add(this)):console.error("modal must have an id")}},{key:"ngOnDestroy",value:function(){this.modalService.remove(this.id),this.element.remove()}},{key:"open",value:function(){this.element.style.display="block",document.body.classList.add("jw-modal-open")}},{key:"close",value:function(){this.element.style.display="none",document.body.classList.remove("jw-modal-open"),this.closeEvent.emit(null)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Jb(a.a),o.Jb(o.m))},n.\u0275cmp=o.Db({type:n,selectors:[["jw-modal"]],inputs:{id:"id"},outputs:{closeEvent:"closeEvent"},ngContentSelectors:c,decls:4,vars:0,consts:[[1,"jw-modal","card-modal","max-h-full","overflow-y-auto"],[1,"jw-modal-body"],[1,"jw-modal-background"]],template:function(n,t){1&n&&(o.fc(),o.Pb(0,"div",0),o.Pb(1,"div",1),o.ec(2),o.Ob(),o.Ob(),o.Kb(3,"div",2))},styles:["jw-modal{display:none}jw-modal .jw-modal{position:absolute;top:0;right:0;bottom:0;left:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:auto;z-index:1000}jw-modal .jw-modal .jw-modal-body{width:100%;height:100%}jw-modal .jw-modal-background{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;opacity:.7;z-index:900}body.jw-modal-open{overflow:hidden}"],encapsulation:2}),n}()},qULd:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r}),e.d(t,"d",function(){return u}),e.d(t,"e",function(){return c});var i={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},a=function(){i.selectionChanged()},c=function(){i.selectionEnd()},u=function(n){i.impact(n)}},tFit:function(n,t,i){"use strict";i.d(t,"a",function(){return D});var o=function n(){e(this,n),this.trainings=new Array,this.date=new Date},a=i("3Pt+"),c=i("fXoL"),u=i("haYR"),s=i("n1iY"),l=i("tyNb"),f=i("iz14"),d=i("ofXK"),b=i("zwmB");function g(n,t){if(1&n&&(c.Pb(0,"form",6),c.Pb(1,"div",7),c.Pb(2,"label",8),c.xc(3,"Training name"),c.Ob(),c.Kb(4,"input",9),c.Pb(5,"div",10),c.Pb(6,"label",11),c.xc(7,"Color"),c.Ob(),c.Kb(8,"ngx-colors",12),c.Ob(),c.Ob(),c.Ob()),2&n){var e=c.bc();c.gc("formGroup",e.trainingForm),c.zb(8),c.gc("formControl",e.colorForm)}}var m,v=((m=function(){function n(t,i,r,o){e(this,n),this.modalService=t,this.formBuilder=i,this.trainingsService=r,this.router=o,this.id="new-training-modal".concat(Math.random())}return r(n,[{key:"ngOnInit",value:function(){this.buildForm()}},{key:"buildForm",value:function(){this.trainingForm=this.formBuilder.group({name:["",a.q.compose([a.q.required,a.q.maxLength(20)])]}),this.colorForm=new a.d("",a.q.required)}},{key:"openModal",value:function(){this.modalService.open(this.id)}},{key:"closeModal",value:function(){this.onModalClosed(),this.modalService.close(this.id)}},{key:"onModalClosed",value:function(){this.buildForm()}},{key:"onSubmit",value:function(){var n=this;this.trainingsDay||(this.trainingsDay=new o,this.trainingsDay.date=this.date),this.trainingsDay.trainings.push({name:this.trainingForm.value.name,color:this.colorForm.value,completed:!1}),this.trainingsService.saveTrainingDay(this.trainingsDay).subscribe(function(t){n.router.navigate(["app/trainings/edit/".concat(t)],{replaceUrl:!1})},function(n){console.log(n)}),this.closeModal()}}]),n}()).\u0275fac=function(n){return new(n||m)(c.Jb(u.a),c.Jb(a.c),c.Jb(s.a),c.Jb(l.f))},m.\u0275cmp=c.Db({type:m,selectors:[["app-new-training-modal"]],inputs:{date:"date",trainingsDay:"trainingsDay"},decls:9,vars:3,consts:[[3,"id","closeEvent"],[1,"text-xl","font-semibold","dark:text-textPrimaryDark"],[3,"formGroup",4,"ngIf"],[1,"flex","justify-end","w-64","mt-4"],[1,"btn-transparent","mr-4",3,"click"],[1,"btn-transparent",3,"disabled","click"],[3,"formGroup"],[1,"flex","flex-col","justify-items-center","mt-4"],[1,"label","mb-2"],["type","text","placeholder","name","formControlName","name",1,"input"],[1,"flex","justify-center","items-center","gap-2","mt-4"],[1,"label"],["ngx-colors-trigger","",3,"formControl"]],template:function(n,t){1&n&&(c.Pb(0,"jw-modal",0),c.Xb("closeEvent",function(){return t.onModalClosed()}),c.Pb(1,"h1",1),c.xc(2,"New training"),c.Ob(),c.vc(3,g,9,2,"form",2),c.Pb(4,"div",3),c.Pb(5,"button",4),c.Xb("click",function(){return t.closeModal()}),c.xc(6,"Close"),c.Ob(),c.Pb(7,"button",5),c.Xb("click",function(){return t.onSubmit()}),c.xc(8,"Accept"),c.Ob(),c.Ob(),c.Ob()),2&n&&(c.gc("id",t.id),c.zb(3),c.gc("ngIf",t.trainingForm),c.zb(4),c.gc("disabled",t.trainingForm.invalid||t.colorForm.invalid))},directives:[f.a,d.k,a.r,a.l,a.g,a.b,a.k,a.f,b.a,b.c,a.e],styles:[""]}),m);function p(n,t){1&n&&c.Lb(0)}function h(n,t){if(1&n&&(c.Pb(0,"div"),c.vc(1,p,1,0,"ng-container",16),c.Ob()),2&n){c.bc(4);var e=c.oc(12);c.zb(1),c.gc("ngTemplateOutlet",e)}}function y(n,t){if(1&n&&(c.Pb(0,"div"),c.vc(1,h,2,1,"div",0),c.Ob()),2&n){var e=c.bc(3),i=c.oc(14);c.zb(1),c.gc("ngIf",!e.dayHasPassed())("ngIfElse",i)}}var w=function(n){return{"background-color":n}};function x(n,t){if(1&n){var e=c.Qb();c.Pb(0,"div",13),c.Xb("click",function(){c.rc(e);var n=t.$implicit;return c.bc(2).onTrainingClicked(n.id)}),c.Kb(1,"div",14),c.Pb(2,"p",15),c.xc(3),c.cc(4,"titlecase"),c.Ob(),c.vc(5,y,2,2,"div",0),c.Ob()}if(2&n){var i=t.$implicit;c.bc(2);var r=c.oc(10);c.zb(1),c.gc("ngStyle",c.jc(6,w,null==i?null:i.color)),c.zb(2),c.yc(c.dc(4,4,i.name)),c.zb(2),c.gc("ngIf",!i.completed)("ngIfElse",r)}}function k(n,t){if(1&n&&(c.Pb(0,"div"),c.Pb(1,"p",11),c.xc(2,"Trainings list"),c.Ob(),c.vc(3,x,6,8,"div",12),c.Ob()),2&n){var e=c.bc();c.zb(3),c.gc("ngForOf",e.trainingsDay.trainings)}}function O(n,t){1&n&&(c.Pb(0,"p",17),c.xc(1,"You don't have any trainings today,"),c.Ob(),c.Pb(2,"p",17),c.xc(3,"want to create a new one?"),c.Ob())}function P(n,t){1&n&&(c.ac(),c.Pb(0,"svg",18),c.Kb(1,"path",4),c.Kb(2,"path",19),c.Ob())}function j(n,t){1&n&&(c.ac(),c.Pb(0,"svg",20),c.Pb(1,"g"),c.Kb(2,"rect",21),c.Ob(),c.Pb(3,"g"),c.Pb(4,"g"),c.Kb(5,"path",22),c.Ob(),c.Ob(),c.Ob())}function E(n,t){1&n&&(c.ac(),c.Pb(0,"svg",23),c.Kb(1,"path",4),c.Kb(2,"path",24),c.Ob())}var C,D=((C=function(){function n(t){e(this,n),this.router=t}return r(n,[{key:"ngOnInit",value:function(){}},{key:"dayHasPassed",value:function(){var n=new Date,t=new Date(this.trainingsDay.date);return t.setHours(23),t.getTime()<n.getTime()}},{key:"onAddTrainingClicked",value:function(){this.newTrainingModal.openModal()}},{key:"onTrainingClicked",value:function(n){this.router.navigate(["app/trainings/".concat(n)],{replaceUrl:!1})}}]),n}()).\u0275fac=function(n){return new(n||C)(c.Jb(l.f))},C.\u0275cmp=c.Db({type:C,selectors:[["app-trainings-list"]],viewQuery:function(n,t){var e;1&n&&c.Cc(v,1),2&n&&c.nc(e=c.Yb())&&(t.newTrainingModal=e.first)},inputs:{date:"date",trainingsDay:"trainingsDay"},decls:15,vars:4,consts:[[4,"ngIf","ngIfElse"],[1,"mt-2"],[1,"btn-rounded","btn-blue","mx-auto",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px",1,"icon"],["d","M0 0h24v24H0z","fill","none"],["d","M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],[3,"trainingsDay","date"],["noTrainings",""],["done",""],["pending",""],["cancelled",""],[1,"mb-4"],["class","bg-primary dark:bg-primaryLightDark rounded-lg p-4 mb-4 shadow-lg flex flex-row items-center justify-between cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4","mb-4","shadow-lg","flex","flex-row","items-center","justify-between","cursor-pointer",3,"click"],[1,"btn-rounded","w-8","h-8","mr-2",3,"ngStyle"],[1,"flex-grow","mr-4"],[4,"ngTemplateOutlet"],[1,"label","text-center"],["xmlns","http://www.w3.org/2000/svg","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-green-600"],["d","M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-yellow-600"],["fill","none","height","24","width","24","x","0"],["d","M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"],["xmlns","http://www.w3.org/2000/svg","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-red-600"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],template:function(n,t){if(1&n&&(c.vc(0,k,4,1,"div",0),c.Pb(1,"div",1),c.Pb(2,"button",2),c.Xb("click",function(){return t.onAddTrainingClicked()}),c.ac(),c.Pb(3,"svg",3),c.Kb(4,"path",4),c.Kb(5,"path",5),c.Ob(),c.Ob(),c.Zb(),c.Kb(6,"app-new-training-modal",6),c.Ob(),c.vc(7,O,4,0,"ng-template",null,7,c.wc),c.vc(9,P,3,0,"ng-template",null,8,c.wc),c.vc(11,j,6,0,"ng-template",null,9,c.wc),c.vc(13,E,3,0,"ng-template",null,10,c.wc)),2&n){var e=c.oc(8);c.gc("ngIf",t.trainingsDay)("ngIfElse",e),c.zb(6),c.gc("trainingsDay",t.trainingsDay)("date",t.date)}},directives:[d.k,v,d.j,d.l,d.p],pipes:[d.s],styles:[""]}),C)}}])}();