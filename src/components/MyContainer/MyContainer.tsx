import "./mycontainer.css";
// components
import { Navbar, S1, Articles, Footer } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="">
        <S1 />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
