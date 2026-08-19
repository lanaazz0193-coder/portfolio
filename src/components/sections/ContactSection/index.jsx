const ContactSection = () => {
  return(
    <section id="contato" className="py-5 bg-light position-relative overflow-hidden">
      <div className="container py-5 position-relative z-1">
        
        <div className="text-center mb-5">
          <span className="text-secondary fw-bold text-uppercase tracking-wider small mb-2 d-block">Contato</span>
          <h2 className="display-6 fw-bold">Vamos trabalhar juntos?</h2>
        </div>

        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0">
            
            {/* <!-- Lado Esquerdo --> */}
            <div className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between bg-dark">
              
              <div className="mb-5">
                <h3 className="fw-bold mb-3 text-white">Informações de Contato</h3>
                <p className="text-white-50">Preencha o formulário e entrarei em contato em até 24 horas. Ou, se preferir, use um dos canais diretos abaixo.</p>
              </div>

              <div className="d-flex flex-column gap-4 mb-5">
            
                {/* <!-- WhatsApp --> */}
                <a href="#" className="text-decoration-none text-white d-flex align-items-center gap-3 group-hover">
                  <div>
                    <img src="https://placehold.co/35x35" alt="" className="p-2 rounded-circle d-inline-flex transition-all"/>
                  </div>
                  <div>
                    <p className="mb-0 text-white-50 small">WhatsApp / Telefone</p>
                    <p className="mb-0 fw-semibold fs-5">+55 (31) 99818-9971</p>
                  </div>
                </a>

                {/* <!-- E-mail --> */}
                <a href="mailto:lanaazz0193@gmail.com" className="text-decoration-none text-white d-flex align-items-center gap-3">
                  <div>
                    <img src="https://placehold.co/35x35" alt="" className="p-2 rounded-circle d-inline-flex transition-all"/>
                  </div>
                  <div>
                    <p className="mb-0 text-white-50 small">E-mail</p>
                    <p className="mb-0 fw-semibold fs-5">lanaazz0193@gmail.com</p>
                  </div>
                </a>

                {/* <!-- Localização --> */}
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <img src="https://placehold.co/35x35" alt="" className="p-2 rounded-circle d-inline-flex transition-all"/>
                  </div>
                  <div>
                    <p className="mb-0 text-white-50 small">Localização base</p>
                    <p className="mb-0 fw-semibold fs-5">Jaguaraçu, MG - Brasil</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Formulário */}
            <div className="col-lg-7 bg-white p-4 p-md-5">
              <h4 className="fw-bold mb-4">Envie uma mensagem</h4>
              
              <form>
                <div className="row g-3">
                  
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control bg-light border-0" id="inputNome" placeholder="Seu Nome"/>
                      <label htmlFor="inputNome" className="text-secondary">Seu Nome</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control bg-light border-0" id="inputEmail" placeholder="nome@exemplo.com"/>
                      <label htmlFor="inputEmail" className="text-secondary">E-mail</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control bg-light border-0" id="inputAssunto" placeholder="Assunto"/>
                      <label htmlFor="inputAssunto" className="text-secondary">Assunto</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea className="form-control bg-light border-0" placeholder="Deixe sua mensagem" id="inputMensagem" style={{ height: '150px' }}></textarea>
                      <label htmlFor="inputMensagem" className="text-secondary">Sua Mensagem</label>
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-secondary btn-lg w-50 rounded-0 fw-bold shadow-sm py-3 d-flex justify-content-center align-items-center gap-2">
                      <i className="bi bi-send-fill"></i> Enviar Mensagem
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;