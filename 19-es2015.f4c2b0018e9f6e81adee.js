(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"uS/5":function(t,e,a){"use strict";a.r(e),a.d(e,"ProfilePageModule",function(){return w});var r=a("TEn/"),s=a("ofXK"),n=a("LPYB"),i=a("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[s.c,r.e,n.b]]}),t})();var c=a("3Pt+"),l=a("tyNb");class b{constructor(){this.sets=new Array}getTotalSets(){let t=0;return this.sets.forEach(e=>{t+=e.number}),t}}let d=(()=>{class t{constructor(){this.barChartOptions={responsive:!0,scales:{xAxes:[{}],yAxes:[{}]},plugins:{datalabels:{anchor:"end",align:"end"}}},this.barChartType="bar",this.barChartLegend=!0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-bar-char"]],inputs:{barChartData:"barChartData",barChartLabels:"barChartLabels"},decls:4,vars:5,consts:[[2,"display","block"],["baseChart","",3,"datasets","labels","options","legend","chartType"]],template:function(t,e){1&t&&(i.Pb(0,"div"),i.Pb(1,"div"),i.Pb(2,"div",0),i.Kb(3,"canvas",1),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.zb(3),i.gc("datasets",e.barChartData)("labels",e.barChartLabels)("options",e.barChartOptions)("legend",e.barChartLegend)("chartType",e.barChartType))},directives:[n.a],styles:[""]}),t})(),p=(()=>{class t{constructor(){this.data=[],this.chartLabels=[],this.trainingStats=[{date:new Date("2011-04-11T10:20:30Z"),sets:[{number:12,muscleGroup:"pecs"},{number:2,muscleGroup:"legs"},{number:4,muscleGroup:"back"}]},{date:new Date("2011-04-13T10:20:30Z"),sets:[{number:12,muscleGroup:"pecs"},{number:4,muscleGroup:"back"}]},{date:new Date("2011-04-17T10:20:30Z"),sets:[{number:40,muscleGroup:"biceps"}]}]}ngOnInit(){this.trainingStats.sort((t,e)=>t.date>e.date?1:0),this.addEmptyDays();const t=this.getMusclesTrained();console.log(this.trainingStats),this.setChartLabels(),this.setChartData(t)}setChartLabels(){this.trainingStats.forEach(t=>{const e=new Date(t.date);this.chartLabels.push(`${e.getDate()}/${e.getMonth()}`),delete t.date})}setChartData(t){this.data.push({label:"total",data:[]}),t.forEach(t=>{this.data.push({label:t,data:[]})}),this.trainingStats.forEach(e=>{e.setsNumber=new Object,t.forEach(t=>{e.setsNumber[t]=0})}),this.trainingStats.forEach(t=>{let e=0;t.sets.map(a=>{e+=a.number,t.setsNumber[a.muscleGroup]=a.number}),t.setsNumber.Total=e,delete t.sets}),this.data.reverse(),this.trainingStats.forEach((t,e)=>{let a=0;for(const r in t.setsNumber)this.data[a].data.push(t.setsNumber[r]),a++}),this.data.reverse()}getMusclesTrained(){const t=new Object;return this.trainingStats.forEach(e=>{e.sets.forEach(e=>{t[e.muscleGroup]=null})}),Object.keys(t)}addEmptyDays(){for(let t=0;t<this.trainingStats.length;t++){const e=new Date(this.trainingStats[t].date);if(e.setDate(e.getDate()+1),t+1>=this.trainingStats.length)break;for(;e<new Date(this.trainingStats[t+1].date);){const a=new b;a.date=JSON.parse(JSON.stringify(e)),e.setDate(e.getDate()+1),this.trainingStats.splice(t+1,0,a)}}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-trainings-graphs"]],decls:1,vars:2,consts:[[3,"barChartData","barChartLabels"]],template:function(t,e){1&t&&i.Kb(0,"app-bar-char",0),2&t&&i.gc("barChartData",e.data)("barChartLabels",e.chartLabels)},directives:[d],styles:[""]}),t})();function h(t,e){1&t&&i.Lb(0)}function u(t,e){1&t&&(i.Pb(0,"div",9),i.xc(1," People that you train "),i.Ob())}function m(t,e){1&t&&(i.Pb(0,"div",10),i.Kb(1,"img",11),i.Ob(),i.Pb(2,"div",12),i.Pb(3,"h3",13),i.xc(4,"Username"),i.Ob(),i.Pb(5,"h4",14),i.xc(6,"email@email.com"),i.Ob(),i.Pb(7,"h4",15),i.xc(8,"User code: ffwe5432t"),i.Ob(),i.Ob())}const g=[{path:"",component:(()=>{class t{constructor(){this.isTrainer=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-profile"]],decls:20,vars:2,consts:[[1,"h-full","overflow-y-auto","md:overflow-hidden","px-2","md:p-4"],[1,"md:h-full","w-full","flex","md:flex-row","flex-col-reverse","gap-4","my-2","md:my-0"],[1,"md:h-full","md:w-9/12","overflow-y-auto","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4","shadow-md"],[1,"md:flex-grow","md:h-full","flex","flex-col","gap-4","md:overflow-y-auto",2,"padding-bottom","1px"],[1,"flex","flex-col","flex-wrap","content-center","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],[4,"ngTemplateOutlet"],[1,"md:w-full","flex-grow","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],["class","md:w-full\n            shadow-md bg-primary dark:bg-primaryLightDark rounded-lg p-4",4,"ngIf"],["userInfo",""],[1,"md:w-full","shadow-md","bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4"],[1,"photo-wrapper","p-2"],["src","https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",1,"w-32","h-32","rounded-full","mx-auto"],[1,"p-2"],[1,"text-center","text-xl","font-medium"],[1,"text-center","text-textSecondary","dark:text-textSecondaryDark","mb-4"],[1,"text-center","text-textTertiary","dark:text-textSecondaryDark"]],template:function(t,e){if(1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.Pb(2,"div",2),i.Kb(3,"app-trainings-graphs"),i.Ob(),i.Pb(4,"div",3),i.Pb(5,"div",4),i.Pb(6,"div"),i.vc(7,h,1,0,"ng-container",5),i.Ob(),i.Ob(),i.Pb(8,"div",6),i.Pb(9,"p"),i.xc(10,"Total reps: 3422355"),i.Ob(),i.Pb(11,"p"),i.xc(12,"Total sets: 35432"),i.Ob(),i.Pb(13,"p"),i.xc(14,"Total weight moved: 54343 kg"),i.Ob(),i.Pb(15,"p"),i.xc(16,"Total trainings: 432"),i.Ob(),i.Ob(),i.vc(17,u,2,0,"div",7),i.Ob(),i.Ob(),i.Ob(),i.vc(18,m,9,0,"ng-template",null,8,i.wc)),2&t){const t=i.oc(19);i.zb(7),i.gc("ngTemplateOutlet",t),i.zb(10),i.gc("ngIf",e.isTrainer)}},directives:[p,s.p,s.k],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[l.j.forChild(g)],l.j]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[s.c,c.h,r.e,f,o]]}),t})()}}]);