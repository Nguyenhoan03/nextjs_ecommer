'use client'
import "@/styles/unauth/ProductDetail.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
import { redirectToLogin } from "@/utils/authRedirect";
import BannerBrand from "@/components/layout/BannerBrand";
export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);
  const router = useRouter();

  const images = [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  ];
  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/auth/me", { credentials: "include" });

      if (!res.ok) {
        toast.error("Hãy đăng nhập để sử dụng giỏ hàng.");
        return redirectToLogin(router);
      }
      

      // router.push("/cart");
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <div>
      {/* Product Section */}
      <section>
        <div className="product-card container mt-5 mb-5">
          <div className="row g-4 align-items-start flex-wrap">
            {/* Thumbnail List */}
            <div className="col-lg-2 Thumbnail__list col-md-3 col-12 order-2 order-md-1">
              <div className="d-flex thumb-list d-sm-block justify-content-center gap-2 gap-sm-0">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={`${src}?auto=format&fit=crop&w=200&q=80`}
                    className={`thumb-img img-fluid mb-2 ${i === 0 ? 'active' : ''}`}
                    alt={`thumb${i + 1}`}
                    onClick={() => setActiveImage(i)}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center">
              <img
                src={`${images[activeImage]}?auto=format&fit=crop&w=600&q=80`}
                className="img-fluid"
                alt="main product"
              />
            </div>

            {/* Product Description */}
            <div className="col-12 product__description col-md-4 order-3">
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
              <div className="mb-3 d-flex align-items-center gap-2" onClick={() => handleAddToCart()}>
                <button className="btn btn-primary px-4" >Add To Cart</button>
                <button className="btn" style={{ width: 45, height: 36, border: '1px solid black' }}><i
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
        <div className="container pt-2">
          <div className="d-flex" style={{ fontSize: 20 }}>
            {["Description", "Additional Info", "Reviews", "Video"].map((tab, index) => (
              <p key={index} onClick={() => setActiveTab(index)} className={`me-4 pb-2 px-2 cursor-pointer ${activeTab === index ? "border-bottom border-primary fw-bold text-primary" : "text-secondary"}`} style={{ transition: "all 0.3s ease", borderBottomWidth: "2px" }}>
                {tab}
              </p>
            ))}
          </div>

          {activeTab == 0 && (
            <div className="pt-4" >
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
          )}

          {activeTab == 1 && (
            <div className="pt-4" >
              <h2>Additional Information</h2>
              <p>Material: Wood, Color: Brown, Warranty: 2 years</p>
            </div>
          )}
          {activeTab == 2 && (
            <div className="pt-4 Review" >
              <h2>Reviews</h2>
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
          {activeTab == 3 && (
            <div className="pt-4" >
              <h2>Product Video</h2>
              <iframe
                width="100%"
                height="400"
                // src="https://e.streamqq.com/videos/686e9604685eec47280ce66a/play?event_id=player-wrapper&adTag=https%3A%2F%2Fvast.freeplayer.click%2Fsextop1.page"
                title="Product Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </section >

      {/* Related Products */}
      < section className="mt-5 mb-5" >
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
      </section >

     <BannerBrand />
    </div >

  );
}
