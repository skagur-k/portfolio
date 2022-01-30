import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Fonts from '../components/Fonts'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <Fonts />
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
