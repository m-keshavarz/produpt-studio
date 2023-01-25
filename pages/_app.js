import "../styles/globals.css";
import "../styles/produpt.css";

import Script from "next/script";
import Head from "next/head";

import dayjs from "dayjs";
import "dayjs/locale/fa";
import jalaliday from "jalaliday";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// farsi support for dayjs
dayjs.locale("fa");
dayjs.extend(jalaliday);

// add scrolltrigger to gsap
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>
          استودیو پروداپت | طراحی محصولات دیجیتال، طراحی وب سایت، طراحی اپلیکیشن
        </title>
        <meta
          name="title"
          content="استودیو پروداپت | طراحی محصولات دیجیتال، طراحی وب سایت، طراحی اپلیکیشن"
        />
        <meta
          name="description"
          content="استودیو محصول پروداپت | مشاوره محصول و استراتژی دیجیتال، توسعه و طراحی رابط کاربری، بهبود و طراحی تجربه کاربری، تحقیق تجربه کاربری، خدمات فرانت اند و بک اند"
        />
      </Head>
      {/* Google Tag Manager */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-N3JJLS6");`
        }}
      />
      {/* End Google Tag Manager */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
