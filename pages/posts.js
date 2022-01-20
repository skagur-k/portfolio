import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { getAllPosts } from '../lib/api'

const Posts = ({ allPosts }) => {
    console.log(allPosts)
    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h4" fontSize={20} mb={4} mt={4}>
                    Popular Posts
                </Heading>
                <Section delay={0.1}></Section>
                {allPosts.map(post => (
                    <div key={post.title}>{post.slug}</div>
                ))}
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts(['title', 'date', 'slug'])

    return {
        props: { allPosts }
    }
}

export default Posts
