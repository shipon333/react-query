import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClientProvider, QueryClient} from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
}
