import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/Layouts/article'
import Section from '../components/Misc/section'
import { GridItem } from '../components/Misc/grid-item'
import { getAllPosts } from '../lib/mdxUtil'
import InkDrop from '../public/images/inkdrop_eyecatch.png'

const Posts = ({ allPosts }) => {
    return (
        <Layout title="Posts">
            <Container>
                <Section delay={0}>
                    <Heading as="h4" fontSize={20} mb={4} mt={4}>
                        Posts
                    </Heading>
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
