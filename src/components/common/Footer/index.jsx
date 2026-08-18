const Footer = () => {
  return (

  <footer className="bg-dark text-white">
  
  {/* Call to Action / Newsletter */}
  <div className="container py-5 border-bottom border-secondary">
    <div className="row align-items-center py-4">
      <div>
        <h2 className="fw-bold display-6">Lorem</h2>
        <p className="mb-0 text-white-50 fs-5">Lorem</p>
      </div>
    </div>
  </div>

  {/* Seção 2: Navegação Principal e Conteúdo */}
  <div className="container py-5">
    <div className="row gy-5 py-4">
      
      {/* Coluna da Marca */}
      <div className="col-lg-8">
        <a href="#" className="text-white text-decoration-none d-flex align-items-center mb-4">
          <span className="fs-2 fw-bold">Lorem</span>
        </a>
        <p className="text-white-50 mb-4 lh-lg">Lorem</p>
      </div>

      

      <div className="col-lg-2 col-md-4 col-6">
        <h5 className="fw-bold mb-4 text-uppercase tracking-wide">Empresa</h5>
        <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
          <li><a href="#" className="text-white-50 text-decoration-none custom-hover">Lorem</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none custom-hover">Lorem</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none custom-hover">Lorem</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none custom-hover">Lorem</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-4">
        <h5 className="fw-bold mb-4 text-uppercase tracking-wide">Fale Conosco</h5>
        <ul className="list-unstyled d-flex flex-column gap-3 text-white-50 mb-0">
          <li className="d-flex align-items-center gap-3">
            <span>BR 381, 182 - Lagoa do Pau<br/>Jaguaraçu, MG - 35188-000</span>
          </li>
          <li className="d-flex align-items-center gap-3">
            <span>+55 (31) 99818-9971</span>
          </li>
          <li className="d-flex align-items-center gap-3">
            <span>lanaazz0193@gmail.com</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  {/* Seção 3: Direitos Autorais e Políticas */}
  <div className="py-4">
    <div className="text-center">
      <p className="mb-0 text-white-50 small">&copy; 2026 Portfolio da Ana. Todos os direitos reservados.</p>
    </div>
  </div>
  </footer>

  );
};

export default Footer;