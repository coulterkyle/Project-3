export default function Footer() {
    return (
        <footer class="container-fluid text-center text-lg-start bg-body-tertiary text-muted mt-auto">
          <section id="social-media" class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#" class="me-4 text-reset"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
              <a href="#" class="me-4 text-reset"><i class="fab fa-google"></i></a>
              <a href="#" class="me-4 text-reset"><i class="fab fa-instagram"></i></a>
              <a href="#" class="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="me-4 text-reset"><i class="fab fa-github"></i></a>
            </div>
          </section>

          <section id="secondary-info" class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>GitPrize
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deleniti alias repudiandae excepturi totam sint!
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p class="my-1"><i class="fas fa-home me-3"></i>Charlotte, NC 28210</p>
                  <p class="my-1"><i class="fas fa-envelope me-3"></i>info@gitprize.dev</p>
                  <p class="my-1"><i class="fas fa-phone me-3"></i>704 555 5555</p>
                  <p class="my-1"><i class="fas fa-print me-3"></i>704 555 5555</p>
                </div>
              </div>
            </div>
          </section>
        
          <div class="text-center py-3"> © 2024 GitPrize, LLC</div>
        </footer>
    );
  }