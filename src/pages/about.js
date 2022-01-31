import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/Layouts/article'
import Section from '../components/Section'

const Posts = ({ allPosts }) => {
    return (
        <Layout title="Posts">
            <Container>
                <Section delay={0}>
                    <Heading as="h4" fontSize={20} mb={4} mt={4}>
                        About
                    </Heading>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts
