import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layouts/main'
import theme from '../lib/theme'

import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
    // TODO add markdown support
}

export default App
