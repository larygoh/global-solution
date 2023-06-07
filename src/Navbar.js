import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-light" aria-label="Third navbar example">
                <div class="container-fluid">
                    <a class="ms-4 navbar-brand" href="#">
                        <img src="images/siazu.semnome.jpeg" alt="Logo" width="50px"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample03">
                        <ul class="navbar-nav ms-auto me-4 mb-2 mb-sm-0">
                            <li class="nav-item me-4">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    to="/educacaoinfantil"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Educação Infantil
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    to="/fazendasurbanas"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Fazendas Urbanas
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    to="/empreendedores"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Empreendedores
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar