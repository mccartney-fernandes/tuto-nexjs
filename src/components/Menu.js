import React, { useState } from 'react';

import Link from 'next/link';

export default function Manu() {
    const [openMenu, setOpenMenu] = useState(false);

   
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-around">
        <div className="d-none d-lg-block"></div>
        <div className="d-none d-lg-block"></div>
        <div className="d-flex flex-column align-items-center">
            <a className="navbar-brand" href="#">
                <img className="mt-n3 img-fluid" src={`https://lh3.googleusercontent.com/proxy/fAIlV878wa8tB_scLPA6yRR0qjI9LqpeXFe-njc_-e2Z2zhuo855X5MQ9hnEyV8462LKO-MRjL0LT63di3s4M13edGQ1417NAHu7wQB7KbA_kqo`} width="150" height="140" alt="" />
            </a>
            <button className="navbar-toggler align-self-stretch" type="button" onClick={ ()=> setOpenMenu(state => !state) } data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`} id="conteudoNavbarSuportado">
                <ul className="navbar-nav ul-menu mr-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link text-links">HOME</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/didatica">
                            <a className="nav-link text-links">DIDATICA</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contato">
                            <a className="nav-link text-links">CONTATO</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="d-none d-lg-block text-phone text-center">
            Telefones: <br /> 87-9999-999 / 87-9999-9999
        </div>
    </nav>
    <div className="d-sm-none d-sm-block d-lg-none mb-4 mt-4">
        <p className="h4 text-center text-secondary">Telefones: <br /> 87-9999-999 / 87-9999-9999</p>
    </div>
    </>
  );
}
