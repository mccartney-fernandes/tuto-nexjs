import React from 'react';

// import { Container } from './styles';

export default function Hero() {
  return (
    <div className="container-fluid p-3">
        <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-5">        
                <p className="h3 text-center">Professores capacitados para você falar Inglês rapidamente.</p>       
            </div>
            <div className="col- 12 col-lg-7">
                <img className="img-fluid" style={{minWidth: '100%'}} src={`https://www.cursosnovos.com.br/wp-content/uploads/2019/09/curso-ingles.jpg`} alt="" />
            </div>
        </div>
    </div>
  );
}
