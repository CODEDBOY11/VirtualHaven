import Title from "../components/title/title";
import Services from "../components/Services/services";
import Products from "../components/Products/product";
import { useEffect } from "react";

interface ServicesPageProps {
  initialSection?: string;
}

const ServicesPage = ({ initialSection }: ServicesPageProps) => {
  useEffect(() => {
    if (!initialSection) return;
    const id = initialSection.toLowerCase();
    if (id === "courses" || id === "products") {
      const el = document.getElementById(id);
      if (el)
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          50
        );
    }
  }, [initialSection]);

  return (
    <main className="services-page">
      <Title title="Services" subtitle="Courses and Products" />

      <nav
        className="services-nav"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 12,
        }}
        aria-label="Services quick links"
      >
        <a className="btn btn-light" href="#/services/courses">
          Jump to Courses
        </a>
        <a className="btn btn-light" href="#/services/products">
          Jump to Products
        </a>
      </nav>

      <section style={{ padding: "22px 20px" }}>
        <Services />
      </section>

      <section id="products" style={{ padding: "22px 20px" }}>
        <Products />
      </section>
    </main>
  );
};

export default ServicesPage;
