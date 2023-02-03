import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../wall-loader'


const Wall = dynamic(() => import('../wall'), {
  ssr: true,
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
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Latin Database" />
        <meta name="og:title" content="Latin Database" />
        <meta property="og:type" content="website" />
        <title>Latin Database</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Wall />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
