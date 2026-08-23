const HeroSection = () => {
  return (
    <section className="position-relative bg-dark text-white text-center py-5 overflow-hidden">

      {/* Imagem banner */}     
      <img 
        // src="/src/assets/imgs/banner-hero.png"
        alt="Imagem de fundo" 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', opacity: 0.4 }} 
      />

      {/* Imagem perfil */}
      <div className="container py-5 position-relative z-1">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10 col-xl-8">           
            {/* <div className="mb-4">
              <img 
                src="/src/assets/imgs/banner-hero.png" 
                alt="Foto de Ana Souza" 
                className="rounded-circle border border-3 border-secondary shadow-lg"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div> */}

            {/* ADS | Dev */}
            <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill px-3 py-1 mb-4">
              <span className="badge bg-secondary rounded-pill fw-semibold">ADS</span>
              <span className="small text-white-50">Dev</span>
              <i className="bi bi-chevron-right small text-white-50"></i>
            </div>

            {/* Título e subtítulo */}
            <h1 className="display-4 fw-bold lh-sm mb-4 f-ballet">Ana - Souza</h1>
            <p className="lead text-white-50 mb-5 fs-6 px-md-3">Desenvolvedora em constante evolução.</p>

            {/* Botão */}
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
              <a href="#" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold rounded-0 w-sm-auto w-25">
                Trabalhe Comigo
              </a>
            </div>

            {/* Citação */}
            <div className="pt-4 border-top border-white border-opacity-10">
              <blockquote className="blockquote fs-6 fst-italic">"A vida é um pêndulo que oscila entre o sofrimento e o tédio."</blockquote>
              <figcaption className="blockquote-footer mt-3 mb-0 text-white-50">Arthur Schopenhauer</figcaption>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;