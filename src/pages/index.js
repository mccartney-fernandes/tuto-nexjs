import React from 'react';
import Layout from '../components/Layout';


export default function Index() {
  return (
    <Layout>
        <div className="container-fluid bg-primary p-3 d-none d-lg-block">
          <div className="row align-items-center justify-content-center">
              <div 
                className="col-12 col-lg-6" 
                style={{borderRightStyle: 'solid', borderRightWidth: 'medium', borderColor: '#19181861'}}>        
                 <h2 className="text-center text-white">Inglês Basico</h2>
                 <p className="text-justify text-white-50">
                  Lorem Ipsum é simplesmente um texto fictício da indústria 
                  tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do 
                  setor desde os anos 1500, quando uma impressora desconhecida pegou uma 
                  galera do tipo e a mexeu para fazer um livro de amostras do tipo. Ele 
                  sobreviveu não apenas cinco séculos, mas também o salto para a composição 
                  eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 
                  1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais 
                  recentemente, com software de editoração eletrônica como 
                 </p>    
              </div>
              <div className="col- 12 col-lg-6">
                  <h2 className="text-center text-white">Inglês Avançado</h2>
                  <p className="text-justify text-white-50">
                    Lorem Ipsum é simplesmente um texto fictício da indústria 
                    tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do 
                    setor desde os anos 1500, quando uma impressora desconhecida pegou uma 
                    galera do tipo e a mexeu para fazer um livro de amostras do tipo. Ele 
                    sobreviveu não apenas cinco séculos, mas também o salto para a composição 
                    eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 
                    1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais 
                    recentemente, com software de editoração eletrônica como 
                  </p>
              </div>
          </div>
      </div>
      <div className="container bg-primary p-3 d-sm-none d-sm-block d-lg-none">
          <div className="row align-items-center justify-content-center">
              <div 
                className="col-12 col-lg-6 p-3" 
                style={{borderBottomStyle: 'solid', borderBottomWidth: 'medium', borderColor: '#19181861'}}>        
                 <h2 className="text-center text-white">Inglês Basico</h2>
                 <p className="text-justify text-white-50">
                  Lorem Ipsum é simplesmente um texto fictício da indústria 
                  tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do 
                  setor desde os anos 1500, quando uma impressora desconhecida pegou uma 
                  galera do tipo e a mexeu para fazer um livro de amostras do tipo. Ele 
                  sobreviveu não apenas cinco séculos, mas também o salto para a composição 
                  eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 
                  1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais 
                  recentemente, com software de editoração eletrônica como 
                 </p>    
              </div>
              <div className="col- 12 col-lg-6 p-3">
                  <h2 className="text-center text-white">Inglês Avançado</h2>
                  <p className="text-justify text-white-50">
                    Lorem Ipsum é simplesmente um texto fictício da indústria 
                    tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do 
                    setor desde os anos 1500, quando uma impressora desconhecida pegou uma 
                    galera do tipo e a mexeu para fazer um livro de amostras do tipo. Ele 
                    sobreviveu não apenas cinco séculos, mas também o salto para a composição 
                    eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 
                    1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais 
                    recentemente, com software de editoração eletrônica como 
                  </p>
              </div>
          </div>
      </div>
    </Layout>
  );
}
