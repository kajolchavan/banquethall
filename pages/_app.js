import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        {/*====== Required meta tags ======*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Banquet hall, Wedding Hall, Birthday Venue, etc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/*====== Title ======*/}
        <title>Powai Banquet Hall</title>
        {/*====== Favicon Icon ======*/}
        <link
          rel="shortcut icon"
          href="assets/images/favicon-32x32.png"
          type="image/png"
        />
        {/*====== Google Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
       <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500;600;700;800&display=swap"
          
          rel="stylesheet"
        />  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Playfair+Display:wght@500&display=swap"/>
        {/*====== Flaticon css ======*/}
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-thin-rounded/css/uicons-thin-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'/>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
        <link href="/your-path-to-uicons/css/uicons-rounded-bold.css" rel="stylesheet"/>
        <link href="/your-path-to-uicons/css/uicons-rounded-solid.css" rel="stylesheet"></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-thin-straight/css/uicons-thin-straight.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
        <link
          rel="stylesheet"
          href="assets/fonts/flaticon/flaticon_gowilds.css"
        />
        {/*====== FontAwesome css ======*/}
        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />
        {/*====== Bootstrap css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        {/*====== magnific-popup css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        {/*====== Slick-popup css ======*/}
        <link rel="stylesheet" href="assets/vendor/slick/slick.css" />
        {/*====== Jquery UI css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        {/*====== Nice Select css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/nice-select/css/nice-select.css"
        />
        {/*====== Animate css ======*/}
        <link rel="stylesheet" href="assets/vendor/animate.css" />
        {/*====== Default css ======*/}
        <link rel="stylesheet" href="assets/css/default.css" />
        {/*====== Style css ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* css.gg icons */}
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/bulb.css' rel='stylesheet'/>
      </Head>
      {loader && <PreLoader />}
      {!loader && <Component {...pageProps} />}
    </Fragment>
  );
}
