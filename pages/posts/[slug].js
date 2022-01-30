import NextLink from 'next/link'
import Section from '../../components/Section'
import MDXComponents from '../../components/MDXComponents'
import { Box, Button, useColorMode } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getAllPosts } from '../../lib/mdxUtil'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Global } from '@emotion/react'

import rehypePrism from 'rehype-prism-plus'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeSlug from 'rehype-slug'
import { prismLightTheme, prismDarkTheme } from '../../styles/prism'

export default function Post({ post }) {
    const { colorMode } = useColorMode()
    const prismTheme = colorMode === 'light' ? prismLightTheme : prismDarkTheme
    return (
        <Section delay={0}>
            <Box align="left" my={4}>
                <NextLink href="/posts">
                    <Button
                        as="a"
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
            <Global styles={prismTheme} />
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

    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                rehypeSlug,
                rehypeCodeTitles,
                rehypePrism,
                [
                    rehypeAutolinkHeadings,
                    { properties: { className: ['anchor'] } }
                ]
            ]
        }
    }

    const content = await serialize(post.content, options)

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
