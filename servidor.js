var http = require("http");
var url = require("url");
// import React from 'react';
// import ReactDOM from 'react-dom';

function iniciar(enrutarx, handley) {
  function onRequest(solicitud, respuesta) {
  	// var dataPosteada = "";
  	// var pathnamex = url.parse(solicitud.url).pathname;
   //  console.log("Petición para " + pathnamex + " recibida.");

   //  solicitud.setEncoding("utf8");

   //  solicitud.addListener("data", function(trozoPosteado) {
   //  	dataPosteada += trozoPosteado;
   //  	console.log("recibido trozo POST '" + trozoPosteado + "'.");
   //  });

   //  solicitud.addListener("end", function() {
   //  	enrutarx(handley, pathnamex, respuesta, dataPosteada);
   //  });


   //var reactThing = React.createElement('h1', {}, "asdf");

   // var body = '<html>'+
   //  '<head>'+
   //  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
   //  '</head>'+
   //  '<body>'+
   //  '<div id="react-app">div: </div>'+
   //  '<div id="react-app2">div: </div>'+
   //  //reactThing +
   //  '<script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js"></script>'+
   //  '<script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js"></script>'+
   //  '<script>'+
   //    //'var rootElement = React.createElement("h1", {}, "Elem"); '+
   //    // 'var r
   //    'var rootElement = React.createElement("div", {}, React.createElement("h1", {}, "Contacts"), React.createElement("ul", {}, React.createElement("li", {}, React.createElement("h2", {}, "James Nelson"),    React.createElement("a", {href: "mailto:james@jamesknelson.com"}, "james@jamesknelson.com")), React.createElement("li", {}, React.createElement("h2", {}, "Joe Citizen"), React.createElement("a", {href: "mailto:joe@example.com"}, "joe@example.com")))); ' + 
   //    'ReactDOM.render(rootElement, document.getElementById("react-app")); '+
   //    'var contacts = [{key: 1, name: "James Nelson", email: "james@jamesknelson.com"}, {key: 2, name: "Bob"}]; var listElements = contacts.filter(function(contact) { return contact.email; }).map(function(contact) {return React.createElement("li", {key: contact.key}, React.createElement("h2", {}, contact.name), React.createElement("a", {href: "mailto:"+contact.email}, contact.email))}); var rootElement = React.createElement("div", {}, React.createElement("h1", {}, "Contacts filtered"), React.createElement("ul", {}, listElements)); ' +
   //    'ReactDOM.render(rootElement, document.getElementById("react-app2")); '+
   //    '</script>'+
   //    '</body>'+
   //    '</html>';

   var body = '<!DOCTYPE html> <html>   <head>     <meta charset="UTF-8" />     <title>I"m in a React app!</title>     <style> body {   font-family: Tahoma, sans-serif;   margin: 0; }  .ContactView-title {   font-size: 24px;   padding: 0 24px; }  .ContactView-list {   list-style: none;   margin: 0;   padding: 0;   border-top: 1px solid #f0f0f0; }  .ContactItem {   margin: 0;   padding: 8px 24px;   border-bottom: 1px solid #f0f0f0; } .ContactItem-name {   font-size: 16px;   font-weight: bold;   margin: 0; } .ContactItem-email {   display: block;   font-size: 14px;   margin-top: 4px;   font-style: italic;   color: #888; } .ContactItem-description {   font-size: 14px;   margin-top: 4px; }   .ContactForm {   padding: 8px 24px; } .ContactForm > input, .ContactForm > textarea {   display: block;   width: 240px;   padding: 4px 8px;   margin-bottom: 8px;   border-radius: 3px;   border: 1px solid #888;   font-size: 14px; } .ContactForm > input.ContactForm-error {   border-color: #b30e2f; } </style>   </head>   <body>     <div id="react-app"></div>     <div id="react-app2"></div>       <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js"></script>     <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js"></script>     <script>   var ContactForm = React.createClass({   propTypes: {     value: React.PropTypes.object.isRequired,     onChange: React.PropTypes.func.isRequired,     onSubmit: React.PropTypes.func.isRequired,   },      onNameChange: function(e) {     this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));   },      onEmailChange: function(e) {     this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));   },      onDescriptionChange: function(e) {     this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));   },    onSubmit: function(e) {     e.preventDefault();     this.props.onSubmit();   },    render: function() {     var errors = this.props.value.errors || {};     console.log(errors);      return (       React.createElement("form", {onSubmit: this.onSubmit, className: "ContactForm", noValidate: true},         React.createElement("input", {           type: "text",           className: errors.name && "ContactForm-error",           placeholder: "Name (required)",           value: this.props.value.name,           onChange: this.onNameChange,         }),         React.createElement("input", {           type: "email",           className: errors.email && "ContactForm-error",           placeholder: "Email (required)",           value: this.props.value.email,           onChange: this.onEmailChange,         }),         React.createElement("textarea", {           placeholder: "Description",           value: this.props.value.description,           onChange: this.onDescriptionChange,         }),         React.createElement("button", {type: "submit"}, "Add Contact")       )     );   }, });   var ContactItem = React.createClass({   propTypes: {     name: React.PropTypes.string.isRequired,     email: React.PropTypes.string.isRequired,     description: React.PropTypes.string,   },    render: function() {     return (       React.createElement("li", {className: "ContactItem"},         React.createElement("h2", {className: "ContactItem-name"}, this.props.name),         React.createElement("a", {className: "ContactItem-email", href: "mailto:"+this.props.email}, this.props.email),         React.createElement("div", {className: "ContactItem-description"}, this.props.description)       )     );   }, });   var ContactView = React.createClass({   propTypes: {     contacts: React.PropTypes.array.isRequired,     newContact: React.PropTypes.object.isRequired,     onNewContactChange: React.PropTypes.func.isRequired,     onNewContactSubmit: React.PropTypes.func.isRequired,   },    render: function() {     var contactItemElements = this.props.contacts       .filter(function(contact) { return contact.email; })       .map(function(contact) { return React.createElement(ContactItem, contact); });      return (       React.createElement("div", {className: "ContactView"},         React.createElement("h1", {className: "ContactView-title"}, "Contacts"),         React.createElement("ul", {className: "ContactView-list"}, contactItemElements),         React.createElement(ContactForm, {           value: this.props.newContact,           onChange: this.props.onNewContactChange,           onSubmit: this.props.onNewContactSubmit,         })       )     );   }, });     var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};      function updateNewContact(contact) {   setState({ newContact: contact }); }   function submitNewContact() {   var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});      if (!contact.name) {     contact.errors.name = ["Please enter your new contacts name"];   }   if (!/.+@.+\..+/.test(contact.email)) {     contact.errors.email = ["Please enter your new contacts email"];   }    setState(     Object.keys(contact.errors).length === 0     ? {         newContact: Object.assign({}, CONTACT_TEMPLATE),         contacts: state.contacts.slice(0).concat(contact),       }     : { newContact: contact }   ); }    var state = {};  function setState(changes) {   Object.assign(state, changes);      ReactDOM.render(     React.createElement(ContactView, Object.assign({}, state, {       onNewContactChange: updateNewContact,       onNewContactSubmit: submitNewContact,     })),     document.getElementById("react-app")   ); }   setState({   contacts: [     {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},     {key: 2, name: "Jim", email: "jim@example.com"},   ],   newContact: Object.assign({}, CONTACT_TEMPLATE), });   </script>    </body> </html>';

    //console.log(body);
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write(body);
    respuesta.end();



  }

  http.createServer(onRequest).listen(80);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;