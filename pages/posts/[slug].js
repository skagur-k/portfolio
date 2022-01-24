import NextLink from 'next/link'
import Section from '../../components/section'
import { Box, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { marked } from 'marked'

export default function Post({ post }) {
    return (
        <Section delay={0.1}>
            <Box align="center" my={4}>
                <NextLink href="/posts">
                    <Button leftIcon={<ChevronLeftIcon />} colorScheme="teal">
                        Go Back
                    </Button>
                </NextLink>
            </Box>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <p>{post.content}</p>
        </Section>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content'
    ])
    const content = marked(post.content)
    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}
