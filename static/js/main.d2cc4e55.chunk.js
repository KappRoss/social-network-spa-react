(this["webpackJsonpsocial-network-spa-react"]=this["webpackJsonpsocial-network-spa-react"]||[]).push([[0],{128:function(e,t,a){e.exports={flow:"News_flow__2d6LC"}},129:function(e,t,a){e.exports={dialog:"Messages_dialog__1EuPo"}},133:function(e,t,a){e.exports=a.p+"static/media/reloader.aeb3dcc8.svg"},135:function(e,t,a){e.exports={item:"Post_item__2z0fz"}},162:function(e,t,a){e.exports=a(290)},167:function(e,t,a){},168:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},18:function(e,t,a){e.exports={nav:"Navbar_nav___aHg1",item:"Navbar_item__M7DYp",active:"Navbar_active__2ZEnG"}},20:function(e,t,a){e.exports={loginContainer:"login_loginContainer__HT8lj",loginForm:"login_loginForm__Roluh",title:"login_title__1fPjh",form:"login_form__2HMlR",input:"login_input__1Nnyq",checkbox_group:"login_checkbox_group__1VFLs",checkbox:"login_checkbox__2SOQy",label:"login_label__eI3W7",button_login:"login_button_login__1bHgB",b1:"login_b1__1Sa56"}},21:function(e,t,a){e.exports={header:"Header_header__1e-lR",logo:"Header_logo__heUy2",loginIcon:"Header_loginIcon__2gyKp",login:"Header_login__3HUVm",divLogIn:"Header_divLogIn__XF8eD",divLogOut:"Header_divLogOut__QUPMG",loginName:"Header_loginName__2EjwZ",button:"Header_button__2NqTj",divAvatar:"Header_divAvatar__2OPRc",avatar:"Header_avatar__2xJ4G"}},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(66),s=a.n(o);a(167),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(24),l=a(25),c=a(27),u=a(26),m=a(28),f=(a(168),a(18)),p=a.n(f),d=a(11),g=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("ul",null,r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/Profile",activeClassName:p.a.active},"Profile")),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/Dialogs",activeClassName:p.a.active},"Messages")),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/News",activeClassName:p.a.active},"News")),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/Music",activeClassName:p.a.active},"Music")),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/Users",activeClassName:p.a.active},"Users")),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:""},"Settings"))))},E=a(128),h=a.n(E),v=function(){return r.a.createElement("div",{className:h.a.flow},r.a.createElement("p",null,"news"))},_=(a(173),function(){return r.a.createElement("div",null,"Music")}),b=a(34),O=a(45),P=a(10),w={dialogsData:[{id:1,name:"Dima"},{id:2,name:"Niko"}],messagesData:[{id:1,text:"text messageSSSsssSSS"},{id:2,text:"text sexXx"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;if("SEND-MESSAGE"===t.type){var a=t.newMessageBody;return Object(P.a)({},e,{messagesData:[].concat(Object(O.a)(e.messagesData),[{id:6,text:a}])})}return e},j=a(72),N=a.n(j),y=a(129),k=a.n(y),x=(a(174),function(e){return r.a.createElement("div",null)}),C=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:k.a.dialog},e.dialog),r.a.createElement(x,null))},I=a(57),U=a.n(I),T=function(e){return r.a.createElement("div",{className:U.a.dialog},r.a.createElement("div",{className:U.a.imgAva},r.a.createElement("img",{className:U.a.avatar,src:"https://99px.ru/sstorage/1/2020/02/image_12302200000423560081.gif",alt:"avatar"})),r.a.createElement("div",{className:U.a.link},r.a.createElement(d.b,{to:"/dialogs/"+e.id},e.name)))},A=a(124),F=a(125),D=function(e){if(!e)return"field is required"},L=function(e){return function(t){if(t&&t.length>e)return"max length is ".concat(e," symbols")}},M=a(69),R=a(52),G=a.n(R),z=function(e){return function(t){var a=t.input,n=t.meta,o=Object(M.a)(t,["input","meta"]),s=n.touched&&n.error;return r.a.createElement("div",{className:"".concat(G.a.formControl," ").concat(s?G.a.error:"")},r.a.createElement("div",null,r.a.createElement(e,Object.assign({},a,o))),r.a.createElement("div",null,s&&r.a.createElement("span",null,n.error)))}},B=L(20),H=z("textarea"),V=Object(F.a)({form:"message"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(A.a,{component:H,name:"newMessageBody",placeholder:"enter your message",validate:[D,B]})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),W=function(e){var t=e.messagesPage,a=t.dialogsData.map((function(e){return r.a.createElement(T,{name:e.name,key:e.id,id:e.id})})),n=t.messagesData.map((function(e){return r.a.createElement(C,{dialog:e.text,key:e.id,id:e.id})}));return r.a.createElement("div",{className:N.a.dialogS},r.a.createElement("div",{className:N.a.dialogsItems},a),r.a.createElement("div",{className:N.a.messages},r.a.createElement("div",null,n),r.a.createElement(V,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},J=a(9),X=function(e){return{isAuth:e.authIcon.isAuth}},q=function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(b.a,{to:"/Login"})}}]),a}(r.a.Component);return Object(J.b)(X)(t)},Z=a(7),K=Object(Z.d)(Object(J.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){return e(function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}(t))}}})),q)(W),Q=a(8),Y=a.n(Q),$=a(17),ee=a(132).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"63b50c95-b3b4-409e-8579-c797fdd256ce"}}),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return ee.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ae=function(e){return ee.post("follow/".concat(e))},ne=function(e){return ee.delete("follow/".concat(e))},re=function(){return ee.get("auth/me")},oe=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ee.post("auth/login",{email:e,password:t,rememberMe:a})},se=function(){return ee.delete("auth/login")},ie=function(e){return ee.get("profile/"+e)},le=function(e){return ee.get("profile/status/"+e)},ce=function(e){return ee.put("profile/status/",{status:e})},ue=function(e){var t=new FormData;return t.append("image",e),ee.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},me={users:[],pageSize:5,totalUsers:0,currentPage:1,isFetching:!1,followProgres:[]},fe=function(e){return{type:"FOLLOW",userId:e}},pe=function(e){return{type:"UNFOLLOW",userId:e}},de=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ge=function(e){return{type:"TOGGLE_IS_FATCHING",isFetching:e}},Ee=function(e,t){return{type:"TOGGLE_FOLLOW_PROGRES",isFetching:e,userId:t}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return"FOLLOW"===t.type?Object(P.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)({},e,{followed:!0}):e}))}):"UNFOLLOW"===t.type?Object(P.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)({},e,{followed:!1}):e}))}):"SET_USERS"===t.type?Object(P.a)({},e,{users:t.users}):"SET_CURRENT_PAGE"===t.type?Object(P.a)({},e,{currentPage:t.currentPage}):"SET_USERS_TOTAL_COUNT"===t.type?Object(P.a)({},e,{totalUsers:t.totalCount}):"TOGGLE_IS_FATCHING"===t.type?Object(P.a)({},e,{isFetching:t.isFetching}):"TOGGLE_FOLLOW_PROGRES"===t.type?Object(P.a)({},e,{followProgres:t.isFetching?[].concat(Object(O.a)(e.followProgres),[t.userId]):e.followProgres.filter((function(e){return e!=t.userId}))}):e},ve=a(56),_e=a(35),be=a.n(_e),Oe=function(e){for(var t=Math.ceil(e.totalUsers/e.pageSize),a=[],o=1;o<=t;o++)a.push(o);var s=Math.ceil(t/10),i=Object(n.useState)(1),l=Object(ve.a)(i,2),c=l[0],u=l[1],m=10*(c-1)+1,f=10*c;return r.a.createElement("div",{className:be.a.pagination},c>1&&r.a.createElement("botton",{onClick:function(){return u(c-1)}},"PREV"),a.filter((function(e){return e>=m&&e<=f})).map((function(t){return r.a.createElement("span",{className:e.currentPage===t&&be.a.selectPage,onClick:function(){e.onPageChanged(t)}},t)})),s>c&&r.a.createElement("botton",{onClick:function(){return u(c+1)}},"NEXT"))},Pe=a(71),we=a.n(Pe),Se=function(e){var t=e.user,a=Object(M.a)(e,["user"]);return r.a.createElement("div",{className:be.a.user},r.a.createElement("span",{className:be.a.firstBlock},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:be.a.imgIcon,src:null!=t.photos.small?t.photos.small:we.a})))),r.a.createElement("div",{className:be.a.secondBlock},r.a.createElement("div",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("div",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city")),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:a.followProgres.some((function(e){return e===t.id})),onClick:function(){a.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:a.followProgres.some((function(e){return e===t.id})),onClick:function(){a.follow(t.id)}},"follow"))))},je=function(e){return r.a.createElement("div",null,r.a.createElement(Oe,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsers:e.totalUsers,pageSize:e.pageSize}),e.users.map((function(t){return r.a.createElement(Se,{user:t,followProgres:e.followProgres,unfollow:e.unfollow,follow:e.follow,key:t.id})})))},Ne=a(133),ye=a.n(Ne),ke=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:ye.a}))},xe=a(134),Ce=Object(xe.a)((function(e){return e.usersPage.users}),(function(e){return e})),Ie=function(e){return e.usersPage.pageSize},Ue=function(e){return e.usersPage.totalUsers},Te=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Fe=function(e){return e.usersPage.followProgres},De=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){a.props.getUsers(e,a.props.pageSize)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e!==this.props||t!==this.state}},{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ke,null):null,r.a.createElement(je,{totalUsers:this.props.totalUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followProgres:this.props.followProgres}))}}]),t}(r.a.Component),Le=Object(J.b)((function(e){return{users:Ce(e),pageSize:Ie(e),totalUsers:Ue(e),currentPage:Te(e),isFetching:Ae(e),followProgres:Fe(e)}}),{follow:function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Ee(!0,e)),t.next=3,ae(e);case 3:0===t.sent.data.resultCode&&a(fe(e)),a(Ee(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Ee(!0,e)),t.next=3,ne(e);case 3:0===t.sent.data.resultCode&&a(pe(e)),a(Ee(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:de,toggleFollowFetching:Ee,getUsers:function(e,t){return function(){var a=Object($.a)(Y.a.mark((function a(n){var r;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(ge(!0)),n(de(e)),a.next=4,te(e,t);case 4:r=a.sent,n(ge(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_USERS_TOTAL_COUNT",totalCount:r.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(De),Me=a(55),Re=a.n(Me),Ge=function(e){var t=Object(n.useState)(!1),a=Object(ve.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(e.status),l=Object(ve.a)(i,2),c=l[0],u=l[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,o?r.a.createElement("div",null,r.a.createElement("input",{onBlur:function(){s(!1),e.updateUserStatus(c)},autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:c})):r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"-")))},ze=function(e){var t=e.profile;return r.a.createElement("div",{className:Re.a.shortInfo},r.a.createElement("div",null,r.a.createElement("b",null,"Full Name ")," ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job ")," ",t.lookingForAJob?"yes":"no"),r.a.createElement("div",null,Object.keys(t.contacts).map((function(e){return r.a.createElement(Be,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},Be=function(e){var t=e.contactTitle,a=e.contactValue;return r.a.createElement("div",null,r.a.createElement("b",null,t),": ",a)},He=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,o=e.isOwner,s=e.savePhoto;if(!t)return r.a.createElement(ke,null);return r.a.createElement("div",{className:Re.a.discriptionBlock},r.a.createElement("div",{className:Re.a.avatar},r.a.createElement("img",{src:t.photos.large||we.a,alt:""}),o&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})),r.a.createElement(ze,{profile:t}),r.a.createElement("b",null,"Status "),r.a.createElement(Ge,{status:a,updateUserStatus:n}))},Ve={postsData:[{id:1,message:"SomeTextsdgwergdsfg",likesCount:12},{id:2,message:"SomeTextdfgsdfg",likesCount:11}],profile:null,status:""},We=function(e){return{type:"SET_STATUS",status:e}},Je=function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;if("ADD-POST"===t.type){var a={id:5,message:t.newPostText,likesCount:0};return Object(P.a)({},e,{postsData:[].concat(Object(O.a)(e.postsData),[a]),newPostText:""})}return"SET_USER_PROFILE"===t.type?Object(P.a)({},e,{profile:t.profile}):"SET_STATUS"===t.type?Object(P.a)({},e,{status:t.status}):"AVA/SAVE_PHOTO_SUCCESS"===t.type?Object(P.a)({},e,{profile:Object(P.a)({},e.profile,{photos:t.photos})}):e},qe=a(46),Ze=a.n(qe),Ke=a(135),Qe=a.n(Ke),Ye=function(e){return r.a.createElement("div",{className:Qe.a.item},r.a.createElement("img",{src:"https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like ",e.likesCount)))},$e=r.a.memo((function(e){var t=e.posts.map((function(e){return r.a.createElement(Ye,{id:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ze.a.generalContent},r.a.createElement(at,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:Ze.a.postItems},t))})),et=L(10),tt=z("textarea"),at=Object(F.a)({form:"MyPostsForm"})((function(e){return r.a.createElement("div",{className:Ze.a.postForm},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("img",{alt:""}),r.a.createElement("div",null,r.a.createElement(A.a,{className:Ze.a.textAreaField,component:tt,name:"newPostText",placeholder:"enter your post",validate:[D,et]})),r.a.createElement("div",{className:Ze.a.button},r.a.createElement("button",null,"add post"))))})),nt=$e,rt=Object(J.b)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(nt),ot=function(e){return r.a.createElement("div",null,r.a.createElement(He,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,savePhoto:e.savePhoto}),r.a.createElement(rt,null))},st=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUsersProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(ot,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),t}(r.a.Component),it=Object(Z.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.authIcon.id}}),{getUsersProfile:Je,getUserStatus:function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e);case 2:n=t.sent,a(We(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(e);case 2:0===t.sent.data.resultCode&&a(We(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object($.a)(Y.a.mark((function t(a){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"AVA/SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),b.f,q)(st),lt=a(21),ct=a.n(lt),ut=function(e){return r.a.createElement("header",{className:ct.a.header},r.a.createElement("img",{className:ct.a.logo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Office-2010-free-logo.svg/1024px-Office-2010-free-logo.svg.png"}),r.a.createElement("div",{className:ct.a.loginIcon},e.isAuth?r.a.createElement("div",{className:ct.a.divLogOut},r.a.createElement("div",{className:ct.a.divAvatar},e.profile?r.a.createElement("img",{className:ct.a.avatar,src:e.profile.photos.small}):""),r.a.createElement("div",{className:ct.a.loginName},e.login),r.a.createElement("div",{className:ct.a.button},r.a.createElement("button",{onClick:e.logout},"Logout"))):r.a.createElement("div",{className:ct.a.divLogIn},r.a.createElement(d.b,{to:"/login",className:ct.a.login},"LOGIN"))))},mt=a(40),ft={id:null,email:null,login:null,isAuth:!1},pt=function(e,t,a,n){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},dt=function(){return function(){var e=Object($.a)(Y.a.mark((function e(t){var a,n,r,o,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.email,s=n.login,t(pt(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},gt=function(){return function(){var e=Object($.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:0===e.sent.data.resultCode&&t(pt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;return"auth/SET_USER_DATA"===t.type?Object(P.a)({},e,{},t.payload):e},ht=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(ut,this.props)}}]),t}(r.a.Component),vt=Object(J.b)((function(e){return{isAuth:e.authIcon.isAuth,login:e.authIcon.login,profile:e.profilePage.profile}}),{logout:gt,getUsersProfile:Je})(ht),_t=a(20),bt=a.n(_t),Ot=L(50),Pt=z("input"),wt=Object(F.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:bt.a.form},r.a.createElement("div",null,r.a.createElement(A.a,{className:bt.a.input,placeholder:"email",name:"email",component:Pt,validate:[D,Ot]})),r.a.createElement("div",null,r.a.createElement(A.a,{className:bt.a.input,type:"password",placeholder:"password",name:"password",component:Pt,validate:[D,Ot]})),r.a.createElement("div",{className:bt.a.checkbox_group},r.a.createElement(A.a,{className:bt.a.checkbox,type:"checkbox",name:"rememberMe",id:"rememberMe",component:Pt}),r.a.createElement("label",{for:"rememberMe",className:bt.a.label},"remember me"),r.a.createElement("div",{className:bt.a.b1},r.a.createElement("button",{className:bt.a.button_login},"Log in"))),e.error&&r.a.createElement("div",{className:G.a.summuryError},e.error))})),St=Object(J.b)((function(e){return{isAuth:e.authIcon.isAuth}}),{login:function(e,t,a){return function(){var n=Object($.a)(Y.a.mark((function n(r){var o,s;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,oe(e,t,a);case 2:0===(o=n.sent).data.resultCode?r(dt()):(s=o.data.messages.length>0?o.data.messages[0]:"some error",r(Object(mt.a)("login",{_error:s})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:gt})((function(e){return e.isAuth?r.a.createElement(b.a,{to:"/Profile"}):r.a.createElement("div",{className:bt.a.loginContainer},r.a.createElement("div",null),r.a.createElement("div",{className:bt.a.loginForm},r.a.createElement("h1",{className:bt.a.title},"LOGIN"),r.a.createElement(wt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})),r.a.createElement("div",null))})),jt={initialized:!1},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;return"SET_INITIALIZED"===t.type?Object(P.a)({},e,{initialized:!0}):e},yt=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wraper"},r.a.createElement(vt,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(b.b,{path:"/Dialogs",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(b.b,{path:"/Profile/:userId?",render:function(){return r.a.createElement(it,null)}}),r.a.createElement(b.b,{path:"/News",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(b.b,{path:"/Music",render:function(){return r.a.createElement(_,null)}}),r.a.createElement(b.b,{path:"/Users",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(b.b,{path:"/Login",render:function(){return r.a.createElement(St,null)}}))):r.a.createElement(ke,null)}}]),t}(r.a.Component),kt=Object(Z.d)(b.f,Object(J.b)((function(e){return{initialized:e.app.initialized}}),{initializApp:function(){return function(e){var t=e(dt());Promise.all([t]).then((function(){return e({type:"SET_INITIALIZED"})}))}}}))(yt),xt=a(136),Ct=a(126),It=Object(Z.c)({profilePage:Xe,messagesPage:S,usersPage:he,authIcon:Et,form:Ct.a,app:Nt}),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Tt=Object(Z.e)(It,Ut(Object(Z.a)(xt.a)));Tt.getState(),s.a.render(r.a.createElement(d.a,null,r.a.createElement(J.a,{store:Tt},r.a.createElement(kt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,a){e.exports={imgIcon:"Users_imgIcon__12cCh",selectPage:"Users_selectPage__2kiJy",user:"Users_user__uhyf6",firstBlock:"Users_firstBlock__1KrRS",secondBlock:"Users_secondBlock__1mtbQ",pagination:"Users_pagination__2jbrI"}},46:function(e,t,a){e.exports={generalContent:"MyPosts_generalContent__2q7M8",postForm:"MyPosts_postForm__1h2lk",textAreaField:"MyPosts_textAreaField__1h_dC",button:"MyPosts_button__3-aul"}},52:function(e,t,a){e.exports={formControl:"Forms_formControl__3UUMn",error:"Forms_error__1BeQl",summuryError:"Forms_summuryError__g6NWk"}},55:function(e,t,a){e.exports={bg_img:"ProfileInfo_bg_img__1HBB5",discriptionBlock:"ProfileInfo_discriptionBlock__1JJ3A",avatar:"ProfileInfo_avatar__oXbqJ",shortInfo:"ProfileInfo_shortInfo___eGeU"}},57:function(e,t,a){e.exports={dialog:"DialogsItem_dialog__2KiDN",link:"DialogsItem_link__3nuXi",imgAva:"DialogsItem_imgAva__1D-Fn",avatar:"DialogsItem_avatar__32071"}},71:function(e,t,a){e.exports=a.p+"static/media/userIcon.fc3a244b.jpg"},72:function(e,t,a){e.exports={dialogS:"Dialogs_dialogS__1ZnOR"}}},[[162,1,2]]]);
//# sourceMappingURL=main.d2cc4e55.chunk.js.map