import Navbar from "@/src/components/Navbar/Navbar";
import Sidebar from "@/src/components/Sidebar/Sidebar";
import { store } from "@/src/store/store";
import "@/styles/globals.css";
import { initFlowbite } from "flowbite";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFlowbite(); // Initialize Flowbite's interactive components
  }, []);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <main>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}
