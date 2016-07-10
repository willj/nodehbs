# Building a static site generator with Node

- Ideas
- Directory structure

## Ideas

A simple, convention based, static site generator.
- Built with node
- markdown and raw html support
- handlebars templates
- looks like Front Matter might be useful (to specify template, title etc)
- probably want to expose a global site options to bring into hbs models
- it might be nice to expose a web site with a code editor, and buttons to write, build, publish etc, so it can be run on a server (with external auth) 

## Directory structure

To work with gh-pages it's probably simplest to keep the generated content at the root, 
so we probably want a sub folder for **src**, in that folders for **template** and **template/partials**.

Content can then sit in **src**. \
Optional subfolders allow you to structure the pages/posts as you wish. \
You could do **/posts/year/month/day/post-title** or just **/year/month/day/post-title** \
Or just **post-title** and **page-title**

We could allow directories to be built with file names too, so an underscore is converted to dir, but dash remains as part of the url

