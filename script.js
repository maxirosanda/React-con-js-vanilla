const Nav = ()=>{
    return React.createElement("nav", null, "Hola");
};
const App = ()=>{
    const [nombre, setNombre] = React.useState("Maxi");
    const style = {
        background: "#000",
        width: "100%"
    };
    return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("p", null, nombre), React.createElement("div", {
        style: style
    }, React.createElement("button", {
        "data-id": "btn1"
    }, "Hola"), React.createElement("button", {
        "data-id": "btn2"
    }, "Hola"), React.createElement("button", {
        "data-id": "btn3"
    }, "Hola"), React.createElement("button", {
        "data-id": "btn4"
    }, "Hola")));
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
