import Layout from '../components/Layouts/article'
import Section from '../components/Section'
import InkDrop from '../../public/images/inkdrop_eyecatch.png'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import { getAllPosts } from '../lib/api/mdxUtil'

const Posts = ({ allPosts }) => {
    return (
        <Layout title="Posts">
            <Container>
                <Section delay={0}>
                    <Heading as="h4">Posts</Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {allPosts.map((post, index) => {
                        return (
                            <Section delay={0} key={index}>
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
