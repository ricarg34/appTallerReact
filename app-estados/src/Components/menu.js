import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

//Creacion del Componenet Menu
const Rutas = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                < Route path="home" element={<Home />} />
                < Route path="about" element={<About />} />
                < Route path="productos" element={<Productos />} />
                < Route path="*" element={<p>Esta Pagina no existe:404!</p>} />
            </Route>
        </Routes>
    )
}

//Diseño del Menu
const Layout = () => {
    const style = ({ isActive }) => ({
        fontWeigth: isActive ? 'bold' : 'normal',
    });

    return (
        <>
            <h1>React Router Ejemplo</h1>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '3rem',
                }}
            >
                <NavLink to="/home" style={style}>
                    Home
                </NavLink>

                <NavLink to="/about" style={style}>
                    About
                </NavLink>
                <NavLink to="/productos" style={style}>
                    Productos
                </NavLink>
            </nav>

            <main style={{ padding: '3rem 0' }}>
                <Outlet />
            </main>
        </>
    )
}

//Los Componentes que llamara cada ruta del Menu

const Home = () => {
    return (
        <>
            <h2>Esta es tu Pagina de Home</h2>
        </>
    );
};

const About = () => {
    return (
        <>
            <h2>Esta es tu Pagina de About</h2>
        </>
    );
};

const Productos = () => {
    return (
        <>
            <h2>Esta es tu Pagina de Productos</h2>
        </>
    );
};


export default Rutas;

//Nota no olvidarse en la aplicacion index.js envolver la aplicacion con <Route>