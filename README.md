# BCRegistry

This project requires Node v16.x.x (npm v8.x.x). You can use Node Version manager (nvm) to manage several versions of node...
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16
```
...and then you can do `npm install` etc as below.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
# NB: supports only 2 concurrent browser sessions, so more sessions may display strangely or not at all
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
```bash
# generate static project
# To view the statis website, it has to be hosted by a http server
$ npm run generate

# locally preview the static project
$ npm run start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
