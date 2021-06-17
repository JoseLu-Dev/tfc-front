!function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"uS/5":function(t,n,r){"use strict";r.r(n),r.d(n,"ProfilePageModule",function(){return C});var i,s,o,c=r("TEn/"),u=r("ofXK"),l=r("LPYB"),b=r("fXoL"),d=((i=function t(){a(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({imports:[[u.c,c.e,l.b]]}),i),h=r("3Pt+"),p=r("tyNb"),f=function(){function t(){a(this,t),this.sets=new Array}return e(t,[{key:"getTotalSets",value:function(){var t=0;return this.sets.forEach(function(e){t+=e.number}),t}}]),t}(),m=((o=function(){function t(){a(this,t),this.barChartOptions={responsive:!0,scales:{xAxes:[{}],yAxes:[{}]},plugins:{datalabels:{anchor:"end",align:"end"}}},this.barChartType="bar",this.barChartLegend=!0}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-bar-char"]],inputs:{barChartData:"barChartData",barChartLabels:"barChartLabels"},decls:4,vars:5,consts:[[2,"display","block"],["baseChart","",3,"datasets","labels","options","legend","chartType"]],template:function(t,e){1&t&&(b.Pb(0,"div"),b.Pb(1,"div"),b.Pb(2,"div",0),b.Kb(3,"canvas",1),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.zb(3),b.gc("datasets",e.barChartData)("labels",e.barChartLabels)("options",e.barChartOptions)("legend",e.barChartLegend)("chartType",e.barChartType))},directives:[l.a],styles:[""]}),o),g=((s=function(){function t(){a(this,t),this.data=[],this.chartLabels=[],this.trainingStats=[{date:new Date("2011-04-11T10:20:30Z"),sets:[{number:12,muscleGroup:"pecs"},{number:2,muscleGroup:"legs"},{number:4,muscleGroup:"back"}]},{date:new Date("2011-04-13T10:20:30Z"),sets:[{number:12,muscleGroup:"pecs"},{number:4,muscleGroup:"back"}]},{date:new Date("2011-04-17T10:20:30Z"),sets:[{number:40,muscleGroup:"biceps"}]}]}return e(t,[{key:"ngOnInit",value:function(){this.trainingStats.sort(function(t,e){return t.date>e.date?1:0}),this.addEmptyDays();var t=this.getMusclesTrained();console.log(this.trainingStats),this.setChartLabels(),this.setChartData(t)}},{key:"setChartLabels",value:function(){var t=this;this.trainingStats.forEach(function(e){var a=new Date(e.date);t.chartLabels.push("".concat(a.getDate(),"/").concat(a.getMonth())),delete e.date})}},{key:"setChartData",value:function(t){var e=this;this.data.push({label:"total",data:[]}),t.forEach(function(t){e.data.push({label:t,data:[]})}),this.trainingStats.forEach(function(e){e.setsNumber=new Object,t.forEach(function(t){e.setsNumber[t]=0})}),this.trainingStats.forEach(function(t){var e=0;t.sets.map(function(a){e+=a.number,t.setsNumber[a.muscleGroup]=a.number}),t.setsNumber.Total=e,delete t.sets}),this.data.reverse(),this.trainingStats.forEach(function(t,a){var n=0;for(var r in t.setsNumber)e.data[n].data.push(t.setsNumber[r]),n++}),this.data.reverse()}},{key:"getMusclesTrained",value:function(){var t=new Object;return this.trainingStats.forEach(function(e){e.sets.forEach(function(e){t[e.muscleGroup]=null})}),Object.keys(t)}},{key:"addEmptyDays",value:function(){for(var t=0;t<this.trainingStats.length;t++){var e=new Date(this.trainingStats[t].date);if(e.setDate(e.getDate()+1),t+1>=this.trainingStats.length)break;for(;e<new Date(this.trainingStats[t+1].date);){var a=new f;a.date=JSON.parse(JSON.stringify(e)),e.setDate(e.getDate()+1),this.trainingStats.splice(t+1,0,a)}}}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=b.Db({type:s,selectors:[["app-trainings-graphs"]],decls:1,vars:2,consts:[[3,"barChartData","barChartLabels"]],template:function(t,e){1&t&&b.Kb(0,"app-bar-char",0),2&t&&b.gc("barChartData",e.data)("barChartLabels",e.chartLabels)},directives:[m],styles:[""]}),s);function v(t,e){1&t&&b.Lb(0)}function y(t,e){1&t&&(b.Pb(0,"div",9),b.xc(1," People that you train "),b.Ob())}function w(t,e){1&t&&(b.Pb(0,"div",10),b.Kb(1,"img",11),b.Ob(),b.Pb(2,"div",12),b.Pb(3,"h3",13),b.xc(4,"Username"),b.Ob(),b.Pb(5,"h4",14),b.xc(6,"email@email.com"),b.Ob(),b.Pb(7,"h4",15),b.xc(8,"User code: ffwe5432t"),b.Ob(),b.Ob())}var x,k,O,D=[{path:"",component:(x=function(){function t(){a(this,t),this.isTrainer=!1}return e(t,[{key:"ngOnInit",value:function(){}}]),t}(),x.\u0275fac=function(t){return new(t||x)},x.\u0275cmp=b.Db({type:x,selectors:[["app-profile"]],decls:20,vars:2,consts:[[1,"h-full","overflow-y-auto","md:overflow-hidden","px-2","md:p-4"],[1,"md:h-full","w-full","flex","md:flex-row","flex-col-reverse","gap-4","my-2","md:my-0"],[1,"md:h-full","md:w-9/12","overflow-y-auto","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4","shadow-md"],[1,"md:flex-grow","md:h-full","flex","flex-col","gap-4","md:overflow-y-auto",2,"padding-bottom","1px"],[1,"flex","flex-col","flex-wrap","content-center","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],[4,"ngTemplateOutlet"],[1,"md:w-full","flex-grow","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],["class","md:w-full\n            shadow-md bg-primary dark:bg-primaryLightDark rounded-lg p-4",4,"ngIf"],["userInfo",""],[1,"md:w-full","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],[1,"photo-wrapper","p-2"],["src","https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",1,"w-32","h-32","rounded-full","mx-auto"],[1,"p-2"],[1,"text-center","text-xl","font-medium"],[1,"text-center","text-textSecondary","dark:text-textSecondaryDark","mb-4"],[1,"text-center","text-textTertiary","dark:text-textSecondaryDark"]],template:function(t,e){if(1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"div",2),b.Kb(3,"app-trainings-graphs"),b.Ob(),b.Pb(4,"div",3),b.Pb(5,"div",4),b.Pb(6,"div"),b.vc(7,v,1,0,"ng-container",5),b.Ob(),b.Ob(),b.Pb(8,"div",6),b.Pb(9,"p"),b.xc(10,"Total reps: 3422355"),b.Ob(),b.Pb(11,"p"),b.xc(12,"Total sets: 35432"),b.Ob(),b.Pb(13,"p"),b.xc(14,"Total weight moved: 54343 kg"),b.Ob(),b.Pb(15,"p"),b.xc(16,"Total trainings: 432"),b.Ob(),b.Ob(),b.vc(17,y,2,0,"div",7),b.Ob(),b.Ob(),b.Ob(),b.vc(18,w,9,0,"ng-template",null,8,b.wc)),2&t){var a=b.oc(19);b.zb(7),b.gc("ngTemplateOutlet",a),b.zb(10),b.gc("ngIf",e.isTrainer)}},directives:[g,u.p,u.k],styles:[""]}),x)}],P=((O=function t(){a(this,t)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=b.Hb({type:O}),O.\u0275inj=b.Gb({imports:[[p.j.forChild(D)],p.j]}),O),C=((k=function t(){a(this,t)}).\u0275fac=function(t){return new(t||k)},k.\u0275mod=b.Hb({type:k}),k.\u0275inj=b.Gb({imports:[[u.c,h.h,c.e,P,d]]}),k)}}])}();