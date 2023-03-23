import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="image" property="og:image" content="/thumbnail.png" />
        <link rel="icon" href="/thumbnail.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css"
        />
      </Head>
      <body className="bg-white font-mono font-normal text-gray-900 dark:bg-background-500 dark:text-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
