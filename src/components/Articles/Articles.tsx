import "./articles.css";
// ?types
import { articles_t } from "@/types";
// assets
import articleImg1 from "/image-currency.jpg";
import articleImg2 from "/image-restaurant.jpg";
import articleImg3 from "/image-plane.jpg";
import articleImg4 from "/image-confetti.jpg";

export default function Articles() {
  const articles: articles_t[] = [
    {
      img: articleImg1,
      by: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      txt: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      img: articleImg2,
      by: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      txt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      img: articleImg3,
      by: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      txt: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      img: articleImg4,
      by: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      txt: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <>
      <article id="Articles" className="layoutSize px-[4rem]">
        <h1 className="largeTitle max-md:text-center max-md:text-[1.6rem]">
          Latest Articles
        </h1>
        <section className="mt-[2rem]">
          <ul role="list" className="grid gap-[1rem]">
            {articles.map((e, i) => {
              return <Article key={i} {...e} />;
            })}
          </ul>
        </section>
      </article>
    </>
  );
}

const Article = ({ img, title, txt, by }: articles_t) => {
  return (
    <li role="listitem" className="w-[14rem] pb-[1rem] shadow-xl rounded-md">
      <img src={img} alt="img" className="h-[10rem] w-full  rounded-t-md" />
      <div className="px-[1rem] space-y-[0.8rem] pt-[1rem]">
        <h1 className="text-NeutralGrayishBlue text-[0.8rem]">{by}</h1>
        <h2>{title}</h2>
        <p className="text-NeutralGrayishBlue text-[0.8rem]">{txt}</p>
      </div>
    </li>
  );
};
