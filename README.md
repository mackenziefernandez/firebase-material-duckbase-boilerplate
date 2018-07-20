# React, Redux, Duckbase, Firebase Boilerplate

> [Firebase](https://www.firebase.com) is a powerful platform for your mobile and web applications that lets you build apps fast without managing servers. Firebase gives you the tools and infrastructure to build better apps and grow successful businesses.

> [React](https://www.firebase.com) A javascript library for building user interfaces.

> [Redux](http://redux.js.org/) Redux is a predictable state container for JavaScript apps.

> [Duckbase](https://github.com/WadePeterson/duckbase) Duckbase is a React + Redux Wrapper for Firebase.

### Boilerplate Introduction
Boilerplate is designed for quickly spin up your apps with Firebase, using bunch of awesome new front-end technologies includes webpack build system, hot reloading, routing & sass support.

## Features
* [duckbase](https://github.com/WadePeterson/duckbase)
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [firebase](https://www.npmjs.com/package/firebase)
* [react-router](https://github.com/rackt/react-router)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)

Quick Start
-----------

```shell
$ git clone https://github.com/mackenziefernandez/firebase-material-duckbase-boilerplate
$ cd firebase-material-duckbase-boilerplate
$ yarn
$ yarn start
```

Firebase settings
--------
First you need to create your firebase application to fetch settings for boilerplate. For more information how to add your web app check this [resource](https://firebase.google.com/docs/web/setup). After it copy your settings from firebase and fill config.js

```javascript
module.exports = {

    FIREBASE_CONFIG: {

      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",

    }
}
```

When ready to make your own
--------

```javascript 
rm -rf .git

git init
git add .
git commit -m "Initial commit"

git remote add origin <github-uri>
git push -u --force origin master
```