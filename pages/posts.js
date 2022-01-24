import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { getAllPosts } from '../lib/api'
import InkDrop from '../public/images/inkdrop_eyecatch.png'

const Posts = ({ allPosts }) => {
    return (
        <Layout title="Posts">
            <Container>
                <Section delay={0.2}>
                    <Heading as="h4" fontSize={20} mb={4} mt={4}>
                        Posts
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {allPosts.map(post => {
                        return (
                            <Section delay={0.2} key={post.title}>
                                <GridItem
                                    thumbnail={InkDrop}
                                    title={post.title}
                                    href={'/posts/' + post.slug}
                                />
                            </Section>
                        )
                    })}
                </SimpleGrid>
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
