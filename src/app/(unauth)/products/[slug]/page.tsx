import { Metadata } from 'next';
import "@/styles/unauth/ProductDetail.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Description of the product page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function ProductPage() {
  return (
    <div>
      {/* Product Section */}
      <section>
        <div className="product-card container mt-5 mb-5">
          <div className="row g-4 align-items-start flex-wrap">
            {/* Thumbnail List */}
            <div className="col-lg-2 Thumbnail__list col-md-3 col-12 order-2 order-md-1">
              <div className="d-flex thumb-list d-sm-block justify-content-center gap-2 gap-sm-0">
                {[
                  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
                  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
                  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={`${src}?auto=format&fit=crop&w=200&q=80`}
                    className={`thumb-img img-fluid mb-2 ${i === 0 ? 'active' : ''}`}
                    alt={`thumb${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
                className="img-fluid"
                alt="main product"
              />
            </div>

            {/* Product Description */}
            <div className="col-12 product__description fade-in-up col-md-4 order-3"  style={{ backgroundColor: "black", color: "white" }}>
              <div className="product-title h4 fw-bold">Playwood arm chair</div>
              <div className="product-rating mb-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <span className="count text-muted">(22)</span>
              </div>
              <div className="product-price mb-2">
                <span className="fw-bold text-primary fs-5">$32.00</span>
                <span className="old-price text-danger text-decoration-line-through ms-2">$32.00</span>
              </div>
              <div className="mb-2">
                <span className="meta-label fw-semibold">Color</span>
              </div>
              <div className="product-desc mb-3 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
                volutpat sit.
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <button className="btn btn-primary px-4">Add To Cart</button>
                <button className="btn btn-outline-secondary rounded-circle"><i
                  className="far fa-heart"></i></button>
              </div>
              <div className="product-meta text-muted">
                <div><span className="meta-label fw-bold">Categories:</span></div>
                <div className="mt-2"><span className="meta-label fw-bold">Tags</span></div>
                <div className="mt-3">
                  <span className="meta-label fw-bold">Share</span>
                  <span className="share-icons ms-2">
                    <i className="fab fa-facebook-f me-2"></i>
                    <i className="fab fa-twitter me-2"></i>
                    <i className="fab fa-dribbble"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Tabs */}
      <section className="mt-5 mb-5 pb-5">
        <div className="container pt-5">
          <div className="d-flex">
            <p className="me-3 active">Description</p>
            <p className="me-3">Additional Info</p>
            <p className="me-3">Reviews</p>
            <p>Video</p>
          </div>

          <div className="pt-4">
            <h2>Varius tempor.</h2>
            <p>
              Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et habitasse amet. Montes,
              mauris varius ac est bibendum. Scelerisque a risus ac ante. Eu in fringilla nunc nec. Dui massa viverra.
            </p>
            <h2 className="pt-4">More details</h2>
            <ul>
              {[...Array(4)].map((_, i) => (
                <li key={i}>↪ Faucibus justo netus dis. Eu in fringilla nunc nec.</li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <h2>Additional Information</h2>
            <p>Material: Wood, Color: Brown, Warranty: 2 years</p>
          </div>

          <div className="pt-4">
            <h2>Reviews</h2>
            <p>No reviews yet. Be the first to review this product!</p>
          </div>

          <div className="pt-4">
            <h2>Product Video</h2>
            <iframe
              width="100%"
              height="400"
              src="https://e.streamqq.com/videos/686e9604685eec47280ce66a/play?event_id=player-wrapper&adTag=https%3A%2F%2Fvast.freeplayer.click%2Fsextop1.page"
              title="Product Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-5 mb-5">
        <div className="container">
          <h2 className="mb-4">Related Products</h2>
          <div className="row">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={`./images/Rectangle 12${7 + id}.png`}
                    className="card-img-top"
                    alt="Related Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mens Fashion Wear</h5>
                    <p className="card-text text-primary">$67.00</p>
                    <p className="text-warning">★★★★☆</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <div className="container mt-5">
        <section className="d-flex justify-content-around align-items-center my-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href="#">
              <img
                src={`./images/Screenshot 2025-05-20 1539${10 + n}.png`}
                alt={`Brand ${n}`}
                className="img-fluid"
              />
            </a>
          ))}
        </section>
      </div>
    </div>

  );
}
