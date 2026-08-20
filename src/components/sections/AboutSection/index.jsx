const AboutSection = () => {
  return (
    <section id="sobre" className="py-5 c-about">
      <div className="container py-5">
        
        <div className="row align-items-center mb-5 pb-4">
          
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative">
              <img 
                src="/src/assets/imgs/foto-pessoal.png" 
                alt="Minha Foto" 
                className="img-fluid rounded-4 shadow-lg position-relative z-1" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>

          <div className="col-lg-7 ps-lg-5">
            <span className="f-darkred fw-bold text-uppercase small mb-2 d-block">Sobre mim</span>
            <h2 className="f-g fw-bold mb-4 text-uppercase f-white">Olá!</h2>
            <p className="f-lightgray fs-5 lh-lg mb-4">Sou uma jovem desenvolvedora apaixonada por tecnologia e inovação, trilhando os passos finais da minha formação básica e técnica na Escola Estadual Professora Sebastiana de Almeida e Silva. Como estudante do Ensino Médio Técnico Integral, dedico minha rotina ao curso de Desenvolvimento e Análise de Sistemas. É nesse ambiente dinâmico que aprimoro diariamente minhas habilidades analíticas e de programação, sempre com o objetivo de criar aplicações que façam a diferença e iniciar uma carreira de impacto na área de TI.</p>
            <a href="#" className="btn btn-outline-light c-btn btn-lg px-4 py-2 fw-semibold rounded-0">Contato</a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="f-white fw-bold text-center mb-5">Tecnologias que domino</h3>
          
          <div className="row g-4 card-heigt">

            <div className="col-sm-6 col-lg-3">
              <div className="card border-red shadow-sm h-100 rounded-4 c-darkgray text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3 f-lightgray">HTML</h5>
                  <p className="f-gray small mb-0">Estrutura de páginas web.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-red shadow-sm h-100 rounded-4 c-darkgray text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3 f-lightgray">CSS</h5>
                  <p className="f-gray small mb-0">Estilização e layouts responsivos.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-red shadow-sm h-100 rounded-4 c-darkgray text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3 f-lightgray">JavaScript</h5>
                  <p className="f-gray small mb-0">Interatividade e lógica no front-end.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-red shadow-sm h-100 rounded-4 c-darkgray text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3 f-lightgray">SQL</h5>
                  <p className="f-gray small mb-0">Banco de Dados e consultas.</p>
                </div>
              </div>
            </div>  

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;