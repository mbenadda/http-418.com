webpackJsonp([0xc1d74b0851a0],{432:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){var n=t.onNewComment,r=t.language,o=i(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),m=n(6),h=r(m),y=["shortname","identifier","title","url","category_id","onNewComment","language"],b=!1,_=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return y.some(function(e){return e===n})?t:c({},t,o({},n,e.props[n]))},{});return d.default.createElement("div",t,d.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!b){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),b=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};y.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){s(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){s(this,t)},this.addDisqusScript())}}]),t}(d.default.Component);_.displayName="DisqusThread",_.propTypes={id:h.default.string,shortname:h.default.string.isRequired,identifier:h.default.string,title:h.default.string,url:h.default.string,category_id:h.default.string,onNewComment:h.default.func,language:h.default.string},_.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=_},433:function(e,t,n){"use strict";e.exports=n(432)},119:function(e,t){},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(119);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,r=e.url;return n?i.default.createElement("figure",{className:"author-image"},i.default.createElement("a",{className:"img",href:r,style:{backgroundImage:'url("'+n+'")'}},i.default.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(i.default.Component);t.default=s,e.exports=t.default},339:function(e,t){},240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(18),c=r(s);n(339);var f=n(100),p=r(f),d=n(92),m=r(d),h=n(93),y=r(h),b=n(162),_=r(b),E=function(e){var t=e.bio,n=e.morePostsUrl;return t?i.default.createElement("p",null,t):i.default.createElement("p",null,"Read ",i.default.createElement(c.default,{to:n},"more posts")," by this author.")},w=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author,n=t.id,r=t.name,o=t.image,a=t.bio,u=t.url,l=t.location,s=e?e+"/"+n:n;return o?i.default.createElement("section",{className:"author"},i.default.createElement("h4",null,i.default.createElement(_.default,{url:s,name:r})),i.default.createElement(E,{bio:a,morePostsUrl:s}),i.default.createElement(p.default,null,i.default.createElement(m.default,{location:l}),i.default.createElement(y.default,{url:u}))):null},t}(i.default.Component);t.default=w,e.exports=t.default},92:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.location;return e?i.default.createElement("span",{className:"author-location icon-location"},e):null},t}(i.default.Component);t.default=s,e.exports=t.default},93:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.url;return e?i.default.createElement("span",{className:"author-link icon-link"},i.default.createElement("a",{href:e},e)):null},t}(i.default.Component);t.default=s,e.exports=t.default},244:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(433),c=r(s),f=n(13),p=r(f),d=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={toasts:[]},r.notifyAboutComment=r.notifyAboutComment.bind(r),r.onSnackbarDismiss=r.onSnackbarDismiss.bind(r),r}return u(t,e),t.prototype.onSnackbarDismiss=function(){var e=this.state.toasts,t=e.slice(1);this.setState({toasts:t})},t.prototype.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},t.prototype.render=function(){var e=this.props.postNode;if(!p.default.disqusShortname)return null;var t=e.frontmatter,n=p.default.siteUrl+p.default.pathPrefix+e.fields.slug;return i.default.createElement(c.default,{shortname:p.default.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(l.Component);t.default=d,e.exports=t.default},345:function(e,t){},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(345);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.subscribers,n=e.blog;return t&&n?i.default.createElement("section",{className:"gh-subscribe"},i.default.createElement("h3",{className:"gh-subscribe-title"},"Subscribe to ",n.title),i.default.createElement("p",null,"Get the latest posts delivered right to your inbox."),i.default.createElement("span",{className:"gh-subscribe-rss"},"or subscribe"," ",i.default.createElement("a",{href:"http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"},"via RSS")," ","with Feedly!")):null},t}(i.default.Component);t.default=s,e.exports=t.default},351:function(e,t){},247:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(11),c=r(s),f=n(18),p=r(f);n(351);var d=function(e){var t=e.post;if(t){var n=t.path,r=t.cover,o=t.title,a=t.excerpt,u=r?{backgroundImage:"url("+r}:null,l=(0,c.default)("read-next-story",e.className,{"no-cover":!r});return i.default.createElement(p.default,{className:l,style:u,to:n},i.default.createElement("section",{className:"post"},i.default.createElement("h2",null,o),i.default.createElement("p",null,a,"…")))}return null},m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.next,n=e.prev;return i.default.createElement("aside",{className:"read-next"},i.default.createElement(d,{post:t}),i.default.createElement(d,{className:"prev",post:n}))},t}(l.Component);t.default=m,e.exports=t.default},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(24),c=r(s),f=n(13),p=r(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,u=void 0,l=void 0;if(r){var s=t.frontmatter;o=s.title,a=s.description?s.description:t.excerpt,u=s.cover,l=p.default.siteUrl+p.default.pathPrefix+n}else o=p.default.siteTitle,a=p.default.siteDescription,u=p.default.siteLogo;var f="/"===p.default.pathPrefix?"":p.default.pathPrefix;u=p.default.siteUrl+f+u;var d=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:u},description:a}]),i.default.createElement(c.default,null,i.default.createElement("meta",{name:"description",content:a}),i.default.createElement("meta",{name:"image",content:u}),i.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.default.createElement("meta",{property:"og:url",content:r?l:d}),r?i.default.createElement("meta",{property:"og:type",content:"article"}):null,i.default.createElement("meta",{property:"og:title",content:o}),i.default.createElement("meta",{property:"og:description",content:a}),i.default.createElement("meta",{property:"og:image",content:u}),i.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),i.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),i.default.createElement("meta",{name:"twitter:title",content:o}),i.default.createElement("meta",{name:"twitter:description",content:a}),i.default.createElement("meta",{name:"twitter:image",content:u}))},t}(l.Component);t.default=d,e.exports=t.default},125:function(e,t){},100:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(11),c=r(s);n(125);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=(0,c.default)("author-meta",n);return i.default.createElement("div",{className:r},t)},t}(i.default.Component);t.default=f,e.exports=t.default},52:function(e,t){},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(11),c=r(s);n(52);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.children,t=(0,c.default)("content",this.props.className);return i.default.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.default.Component);t.default=f,e.exports=t.default},357:function(e,t){},250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(357);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.children;return i.default.createElement("footer",{className:"post-footer"},e)},t}(i.default.Component);t.default=s,e.exports=t.default},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=e;return n.id||(n.id=t),n.id||(n.category_id=h.default.postDefaultCategoryID),n}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),s=r(i),c=n(24),f=r(c),p=n(98),d=r(p),m=n(13),h=r(m),y=n(68),b=r(y),_=n(69),E=r(_),w=n(62),g=r(w),v=n(64),O=r(v),j=n(67),x=r(j),C=n(65),P=r(C),N=n(70),T=r(N),S=n(46),M=r(S),k=n(166),D=r(k),R=n(165),q=r(R),A=n(163),I=r(A),U=n(250),B=r(U),L=n(91),Q=r(L),F=n(240),G=r(F),J=n(245),H=r(J),W=n(247),z=r(W),K=n(164),V=r(K),X=n(63),Y=r(X),Z=n(167),$=r(Z),ee=n(244),te=r(ee),ne=function(e){return{path:e.fields.slug,title:e.frontmatter.title,cover:e.frontmatter.cover,excerpt:e.excerpt}},re=function(e){function t(){var n,r,u;o(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=r=a(this,e.call.apply(e,[this].concat(i))),r.state={menuOpen:!1},r.handleOnClick=function(e){e.stopPropagation(),r.state.menuOpen?r.closeMenu():r.openMenu()},r.handleOnClose=function(e){e.stopPropagation(),r.closeMenu()},r.openMenu=function(){r.setState({menuOpen:!0})},r.closeMenu=function(){r.setState({menuOpen:!1})},u=n,a(r,u)}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.data),n=this.props.pathContext,r=n.slug,o=n.next,a=n.prev,u=this.props.data.markdownRemark,i=l(u.frontmatter,r),c=i.cover,p=i.title,m=i.date,y=i.author,_=i.tags,w=i.post_class?i.post_class:"post",v=$.default.getAuthor(this.props.data.authors.edges,y,h.default.blogAuthorId),j=function(){return o?ne(t.next):null},C=function(){return a?ne(t.prev):null};return s.default.createElement(x.default,{className:"post-template",isOpen:this.state.menuOpen},s.default.createElement(f.default,null,s.default.createElement("title",null,i.title+" | "+h.default.siteTitle)),s.default.createElement(d.default,{postPath:r,postNode:u,postSEO:!0}),s.default.createElement(P.default,{config:h.default,onClose:this.handleOnClose}),s.default.createElement(T.default,null,s.default.createElement(b.default,{className:"post-head",cover:c},s.default.createElement(E.default,{overlay:c},s.default.createElement(g.default,{logo:h.default.siteLogo,title:h.default.siteTitle}),s.default.createElement(O.default,{navigation:h.default.siteNavigation,onClick:this.handleOnClick}))),s.default.createElement(M.default,null,s.default.createElement(q.default,{className:w},s.default.createElement(D.default,null,s.default.createElement("h1",{className:"post-title"},p),s.default.createElement("section",{className:"post-meta"},s.default.createElement(I.default,{date:m}),s.default.createElement(V.default,{prefix:" on ",tags:_}))),s.default.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:u.html}}),s.default.createElement(B.default,null,s.default.createElement(Q.default,{author:v}),s.default.createElement(G.default,{prefix:"/author",author:v}),s.default.createElement(H.default,null),s.default.createElement(te.default,{postNode:u})))),s.default.createElement(z.default,{next:j(),prev:C()}),s.default.createElement(Y.default,{copyright:h.default.copyright,promoteGatsby:h.default.promoteGatsby})))},t}(s.default.Component);t.pageQuery="** extracted graphql fragment **";t.default=re}});
//# sourceMappingURL=component---src-templates-post-jsx-b1dac6569c7f98e57823.js.map