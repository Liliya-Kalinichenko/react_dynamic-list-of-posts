(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(7),c=s.n(n),a=s(2),i=s(1),o=s.n(i),r=(s(13),s(14),s(15),s(3)),l=s.n(r),d="https://mate.academy/students-api";function m(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),m(300).then((function(){return fetch(d+e,n)})).then((function(e){return e.json()}))}var b=function(e){return j(e)},u=function(e,t){return j(e,"POST",t)},h=function(e){return j(e,"DELETE")},O=s(0),x=o.a.createContext({comments:[],setComments:function(){},isCommentLoading:!1,setIsCommentLoading:function(){},isCommentLoadError:!1,setIsCommentLoadError:function(){},isFormShown:!1,setIsFormShown:function(){},hadnleCommentDelete:function(){}}),f=function(e){var t=e.children,s=Object(i.useState)([]),n=Object(a.a)(s,2),c=n[0],o=n[1],r=Object(i.useState)(!1),l=Object(a.a)(r,2),d=l[0],m=l[1],j=Object(i.useState)(!1),b=Object(a.a)(j,2),u=b[0],f=b[1],N=Object(i.useState)(!1),p=Object(a.a)(N,2),g=p[0],v=p[1],y=function(e){var t;(t=e,h("/comments/".concat(t))).then((function(){return o((function(t){return t.filter((function(t){return t.id!==e}))}))}))},C=Object(i.useMemo)((function(){return{comments:c,setComments:o,isCommentLoading:d,setIsCommentLoading:m,isCommentLoadError:u,setIsCommentLoadError:f,isFormShown:g,setIsFormShown:v,hadnleCommentDelete:y}}),[c,d,u,g]);return Object(O.jsx)(x.Provider,{value:C,children:t})},N=o.a.createContext({posts:[],setPosts:function(){},selectedPost:null,setSelectedPost:function(){},isPostLoading:!1,setIsPostLoading:function(){},isPostLoadError:!1,setIsPostLoadError:function(){}}),p=function(e){var t=e.children,s=Object(i.useState)([]),n=Object(a.a)(s,2),c=n[0],o=n[1],r=Object(i.useState)(null),l=Object(a.a)(r,2),d=l[0],m=l[1],j=Object(i.useState)(!1),b=Object(a.a)(j,2),u=b[0],h=b[1],x=Object(i.useState)(!1),f=Object(a.a)(x,2),p=f[0],g=f[1],v=Object(i.useMemo)((function(){return{posts:c,setPosts:o,selectedPost:d,setSelectedPost:m,isPostLoading:u,setIsPostLoading:h,isPostLoadError:p,setIsPostLoadError:g}}),[c,u,p,d]);return Object(O.jsx)(N.Provider,{value:v,children:t})},g=function(){var e=Object(i.useContext)(x),t=e.setComments,s=e.setIsCommentLoading,n=e.setIsCommentLoadError,c=e.setIsFormShown,a=Object(i.useContext)(N),o=a.posts,r=a.selectedPost,d=a.setSelectedPost,m=function(e){var a;c(!1),r&&r.id===e.id?d(null):(d(e),s(!0),(a=e.id,b("/comments?postId=".concat(a))).then(t).catch((function(){s(!1),n(!0)})).finally((function(){s(!1)})))};return Object(O.jsxs)("div",{"data-cy":"PostsList",children:[Object(O.jsx)("p",{className:"title",children:"Posts:"}),Object(O.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"has-background-link-light",children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:o.map((function(e){var t=e.id,s=e.title,n=r&&r.id===e.id;return Object(O.jsxs)("tr",{"data-cy":"Post",children:[Object(O.jsx)("td",{"data-cy":"PostId",children:t}),Object(O.jsx)("td",{"data-cy":"PostTitle",children:s}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button is-link",{"is-light":!n}),onClick:function(){return m(e)},children:n?"Close":"Open"})})]},t)}))})]})]})},v=(s(17),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),y=s(8),C=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),s=t[0],n=t[1],c=Object(i.useState)(!1),o=Object(a.a)(c,2),r=o[0],d=o[1],m=Object(i.useState)(""),j=Object(a.a)(m,2),b=j[0],h=j[1],f=Object(i.useState)(!1),p=Object(a.a)(f,2),g=p[0],v=p[1],C=Object(i.useState)(""),S=Object(a.a)(C,2),P=S[0],L=S[1],E=Object(i.useState)(!1),w=Object(a.a)(E,2),I=w[0],k=w[1],F=Object(i.useState)(!1),T=Object(a.a)(F,2),D=T[0],M=T[1],B=Object(i.useContext)(N).selectedPost,U=Object(i.useContext)(x),A=U.comments,_=U.setComments,J=U.setIsCommentLoadError;return Object(O.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),s.trim()||d(!0),b.trim()||v(!0),P.trim()||k(!0),s.trim()&&b.trim()&&P.trim()&&(M(!0),B&&function(e,t){var s=t.name,n=t.email,c=t.body;return u("/comments",{postId:e,name:s,email:n,body:c})}(B.id,{name:s,email:b,body:P}).then((function(e){_([].concat(Object(y.a)(A),[e]))})).catch((function(){J(!0)})).finally((function(){M(!1),L("")})))},children:[Object(O.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":r}),value:s,onChange:function(e){n(e.target.value),d(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-user"})}),r&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),r&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":g}),value:b,onChange:function(e){h(e.target.value),v(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-envelope"})}),g&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("input",{"is-danger":I}),value:P,onChange:function(e){L(e.target.value),k(!1)}})}),I&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(O.jsxs)("div",{className:"field is-grouped",children:[Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":D}),children:"Add"})}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){n(""),d(!1),h(""),v(!1),L(""),k(!1)},children:"Clear"})})]})]})},S=function(){var e=Object(i.useContext)(x),t=e.comments,s=e.isCommentLoading,n=e.isCommentLoadError,c=e.isFormShown,a=e.setIsFormShown,o=e.hadnleCommentDelete,r=Object(i.useContext)(N).selectedPost;return Object(O.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(O.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(O.jsxs)("div",{className:"block",children:[Object(O.jsx)("h2",{"data-cy":"PostTitle",children:r&&"#".concat(r.id,": ").concat(r.title)}),Object(O.jsx)("p",{"data-cy":"PostBody",children:r&&r.body})]}),Object(O.jsx)("div",{className:"block",children:s?Object(O.jsx)(v,{}):Object(O.jsxs)(O.Fragment,{children:[n&&Object(O.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!t.length&&!n&&Object(O.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!!t.length&&!n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){var t=e.id,s=e.name,n=e.body;return Object(O.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(O.jsxs)("div",{className:"message-header",children:[Object(O.jsx)("a",{href:"mailto:misha@mate.academy","data-cy":"CommentAuthor",children:s}),Object(O.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return o(t)},children:"delete button"})]}),Object(O.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:n})]},t)}))]}),!n&&!c&&Object(O.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return a(!0)},children:"Write a comment"})]})}),c&&!n&&Object(O.jsx)(C,{})]})})},P=function(e){var t=e.selectedUser,s=e.setSelectedUser,n=Object(i.useState)([]),c=Object(a.a)(n,2),o=c[0],r=c[1],l=Object(i.useState)(!1),d=Object(a.a)(l,2),m=d[0],j=d[1],u=Object(i.useContext)(N),h=u.setPosts,x=u.setIsPostLoading,f=u.setIsPostLoadError;Object(i.useEffect)((function(){b("/users").then(r)}),[]);var p=function(e){var t;s(e),j(!1),x(!0),(t=e.id,b("/posts?userId=".concat(t))).then(h).catch((function(){x(!1),f(!0),h([])})).finally((function(){x(!1)}))};return Object(O.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(O.jsx)("div",{className:"dropdown-trigger",children:Object(O.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!m)},onBlur:function(){return j(!1)},children:[Object(O.jsx)("span",{children:t?"".concat(t.name):"Choose a user"}),Object(O.jsx)("span",{className:"icon is-small",children:Object(O.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),m&&Object(O.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(O.jsx)("div",{className:"dropdown-content",children:o.map((function(e){return Object(O.jsx)("a",{href:"#user-1",className:"dropdown-item",onMouseDown:function(){return p(e)},children:e.name},e.id)}))})})]})},L=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),s=t[0],n=t[1],c=Object(i.useContext)(N),o=c.posts,r=c.isPostLoading,d=c.isPostLoadError,m=c.selectedPost;return Object(O.jsx)("main",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"tile is-ancestor",children:[Object(O.jsx)("div",{className:"tile is-parent",children:Object(O.jsxs)("div",{className:"tile is-child box is-success",children:[Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(P,{selectedUser:s,setSelectedUser:n})}),Object(O.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!s&&Object(O.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),r&&Object(O.jsx)(v,{}),d&&Object(O.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!r&&!d&&0===o.length&&s&&Object(O.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),s&&!!o.length&&Object(O.jsx)(g,{})]})]})}),Object(O.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":m}),children:!d&&Object(O.jsx)("div",{className:"tile is-child box is-success",children:Object(O.jsx)(S,{})})})]})})})};c.a.render(Object(O.jsx)(p,{children:Object(O.jsx)(f,{children:Object(O.jsx)(L,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7dc67743.chunk.js.map