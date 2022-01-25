import { Box, useColorModeValue } from '@chakra-ui/react'

const Description = ({ children }) => {
    return (
        <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
            p={3}
            mb={6}
            mt={6}
            align="center"
        >
            {children}
        </Box>
    )
}

export default Description
