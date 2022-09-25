import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../spqr-loader'

const SpqrEagle = dynamic(() => import('../spqr-eagle'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Latin Database" />
        <meta name="author" content="Michael Bobrowski" />
        <meta name="author" content="Michael Bobrowski" />
        <link rel="apple-touch-icon" href="favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <meta property="og:site_name" content="Latin Database" />
        <meta name="og:title" content="Latin Database" />
        <meta property="og:type" content="website" />
        <title>Latin Database</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <SpqrEagle />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
