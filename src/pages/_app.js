import Layout from "@/components/Layout";
import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  let DefaultLayout = Layout;
  if (Component.layout === null) DefaultLayout = React.Fragment;
  else if (Component.layout) DefaultLayout = Component.layout;

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
