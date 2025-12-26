import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Title from "./components/title/title";
import Services from "./components/Services/services";
import Products from "./components/Products/product";

interface AppProps {
  children?: React.ReactNode;
}
const App = (_props: AppProps) => {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <Title
        title="Discover Your Next Course"
        subtitle="Handpicked learning paths to grow your skills"
      />
      <Services />
      <Title
        title="Upscale With Relevant Tools"
        subtitle="Browse our add-ons and tools for learners"
      />
      <Products />
    </div>
  );
};

export default App;
