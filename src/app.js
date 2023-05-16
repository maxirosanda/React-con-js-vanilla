import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./components/nav.js"
import Home from "./components/home.js"
import Blogs from './components/blogs.js'

export const App = ()=>{
    const [nombre, setNombre] = React.useState("Maxi");
    const style = {
        background: "#000",
        width: "100%"
    };
    return React.createElement(BrowserRouter, null, React.createElement(Nav, {
        nombre: nombre
    }), React.createElement(Routes, null, React.createElement(Route, {
        path: "/blogs/:id",
        element: React.createElement(Blogs, null)
    }), React.createElement(Route, {
        path: "/",
        element: React.createElement(Home, null)
    })));
};