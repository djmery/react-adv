import { BrowserRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

// el suspense envuelve todo el BrowserRouter, sirve para decir a react cuando está cargando algún commponente o módulo
// mientras carga haz lo siguiente

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(route => (
                                    <li key={route.to}>
                                        <NavLink
                                            to={route.to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''} >{route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }


                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(route => (
                                <Route
                                    key={route.to}
                                    path={route.path}
                                    element={<route.Component />}
                                />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}