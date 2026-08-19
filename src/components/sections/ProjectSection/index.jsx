const ProjectSection = () => {
  return(
    <section id="projetos" className="py-5">
      <div className="container py-5">
        
        <div className="text-center mb-5 pb-3">
          <span className="text-secondary fw-bold text-uppercase tracking-wider small mb-2 d-block">Meu Portfólio</span>
          <h2 className="display-6 fw-bold">Projetos em Destaque</h2>
          <p className="text-secondary fs-5">Uma seleção dos meus melhores trabalhos e estudos de caso.</p>
        </div>

        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5">
          <div className="row g-0 align-items-center">
            
            <div className="col-lg-7">
              <img src="/src/assets/imgs/biblioteca-project.jpg" className="img-fluid w-100" alt="Capa do Projeto Principal" style={{ objectFit: 'cover', minHeight: '400px', height: '100%' }} />
            </div>
            
            <div className="col-lg-5 p-4 p-md-5">
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-secondary rounded-pill px-3 py-2">HTML CSS</span>
                <span className="badge bg-light text-dark border rounded-pill px-3 py-2">Laravel</span>
                <span className="badge bg-light text-dark border rounded-pill px-3 py-2">MySQL</span>
              </div>
              
              <h3 className="fw-bold mb-3">Biblioteca</h3>
              <p className="text-secondary mb-4 lh-lg">Sistema web para gerenciamento de livros. Criado no curso técnico, o projeto foca em organização, usabilidade e código limpo. Confira o resultado!</p>
              
              <a href="#" className="btn btn-outline-secondary btn-lg rounded-0 fw-semibold shadow-sm px-4">Confira</a>
            </div>
          </div>
        </div>

        <hr className="text-secondary opacity-25 my-5"/>

        <h4 className="fw-bold mb-5 fs-2">Outros projetos</h4>
        <div className="row g-4">
          
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src="/src/assets/imgs/dz-project.jpg" className="card-img-top" alt="Img card projeto"/>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-2">DevZone</h5>
                <p className="text-secondary small mb-4">Projeto em equipe desenvolvido no curso. Com forte foco em back-end, trabalhamos juntos para estruturar a lógica e criar um sistema robusto por trás da interface.</p>
                <div className="d-flex flex-wrap gap-1 mb-0">
                  <span className="badge bg-light text-secondary border">HTML</span>
                  <span className="badge bg-light text-secondary border">Bootstrap</span>
                </div>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <a href="#" className="text-dark"><i className="bi bi-github fs-5"></i></a>
                <a href="#" className="text-secondary fw-semibold text-decoration-none">Confira</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src="/src/assets/imgs/cemterio-project.jpg" className="card-img-top" alt="Img card projeto"/>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-2">Eterna Paz</h5>
                <p className="text-secondary small mb-4">Eterna Paz: site desenvolvido para uma funerária. O projeto foca em um design respeitoso, sereno e responsivo, oferecendo informações de forma clara.</p>
                <div className="d-flex flex-wrap gap-1 mb-0">
                  <span className="badge bg-light text-secondary border">HTML</span>
                  <span className="badge bg-light text-secondary border">CSS</span>
                </div>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <a href="#" className="text-dark"><i className="bi bi-github fs-5"></i></a>
                <a href="#" className="text-secondary fw-semibold text-decoration-none">Confira</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src="/src/assets/imgs/portal-project.jpg" className="card-img-top" alt="Img card projeto"/>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-2">Portal EEPSAS</h5>
                <p className="text-secondary small mb-4">Criado colaborativamente no curso para entregar uma plataforma moderna, intuitiva e útil para alunos e professores.</p>
                <div className="d-flex flex-wrap gap-1 mb-0">
                  <span className="badge bg-light text-secondary border">React</span>
                  <span className="badge bg-light text-secondary border">Laravel</span>
                </div>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <a href="#" className="text-dark"><i className="bi bi-github fs-5"></i></a>
                <a href="#" className="text-secondary fw-semibold text-decoration-none">Confira</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;