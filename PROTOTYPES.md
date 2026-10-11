## Hono SSG

Made a simple Hono app with just the homepage.

It doesn't really leverage Bun's markdown to react capabilities as the react object returned by Bun isn't the same type as expected by Hono so there isn't really much gained there.

Also the frontmatter issue is present.

Seems like this method really includes many of the downsides we were looking to avoid.