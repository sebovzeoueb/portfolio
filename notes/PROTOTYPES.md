## Hono SSG

Made a simple Hono app with just the homepage.

It doesn't really leverage Bun's markdown to react capabilities as the react object returned by Bun isn't the same type as expected by Hono so there isn't really much gained there.

Also the frontmatter issue is present.

Seems like this method really includes many of the downsides we were looking to avoid.

## 11ty

It's really nice and simple, just edit the template files and it converts them into HTML.

However it just transforms the files 1:1 whereas I want to programmatically list a bunch of items on a single page with their corresponding links and some images. Need to check if with some tweaking 11ty can do this.

Update: it is possible to do this using collections and a template and `"permalink": false` in the directory's config. Prefer this over the Hono setup as it's already closer to the desired result with minimal work.