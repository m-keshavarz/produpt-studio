const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      iphone5: { min: "300px", max: "374px" },
      galaxyS5: { min: "360px", max: "374px" },
      ...screens,
      "custom-h-full": { raw: "(min-height: 700px)" },
      "3xl": "1920px"
    },
    extend: {
      height: {
        7.5: "1.875rem",
        8.5: "2.125rem",
        19.5: "4.875rem",
        27: "6.75rem"
      },
      width: {
        19.5: "4.875rem"
      },
      fontSize: {
        1: ".25rem",
        1.5: ".375rem",
        2: ".5rem",
        2.5: ".625rem",
        3: ".75rem",
        3.5: ".875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        5.5: "1.375rem",
        6: "1.5rem",
        6.5: "1.625rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8: "2rem",
        8.5: "2.125rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        11.5: "2.875rem",
        12: "3rem"
      },
      fontFamily: {
        Thin: ["Thin"],
        ExtraLight: ["ExtraLight"],
        Light: ["Light"],
        Medium: ["Medium"],
        SemiBold: ["SemiBold"],
        ExtraBold: ["ExtraBold"],
        UltraBold: ["UltraBold"],
        Black: ["Black"],
        Heavy: ["Heavy"],
        SuperHeavy: ["SuperHeavy"],
        Bold: ["Bold"],
        Regular: ["Regular"]
      },
      colors: {
        "white-Two": "#f5f5f5",
        "green-blue": "#00c485",
        "dusky-blue": "#445391",
        "dark-slate-blue": "#273476",
        "grey-blue": "#6878aa",
        "cloudy-blue": "#bfc6dd",
        "very-light-blue": "#e7eaf5",
        "very-light-Gray": "#d5d5d5",
        "light-grey-blue": "#94a1c4",
        "green-blue-light": "#00c485",
        "pale-grey": "#fafbff",
        "brown-grey": "#a8a8a8",
        "very-light-red": "#fedfdd",
        Ice: "#dff7ee",
        Red: "#ff1100",
        projects: "#f7f7f7",
        "contact-us": "#f3f3f3",
        seafoam: "#66dbb6"
      },
      zIndex: {
        1000: 1000,
        1500: 1500,
        2000: 2000,
        5000: 5000,
        9999: 9999,
        "-10": "-10",
        "-1": "-1"
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms"
      },
      transitionDelay: {
        0: "0ms"
      },
      backdropBlur: {
        1: "1px",
        2: "2px"
      },
      boxShadow: {
        lightShadow: "0 0 16px 0 #e7eaf5",
        articlesShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
        36: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        panel: "0 0 30px rgb(0 0 0 / 40%)",
        pin: "0 0 10px 0 #e4e6ef;",
        shsh: "0 -3px 6px 0 rgb(231 234 245)",
        "ContactUs-btn-shadow": "0 3px 10px 0 #c9cfe2"
      },
      backgroundImage: {
        "home-slider": "url('/images/home-first.png')",
        "home-slider-mob": "url('/images/home-first-mob.png')",
        "home-slider2": "url('/images/home-second.png')",
        "home-slider2-mob": "url('/images/home-second-mob.png')",
        "home-services": "url('/images/home-services.webp')",
        "home-services-mob": "url('/images/home-services-mob.webp')",
        "home-projects": "url('/images/home-projects.webp')",
        "home-articles": "url('/images/mvmnt-home.png')",
        "home-contact-us-mob": "url('/images/home-contact-us-mobile.webp')",
        // consulting single page:
        "consulting-page": "url('/images/consulting.png')",
        // services page:
        "services-mob-1": "url('/images/Services-1--Mob.png')",
        "services-mob-2": "url('/images/Services-2--Mob.png')",
        "services-mob-3": "url('/images/Services-3--Mob.png')",
        "services-desk-1": "url('/images/Services-1-Fa.png')",
        "services-desk-2": "url('/images/Services-2-Fa.png')",
        "services-desk-3": "url('/images/Services-3-Fa.png')",
        // members
        darabi1: "url('/images/users/darabi1.jpg')",
        darabi2: "url('/images/users/darabi2.jpg')",
        nazari1: "url('/images/users/nazari1.jpg')",
        nazari2: "url('/images/users/nazari2.jpg')",
        entesari1: "url('/images/users/entesari1.jpg')",
        entesari2: "url('/images/users/entsari2.jpg')",
        jafari1: "url('/images/users/jafari1.jpg')",
        jafari2: "url('/images/users/jafarii2.jpg')",
        javidnia1: "url('/images/users/javidnia1.jpg')",
        javidnia2: "url('/images/users/javidnia2.jpg')",
        keshavarz1: "url('/images/users/keshavarz1.jpg')",
        keshavarz2: "url('/images/users/keshavarz2.jpg')",
        kordestani1: "url('/images/users/kordestani1.jpg')",
        kordestani2: "url('/images/users/kordstani2.jpg')",
        mohamadi1: "url('/images/users/mohamadi1.jpg')",
        mohamadi2: "url('/images/users/mohamadi2.jpg')",
        afrasiabi2: "url('/images/users/pedram2.jpg')",
        pedram1: "url('/images/users/afrasiabi1.jpg')",
        qivechan1: "url('/images/users/qivechan1.jpg')",
        qivechan2: "url('/images/users/qivechan2.jpg')",
        rezaii1: "url('/images/users/rezaii1.jpg')",
        rezaii2: "url('/images/users/rezaii2.jpg')",
        shabazi1: "url('/images/users/shabazi1.jpg')",
        shabazi2: "url('/images/users/shahbazi2.jpg')",
        //logo proje
        saderat: "url('/images/saderat-logo.png')",
        saderatH: "url('/images/saderatDark.png')",
        day: "url('/images/day-logo.png')",
        dayH: "url('/images/dayDark.png')",
        hotel: "url('/images/hotel-logo.png')",
        hotelH: "url('/images/hotelDark.png')",
        barekat: "url('/images/barkat-logo.png')",
        barekatH: "url('/images/barekatDark.png')"
      },
      backgroundPosition: {
        Right: "right -10rem top -4rem",
        "Left-home": "left 0 top -5rem",
        FirstMobile: "400 0",
        "home-service": "right -21rem top 3rem",
        "service-Descktop": "right 0rem top 9rem",
        "consulting-mobile-position": "left -20rem top 0rem",
        "contactus-position-back": "right  0rem top 0rem",
        "contactus-position-back-mobile": "left -30rem top 0rem",
        "pos-services-mob": "right 0 top 45vh",
        "pos-services-desk": "right 0 top 18rem"
      },

      backgroundSize: {
        "home-serviceSize": "90rem 40rem",
        "services-Descktop-size": "60%",
        "contactus-Descktop-size": "100% 80%",
        "contactus-Mobile-size": "90rem 60rem"
      }
    }
  },
  plugins: []
};
