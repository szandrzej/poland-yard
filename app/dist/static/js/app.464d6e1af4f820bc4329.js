webpackJsonp([1],{"+irW":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",{attrs:{transform:t.translatePawn()}},[a("svg",[a("defs",[a("filter",{attrs:{id:"f3",x:"-20%",y:"-20%",width:"200%",height:"200%"}},[a("feOffset",{attrs:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"0"}}),t._v(" "),a("feGaussianBlur",{attrs:{result:"blurOut",in:"offOut",stdDeviation:"1"}}),t._v(" "),a("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),t._v(" "),a("g",{attrs:{filter:"url(#f3)"}},[a("path",{attrs:{d:"m25,1.1719c-3.4531,0-6.25,2.7969-6.25,6.25,0,1.3906,0.45312,2.6719,1.2188,3.7188-3.0469,1.75-5.125,5.0156-5.125,8.7812,0,3.1719,1.4688,6,3.7656,7.8594-4.688,1.657-11.579,8.672-11.579,21.047h35.938c0-12.375-6.8906-19.391-11.578-21.047,2.2969-1.8594,3.7656-4.6875,3.7656-7.8594,0-3.7656-2.0781-7.0312-5.125-8.7812,0.765-1.047,1.218-2.3285,1.218-3.7191,0-3.4531-2.7969-6.25-6.25-6.25z",stroke:"black",fill:t.player.pawnColor}})])])])},n=[],s={render:r,staticRenderFns:n};e.a=s},"/385":function(t,e,a){"use strict";var r=a("TQ/2");e.a={name:"progress_panel",mixins:[r.a],computed:{progress:function(){console.log(this.players);for(var t=[],e=0;e<24;e++)e<this.players.misterX.progress.length?t.push(this.players.misterX.progress[e]):t.push({ticketType:"none"});return t}}}},0:function(t,e){},"07PK":function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),i=a.n(s),o=a("TQ/2"),u=a("pqBI"),c=a("6+76"),p=a("KTNQ"),l=a("TmE1"),m=a("a5pX"),d=a("cMkQ"),f=a("QBFA"),v=a("UzsK");e.a={name:"HelloWorld",mixins:[o.a],components:{"py-spot":u.a,"py-road":c.a,"py-pawn":p.a,"py-progress-panel":m.a,"py-roundcounter":l.a,"py-room-data":d.a,"py-room-players":f.a},data:function(){return{showGameProgress:!0,playerName:"",gameStopped:!1,endGameReason:"",snackbarMessage:""}},computed:{spots:function(){return this.$store.state.spots},roads:function(){return this.$store.state.roads},isDetective:function(){return this.$store.getters.isDetective}},methods:{moveTo:function(t){this.$store.dispatch("MOVE_PLAYER",t)}},mounted:function(){var t=this;v.a.$on("STOP_GAME",function(e){t.gameStopped=!0,t.endGameReason=e}),v.a.$on("NEW_PLAYER",function(e){t.snackbarMessage=e.nickname+" dołączył do gry!",t.$refs.snackbar.open()})},created:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("INITIALIZE_GAME");case 2:case"end":return e.stop()}},e,t)}))()}}},"0g+E":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-name"},[a("p",{staticClass:"game-name__text game-name__text--roomname"},[t._v(t._s(t.currentGame.name)+" ("+t._s(t.currentGame._id)+")")]),t._v(" "),a("p",{staticClass:"game-name__text game-name__text--player",style:"color:"+t.myPlayer.pawnColor},[t._v("Jako "+t._s(t.myPlayer.name))])])},n=[],s={render:r,staticRenderFns:n};e.a=s},"1KS3":function(t,e){},"1pR9":function(t,e){},"1yZu":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("svg",{staticClass:"map"},[t._l(t.roads,function(t){return a("g",[a("py-road",{attrs:{status:t.name,coordinates:t.spots,highlight:t.highlight}})],1)}),t._v(" "),t._l(t.spots,function(e){return a("g",{key:e.number},[a("py-spot",{attrs:{data:e},on:{selected:function(a){t.moveTo(e)}}})],1)}),t._v(" "),t.isDetective?t._e():a("py-pawn",{staticClass:"movable",attrs:{player:t.players.misterX}}),t._v(" "),t._l(t.players.detectives,function(t){return a("py-pawn",{key:t.name,staticClass:"movable",attrs:{player:t}})})],2),t._v(" "),a("py-roundcounter",{on:{toggle:function(e){t.showGameProgress=!t.showGameProgress}}}),t._v(" "),t.showGameProgress?a("py-progress-panel"):t._e(),t._v(" "),t.gameStopped?a("div",{staticClass:"game-end"},[a("div",{staticClass:"game-end-dialog"},[a("h2",[t._v("Koniec gry")]),t._v(" "),a("h3",[t._v(t._s(t.endGameReason))]),t._v(" "),a("div",{staticClass:"game-end-dialog__button"},[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.$router.go(-1)}}},[t._v(" Wróć do lobby")])],1)])]):t._e(),t._v(" "),a("py-room-data"),t._v(" "),a("py-room-players"),t._v(" "),a("div",{staticClass:"close-button"},[a("md-button",{staticClass:"md-raised md-icon-button md-accent",nativeOn:{click:function(e){t.$router.go(-1)}}},[a("md-icon",[t._v("close")])],1)],1),t._v(" "),a("md-snackbar",{ref:"snackbar",attrs:{"md-position":"top right"}},[a("span",[t._v(t._s(t.snackbarMessage))])])],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},"3egR":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard__round-display"},[a("div",{staticClass:"dashboard__round-display__counter",on:{click:function(e){t.$emit("toggle")}}},[a("p",[a("span",{staticClass:"big"},[t._v(t._s(t.round))]),a("span",[t._v("/24")])])])])},n=[],s={render:r,staticRenderFns:n};e.a=s},"4kxS":function(t,e){},"6+76":function(t,e,a){"use strict";function r(t){a("lw5O")}var n=a("edLQ"),s=a("aa5F"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-3636a2b1",null);e.a=u.exports},"6Lbn":function(t,e){},"6poe":function(t,e){},"8Pvx":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",{attrs:{transform:t.translate()}},[a("svg",{attrs:{width:"62",height:"62"}},[a("defs",[a("filter",{attrs:{id:"f1",x:"-20%",y:"-20%",width:"200%",height:"200%"}},[a("feOffset",{attrs:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"4"}}),t._v(" "),a("feGaussianBlur",{attrs:{result:"blurOut",in:"offOut",stdDeviation:"3"}}),t._v(" "),a("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),t._v(" "),a("g",{staticClass:"clickable",attrs:{filter:"url(#f1)"},on:{click:function(e){t.$emit("selected")}}},[a("path",{attrs:{d:"M1,26 a1,1 0 0,1 50,0",fill:t.topColor,stroke:"black"}}),t._v(" "),a("path",{attrs:{d:"M1,26 a1,1 0 0,0 50,0",fill:t.bottomColor,stroke:"black"}}),t._v(" "),a("path",{attrs:{d:"M1,26 L51,26",stroke:"black"}}),t._v(" "),a("rect",{attrs:{x:"6",y:"16",width:"40",height:"20",fill:t.rectColor,stroke:"black"}}),t._v(" "),a("text",{attrs:{x:"26",y:"32",fill:t.textColor,"text-anchor":"middle","font-size":"16"}},[t._v(t._s(t.data.number))])])])])},n=[],s={render:r,staticRenderFns:n};e.a=s},DI5O:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-layout",{attrs:{"md-gutter":""}},[a("md-layout",{attrs:{"md-flex-large":"90","md-flex":"","md-flex-offset-large":"5"}},[a("h1",{staticClass:"md-display-2 text-center"},[t._v("Poland Yard")]),t._v(" "),a("md-input-container",{class:""===t.playerName?"md-input-invalid":""},[a("label",[t._v("Nick")]),t._v(" "),a("md-input",{attrs:{placeholder:"Twój nick"},model:{value:t.playerName,callback:function(e){t.playerName=e},expression:"playerName"}})],1),t._v(" "),a("md-table",{staticClass:"games-list"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[t._v("ID")]),t._v(" "),a("md-table-head",{staticClass:"text-center"},[t._v("Graczy")]),t._v(" "),a("md-table-head",{staticClass:"text-right"},[t._v("Runda")]),t._v(" "),a("md-table-head",{staticClass:"text-center"},[t._v("Graj?")])],1)],1),t._v(" "),a("md-table-body",t._l(t.games,function(e){return a("md-table-row",{key:e.id},[a("md-table-cell",{staticClass:"text-left"},[a("span",{staticClass:"games-list__text-normal"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"games-list__text-alpha"},[t._v(" ("+t._s(e.id)+")")])]),t._v(" "),a("md-table-cell",{staticClass:"text-center"},[t._v(t._s(e.players))]),t._v(" "),a("md-table-cell",{staticClass:"text-right"},[t._v(t._s(e.round)+"/24")]),t._v(" "),a("md-table-cell",{staticClass:"text-center"},[a("md-button",{staticClass:"md-raised md-primary all-width",attrs:{disabled:e.players>=6||e.isStarted},on:{click:function(a){t.joinGame(e)}}},[t._v("Graj\n            ")])],1)],1)}))],1),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.addGame()}}},[t._v("Dodaj\n    ")])],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},IcnI:function(t,e,a){"use strict";var r=a("7+uW"),n=a("NYxO"),s=a("UIay"),i=a.n(s),o=a("mUbh"),u=a("ukYY"),c=a("UjVw"),p=a("yQp/");r.default.use(n.a),e.a=new n.a.Store({actions:o.a,getters:c.a,states:p.a,mutations:u.a,plugins:[i()()]})},Isck:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard__progress"},[a("div",{staticClass:"dashboard__progress__container"},t._l(t.progress,function(e,r){return a("div",{key:r,class:[t.isShowRound(r+1)?"dashboard__progress__cell wider":"dashboard__progress__cell",e.ticketType]},[t.isShowRound(r+1)&&void 0!==e.spot?a("p",[t._v(t._s(e.spot))]):a("p",{staticClass:"transparent≥/;"},[t._v(t._s(r+1))])])}))])},n=[],s={render:r,staticRenderFns:n};e.a=s},KTNQ:function(t,e,a){"use strict";function r(t){a("6poe")}var n=a("Yb/t"),s=a("+irW"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-5e9f19f5",null);e.a=u.exports},"LTQ/":function(t,e,a){"use strict";e.a={name:"roundcounter",data:function(){return{}},computed:{round:function(){return this.$store.state.currentGame.round}}}},M93x:function(t,e,a){"use strict";function r(t){a("Xv7W")}var n=a("xJD8"),s=a("txo3"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,null,null);e.a=u.exports},"N/ir":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"players"},[a("div",{staticClass:"players-list"},[a("div",{staticClass:"players-list__item misterx",style:t.borderStyle(t.players.misterX.pawnColor)},[a("div",{staticClass:"players-list__item-content"},[a("img",{attrs:{src:t.players.misterX.avatarUrl}}),t._v(" "),a("div",{staticClass:"tickets"},[a("div",{staticClass:"tickets__item extra-double"},[a("p",{staticClass:"tickets__item__caption"},[t._v(t._s(t.players.misterX.tickets.extraDouble))])]),t._v(" "),a("div",{staticClass:"tickets__item secret"},[a("p",{staticClass:"tickets__item__caption"},[t._v(t._s(t.players.misterX.tickets.secret))])])])])]),t._v(" "),t._l(t.players.detectives,function(e){return a("div",{key:e.id,staticClass:"players-list__item detective",style:t.borderStyle(e.pawnColor)},[a("div",{staticClass:"players-list__item-content"},[a("img",{attrs:{src:e.avatarUrl}}),t._v(" "),a("div",{staticClass:"tickets"},[a("div",{staticClass:"tickets__item taxi"},[a("p",{staticClass:"tickets__item__caption"},[t._v(t._s(e.tickets.taxi))])]),t._v(" "),a("div",{staticClass:"tickets__item bus"},[a("p",{staticClass:"tickets__item__caption"},[t._v(t._s(e.tickets.bus))])]),t._v(" "),a("div",{staticClass:"tickets__item metro"},[a("p",{staticClass:"tickets__item__caption"},[t._v(t._s(e.tickets.metro))])])])])])})],2)])},n=[],s={render:r,staticRenderFns:n};e.a=s},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),n=a("M93x"),s=a("YaEn"),i=a("IcnI"),o=a("K/Lq"),u=a.n(o),c=a("Lgyv"),p=a.n(c),l=a("tOeb"),m=a("tzNG");a.n(m);r.default.config.productionTip=!1,r.default.use(p.a),r.default.use(u.a),l.a.initialize(),new r.default({el:"#app",store:i.a,router:s.a,template:"<App/>",components:{App:n.a}})},QBFA:function(t,e,a){"use strict";function r(t){a("1pR9")}var n=a("RxLE"),s=a("N/ir"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-c4db00ce",null);e.a=u.exports},RxLE:function(t,e,a){"use strict";var r=a("TQ/2");e.a={name:"room-players",mixins:[r.a],methods:{borderStyle:function(t){return"border: 1px "+t+" solid"}}}},"TQ/2":function(t,e,a){"use strict";e.a={methods:{isShowRound:function(t){return-1!==[3,8,13,18,24].indexOf(t)}},computed:{currentGame:function(){return this.$store.state.currentGame},players:function(){return this.currentGame.game.players},myPlayer:function(){return this.$store.getters.userPlayer}}}},TmE1:function(t,e,a){"use strict";function r(t){a("ZzW+")}var n=a("LTQ/"),s=a("3egR"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-df37c5e4",null);e.a=u.exports},UjVw:function(t,e,a){"use strict";function r(t){if(t.currentGame)return[t.currentGame.game.players.misterX].concat(c()(t.currentGame.game.players.detectives)).find(function(e){return e.name===t.defaultNickname})}function n(t){return!!t.currentGame&&t.currentGame.game.players.misterX.name!==r(t).name}function s(t){return t.currentGame?[t.currentGame.game.players.misterX].concat(c()(t.currentGame.game.players.detectives)).length:0}function i(t){if(!t.currentGame)return[];var e=[];return t.currentGame.game.players.detectives.forEach(function(t){e.push(t.currentSpot.number)}),e}function o(t){return!!t.currentGame&&(!(t.currentGame.game.players.detectives.length<1)&&(n(t)?(console.log(r(t).history.length),r(t).history.length<t.currentGame.round):t.currentGame.misterXTurn))}var u=a("Gu7T"),c=a.n(u);e.a={playerCount:s,userPlayer:r,isDetective:n,occupiedSpots:i,canMakeNextMove:o}},UzsK:function(t,e,a){"use strict";var r=a("7+uW"),n=new r.default;e.a=n},Vvpf:function(t,e,a){"use strict";function r(t){a("aAqp")}var n=a("scA2"),s=a("DI5O"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-d16da4e6",null);e.a=u.exports},WRIv:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s});var r={NAME:"taxi",COLOR:"#EFE235",STROKE:"0, 0",SINUSOITY:75},n={NAME:"bus",COLOR:"#1DB2CA",STROKE:"10, 2",SINUSOITY:40},s={NAME:"metro",COLOR:"#DF2A28",STROKE:"10, 5",SINUSOITY:20}},Xv7W:function(t,e){},YYOe:function(t,e,a){"use strict";var r=a("WRIv");e.a={name:"spot",data:function(){return{}},props:{data:{type:Object,required:!0}},computed:{textColor:function(){return this.data.status.metro?"white":"black"},rectColor:function(){return this.data.status.metro?r.b.COLOR:"white"},topColor:function(){return this.data.status.taxi?r.c.COLOR:r.a.COLOR},bottomColor:function(){return this.data.status.bus?r.a.COLOR:r.c.COLOR}},methods:{translate:function(){return"translate("+this.data.position.x+", "+this.data.position.y+")"}}}},YaEn:function(t,e,a){"use strict";var r=a("7+uW"),n=a("/ocq"),s=a("gORT"),i=a("Vvpf"),o=a("tOeb"),u=a("IcnI");r.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Lobby",component:i.a,beforeEnter:function(t,e,a){u.a.state.currentGame&&(o.a.leave(u.a.state.currentGame._id),u.a.dispatch("CLEAR_GAME")),a()}},{path:"/game",name:"Hello",component:s.a}]})},"Yb/t":function(t,e,a){"use strict";e.a={name:"pawn",data:function(){return{}},props:{player:{type:Object,required:!0}},methods:{translatePawn:function(){return"translate("+this.player.currentSpot.position.x+", "+(this.player.currentSpot.position.y-50)+")"}},computed:{isDetective:function(){return this.$store.getters.isDetective}},created:function(){}}},"ZzW+":function(t,e){},a5pX:function(t,e,a){"use strict";function r(t){a("1KS3")}var n=a("/385"),s=a("Isck"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-044cdd51",null);e.a=u.exports},aAqp:function(t,e){},aa5F:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",[a("defs",[a("filter",{attrs:{id:"f2",x:"-20%",y:"-20%",width:"200%",height:"200%"}},[a("feOffset",{attrs:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"0"}}),t._v(" "),a("feGaussianBlur",{attrs:{result:"blurOut",in:"offOut",stdDeviation:"1"}}),t._v(" "),a("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),t._v(" "),a("g",{staticClass:"animable",attrs:{filter:"url(#f2)"}},[a("path",{attrs:{d:t.preparePath,stroke:t.roadColor,fill:"transparent","stroke-dasharray":t.roadStroke,"stroke-width":t.highlight?12:4}})])])},n=[],s={render:r,staticRenderFns:n};e.a=s},avQe:function(t,e,a){"use strict";var r=a("TQ/2");e.a={name:"room-data",mixins:[r.a]}},cMkQ:function(t,e,a){"use strict";function r(t){a("6Lbn")}var n=a("avQe"),s=a("0g+E"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-a9c3879a",null);e.a=u.exports},eZBl:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("//Fk"),i=a.n(s),o=a("exGp"),u=a.n(o),c=function(){var t=u()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t){t([{id:1,name:"taxi",spots:[1,9]},{id:2,name:"taxi",spots:[1,8]},{id:3,name:"taxi",spots:[8,18]},{id:3,name:"taxi",spots:[8,19]},{id:4,name:"metro",spots:[1,46]},{id:5,name:"bus",spots:[1,58]},{id:6,name:"taxi",spots:[9,20]},{id:7,name:"taxi",spots:[20,33]},{id:8,name:"taxi",spots:[33,46]},{id:9,name:"taxi",spots:[45,46]},{id:10,name:"taxi",spots:[58,45]},{id:11,name:"bus",spots:[58,46]},{id:12,name:"taxi",spots:[57,58]},{id:13,name:"taxi",spots:[43,57]},{id:14,name:"taxi",spots:[9,19]},{id:15,name:"taxi",spots:[19,32]},{id:16,name:"taxi",spots:[32,33]},{id:17,name:"taxi",spots:[32,44]},{id:18,name:"taxi",spots:[32,45]},{id:19,name:"taxi",spots:[18,31]},{id:20,name:"taxi",spots:[18,43]},{id:21,name:"taxi",spots:[31,44]},{id:22,name:"taxi",spots:[31,43]},{id:22,name:"taxi",spots:[44,58]}])}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=u()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t){t([{number:1,position:{x:500,y:100},status:{taxi:!0,bus:!0,metro:!0},possibleRoute:[{spot:8,type:"taxi"},{spot:9,type:"taxi"},{spot:58,type:"bus"}]},{number:8,position:{x:350,y:250},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[1,19,18]},{number:9,position:{x:650,y:250},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[1,20,19]},{number:18,position:{x:220,y:380},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[8,31,43]},{number:19,position:{x:460,y:420},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[8,9,32]},{number:20,position:{x:800,y:320},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[9,33]},{number:31,position:{x:300,y:480},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[18,43,44]},{number:32,position:{x:670,y:550},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[{spot:19,type:"taxi"},{spot:33,type:"taxi"},{spot:44,type:"taxi"},{spot:45,type:"taxi"}]},{number:33,position:{x:1e3,y:530},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[46,32,20]},{number:43,position:{x:150,y:600},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[18,31,57]},{number:44,position:{x:500,y:650},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[31,32,58]},{number:45,position:{x:770,y:750},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[{spot:32,type:"taxi"},{spot:58,type:"taxi"},{spot:46,type:"taxi"}]},{number:46,position:{x:1050,y:650},status:{taxi:!0,bus:!0,metro:!0},possibleRoute:[1,33,45]},{number:57,position:{x:220,y:750},status:{taxi:!0,bus:!1,metro:!1},possibleRoute:[43,58]},{number:58,position:{x:600,y:800},status:{taxi:!0,bus:!0,metro:!1},possibleRoute:[1,44,46,45,57]}])}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();e.a={retrieveSpots:p,retrieveSpotsConnections:c}},edLQ:function(t,e,a){"use strict";var r=a("WRIv");e.a={name:"road",data:function(){return{}},props:{status:{type:String,required:!0,validator:function(t){return-1!==[r.c.NAME,r.a.NAME,r.b.NAME].indexOf(t)}},coordinates:{type:Array,required:!0},highlight:{type:Boolean,required:!0}},computed:{preparePath:function(){return"M "+(this.coordinates[0].x+26+(this.status===r.b.NAME?10:0))+" "+(this.coordinates[0].y+26)+" q "+this.getRoadSinusoity()+" "+this.getRoadSinusoity()+" "+(this.coordinates[1].x-this.coordinates[0].x)+" "+(this.coordinates[1].y-this.coordinates[0].y)},roadColor:function(){return this.getValue("COLOR")},roadStroke:function(){return this.getValue("STROKE")}},methods:{getValue:function(t){return this.status===r.c.NAME?r.c[t]:this.status===r.a.NAME?r.a[t]:r.b[t]},getRoadSinusoity:function(){return this.getValue("SINUSOITY")}},created:function(){}}},gORT:function(t,e,a){"use strict";function r(t){a("p55R")}var n=a("07PK"),s=a("1yZu"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-6d83250f",null);e.a=u.exports},gyMJ:function(t,e,a){"use strict";var r=a("eZBl"),n=a("rDH9");e.a={retrieveSpots:r.a.retrieveSpots,retrieveSpotsConnections:r.a.retrieveSpotsConnections,retrieveCurrentGames:n.a.retrieveCurrentGames,retrieveGame:n.a.retrieveGame,joinGame:n.a.joinGame,addGame:n.a.addGame}},lw5O:function(t,e){},mUbh:function(t,e,a){"use strict";function r(t,e,a){return console.log(t.possibleRoute.filter(function(t){return t.spot===a.number})),t.possibleRoute.filter(function(t){return t.spot===a.number})&&-1===e.indexOf(a.number)}var n=a("//Fk"),s=a.n(n),i=a("Xxa5"),o=a.n(i),u=a("exGp"),c=a.n(u),p=a("gyMJ"),l=a("tOeb"),m=a("UzsK");e.a={INITIALIZE_LOBBY:function(t){var e=this,a=t.commit;t.state;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,p.a.retrieveSpots();case 3:return t.t1=t.sent,(0,t.t0)("SET_SPOTS",t.t1),t.t2=a,t.next=8,p.a.retrieveSpotsConnections();case 8:return t.t3=t.sent,(0,t.t2)("SET_ROADS",t.t3),t.t4=a,t.next=13,p.a.retrieveCurrentGames();case 13:t.t5=t.sent,(0,t.t4)("SET_CURRENT_GAMES",t.t5),a("START_WITH_PERSISTENT_DATA");case 16:case"end":return t.stop()}},t,e)}))()},INITIALIZE_GAME:function(t){var e=(t.commit,t.state);e.currentGame&&l.a.join(e.currentGame._id,e.defaultNickname)},REFRESH_CURRENT_GAMES:function(t){var e=this,a=t.commit;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,p.a.retrieveCurrentGames();case 3:t.t1=t.sent,(0,t.t0)("SET_CURRENT_GAMES",t.t1);case 5:case"end":return t.stop()}},t,e)}))()},SHAKE_PLAYERS:function(t){t.commit,t.state,t.getters},MOVE_PLAYER:function(t,e){var a=(t.commit,t.state),n=t.getters,i=n.userPlayer.currentSpot;return new s.a(function(t,s){if(r(i,n.occupiedSpots,e)&&n.canMakeNextMove){var o=i.possibleRoute.find(function(t){return t.spot===e.number}).type;console.log("Będzie ruch!"),l.a.makeMove(a.currentGame._id,n.userPlayer.name,e,o),t()}else s()})},NEW_PLAYER:function(t,e){t.commit;m.a.$emit("NEW_PLAYER",e)},CLEAR_GAME:function(t){(0,t.commit)("CLEAR_GAME")},STOP_GAME:function(t,e){t.commit,t.state;m.a.$emit("STOP_GAME",e)},JOIN_GAME:function(t,e){var a=this,r=t.commit,n=e.game,i=e.player;return c()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.joinGame(n,i);case 2:return e=t.sent,r("SET_DEFAULT_NICK",i),t.t0=r,t.next=7,p.a.retrieveGame(n.id,i);case 7:return t.t1=t.sent,(0,t.t0)("SET_CURRENT_GAME",t.t1),t.abrupt("return",new s.a(function(t){t(e)}));case 10:case"end":return t.stop()}},t,a)}))()},UPDATE_GAME:function(t){var e=this,a=t.commit,r=t.state,n=t.getters;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.currentGame){t.next=6;break}return t.t0=a,t.next=4,p.a.retrieveGame(r.currentGame._id,n.userPlayer.name);case 4:t.t1=t.sent,(0,t.t0)("SET_CURRENT_GAME",t.t1);case 6:case"end":return t.stop()}},t,e)}))()},ADD_GAME:function(t){var e=this,a=t.commit;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,p.a.addGame();case 3:t.t1=t.sent,(0,t.t0)("ADD_GAME",t.t1);case 5:case"end":return t.stop()}},t,e)}))()}}},p55R:function(t,e){},pqBI:function(t,e,a){"use strict";function r(t){a("4kxS")}var n=a("YYOe"),s=a("8Pvx"),i=a("VU/8"),o=r,u=i(n.a,s.a,!1,o,"data-v-1afffebe",null);e.a=u.exports},rDH9:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),i=a.n(s),o=a("mtWM"),u=a.n(o),c=function(){var t=i()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("/");case 2:if(e=t.sent,200!==e.status){t.next=7;break}return t.abrupt("return",e.data);case 7:throw e.response.data;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=i()(n.a.mark(function t(e,a){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("/"+e,{headers:{"x-player":a}});case 2:if(r=t.sent,200!==r.status){t.next=7;break}return t.abrupt("return",r.data[0]);case 7:throw r.response.data;case 8:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),l=function(){var t=i()(n.a.mark(function t(e,a){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.post("/"+e.id+"/join",{player:a});case 2:if(r=t.sent,200!==r.status){t.next=7;break}return t.abrupt("return",r.data);case 7:throw r.response.data;case 8:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),m=function(){var t=i()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.post("/?dashboard=true");case 2:if(e=t.sent,200!==e.status){t.next=7;break}return t.abrupt("return",e.data);case 7:throw e.response.data;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),d=u.a.create({baseURL:"https://poland-yard.herokuapp.com/api",timeout:1e3});e.a={retrieveCurrentGames:c,joinGame:l,retrieveGame:p,addGame:m}},scA2:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),i=a.n(s);e.a={name:"Lobby",data:function(){return{playerName:"Rojber"}},computed:{games:function(){return this.$store.state.currentGames}},methods:{joinGame:function(t){var e=this;return i()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""===e.playerName){a.next=4;break}return a.next=3,e.$store.dispatch("JOIN_GAME",{game:t,player:e.playerName});case 3:e.$router.push("game");case 4:case"end":return a.stop()}},a,e)}))()},addGame:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("ADD_GAME");case 2:case"end":return e.stop()}},e,t)}))()}},created:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("INITIALIZE_LOBBY");case 2:case"end":return e.stop()}},e,t)}))()}}},tOeb:function(t,e,a){"use strict";var r=a("IcnI"),n=a("DmT9"),s=a.n(n),i=void 0;e.a={initialize:function(){console.log("Initialized"),i=s()("https://poland-yard.herokuapp.com"),i.on("connect",function(){console.log("Connected")}),i.on("refresh_lobby",function(t){console.log("refresh_lobby_event"),r.a.dispatch("REFRESH_CURRENT_GAMES")}),i.on("newPlayer",function(t){r.a.dispatch("UPDATE_GAME"),r.a.dispatch("NEW_PLAYER",t)}),i.on("updateGame",function(){console.log("update_game"),r.a.dispatch("UPDATE_GAME")}),i.on("gameClosed",function(t){var e=t.reason;r.a.dispatch("STOP_GAME",e)}),i.on("pingololo",function(t){console.log("PING from "+t.roomName)}),i.on("disconnected",function(){console.log("Disconnected")}),i.on("error",function(t){console.log(t)})},join:function(t,e){console.log(t),console.log(e),i.emit("joinRoomReq",{roomName:t,nickname:e})},leave:function(t){i.emit("leaveRoomReq",{roomName:t})},makeMove:function(t,e,a,r){console.log(t),i.emit("makeMove",{roomName:t,player:e,spot:a.number,ticketType:r})}}},txo3:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},tzNG:function(t,e){},ukYY:function(t,e,a){"use strict";function r(t,e){return t.spots.find(function(t){return t.number===e})}var n=a("7+uW");e.a={START_WITH_PERSISTENT_DATA:function(t){},SET_SPOTS:function(t,e){n.default.set(t,"spots",e)},SET_ROADS:function(t,e){e.forEach(function(e){var a=r(t,e.spots[0]).position,n=r(t,e.spots[1]).position;e.spots=[a,n],e.highlight=!1}),n.default.set(t,"roads",e)},CHANGE_SPOT:function(t,e){n.default.set(t.players.detectives[2],"currentSpot",e)},CLEAR_GAME:function(t){n.default.set(t,"currentGame",void 0)},SET_CURRENT_GAMES:function(t,e){n.default.set(t,"currentGames",e)},SET_CURRENT_GAME:function(t,e){n.default.set(t,"currentGame",e),t.currentGame.game.players.misterX.startSpot&&(t.currentGame.game.players.misterX.startSpot=r(t,t.currentGame.game.players.misterX.startSpot),t.currentGame.game.players.misterX.currentSpot=r(t,t.currentGame.game.players.misterX.currentSpot)),t.currentGame.game.players.detectives.forEach(function(e){var a=r(t,e.currentSpot);e.currentSpot=a})},SET_DEFAULT_NICK:function(t,e){n.default.set(t,"defaultNickname",e)},ADD_GAME:function(t,e){t.currentGames.push(e)}}},xJD8:function(t,e,a){"use strict";e.a={name:"app"}},"yQp/":function(t,e,a){"use strict";e.a={spots:[],currentGames:[]}}},["NHnr"]);
//# sourceMappingURL=app.464d6e1af4f820bc4329.js.map