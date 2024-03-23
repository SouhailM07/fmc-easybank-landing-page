import "./mycontainer.css";
// components
import { Navbar, S1, Articles, Footer, Hero } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="space-y-[3rem]">
        <S1 />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
