import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    useColorModeValue,
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
import Profile from '../components/profile'
import ContactList from '../components/contact-list'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Profile />
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
                    p={3}
                    mb={6}
                    mt={6}
                    align="center"
                >
                    Short Description
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
                        Born in Cheong Ju (청주), South Korea
                    </BioSection>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Moved to Shanghai, China
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        Attended Hong Kong Polytechnic University (香港理工大学)
                        majoring in Computer Science
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Discharged as Sergeant and completed military service
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Graduated with Bachelor&apos;s Degree in Information
                        Technology
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Shifted gear into the Entertainment Industry
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Started business and failed miserably.
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
                    <ContactList />
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
