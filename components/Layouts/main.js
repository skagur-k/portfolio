import Head from 'next/head'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import { useRouter } from 'next/router'

const baseStyle = {
    w: '100%',
    mx: 'auto',
    maxW: '65ch',
    px: '1rem'
}

const Main = ({ children }) => {
    const router = useRouter()
    return (
        <Box as="main" pb={4}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Nam Hyuck Kim</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container pt={[12, 12, 36, 36]} {...baseStyle}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main
