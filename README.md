# node-fast

## install

```
npm install node-fast -g
```

## Description

A CLI tool that helps you try out node.js scripts fast. Instead of you have to `npm install` a long list of modules you just use `node-fast` and it will ask you interactively to install any missing modules that you may not have installed yet.

## Usage


```
$ node-fast game.js
{ [Error: Cannot find module 'craftyjs'] code: 'MODULE_NOT_FOUND' }
Would you like to install "craftyjs"? y/n
y
craftyjs is loaded
```

*success!*

## ToDo

- [ ] Find the complete list of not installed modules instead of doing it one-by-one
- [ ] Allow to pass a url that it will fetch for even quicker demos

## FAQ

### Is it secure?
Yes, it will ask for every module it will install, so it will be the exact same result as if you did it yourself. It will not install anything automaticly.
