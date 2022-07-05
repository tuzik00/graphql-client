import React from 'react';
import createEmotion from '@emotion/css/create-instance';
import createEmotionServer from '@emotion/server/create-instance';
import { getDataFromTree } from '@apollo/client/react/ssr';

import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import type {
  DocumentContextType,
  DocumentPropsType,
  DocumentInitialPropsType,
} from '@/types/next';

import apolloClient from '@/apolloClient';
import emotionCache from '@/emotionCache';

class _Document extends Document {
  constructor(props: DocumentPropsType) {
    super(props);

    const {
      __NEXT_DATA__,
      apolloState,
    } = props;

    __NEXT_DATA__.apolloState = apolloState;
  }

  static async getInitialProps(ctx: DocumentContextType): Promise<DocumentInitialPropsType> {
    const { cache } = emotionCache;

    await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);
    const initialProps = await Document.getInitialProps(ctx);

    const emotionServer = createEmotionServer(cache);
    const styles = emotionServer.extractCritical(initialProps.html);

    const client = apolloClient(true)
    const apolloState = client.extract();

    return {
      ...initialProps,
      apolloState,
      styles: (
        <>
          {initialProps.styles}

          <style
            dangerouslySetInnerHTML={{__html: styles.css}}
            data-emotion-css={styles.ids.join(' ')}
          />
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html lang={'ru'}>
        <Head>
          <link
            rel={'stylesheet'}
            href={'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'}
          />

          <link
            rel={'stylesheet'}
            href={'https://fonts.googleapis.com/icon?family=Material+Icons'}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
