import NextLink from 'next/link'
import Section from '../../components/Misc/section'
import MDXComponents from '../../components/MDXComponents'
import { Box, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Global } from '@emotion/react'

import rehypePrism from 'rehype-prism-plus'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkCodeTitles from 'remark-code-titles'
import { prismDarkTheme } from '../../styles/prism'

export default function Post({ post }) {
    return (
        <Section delay={0.01}>
            <Box align="left" my={4}>
                <NextLink href="/posts">
                    <Button
                        fontSize={'0.8rem'}
                        leftIcon={<ChevronLeftIcon />}
                        colorScheme="teal"
                    >
                        Go Back
                    </Button>
                </NextLink>
            </Box>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <Global styles={prismDarkTheme} />
            <MDXRemote {...post.content} components={{ ...MDXComponents }} />
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
        mdxOptions: {
            remarkPlugins: [remarkAutolinkHeadings, remarkCodeTitles],
            rehypePlugins: [rehypePrism]
        }
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
