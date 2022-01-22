import router, { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return <p>post.title</p>
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content'
    ])

    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            posts: {
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
