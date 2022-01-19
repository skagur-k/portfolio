import {
    Box,
    Heading,
    Image,
    useColorModeValue,
    Divider
} from '@chakra-ui/react'

const Profile = () => (
    <Box display={{ md: 'flex' }} mt={10}>
        <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Nam Hyuck Kim
            </Heading>
            <Divider my={1} />
            <p>( Developer / Entrepreneur / Entertainer)</p>
        </Box>
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
        >
            <Image
                borderColor={useColorModeValue(
                    'whiteAlpha.300',
                    'whiteAlpha.800'
                )}
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/profile.jpg"
                alt="Profile Image"
            />
        </Box>
    </Box>
)

export default Profile
