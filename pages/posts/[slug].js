import NextLink from 'next/link'
import Section from '../../components/section'
import MDXComponents from '../../components/MDXComponents'
import { Box, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import mdxPrism from 'mdx-prism'

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
            <MDXRemote
                {...post.content}
                components={{ ...MDXComponents }}
            ></MDXRemote>
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
    const content = await serialize(post.content, {
        rehypePlugins: [mdxPrism]
    })
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
