import BannerBrand from "@/components/layout/BannerBrand";
export default function NotFound() {
  return (
    <div className="">
      <div className="banner-shoplist">
        <div className="banner-shoplist__content container align-items-center">
          <p className="banner-shoplist__title">404 NotFound</p>
          <ul className="d-flex gap-2 text-align-start">
            <li><a href="/" style={{ color: "black", fontFamily: "Lato", fontSize: 16 }}>Home</a></li>
            <li><a href="#" style={{ color: "black", fontFamily: "Lato", fontSize: 16 }}>. Page</a></li>
            <li><a href="/shoplist.html" className="breadcrumb-link">. 404 Not Found</a></li>
          </ul>
        </div>
      </div>

      <section style={{ width: "50%", margin: "100px auto 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <img src="/assets/images/unauth/Group 123.png" className="img-fluid" alt="" style={{ maxWidth: "100%", height: "auto" }} />
        <a href="/" style={{ backgroundColor: "#FB2E86", padding: "8px 22px", borderRadius: "2px", border: "none", marginTop: "20px", textDecoration: "none", fontSize: 16, color: "white", fontFamily: "Josefin Sans", display: "inline-block" }}>
          Back To Home
        </a>
      </section>

      <BannerBrand />
    </div>
  );
}
