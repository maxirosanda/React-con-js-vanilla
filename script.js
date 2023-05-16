
const app = document.getElementById("app")
const root = ReactDOM.createRoot(app)
const nombre = "maxi";
const style = {
    background: "#000"
};
React.createElement("div", {
    style: style
}, React.createElement("p", null, nombre), React.createElement("button", {
    "data-id": "btn1"
}, "Hola"), React.createElement("button", {
    "data-id": "btn2"
}, "Hola"), React.createElement("button", {
    "data-id": "btn3"
}, "Hola"), React.createElement("button", {
    "data-id": "btn4"
}, "Hola"));
root.render()
