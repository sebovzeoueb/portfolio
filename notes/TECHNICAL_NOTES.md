Bun supports importing/bundling md files

Bun has a builtin markdown renderer

<https://bun.com/docs/runtime/file-types#md>

One issue is that the frontmatter part of the files isn't handled by default, so it would require some custom code to extract it and remove it from the passed in markdown, potentially don't use frontmatter or use a framework which supports it.

## Possible paths

### Bundle the md files

Import to the TypeScript files and call the renderer to produce HTML and insert it into the page.

- easy to implement using Bun's builtin bundling options, just import everything into an HTML file and build the HTML file using Bun
- however it makes the end result be mostly a blob of JavaScript, technically a static site but not really

### Serve the md files

Static page with a script that loads the md files from the server and renders them into the page once loaded.

- fast initial load with progressive content loading
- still very JavaScript reliant though

This doesn't actually work because Bun's markdown renderer doesn't get bundled into client JS, it's only usable directly in the Bun runtime.

### Render the whole site to static HTML

A build script which takes the HTML template + md files and spits out the finished result as HTML file(s)

- still works for users with JavaScript disabled
- old school and performant
- there are probably several frameworks which do this
  - 11ty: seems pretty straightforward and does a lot of what I want already
  - Hono SSG: I've done Hono SSG before although not rendering to static files. Use TSX files and Bun's markdown to react feature.
- might be a bit more bloaty in terms of dev requirements

I'm liking this option the most so far.

## 11ty + Stylus

I would like to use Stylus to manage CSS generation as I'm familiar with it and I like its simplicity.

See https://github.com/ar363/eleventy-stylus-blog-theme for an example.