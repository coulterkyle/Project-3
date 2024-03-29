export default function Footer() {
    return (
        <footer className="container-fluid text-center text-lg-start bg-body-primary text-muted mt-auto" data-bs-theme="dark">
          <section id="social-media" className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-4 text-reset"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-4 text-reset"><i className="fab fa-google"></i></a>
              <a href="#" className="me-4 text-reset"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-4 text-reset"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="me-4 text-reset"><i className="fab fa-github"></i></a>
            </div>
          </section>

          <section id="secondary-info" className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fa-solid fa-virus-slash me-3 text-success"></i>G<span className="text-success">it</span>Fi<span className="text-success">x</span>
                  </h6>
                  <p>
                  Remember, debugging is like being the detective in a crime movie where you are also the murderer. Happy sleuthing!
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-none d-md-block">
                  <h6 className="text-uppercase text-success fw-bold mb-4">Contact</h6>
                  <p className="my-1"><i className="fas fa-home me-3"></i>Charlotte, NC 28210</p>
                  <p className="my-1"><i className="fas fa-envelope me-3"></i>info@gitfix.dev</p>
                  <p className="my-1"><i className="fas fa-phone me-3"></i>704 555 5555</p>
                  <p className="my-1"><i className="fas fa-print me-3"></i>704 555 5555</p>
                </div>
              </div>
            </div>
          </section>
        
          <div className="text-center py-3 text-success"> © 2024 GitFix, LLC</div>
        </footer>
    );
  }