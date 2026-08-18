const AboutSection = () => {
  return (
    <section id="sobre" className="py-5 bg-light">
      <div className="container py-5">
        
        <div className="row align-items-center mb-5 pb-4">
          
          {/* Foto */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative">
              {/* Placeholder de Imagem - Substitua pelo link da sua foto */}
              <img 
                src="https://placehold.co/500x600" 
                alt="Minha Foto" 
                className="img-fluid rounded-4 shadow-lg position-relative z-1" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>

          {/* Texto */}
          <div className="col-lg-7 ps-lg-5">
            <span className="text-secondary fw-bold text-uppercase small mb-2 d-block">Lorem</span>
            <h2 className="display-6 fw-bold mb-4">Lorem</h2>
            <p className="text-secondary fs-5 lh-lg mb-4">Lorem</p>
            <p className="text-secondary fs-5 lh-lg mb-5">Lorem</p>
            {/* Botão para baixar currículo */}
            <a href="#" className="btn btn-outline-secondary btn-lg px-4 py-2 fw-semibold rounded-pill">Lorem</a>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mt-5">
          <h3 className="fw-bold text-center mb-5">Lorem</h3>
          
          <div className="row g-4">

            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 rounded-4 bg-white text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3">Lorem</h5>
                  <p className="text-secondary small mb-0">Lorem</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 rounded-4 bg-white text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3">Lorem</h5>
                  <p className="text-secondary small mb-0">Lorem</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 rounded-4 bg-white text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3">Lorem</h5>
                  <p className="text-secondary small mb-0">Lorem</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 rounded-4 bg-white text-center p-4">
                <div className="card-body p-0">
                  <div>
                    <img 
                      src="https://placehold.co/70x70" 
                      alt="" 
                      className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" 
                      style={{ width: '70px', height: '70px' }} 
                    />
                  </div>
                  <h5 className="fw-bold mb-3">Lorem</h5>
                  <p className="text-secondary small mb-0">Lorem</p>
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