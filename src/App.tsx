import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Title from "./components/title/title";
import Services from "./components/Services/services";
import Products from "./components/Products/product";
import About from "./components/About/about";
import Footer from "./components/footer/footer";
import Choose from "./components/choose/choose";

interface AppProps {
  children?: React.ReactNode;
}
import { useEffect, useState } from "react";
import ServicesPage from "./pages/ServicesPage";

const App = (_props: AppProps) => {
  const [route, setRoute] = useState<string>(
    () => window.location.hash.replace(/^#\//, "") || "home"
  );

  useEffect(() => {
    const onHash = () =>
      setRoute(window.location.hash.replace(/^#\//, "") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Simple hash router: if route starts with 'services' render Services page (supports '#/services' and '#/services/courses')
  const routeParts = route.split("/");
  if (routeParts[0] === "services") {
    const section = routeParts[1] || undefined;
    return (
      <div className="app-root">
        <Navbar />
        <ServicesPage initialSection={section} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <Title
        title="Discover Your Next Course"
        subtitle="Handpicked learning paths to grow your skills"
      />
      <div
        className="title-actions"
        style={{ marginTop: 12, textAlign: "center" }}
      >
        <a className="btn btn-light" href="#/services/courses">
          View all services
        </a>
      </div>

      <section style={{ padding: "22px 20px" }}>
        <Services />
      </section>

      <Title
        title="Upscale With Relevant Tools"
        subtitle="Browse our add-ons and tools for learners"
      />
      <div
        className="title-actions"
        style={{ marginTop: 12, textAlign: "center" }}
      >
        <a className="btn btn-light" href="#/services/products">
          View all products
        </a>
      </div>

      <section style={{ padding: "22px 20px" }}>
        <Products />
      </section>

      <About />
      <Choose />
      <Footer />
    </div>
  );
};

export default App;
