<!-- Learn about essential React concepts and related terms, such as Babel, Webpack, JSX, components, props, state, and lifecycle. -->

<!-- what is react???

1-React is a JavaScript library - one of the most popular ones
2-React is not a framework.
3-React is an open-source project created by Facebook.
4-React is used to build user interfaces (UI) on the front end.its is responsible for building only for rich user interfaces.
5-React is the view layer of an MVC application (Model View Controller)
6-React has a rich Echosystym and plays really well with other libraries and more than capable of building fullfleadge web applications
#####

Q2- Why leearn react ??

1- React is an open-source project created and maintained by Facebook.
2-its is indemand skill set& huge community support.

#####
** React has a componet based archeticher.this let you break down your application into small         encapsulated parts which can then be composed to make more complex UI.

**Example **
A tredition website  can be broken down into Header, side nav,main content and footer.each section represent a component which when make up our entire  website.
###
component also  make it posible to write reusable code.
react is declearative means we just have to tell react  what you want and React with react Dom libraray they will build the actual  UI.
React will handle efficiently updating and rendering of the coponents when your data is chanches.
DOM updates are handle gracefully in React.

 -->
 <!-- more about React -->
 <!-- 
 React also makes no assumption about the rest of the technoligy stack .
 seamlesly  integrate React into any of the application.a portion of the page or a compleate page or even an entire application itself.react will fit rit in.

 
 
 //create react app
 
 npx craete-react-app hello-world
 
Q-what is npx
##npx is package runner which gets installedwhen you  installed node.so  thats why we can run create-react-app without having to installed it.
  -->

  <!-- what is react components 
  React component is the part of user inerfaces.
   our application has five components.header,sidenav,main content,footer.and the  one root componet contain every other componet.and root component usually named as app componet in your application.
   each of the for is nested component describe only a part of the user interface.
   all components make together to make entire components.
   components are also  resuable the same components can be used with diffrent properties to display diffrent information
   components can also contain the other componets. example
   like side nav can contain the rit side nav and also the left side nav.
  
  Q1- HOW does a component translate the code in our application???
  -=>1- The component code usually placed into javascript files.example-app component pkaced in app.js
    2- A comopent besically a code into a js files.what does the code look like that's depend on the type of the component.more complex the application more the number of components.
    ///In react we have two component type
    1-A stateless Functional Component. -
    2-A statefull class componet.


 1-A stateless Functional Component. => A functional componet literally a javascript functions.its return HTML thats describe the UI.
 its accept the input of props(properties) and return a html that describes the UI.
  
  2-A statefull class componet=> its  is regular ES6 classes that extend the component class from the react library.its must contain the render method which in return HTMl.

  -->
  <!-- Advantage use of functional component over class component
  1- 1st advantage of using functional componet over  class componnet 
   is the absence of 'this' keyword which you will encounter in a class based componet.

  2-we can forced to think for solution without having state.functional component tent to do without any complicated logic and mainly responsible for the user interface,this is why functional componet are also called stateless components/Dumb component/Presentational componet.

-->
  <!-- Claass componet over functional componet -->
  <!-- 1-its a bit more feature rich
  2-they maintain thire own private data its also called state
  3- They contain compicated UI logic and most importantly  they provide life cycle hooks.
  class componet also called statefull/Smart/Container componets.
  
  -->