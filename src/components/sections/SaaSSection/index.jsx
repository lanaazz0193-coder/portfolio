const SaaSSection = () => {
  return (
    <section id="projeto-biblioteca" className="py-5 position-relative overflow-hidden">
      <div className="container py-5 position-relative z-1">
        
        <div className="row justify-content-center text-center mb-5 pb-5">
          <div className="col-lg-8">
            <span className="badge bg-secondary text-dark bg-opacity-25 rounded-3 px-3 py-2 fw-semibold tracking-wider mb-4">Projeto Destaque</span>
            <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>O Refúgio das Palavras</h1>
            <p className="lead text-secondary fs-4 lh-base">Uma biblioteca digital pessoal projetada para catalogar leituras, registrar resenhas e preservar os aprendizados mais profundos de cada página virada. Mais que um sistema, um santuário para mentes curiosas.</p>
          </div>
        </div>

        <div className="row align-items-center g-5 mb-5 pb-5">
          
          <div className="col-lg-6">
            <div className="shadow-lg overflow-hidden mb-4" style={{ borderRadius: '2rem 8rem 2rem 2rem' }}>
              <img src="https://placehold.co/500x350" className="img-fluid w-100" alt="Interface da Biblioteca" />
            </div>
            
            <div className="card border-0 shadow-sm p-4 bg-white mx-4 position-relative" style={{ borderRadius: '2rem', marginTop: '-80px' }}>
              <figure className="mb-0 text-center">
                <blockquote className="blockquote fs-5 fst-italic text-dark">"A vida de Ivan Ilitch fora a mais simples e a mais comum, e portanto a mais terrível."</blockquote>
                <figcaption className="blockquote-footer mt-3 mb-0">Liev Tolstói</figcaption>
              </figure>
            </div>
          </div>

          <div className="col-lg-6 mt-lg-5 pt-lg-5">

            <div className="card border-0 shadow-sm p-4 bg-white mx-4 position-relative" style={{ borderRadius: '2rem', marginBottom: '-80px' }}>
              <figure className="mb-0 text-center">
                <blockquote className="blockquote fs-5 fst-italic text-dark">"O segredo da existência humana não consiste somente em viver, mas em saber pelo que se vive."</blockquote>
                <figcaption className="blockquote-footer mt-3 mb-0">Fiódor Dostoiévski</figcaption>
              </figure>
            </div>

            <div className="shadow-lg overflow-hidden" style={{ borderRadius: '8rem 2rem 2rem 2rem' }}>
              <img src="https://placehold.co/500x350" className="img-fluid w-100" alt="Detalhes do Sistema" style={{ objectFit: 'cover', height: '400px' }} />
            </div>
          </div>

        </div>

        <div className="text-center my-5 py-4">
          <i className="bi bi-three-dots text-secondary fs-1 opacity-50"></i>
        </div>

        <div className="row g-4 mt-4">

          <div className="col-12 mb-4">
            <h3 className="fw-bold display-6 text-dark">O que tem por dentro?</h3>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Acervo Digital</h4>
                <p className="lh-lg">Um catálogo minucioso de cada livro lido, organizado por gênero, autor e ano. Cada entrada possui capa, sinopse e uma contagem de progresso de leitura.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Resenhas e Notas</h4>
                <p className="lh-lg">Mais do que guardar nomes, o sistema permite o registro de highlights (marcações), anotações pessoais críticas e a construção de resenhas detalhadas.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-6 col-xl-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-secondary rounded-5">
              <div className="card-body d-flex flex-column">
                <div>
                  <img src="https://placehold.co/80x80" alt="" className="d-inline-flex justify-content-center rounded-circle align-items-center mb-3" style={{ width: '80px', height: '80px' }} />
                </div>
                <h4 className="fw-bold mb-3">Estatísticas Reais</h4>
                <p className="lh-lg">Um dashboard que gera gráficos automáticos das minhas métricas de leitura: páginas lidas por mês, autores favoritos e diversidade de gêneros literários.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;