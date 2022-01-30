import NextLink from 'next/link'
import { Button, Container, Box, Heading, Link } from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/Section'
import Layout from '../components/Layouts/article'
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

                <Section delay={0}>
                    <Heading as="h3" variant="section-title">
                        Works
                    </Heading>

                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="orange"
                            >
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Biography />

                <Section delay={0}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                </Section>

                <Section delay={0}>
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
