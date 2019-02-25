---
to: packages/<%= name %>/package.json
---

{
  "name": "@quilt/<%= name.toLowerCase() %>",
  "version": "1.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts"
}
