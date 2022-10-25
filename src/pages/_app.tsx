import { useEffect } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createEmotionCache } from 'libs/styles/emotion';
import { myTheme } from 'libs/styles/theme';

const clientSideEmotionCache = createEmotionCache();
type Props = AppProps & {
  emotionCache?: EmotionCache
};

const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{'Money Pedia'}</title>
      </Head>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
