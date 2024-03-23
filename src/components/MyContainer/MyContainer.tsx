import "./mycontainer.css";
// components
import { Navbar, S1, Articles } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="h-[200vh]">
        <S1 />
        <Articles />
      </main>
    </>
  );
}
