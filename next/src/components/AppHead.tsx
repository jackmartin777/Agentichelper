import Head from "next/head";

const AppHead = ({ title, ogTitle }: { title?: string; ogTitle?: string }) => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";
  return (
    <Head>
      <title>{title ?? "JackMartinAI"}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ?? "JackMartinAI 🤖"} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={ogTitle ?? "JackMartinAI: Autonomous AI in your browser 🤖"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.svg" />
    </Head>
  );
};

export default AppHead;
