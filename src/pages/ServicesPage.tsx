import Title from "../components/title/title";
import Services from "../components/Services/services";
import Products from "../components/Products/product";
import { useEffect } from "react";
import "./ServicePage.css";
import Hero from "../components/hero/hero";
import type { Program } from "../types/program";

interface ServicesPageProps {
  initialSection?: string;
  programs: Program[];
}

const ServicesPage = ({ initialSection, programs }: ServicesPageProps) => {
  useEffect(() => {
    // Make navbar solid on this page (no transition/opacity)
    document.body.classList.add("services-navbar-solid");
    return () => document.body.classList.remove("services-navbar-solid");
  }, []);

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

  const featured = programs && programs.length > 0 ? programs[0] : undefined;

  return (
    <main className="services-page" id="services-page">
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
        <a className="btn btn-primary" href="#/services/products">
          Jump to Products
        </a>
      </nav>

      <section style={{ padding: "22px 20px" }}>
        {featured ? (
          <Services program={featured} />
        ) : (
          <div className="p-6 text-center">No programs available</div>
        )}
      </section>

      <section id="products" style={{ padding: "22px 20px" }}>
        <Products />
      </section>
    </main>
  );
};

export default ServicesPage;
