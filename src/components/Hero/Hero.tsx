import "./hero.css";
// assets
import bgImg from "/image-mockups.png";
export default function Hero() {
  return (
    <>
      <article id="Hero" className=" layoutSize">
        <section className="space-y-[1.5rem] w-[20rem]">
          <h1 className="text-[2.5rem]">Next generation digital banking</h1>
          <p className="text-NeutralGrayishBlue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn py-[0.5rem] px-[1.6rem]">
            Request Invite
          </button>
        </section>
        {/*  */}
        <section className="bg-[url('/bg-intro-desktop.svg')] bg-[center_-4rem]  relative flex justify-center  bg-cover bg-no-repeat translate-x-[4rem]">
          <img
            src={bgImg}
            alt="img"
            className="h-[39rem]"
            loading="eager"
            fetchPriority="high"
          />
        </section>
      </article>
    </>
  );
}
// {/* className="bg-[url('/image-mockups.png')]" */}
