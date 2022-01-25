import NextLink from 'next/link'
import { Button, Container, Box, Heading } from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/Misc/section'
import Paragraph from '../components/Misc/paragraph'
import Layout from '../components/layouts/article'
import Profile from '../components/Profile'
import ContactList from '../components/ContactList'
import Description from '../components/Description'
import Biography from '../components/Biography'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Profile />
                <Description>Description goes here</Description>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Works
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

                <Biography />

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
