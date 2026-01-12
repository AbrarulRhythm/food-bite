import About from "./_components/About";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Hero></Hero>
      </section>

      <section className="pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14">
        <About></About>
      </section>
    </>
  );
}
