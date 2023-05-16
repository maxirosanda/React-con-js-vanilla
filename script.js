import React from "./react.js";
import ReactDOM from  "./react-dom.js";
const nombre = "maxi";

const Buttons = () => {
const style = {background:"#000"};
    return (
        <div style={style}>
            <p>{nombre}</p>
            <button data-id="btn1">Hola</button>
            <button data-id="btn2">Hola</button>
            <button data-id="btn3">Hola</button>
            <button data-id="btn4">Hola</button>
        </div>
    )
}
const app = document.getElementById("app")
const root = ReactDOM.createRoot(app)
root.render(Buttons)
