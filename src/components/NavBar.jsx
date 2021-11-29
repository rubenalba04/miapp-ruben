import React from 'react'

const NavBar = () => {
    return (
        <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top my-0 py-0" id="navegador">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="nosotros.html">Nosotros</a></li>
                <li class="nav-item"><a class="nav-link" href="nuestracarta.html">Nuestra Carta</a></li>
                <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
            </ul>
        </div>
    </div>
  </nav>
        </div>
    )
}

export default NavBar
