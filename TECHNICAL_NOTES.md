Bun supports importing/bundling text files

Bun has a builtin markdown renderer

## Possible paths

### Bundle the md files

Import to the TypeScript files and call the renderer to produce HTML and insert it into the page.

- easy to implement using Bun's builtin bundling options, just import everything into an HTML file and build the HTML file using Bun
- however it makes the end result be mostly a blob of JavaScript, technically a static site but not really

### Serve the md files

Static page with a script that loads the md files from the server and renders them into the page once loaded.

- fast initial load with progressive content loading
- still very JavaScript reliant though

### Render the whole site to static HTML

A build script which takes the HTML template + md files and spits out the finished result as HTML file(s)

- still works for users with JavaScript disabled
- old school and performant
- there are probably several frameworks which do this
- might be a bit more bloaty in terms of dev requirements