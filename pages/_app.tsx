import { AppProps } from 'next/app'
import '../styles/globals.css'
import { UIContextProvider } from "../context/UIContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UIContextProvider>
            <Component {...pageProps} />
        </UIContextProvider>
    )
}

export default MyApp
