import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import { raw } from 'hono/html'
import path from "node:path"

const app = new Hono()

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

const Markdown: FC<{ file: string }> = async ({ file }) => {
  const md = await Bun.file(path.join(import.meta.dir, "content", file)).text()
  return <>{raw(Bun.markdown.html(md))}</>
}

const Main: FC = () => {
  return (
    <Layout>
      <h1>Sebastian Boutin Blomfield</h1>
      <Markdown file="Home.md" />
    </Layout>
  )
}

app.get('/', (c) => {
  return c.html(<Main />)
})

export default app