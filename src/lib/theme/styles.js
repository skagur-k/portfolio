import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        html: {
            overflowY: 'scroll'
        },
        body: {
            bg: mode('#FFFFFF', '#222222')(props),
            color: mode('gray.800', 'whiteAlpha.900')(props),
            lineHeight: 'base'
        }
    })
}

export default styles
