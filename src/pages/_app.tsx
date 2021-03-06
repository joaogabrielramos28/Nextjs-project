import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React avançado - boilerPlate</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />;
        </>
    );
}

export default App;
