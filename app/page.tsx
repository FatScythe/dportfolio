// componenets...
import Header from "./components/nav";
import HeroBanner from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section>
      <Header />
      <main>
        <HeroBanner />
      </main>

      <Footer className="mt-16" />
    </section>
  );
}
