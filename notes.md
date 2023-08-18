# Normal JavaScript Code

<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript!";
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "The teen took on the challenge with a Samsung Galaxy S4 using a mobile app called Fleksy which is designed to make texting easier through a larger on-screen keypad that's more like a PC and had to type out the paragraph: The razor-toothed piranhas of the genera Serrasalmus and Pygocentrus are the most ferocious freshwater fish in the world. In reality they seldom attack a human."
        const root = document.getElementById("root");
        root.appendChild(heading);
        root.appendChild(paragraph);
    </script>
</body>
--------------------------------------------------------------------------------------------

# React JavaScript
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "Hello World from React!");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>

--------------------------------------------------------------------------------------------

# React JS Code

const heading = React.createElement(
    "h1", 
    {id: "heading", className: "text-success"}, 
    "Hello World from React!"
    );

const paragraph = React.createElement(
    "p", 
    {}, 
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    );

const button = React.createElement(
    "button", 
    { className: "btn btn-primary"}, 
    "Submit"
    );

const appComponent = React.createElement(
    "div", 
    {}, 
    heading, 
    paragraph, 
    button
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(appComponent);

console.log(heading);


# html code 

<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.js"></script>
</body>

# CSS Code

#heading {
    color: rgb(46, 208, 6);
}
p {
    color: orangered;
}
.btn {
    border: none;
    outline: none;
    padding: 8px 16px;
    font-size: medium;
    border-radius: 5px;
}
.btn-primary {
    background-color: antiquewhite;
    color:rgb(9, 195, 227);
}


--------------------------------------------------------------------------------------------

# Example:
----------
// const heading = React.createElement(
//     "h1", 
//     {id: "heading", className: "text-success"}, 
//     "Hello World from React!"
//     );

// console.log(heading); // object



--------------------------------------------------------------------------------------------

# Example:
----------

/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *           <h1>I'm h1 tag</h1>
 *           <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *           <h1>I'm h1 tag</h1>
 *           <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

// Nested div inside h1 and h2 tags
const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement("div", { key:"child1",id: "child1" }, [
        React.createElement("h1", {key:"ele1"}, "I'm an h1 tag"), 
        React.createElement("h2", {key:"ele2"}, "I'm an h2 tag")
    ]),
    React.createElement("div", { key:"child2",id: "child2" }, [
        React.createElement("h1", {key:"ele1"}, "I'm an h1 tag"), 
        React.createElement("h2", {key:"ele2"}, "I'm an h2 tag")
    ])
]);

// JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


# HTML Code
------------

<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.js"></script>
</body>


--------------------------------------------------------------------------------------------

To create npm packages
----------------------

npm init --> package.json

installing the parcel --> It packages the code for production ready application

npm install -D parcel

-D --> Devdependencies

Devdependencies --> These dependencies used in the Development phase

dependencies --> These dependencies also used in the production ready applications.


npm install --> we can recreate node_modules using package.json file and package-lock.json file.

npx parcel index.html --> To run the server

cdn links are not preferred way

npx parcel build index.html

remove app.js in package.json

browserslist.dev --> browserslist


App.js:
-------

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement("div", { key:"child1",id: "child1" }, [
        React.createElement("h1", {key:"ele1"}, "This is a React"), 
        React.createElement("h2", {key:"ele2"}, "React h2 component")
    ]),
    React.createElement("div", { key:"child2",id: "child2" }, [
        React.createElement("h1", {key:"ele1"}, "This is Angular Component"), 
        React.createElement("h2", {key:"ele2"}, "Angular h2 component")
    ])
]);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


package.json:
-------------
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
},

npm run start (or) npm start


App.js
------

import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

Run the App: npm start







------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

// React Element => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Namaste React"
    );

console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);



run the server : npm run start

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

App.js
------

import React from "react";
import ReactDOM from "react-dom/client";


// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (<h1 className="head">
    Namaste React using JSX
    </h1>);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);


# npm start or npm run start


------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 className="head">
    Namaste React using JSX
    </h1>);

// React Component
// Class Based Component - OLD
// Functional Based Component - NEW

// React Functional Component


const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


# run the server: npm start


------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

const Paragraph = () => (
    <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
);

const Title = () => (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
);

const number = 10000;

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Paragraph />
        <h1 className="heading">Namaste React Functional Component</h1>
        <h2>{number}</h2>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


























