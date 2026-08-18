const SaaSSection = () => {
  return (
    <section id="projeto-biblioteca" className="py-5 position-relative overflow-hidden">
      <div className="container py-5 position-relative z-1">
        
        {/* Cabeçalho / Hero da Biblioteca */}
        <div className="row justify-content-center text-center mb-5 pb-5">
          <div className="col-lg-8">
            <span className="badge bg-secondary text-dark bg-opacity-25 rounded-3 px-3 py-2 fw-semibold tracking-wider mb-4">Lorem</span>
            <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>Lorem</h1>
            <p className="lead text-secondary fs-4 lh-base">Lorem</p>
          </div>
        </div>

        {/* Grid de Imagens Assimétrico e Citações */}
        <div className="row align-items-center g-5 mb-5 pb-5">
          
          {/* Lado Esquerdo */}
          <div className="col-lg-6">
            {/* Imagem com bordas irregulares */}
            <div className="shadow-lg overflow-hidden mb-4" style={{ borderRadius: '2rem 8rem 2rem 2rem' }}>
              <img src="https://placehold.co/500x350" className="img-fluid w-100" alt="Interface da Biblioteca" />
            </div>
            
            {/* Card de Citação sobreposto à imagem */}
            <div className="card border-0 shadow-sm p-4 bg-white mx-4 position-relative" style={{ borderRadius: '2rem', marginTop: '-80px' }}>
              <figure className="mb-0 text-center">
                <blockquote className="blockquote fs-5 fst-italic text-dark">"Lorem"</blockquote>
                <figcaption className="blockquote-footer mt-3 mb-0">Lorem</figcaption>
              </figure>
            </div>
          </div>

          {/* Lado Direito (Deslocado para baixo para quebrar a simetria) */}
          <div className="col-lg-6 mt-lg-5 pt-lg-5">

            {/* Card de Citação sobreposto */}
            <div className="card border-0 shadow-sm p-4 bg-white mx-4 position-relative" style={{ borderRadius: '2rem', marginBottom: '-80px' }}>
              <figure className="mb-0 text-center">
                <blockquote className="blockquote fs-5 fst-italic text-dark">"Lorem"</blockquote>
                <figcaption className="blockquote-footer mt-3 mb-0">Lorem</figcaption>
              </figure>
            </div>

            {/* Imagem com bordas irregulares inversas */}
            <div className="shadow-lg overflow-hidden" style={{ borderRadius: '8rem 2rem 2rem 2rem' }}>
              <img src="https://placehold.co/500x350" className="img-fluid w-100" alt="Detalhes do Sistema" style={{ objectFit: 'cover', height: '400px' }} />
            </div>
          </div>

        </div>

        {/* Separador Orgânico */}
        <div className="text-center my-5 py-4">
          <i className="bi bi-three-dots text-secondary fs-1 opacity-50"></i>
        </div>

        <div className="row g-4 mt-4">

          <div className="col-12 mb-4">
            <h3 className="fw-bold display-6 text-dark">Lorem?</h3>
          </div>

          {/* Card 1 */}
          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Lorem</h4>
                <p className="lh-lg">lorem</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Lorem</h4>
                <p className="lh-lg">lorem</p>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Lorem</h4>
                <p className="lh-lg">lorem</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;