---
to: packages/<%= name %>/package.json
---

{
  "name": "@quilt/<%= name.toLowerCase() %>",
  "version": "0.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
   "peerDependencies": {
    "react": "^16.8.3"
  }
}
