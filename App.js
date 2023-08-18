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

