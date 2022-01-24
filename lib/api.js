import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
    const slugs = fs.readdirSync(postsDirectory)
    return slugs
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data: frontmatter, content } = matter(fileContents)
    const post = {}

    fields.forEach(field => {
        if (field === 'slug') {
            post[field] = realSlug
        }
        if (field === 'content') {
            post[field] = content
        }
        if (typeof frontmatter[field] !== 'undefined') {
            post[field] = frontmatter[field]
        }
    })

    return post
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
