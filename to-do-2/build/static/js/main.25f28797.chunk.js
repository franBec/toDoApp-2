(this["webpackJsonpto-do-2"]=this["webpackJsonpto-do-2"]||[]).push([[0],{35:function(e,t,n){"use strict";(function(e){var a=n(9),c=n(11),s=n(16),i=n(12),o=n(14),r=n(13),l=n(1),h=n.n(l),d=n(36),j=n(10),b=n.n(j),u=n(0),x=function(t){Object(o.a)(l,t);var n=Object(r.a)(l);function l(){var t;return Object(c.a)(this,l),(t=n.call(this)).handleEvent=function(n){var a=n.target,c=a.value,s=a.type,i=a.checked;"text"===s?t.setState({text:c}):"checkbox"===s?t.setState({isDone:i}):(b.a.put("".concat(e,"/tasks/").concat(t.state.id),{id:t.state.id,text:t.state.text,isDone:t.state.isDone}).then((function(e){return console.log(e.data)})).catch((function(e){console.error("Error!",e)})),window.location="/tasks")},t.render=function(){return Object(u.jsx)(d.a,Object(a.a)(Object(a.a)({},t.state),{},{handleEvent:t.handleEvent}))},t.state={id:"",text:"",isDone:!1},t.handleEvent=t.handleEvent.bind(Object(i.a)(t)),t}return Object(s.a)(l,[{key:"componentDidMount",value:function(){var t=this,n=window.location.href.substring(window.location.href.lastIndexOf("/")+1);try{b.a.get("".concat(e,"/tasks/").concat(n)).then((function(e){t.setState({id:e.data._id,text:e.data.text,isDone:e.data.isDone})})).catch((function(e){404===e.response.status&&(window.location.href="/404")}))}catch(a){console.log(a)}}}]),l}(h.a.Component);t.a=x}).call(this,"/")},36:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(e){return Object(a.jsxs)("div",{className:"alert alert-warning d-flex justify-content-between align-items-center container",children:[Object(a.jsx)("input",{value:e.text,onChange:e.handleEvent}),Object(a.jsxs)("div",{className:"buttons",children:["done?",Object(a.jsx)("input",{type:"checkbox",checked:e.isDone,onChange:e.handleEvent}),Object(a.jsx)("button",{type:"button",className:"editButton btn btn-success btn-sm",onClick:e.handleEvent,children:"Edit it!"})]})]})}},37:function(e,t,n){"use strict";(function(e){var a=n(9),c=n(18),s=n(11),i=n(12),o=n(14),r=n(13),l=n(1),h=n.n(l),d=n(38),j=n(10),b=n.n(j),u=n(0),x=function(t){Object(o.a)(l,t);var n=Object(r.a)(l);function l(){var t;return Object(s.a)(this,l),(t=n.call(this)).handleEvent=function(n){n.preventDefault();var a=n.target,s=a.name,i=a.value,o=a.type;t.setState(Object(c.a)({},s,i)),"text"!==o&&(b.a.post("".concat(e,"/tasks"),{text:t.state.textForm,isDone:!1}).then((function(e){return console.log(e.data)})),window.location="/tasks")},t.render=function(){return Object(u.jsx)(d.a,Object(a.a)(Object(a.a)({},t.state),{},{handleEvent:t.handleEvent}))},t.state={textForm:""},t.handleEvent=t.handleEvent.bind(Object(i.a)(t)),t}return l}(h.a.Component);t.a=x}).call(this,"/")},38:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:e.handleEvent,children:[Object(a.jsx)("input",{name:"textForm",placeholder:"Add New Task!",value:e.textForm,onChange:e.handleEvent}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",className:"btn btn-button btn-primary mt-2",value:"Add"})})]})})}},39:function(e,t,n){"use strict";(function(e){var a=n(9),c=n(11),s=n(16),i=n(14),o=n(13),r=n(1),l=n.n(r),h=n(10),d=n.n(h),j=n(42),b=n(0),u=function(t){Object(i.a)(r,t);var n=Object(o.a)(r);function r(){var e;return Object(c.a)(this,r),(e=n.call(this)).render=function(){return Object(b.jsx)(j.a,Object(a.a)({},e.state))},e.state={isLoading:!0,taskList:[],isEmpty:!1},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var t=this;d.a.get("".concat(e,"/tasks")).then((function(e){e.data.length>0?t.setState({taskList:e.data,isLoading:!1}):t.setState({isLoading:!1,isEmpty:!0})}))}}]),r}(l.a.Component);t.a=u}).call(this,"/")},40:function(e,t,n){"use strict";(function(e){var a=n(9),c=n(11),s=n(16),i=n(12),o=n(14),r=n(13),l=n(1),h=n.n(l),d=n(10),j=n.n(d),b=n(41),u=n(0),x=function(t){Object(o.a)(l,t);var n=Object(r.a)(l);function l(){var t;return Object(c.a)(this,l),(t=n.call(this)).handleEvent=function(n){var a=n.target,c=a.type,s=a.checked;"checkbox"===c?(t.setState({isDone:s}),j.a.put("".concat(e,"/tasks/").concat(t.state.id),{text:t.state.text,isDone:s}).then((function(e){return console.log(e.data)})).catch((function(e){console.error("Error!",e)}))):"button"===c&&j.a.delete("".concat(e,"/tasks/").concat(t.state.id)).then((function(e){return console.log(e)})).catch((function(e){console.error("Error!",e)})),window.location="/tasks"},t.render=function(){return Object(u.jsx)(b.a,Object(a.a)(Object(a.a)({},t.state),{},{handleEvent:t.handleEvent}))},t.state={id:"",text:"",isDone:!1},t.handleEvent=t.handleEvent.bind(Object(i.a)(t)),t}return Object(s.a)(l,[{key:"componentDidMount",value:function(){this.setState({id:this.props.value._id,text:this.props.value.text,isDone:this.props.value.isDone})}}]),l}(h.a.Component);t.a=x}).call(this,"/")},41:function(e,t,n){"use strict";n(1);var a=n(6),c=n(0);t.a=function(e){return Object(c.jsxs)("div",{className:"alert alert-info d-flex justify-content-between align-items-center container",children:[Object(c.jsx)("p",{className:"m-0 text",style:e.isDone?{fontStyle:"italic",textDecoration:"line-through"}:null,children:e.text}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("input",{type:"checkbox",checked:e.isDone,onChange:e.handleEvent}),Object(c.jsx)(a.b,{to:"tasks/"+e.id,className:"editButton btn btn-warning btn-sm",children:"Edit"}),Object(c.jsx)("button",{type:"button",className:"editButton btn btn-danger btn-sm",onClick:e.handleEvent,children:"Delete"})]})]})}},42:function(e,t,n){"use strict";n(1);var a=n(0),c=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Loading tasks..."})})},s=n(40),i=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"There are no tasks here"}),Object(a.jsx)("h2",{children:"Add one now!"})]})};t.a=function(e){return Object(a.jsx)("div",{className:"task-list container",children:e.isLoading?Object(a.jsx)(c,{}):e.isEmpty?Object(a.jsx)(i,{}):e.taskList.map((function(e){return Object(a.jsx)(s.a,{value:e},e._id)}))})}},73:function(e,t,n){"use strict";n.r(t);n(1);var a=n(32),c=n.n(a),s=(n(47),n(6)),i=n(0),o=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(s.b,{className:"navbar-brand",to:"/",children:"To-Do App!"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/tasks",children:"Tasks!"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})})},r=function(){return Object(i.jsx)(o,{})},l=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("div",{})})},h=n(2),d=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Oops! This is a 404 page"}),Object(i.jsxs)("h2",{children:["Something wrong happened",Object(i.jsx)("br",{}),"Let me help you back"]}),Object(i.jsx)(s.b,{to:"/",class:"btn btn-dark btn-block mt-3",children:"Back to Home"})]})},j=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"text-center my-5",children:"About the To-Do App 2!"}),Object(i.jsx)("h2",{children:"Background"}),Object(i.jsxs)("p",{children:["This app is the continuation of my first web app, which frontend was in EJS (Embedded Javascript). The interviewer from Ensolvers Team (check them out ",Object(i.jsx)("a",{href:"https://ensolvers.com/",children:"here"}),") gave me the task to adapt the app to React or Angular"]}),Object(i.jsx)("h2",{children:"Why React?"}),Object(i.jsxs)("p",{children:["I had never work with a one-page library/framework before this proyect. So after watching ",Object(i.jsx)("a",{href:"https://youtu.be/-9ic_5Xggww",children:"this video"}),", I came to these conclusions",Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Vue was discarded because wasn't even in the options that were given to me"}),Object(i.jsx)("li",{children:"Angular seems to have a big learning curve, and I had only 3 days, so was discarded"}),Object(i.jsx)("li",{children:"...So React was left, and for a personal experience, was really intuitive after a few hours"})]})]}),Object(i.jsx)("h2",{children:"What happened to the To-Do App 1? Why not upgrade the existing one?"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://to-do-app-becvort.herokuapp.com/",children:"Here it is!"})," I didn't upgrade it because was easier start a new native React proyect from scratch than adding React to the old one. Also, I really liked how the first one came out, and the challenge it was. I'm not feeling like tearing it apart"]}),Object(i.jsx)("h2",{children:"Technologies Used"}),Object(i.jsx)("p",{children:"It is all done in Javascript, using: Node.js 14.16.0 as runtime environment, and..."}),"...These backend dependencies:",Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://www.npmjs.com/package/dotenv/",children:"Dotenv"}),": Loads environment variables"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://expressjs.com/",children:"Express.js"}),": Web application framework"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://mongoosejs.com/",children:"Mongoose"}),": Object modeling for Node.js"]})]}),"...These frontend dependencies:",Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://getbootstrap.com/",children:"Bootstrap"}),": Responsive design"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://www.npmjs.com/package/axios",children:"Axios"}),": HTTP Client request/response tool"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://reactrouter.com/",children:"React Router"}),": Collection of navigational components"]})]}),Object(i.jsxs)("p",{children:["Finally, the database is in ",Object(i.jsx)("a",{href:"https://www.mongodb.com/",children:"MongoDB"}),", and the app you're looking running ISN'T in ",Object(i.jsx)("a",{href:"https://dashboard.heroku.com/",children:"Heroku yet"})]}),Object(i.jsx)("h2",{children:"So, what's next?"}),Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Tasks folders!: That would be a nice extra feature"}),Object(i.jsx)("li",{children:"Make a sesion system: Right now, everyone can see and modify everyone tasks cause there's no login. At the moment I'm thinking of using Firebase (from Google) for login administration. Gotta keep investigating"}),Object(i.jsx)("li",{children:"Make it preetier: Well, I'm no graphic designer, but I'm aware that this isn't a good looking app to watch all day"}),Object(i.jsx)("li",{children:"React Hooks: I had no time to learn enough about it, but maybe it'll be a great plus to the code"})]})}),Object(i.jsx)("h2",{children:"Want the code?"}),Object(i.jsxs)("p",{children:["No problem! Here it is on ",Object(i.jsx)("a",{href:"https://github.com/franBec/toDoApp",children:"github"})]}),Object(i.jsx)("h2",{children:"Need to contact me?"}),Object(i.jsxs)("p",{children:["Feel free to leave me a message! Here's my ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/franco-becvort/",children:"linkedin"})," and my ",Object(i.jsx)("a",{href:"mailto:franbecvort@gmail.com",children:"mail"})]})]})},b=function(){return Object(i.jsxs)("div",{class:"container",children:[Object(i.jsx)("h1",{class:"text-center mt-5",children:"To-Do App 2"}),Object(i.jsx)("h6",{class:"text-center",children:"Now with React!"}),Object(i.jsx)("h2",{children:"Welcome..."}),Object(i.jsx)("p",{children:"This is the To-Do App 2! An Online Web App where you can administrate your tasks"}),Object(i.jsxs)("p",{children:["Let's get started, by going to ",Object(i.jsx)(s.b,{to:"/tasks",children:"Tasks!"})]}),Object(i.jsxs)("p",{children:["Wanna know why 2? Where's the To-Do App 1? Need more info? Click ",Object(i.jsx)(s.b,{to:"/about",children:"here"})," for more info"]})]})},u=n(35),x=function(){return Object(i.jsxs)("div",{className:"container",children:[console.log(),Object(i.jsx)("h1",{children:"Editing Task!"}),Object(i.jsx)(u.a,{}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault(),window.location="/tasks"},children:"Go Back"})]})},p=n(37),O=n(39),m=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Tasks!"}),Object(i.jsx)(p.a,{}),Object(i.jsx)(O.a,{})]})};var v=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(r,{}),Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/",exact:!0,component:b}),Object(i.jsx)(h.a,{path:"/about",component:j}),Object(i.jsx)(h.a,{path:"/tasks",exact:!0,component:m}),Object(i.jsx)(h.a,{path:"/tasks/:id",component:x}),Object(i.jsx)(h.a,{path:"*",component:d})]}),Object(i.jsx)(l,{})]})})};c.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.25f28797.chunk.js.map