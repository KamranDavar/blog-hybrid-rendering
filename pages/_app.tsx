import "../styles/antd.less";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import useLoadingPage from "../logic/hooks/loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  useLoadingPage();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
