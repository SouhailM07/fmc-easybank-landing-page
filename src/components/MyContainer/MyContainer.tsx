import "./mycontainer.css";
// components
import { Navbar } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <div className="h-[200vh]"></div>
    </>
  );
}
