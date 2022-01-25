import Head from 'next/head'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title> Nam Hyuck Kim</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="4xl" pt={20}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main
