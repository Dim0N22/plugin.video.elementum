(this["webpackJsonpelementum-web"]=this["webpackJsonpelementum-web"]||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(64),i=n.n(a),s=n(15),l=n.n(s),o=n(27),u=n(16),j=n(73),d=n.n(j),b=n(152),h=n(154),O=n(206),x=n(205),f=n(200),p=n(97),v=n(185),m="refreshRate",g=function(){var e=window.localStorage.getItem(m);return Number(null!==e&&void 0!==e?e:5e3)},S=n.p+"static/media/logo.4754a3cb.png",w=n(2),y=function(){var e=Object(r.useState)((function(){return g()/1e3})),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(w.jsxs)(b.a,{borderless:!0,color:"green",style:{border:"none"},children:[Object(w.jsxs)(b.a.Item,{header:!0,as:"a",href:"/web",children:[Object(w.jsx)(h.a,{size:"mini",src:S}),"Elementum"]}),Object(w.jsxs)(O.a,{trigger:Object(w.jsx)(b.a.Item,{position:"right",children:"Settings"}),closeIcon:!0,children:[Object(w.jsx)(O.a.Header,{content:"Settings"}),Object(w.jsx)(O.a.Content,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(x.a.Group,{inline:!0,children:Object(w.jsxs)(x.a.Field,{children:[Object(w.jsx)("label",{htmlFor:"refresh-rate",children:"Refresh rate:"}),Object(w.jsxs)(f.a,{type:"number",min:"1",labelPosition:"right",value:n,onChange:function(e,t){return c(Number(t.value))},children:[Object(w.jsx)("input",{id:"refresh-rate"}),Object(w.jsx)(p.a,{children:"Seconds"})]})]})})})}),Object(w.jsx)(O.a.Actions,{children:Object(w.jsx)(v.a,{onClick:function(e,t){!function(e){var t=e;window.localStorage.setItem(m,t.toString())}(1e3*(n<1?1:n)),window.location.reload()},positive:!0,children:"Save"})})]})]})},C=n(70),k=n(145),F=n(153),A=n(146),R=n(203),T=n(204),I=n(148),P=n(47),z=n(201),_=[{text:"Movies",value:"Movies",icon:"film"},{text:"TV Shows",value:"TvShows",icon:"tv"},{text:"General",value:"General",icon:"magnet"}],D={loading:!1,results:[],value:""};function E(e,t){switch(t.type){case"CleanQuery":return D;case"StartSearch":return Object(C.a)(Object(C.a)({},e),{},{loading:!0,value:t.query});case"FinishSearch":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,results:t.results});case"UpdateSelection":return Object(C.a)(Object(C.a)({},e),{},{value:t.selection})}}var H=function(e){var t,n,r,c,a=e;return Object(w.jsx)(k.a,{children:Object(w.jsxs)(F.a,{children:[Object(w.jsx)(F.a.Image,{size:"small",src:a.image}),Object(w.jsxs)(F.a.Content,{children:[Object(w.jsx)(F.a.Header,{children:a.title}),Object(w.jsx)(F.a.Meta,{children:a.tagline}),Object(w.jsx)(F.a.Description,{children:a.description}),"season"!==a.mediatype&&Object(w.jsx)(F.a.Extra,{children:"".concat(a.rating," - ").concat(null===(t=a.genre)||void 0===t?void 0:t.join(", ")," - ").concat(null!==(n=null!==(r=null===(c=a.date)||void 0===c?void 0:c.toString())&&void 0!==r?r:a.year)&&void 0!==n?n:"-")})]})]})})};function B(e){switch(e){case"Movies":return"movies";case"TvShows":return"shows";case"General":return"."}}function M(e,t){return G.apply(this,arguments)}function G(){return(G=Object(o.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent.items,n({type:"FinishSearch",results:c.filter((function(e){return void 0!==e.info})).map((function(e){return{image:e.art.thumb,key:"".concat(e.info.code,"-").concat(e.label),description:e.info.plotoutline,title:e.label,tagline:e.info.tagline,year:e.info.year,date:e.info.date,genre:e.info.genre,rating:e.info.rating,mediatype:e.info.mediatype,path:e.path}}))});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){var t=e.totalDownloadRate,n=e.totalUploadRate,c=e.active,a=e.finished,i=e.total,s=Object(r.useState)("Movies"),j=Object(u.a)(s,2),d=j[0],b=j[1],h=Object(r.useRef)(),O=Object(r.useReducer)(E,D),x=Object(u.a)(O,2),f=x[0],p=x[1],v=f.loading,m=f.results,g=f.value,S=Object(z.a)(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B(d),e.next=3,M("/".concat(n,"/search?q=").concat(t),p);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),500),y=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p({type:"StartSearch",query:t}),0!==t.trim().length){e.next=4;break}return p({type:"CleanQuery"}),e.abrupt("return");case 4:return e.next=6,S(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.path.replace("plugin://plugin.video.elementum/",""),r="/".concat(n,"?external=1"),e.t0=d,e.next="Movies"===e.t0?5:"TvShows"===e.t0?8:"General"===e.t0?18:19;break;case 5:return e.next=7,fetch(r);case 7:return e.abrupt("break",19);case 8:if(p({type:"StartSearch",query:g}),!n.includes("links")){e.next=14;break}return e.next=12,fetch(r);case 12:e.next=17;break;case 14:return e.next=16,M(r,p);case 16:h.current.open();case 17:case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A.a,{stackable:!0,columns:"3",children:Object(w.jsxs)(A.a.Row,{verticalAlign:"middle",children:[Object(w.jsx)(A.a.Column,{floated:"left",children:Object(w.jsx)(R.a,{fluid:!0,placeholder:"Search",loading:v,results:m,value:g,onSearchChange:function(e,t){var n;return y(null!==(n=t.value)&&void 0!==n?n:"")},resultRenderer:H,onResultSelect:function(e,t){return C(t.result)},ref:h,minCharacters:3,input:{icon:"search",action:Object(w.jsx)(T.a,{fluid:!0,selection:!0,options:_,defaultValue:_[0].value,onChange:function(e,t){return n=t.value,b(n),void p({type:"CleanQuery"});var n}})}})}),Object(w.jsx)(A.a.Column,{width:"3",children:Object(w.jsxs)(I.a.Group,{widths:"3",size:"tiny",children:[Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Value,{children:c}),Object(w.jsx)(I.a.Label,{children:"Active"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Value,{children:a}),Object(w.jsx)(I.a.Label,{children:"Finished"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Value,{children:i}),Object(w.jsx)(I.a.Label,{children:"Total"})]})]})}),Object(w.jsx)(A.a.Column,{floated:"right",children:Object(w.jsxs)(I.a.Group,{widths:"2",size:"tiny",children:[Object(w.jsx)(I.a,{children:Object(w.jsxs)(I.a.Value,{children:[Object(w.jsx)(P.a,{name:"arrow down",size:"small"})," ".concat(t.toFixed(1)," kB/s")]})}),Object(w.jsx)(I.a,{children:Object(w.jsxs)(I.a.Value,{children:[Object(w.jsx)(P.a,{name:"arrow up",size:"small"})," ".concat(n.toFixed(1)," kB/s")]})})]})})]})})})},V=n(207),L=n(202),Q=n(209),q=n(214),U=function(e){var t=e.torrents,n=Object(r.useState)(!1),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!1),l=Object(u.a)(s,2),o=l[0],j=l[1],d=t.length>0;return Object(w.jsxs)(O.a,{onClose:function(){return i(!1)},open:a,trigger:Object(w.jsx)(L.a,{trigger:Object(w.jsx)("div",{style:{display:"inline-block"},children:Object(w.jsx)(v.a,{content:"Delete",disabled:!d,onClick:function(e,t){return i(!0)}})}),content:"Select a torrent first",disabled:d,closeOnTriggerClick:!1,inverted:!0}),children:[Object(w.jsxs)(O.a.Header,{children:[1===t.length?"Delete ".concat(t[0].name):"Delete ".concat(t.length," torrents?")," "]}),Object(w.jsx)(O.a.Content,{children:Object(w.jsxs)(O.a.Description,{children:["Are you sure you want to delete",1===t.length?Object(w.jsxs)("b",{children:[" ",t[0].name]}):Object(w.jsx)("ol",{children:t.map((function(e){return Object(w.jsx)("li",{children:e.name})}))}),Object(w.jsx)(Q.a,{negative:!0,children:Object(w.jsx)(q.a,{label:"Also delete files",onChange:function(e,t){var n;return j(null!==(n=t.checked)&&void 0!==n&&n)}})})]})}),Object(w.jsxs)(O.a.Actions,{children:[Object(w.jsx)(v.a,{content:"No",icon:"undo",onClick:function(){return i(!1)}}),Object(w.jsx)(v.a,{content:"Yes",icon:"trash",color:"red",onClick:function(){return t.map((function(e){return fetch("/torrents/delete/".concat(e.id,"?files=").concat(o))})),void i(!1)}})]})]})};var J,K=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],a=c.a.useState(""),i=Object(u.a)(a,2),s=i[0],j=i[1],d=c.a.useState(),b=Object(u.a)(d,2),h=b[0],f=b[1];function p(e,t){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("uri",s),c.append("file",null!==h&&void 0!==h?h:"null"),null===n||void 0===n||n.forEach((function(e){return c.append(e[0],e[1])})),e.next=6,fetch(t,{method:"POST",body:c});case 6:r(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsxs)(O.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:n,trigger:Object(w.jsxs)(v.a,{icon:!0,labelPosition:"left",floated:"right",primary:!0,children:[Object(w.jsx)(P.a,{name:"download"}),"Add Torrent"]}),children:[Object(w.jsx)(O.a.Header,{children:"Add Torrent"}),Object(w.jsx)(O.a.Content,{children:Object(w.jsx)(O.a.Description,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(x.a.Input,{placeholder:"Magnet or Torrent file URL",onChange:function(e){return j(e.target.value)}}),Object(w.jsx)(x.a.Input,{type:"file",accept:".torrent",onChange:function(e){var t,n;return f(null!==(t=null===(n=e.target.files)||void 0===n?void 0:n.item(0))&&void 0!==t?t:void 0)}})]})})}),Object(w.jsxs)(O.a.Actions,{children:[Object(w.jsx)(v.a,{content:"Cancel",color:"red",onClick:function(){return r(!1)}}),Object(w.jsx)(v.a,{content:"Add (all files)",labelPosition:"left",icon:"download",color:"yellow",onClick:function(){return p("/torrents/add",[["all","1"]])}}),Object(w.jsx)(v.a,{content:"Add",labelPosition:"left",icon:"download",color:"blue",onClick:function(){return p("/torrents/add")}}),Object(w.jsx)(v.a,{content:"Stream",labelPosition:"left",icon:"play",color:"green",onClick:function(){return p("/playuri")}})]})]})},W=n(155),Y=n(210),X=n(149),Z=n(131),$=n(132);!function(e){e[e.StatusQueued=0]="StatusQueued",e[e.StatusChecking=1]="StatusChecking",e[e.StatusFinding=2]="StatusFinding",e[e.StatusDownloading=3]="StatusDownloading",e[e.StatusFinished=4]="StatusFinished",e[e.StatusSeeding=5]="StatusSeeding",e[e.StatusAllocating=6]="StatusAllocating",e[e.StatusStalled=7]="StatusStalled",e[e.StatusPaused=8]="StatusPaused",e[e.StatusBuffering=9]="StatusBuffering",e[e.StatusPlaying=10]="StatusPlaying"}(J||(J={}));var ee=function(e){var t=e.torrent,n=e.isSelected,r=e.onSetActiveTorrents,c=t.status_code!==J.StatusFinished&&t.status_code!==J.StatusPaused,a=function(){var e=Object(o.a)(l.a.mark((function e(n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),c=r.active,a=c?"pause":"resume",e.next=5,fetch("/torrents/".concat(a,"/").concat(t.id));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(l.a.mark((function e(n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,fetch("/playuri?resume=".concat(t.id));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(V.a.Row,{onClick:function(e){e.ctrlKey?r((function(e){var n=e.findIndex((function(e){return e.id===t.id}));return-1===n?[].concat(Object(W.a)(e),[t]):e.filter((function(e,t){return t!==n}))})):r([t])},active:n,children:[Object(w.jsxs)(V.a.Cell,{children:[Object(w.jsx)("span",{title:t.name,children:t.name}),Object(w.jsx)(Y.a,{percent:t.progress,title:"".concat(t.progress.toFixed(2),"%"),autoSuccess:!0,indicating:c,size:"tiny"})]}),Object(w.jsx)(V.a.Cell,{textAlign:"center",children:Object(w.jsxs)(p.a,{color:c?"green":void 0,children:[t.size,Object(w.jsx)(p.a.Detail,{children:t.status})]})}),Object(w.jsx)(V.a.Cell,{children:Object(w.jsxs)(X.a,{size:"mini",widths:"2",children:[Object(w.jsx)(I.a,{value:t.ratio.toFixed(2),label:"Seed ratio"}),Object(w.jsx)(I.a,{value:"".concat(t.time_ratio.toFixed(2)),label:"Time ratio"})]})}),Object(w.jsx)(V.a.Cell,{children:Object(w.jsxs)(X.a,{widths:"2",size:"mini",children:[Object(w.jsxs)(I.a,{children:[Object(w.jsxs)(Z.a,{children:[Object(w.jsx)(P.a,{name:"arrow down",size:"small"})," ".concat(t.download_rate.toFixed(2))]}),Object(w.jsx)($.a,{children:"kB/s"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsxs)(Z.a,{children:[Object(w.jsx)(P.a,{name:"arrow up",size:"small"})," ".concat(t.upload_rate.toFixed(2))]}),Object(w.jsx)($.a,{children:"kB/s"})]})]})}),Object(w.jsx)(V.a.Cell,{children:Object(w.jsxs)(X.a,{widths:"2",size:"mini",children:[Object(w.jsx)(I.a,{value:"".concat(t.seeders," / ").concat(t.seeders_total),label:"Active / Total"}),Object(w.jsx)(I.a,{value:"".concat(t.peers," / ").concat(t.peers_total),label:"Active / Total"})]})}),Object(w.jsx)(V.a.Cell,{textAlign:"center",children:Object(w.jsxs)(v.a.Group,{basic:!0,fluid:!0,size:"tiny",children:[Object(w.jsx)(v.a,{icon:c?"pause":"download",toggle:!0,active:c,onClick:a}),Object(w.jsx)(v.a,{icon:"play",onClick:i,title:"Play in Kodi"})]})})]})})},te=c.a.memo(ee,d.a),ne=function(e){var t=e.torrents,n=e.activeTorrents,r=e.onSetActiveTorrents;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(V.a,{compact:"very",size:"small",stackable:!0,fixed:!0,singleLine:!0,selectable:!0,children:[Object(w.jsx)(V.a.Header,{className:"mobile-hidden",children:Object(w.jsxs)(V.a.Row,{children:[Object(w.jsx)(V.a.HeaderCell,{width:"11",children:"Name"}),Object(w.jsx)(V.a.HeaderCell,{width:"4",children:"Size / Status"}),Object(w.jsx)(V.a.HeaderCell,{width:"5",children:"Ratios"}),Object(w.jsx)(V.a.HeaderCell,{width:"5",children:"Rates"}),Object(w.jsx)(V.a.HeaderCell,{width:"5",children:"Seeds / Peers"}),Object(w.jsx)(V.a.HeaderCell,{width:"3"})]})}),Object(w.jsx)(V.a.Body,{children:t.map((function(e){return Object(w.jsx)(te,{torrent:e,onSetActiveTorrents:r,isSelected:n.some((function(t){return t.id===e.id}))},e.id)}))}),Object(w.jsx)(V.a.Footer,{fullWidth:!0,children:Object(w.jsx)(V.a.Row,{children:Object(w.jsxs)(V.a.HeaderCell,{colSpan:11,children:[Object(w.jsx)(K,{}),Object(w.jsx)(U,{torrents:n})]})})})]})})},re=n(133),ce=n.n(re),ae=n(208),ie=n(211),se=n(147),le=n(92),oe=n(151),ue=n(150),je=function(e){var t=e.pieces,n=Object(r.useRef)(null),c=Object(r.useRef)(null),a=Object(ue.a)({ref:c}).width,i=Object(oe.useDebounce)(a,100),s=Object(u.a)(i,1)[0];return Object(r.useEffect)((function(){if(s){var e=n.current;if(e){var r=e.getContext("2d");if(r){var a=c.current;a&&function(e,t,n){var r=e.clientWidth,c=Math.floor(r/9),a=9*Math.ceil(n.length/c),i=t.canvas;i.width=r,i.height=a+30;for(var s=0;s<n.length;s+=1){var l=void 0;switch(n[s]){case"+":l="#4CAF50";break;case"-":l="#F0B8B8";break;default:l="#ECEFF1"}t.fillStyle=l,t.fillRect(s%c*9,9*Math.floor(s/c),8,8)}!function(e,t){var n=e.canvas.height-t/2;e.font="12px sans-serif";var r=10.4,c=function(t,c,a){e.fillStyle=t,e.fillRect(c,n,r,r),e.fillStyle="black",e.fillText(a,c+16,n+r)};c("#4CAF50",0,"- Done"),c("#ECEFF1",70,"- Queued"),c("#F0B8B8",170,"- Not selected")}(t,30)}(a,r,t)}}}}),[t,s]),Object(w.jsx)("div",{ref:c,children:Object(w.jsx)("canvas",{ref:n})})},de=function(e){var t=function(e){var t={};return e.forEach((function(e){for(var n=t,r=0;r<e.length;r+=1){var c=e[r];c in n||(n[c]={}),n=n[c]}})),t}(e);return Object(w.jsx)(ae.a,{children:Object(w.jsx)(ae.a.Item,{children:Object(w.jsx)(ae.a.Content,{children:function e(t){return Object.keys(t).map((function(n){var r=Object.keys(t[n]).length>0;return Object(w.jsx)(ae.a.List,{children:Object(w.jsxs)(ae.a.Item,{children:[Object(w.jsx)(ae.a.Icon,{name:r?"folder":"file"}),Object(w.jsxs)(ae.a.Content,{children:[r?Object(w.jsx)(ae.a.Header,{children:n}):Object(w.jsx)(ae.a.Description,{children:n}),e(t[n])]})]})},n)}))}(t)})})})},be=function(e){var t=e.torrent,n=Object(r.useState)([]),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(""),j=Object(u.a)(s,2),d=j[0],b=j[1],h=Object(r.useState)(!0),O=Object(u.a)(h,2),x=O[0],f=O[1];Object(r.useEffect)((function(){f(!0);var e=function(){var e=Object(o.a)(l.a.mark((function e(){var n,r,c,a,s,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new RegExp("Files.+?:\\s+(?<files>.+?)\\n\\n.+?Pieces:\\s+(?<pieces>.+?)\\n\\n","gs"),e.next=3,fetch("/info?torrentid=".concat(t.id,"&pieces=true&trackers=false"));case 3:return r=e.sent,e.next=6,r.text();case 6:if(c=e.sent,(a=n.exec(c))&&a.groups){e.next=10;break}return e.abrupt("return");case 10:s=a.groups,o=s.files,u=s.pieces,i(o.split("\n").map((function(e){return e.trim()}))),b(u.split("\n").map((function(e){return e.trim()})).join("")),f(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var n=setInterval((function(){e()}),g());return function(){return clearInterval(n)}}),[t.id]);var p=[{menuItem:{key:"general",content:"General"},render:function(){return Object(w.jsx)(ie.a.Pane,{children:Object(w.jsx)(A.a,{children:Object(w.jsx)(se.a,{children:Object(w.jsxs)(le.a,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Name:"})," ",t.name]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Size:"})," ",t.size]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Completed:"})," ",t.progress.toFixed(2),"%"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Seed time:"})," ",t.seeding_time]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Seed time limit:"})," ",t.seed_time_limit,"s"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Total download:"})," ",ce()(t.total_download)]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"Total upload:"})," ",ce()(t.total_upload)]})]})})})})}},{menuItem:{key:"files",content:"Files"},render:function(){return Object(w.jsx)(ie.a.Pane,{loading:x,children:Object(w.jsx)(A.a,{children:Object(w.jsx)(se.a,{children:Object(w.jsx)(le.a,{children:de(a.map((function(e){return e.split("/")})))})})})})}},{menuItem:{key:"pieces",content:"Pieces"},render:function(){return Object(w.jsx)(ie.a.Pane,{loading:x,children:Object(w.jsx)(je,{pieces:d})})}}];return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(ie.a,{panes:p})})};n(182),n(183);var he=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(u.a)(a,2),s=i[0],j=i[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/torrents/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c((function(e){return d()(e,n)?e:n}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),g());return function(){return clearInterval(t)}}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(y,{}),Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(N,{totalDownloadRate:n.reduce((function(e,t){return e+t.download_rate}),0),totalUploadRate:n.reduce((function(e,t){return e+t.upload_rate}),0),active:n.filter((function(e){return e.status_code!==J.StatusFinished})).length,finished:n.filter((function(e){return e.status_code===J.StatusFinished})).length,total:n.length}),Object(w.jsx)(ne,{torrents:n,onSetActiveTorrents:j,activeTorrents:s}),s.length>0&&Object(w.jsx)(be,{torrent:s[s.length-1]})]})]})};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(he,{})}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.174529cf.chunk.js.map