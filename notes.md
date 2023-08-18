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















