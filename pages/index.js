import React from "react";
import Header from "../components/mainHeader";
import Articles from "../components/mainPage/articles/articles";
import Contactus from "../components/mainPage/contactus/contactus";
import Home1 from "../components/mainPage/home/home";
import Home2 from "../components/mainPage/home/home2";
import Services from "../components/mainPage/services/services";
import Projects from "../components/mainPage/projects/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home = () => {
  // hide body scroll-bar in homepage
  React.useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  });

  const [whiteHeader, setwhiteHeader] = React.useState(false);

  React.useEffect(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        id: `panel-${i + 1}`,
        trigger: panel,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        onUpdate: ({ pin, progress }) => {
          if (
            (pin.classList[1] === "panel-1" && progress >= 0.9) ||
            (pin.classList[1] === "panel-2" && progress <= 0.9)
          )
            setwhiteHeader(true);
          else setwhiteHeader(false);
        }
      });
    });
    ScrollTrigger.create({
      id: "home-snap",
      snap: 1 / 5
    });

    return () => {
      ScrollTrigger.getById("panel-1").kill();
      ScrollTrigger.getById("panel-2").kill();
      ScrollTrigger.getById("panel-3").kill();
      ScrollTrigger.getById("panel-4").kill();
      ScrollTrigger.getById("panel-5").kill();
      ScrollTrigger.getById("panel-6").kill();
      ScrollTrigger.getById("home-snap").kill();
    };
  }, []);

  return (
    <>
      <Header white={whiteHeader} fixed={false} activeItem="/" />
      <div className="flex flex-col">
        <Home1 />
        <Home2 />
        <Services />
        <Projects />
        <Articles />
        <Contactus />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  return { props: {} };
}
