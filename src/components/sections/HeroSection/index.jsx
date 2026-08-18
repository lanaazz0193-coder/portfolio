const HeroSection = () => {
  return (
    <section className="position-relative bg-dark text-white text-center py-5 overflow-hidden">
      <div className="container py-5">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10 col-xl-8">
            
            {/* Divzinha do cabeçalho */}
            <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill px-3 py-1 mb-4">
              <span className="badge bg-secondary rounded-pill fw-semibold">Lorem</span>
              <span className="small text-white-50">Lorem</span>
              <i className="bi bi-chevron-right small text-white-50"></i>
            </div>

            {/* Título Principal */}
            <h1 className="display-4 fw-bold lh-sm mb-4">Ana - Souza</h1>

            {/* Parágrafo de Destaque */}
            <p className="lead text-white-50 mb-5 fs-4 px-md-3">Lorem</p>

            {/* Botões de Chamada para Ação (CTA) */}
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
              <a href="#" className="btn btn-secondary btn-lg px-4 py-3 fw-bold rounded-pill shadow-lg w-100 w-sm-auto">
                Lorem
              </a>
              <a href="#" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold rounded-pill w-100 w-sm-auto">
                Lorem
              </a>
            </div>

            {/* Rodapé da Hero Section */}
            <div className="pt-4 border-top border-white border-opacity-10">
              <p className="small text-white-50 mb-3 text-uppercase fw-semibold fs-7">Lorem</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;