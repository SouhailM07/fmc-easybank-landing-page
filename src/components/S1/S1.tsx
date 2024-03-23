import "./s1.css";
// ? types
import { s1_arr } from "@/types";
//
import imgCard1 from "/icon-online.svg";
import imgCard2 from "/icon-budgeting.svg";
import imgCard3 from "/icon-onboarding.svg";
import imgCard4 from "/icon-api.svg";

export default function S1() {
  let arrOfCards: s1_arr[] = [
    {
      img: imgCard1,
      title: "Online Banking",
      txt: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      img: imgCard2,
      title: "Simple Budgeting",
      txt: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      img: imgCard3,
      title: "Fast Onboarding",
      txt: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      img: imgCard4,
      title: "Open API",
      txt: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <>
      <article className="bg-NeutralLightGrayishBlue layoutSize max-lg:text-center py-[3rem] px-[4rem]">
        <h1 className="text-[1.8rem]">Why choose Easybank?</h1>
        <p className="text-NeutralGrayishBlue text-[0.8rem] max-lg:mx-auto max-w-[35rem] mt-[1rem]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <section className="mt-[2rem]">
          <ul
            role="list"
            className="flex justify-between flex-wrap gap-[1rem] max-lg:gap-[2rem]  max-lg:justify-center"
          >
            {arrOfCards.map((e, i) => {
              return <MyCard key={i} {...e} />;
            })}
          </ul>
        </section>
      </article>
    </>
  );
}

const MyCard = ({ img, title, txt }: s1_arr) => {
  return (
    <li className="w-[14rem]" role="listitem">
      <img src={img} alt="logo" className="max-lg:mx-auto" />
      <p className="my-[1rem] text-[1.2rem]">{title}</p>
      <p className="text-[0.8rem] font-medium text-NeutralGrayishBlue">{txt}</p>
    </li>
  );
};
