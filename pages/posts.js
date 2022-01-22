import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { getAllPosts } from '../lib/api'
import InkDrop from '../public/images/inkdrop_eyecatch.png'

const Posts = ({ allPosts }) => {
    console.log(allPosts)

    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h4" fontSize={20} mb={4} mt={4}>
                    Popular Posts
                </Heading>
                <Section delay={0.1}></Section>
            </Container>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.2}>
                    {allPosts.map(post => {
                        return (
                            <GridItem
                                key={post.id}
                                thumbnail={InkDrop}
                                title={post.title}
                            />
                        )
                    })}
                </Section>
            </SimpleGrid>
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
