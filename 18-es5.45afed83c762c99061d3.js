!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{qydd:function(e,i,a){"use strict";a.r(i),a.d(i,"DayPageModule",function(){return m});var o,r,s,c=a("F3Cn"),u=a("ofXK"),d=a("3Pt+"),y=a("TEn/"),f=a("tyNb"),b=a("fXoL"),p=a("3E8E"),l=a("tFit"),g=[{path:"",component:(o=function(){function e(n){t(this,e),this.daysService=n}var i,a,o;return i=e,(a=[{key:"ngOnInit",value:function(){var t=this;this.today=new Date,this.daysService.getDay(this.today.getFullYear(),this.today.getMonth()+1,this.today.getDate()).subscribe(function(n){console.log(n),t.todayTrainings=n.body})}}])&&n(i.prototype,a),o&&n(i,o),e}(),o.\u0275fac=function(t){return new(t||o)(b.Jb(p.a))},o.\u0275cmp=b.Db({type:o,selectors:[["app-day"]],decls:3,vars:2,consts:[[1,"m-auto"],[1,"bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4","shadow-md","mb-4"],[3,"trainingsDay","date"]],template:function(t,n){1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Kb(2,"app-trainings-list",2),b.Ob(),b.Ob()),2&t&&(b.zb(2),b.gc("trainingsDay",n.todayTrainings)("date",n.today))},directives:[l.a],styles:[""]}),o)}],h=((s=function n(){t(this,n)}).\u0275fac=function(t){return new(t||s)},s.\u0275mod=b.Hb({type:s}),s.\u0275inj=b.Gb({imports:[[f.j.forChild(g)],f.j]}),s),m=((r=function n(){t(this,n)}).\u0275fac=function(t){return new(t||r)},r.\u0275mod=b.Hb({type:r}),r.\u0275inj=b.Gb({imports:[[u.c,d.h,y.e,h,c.a]]}),r)}}])}();