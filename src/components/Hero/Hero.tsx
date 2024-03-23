import "./hero.css";
// assets
import bgImg from "/image-mockups.png";
export default function Hero() {
  return (
    <>
      <article id="Hero" className=" layoutSize">
        <section className="space-y-[1.5rem] max-w-[20rem]">
          <h1 className=" text-[2rem] md:text-[2.5rem]">
            Next generation digital banking
          </h1>
          <p className="text-NeutralGrayishBlue max-md:px-3">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn py-[0.6rem] px-[1.6rem]">
            Request Invite
          </button>
        </section>
        {/*  */}
        <section id="Hero__s2" className="">
          <img
            src={bgImg}
            alt="img"
            draggable={false}
            className="lg:h-[39rem] max-w-[30rem] max-sm:w-[18rem] "
            loading="eager"
            fetchPriority="high"
          />
        </section>
      </article>
    </>
  );
}
// {/* className="bg-[url('/image-mockups.png')]" */}
