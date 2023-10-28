import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from "../styles/theme"
import Head from 'next/head'
import { META } from 'config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>{META.title}</title>
          <meta name="description" content={META.description}/>
          <link rel="icon" href={META.image} />
      </Head>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider> 
    </>
  )
}

export default MyApp