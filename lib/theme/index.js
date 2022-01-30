import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import styles from './styles'
import typography from './foundations/typography'
import colors from './foundations/colors'
import components from './components'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    ...typography
})

export default theme
