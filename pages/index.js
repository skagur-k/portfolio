import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    SimpleGrid,
    Icon,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMailOpen
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
                    p={3}
                    mb={6}
                    mt={6}
                    align="center"
                >
                    Hello This is James
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nam Hyuck Kim
                        </Heading>
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

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Paragraph</Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Seoul (서울), South Korea
                    </BioSection>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Seoul (서울), South Korea
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                    <Paragraph>Music, Movies, Football, Working out</Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Contacts
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @skagur-k
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @skagurzz
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoMailOpen} />}
                                >
                                    namhyuck.james@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
