import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { parseISO, format } from "date-fns"

const postsDirectory = join(process.cwd(), "content", "blog")

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const date = format(parseISO(data.date), "MMMM dd, yyyy")

  return { slug: realSlug, frontmatter: { ...data, date }, content }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map(slug => getPostBySlug(slug))

  return posts
}
