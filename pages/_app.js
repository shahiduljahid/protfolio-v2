import { JetBrains_Mono } from "@next/font/google";
import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Footer } from "@/components/common/Footer";
import { Nav } from "@/components/common/Nav";
import { Toaster } from "@/components/Feedback/Toaster";
import Particle from "@/components/Particle";
import Preloader from "@/components/Pre";
import { ColorMode } from "@/providers/ColorMode";
import { SectionRefProvider } from "@/providers/SectionRef";

import "../styles/globals.css";
import { AnalyticsWrapper } from "./AnalyticsWrapper";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  display: "auto",
  fallback: ["monospace"],
});

export default function App({ Component, pageProps }) {
  const [load, upadateLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (load) {
      return;
    }

    if (router?.asPath) {
      const id = router?.asPath.substring(2); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [load]);

  return (
    <>
      <Head>
        <title>Shahidul Islam Jahid | Full Stack Developer</title>
        <meta name="description" content="Official portfolio website of Shahidul Islam Jahid." />
        <meta name="image" property="og:image" content="/thumbnail.png" />
        <link rel="icon" href="/thumbnail.png" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Shahidul Islam Jahid, Full-Stack Developer, Developer portfolio"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <span className={clsx(jetbrainsMono.variable)}>
        <Preloader load={load} />
        {!load && (
          <ColorMode>
            <Toaster />
            <main>
              <SectionRefProvider>
                <Nav />
                <div>
                  <Particle />
                  <Component {...pageProps} />
                  <AnalyticsWrapper />
                </div>
              </SectionRefProvider>
            </main>
            <Footer />
          </ColorMode>
        )}
      </span>
    </>
  );
}
