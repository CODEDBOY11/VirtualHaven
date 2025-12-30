import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Title from "./components/title/title";
import Services from "./components/Services/services";
import Products from "./components/Products/product";
import About from "./components/About/about";
import Footer from "./components/footer/footer";
import Choose from "./components/choose/choose";
import { useEffect, useState } from "react";
import ServicesPage from "./pages/ServicesPage";
import { programs } from "./data/programs";
import Page from "./Checkout/[slug]/page";

interface AppProps {
  children?: React.ReactNode;
}

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
  // If user navigates to '#/checkout/:slug' render checkout page
  if (routeParts[0] === "checkout") {
    const slug = routeParts[1] || "";
    return (
      <div className="app-root">
        <Navbar />
        <Page params={{ slug }} />
        <Footer />
      </div>
    );
  }
  if (routeParts[0] === "services") {
    const section = routeParts[1] || undefined;
    return (
      <div className="app-root">
        <Navbar />
        <ServicesPage initialSection={section} programs={programs} />
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

      <section style={{ padding: "22px 20px" }}>
        <Services program={programs[0]} />
      </section>

      <Title
        title="Upscale With Relevant Tools"
        subtitle="Browse our add-ons and tools for learners"
      />

      <section style={{ padding: "22px 20px" }}>
        <Products />
      </section>
      <section id="about-us">
        {" "}
        <About />
      </section>

      <Choose />
      <Footer />
    </div>
  );
};

export default App;
