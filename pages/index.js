import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello This is James
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nam Hyuck Kim
                    </Heading>
                    <p>( Developer / Entrepreneur / Entertainer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
