# @magikcraft/commando [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Add commands to Minecraft

## Installation

Install to your project:

```bash
npm install @magikcraft/commando
```

## Use it

```typescript
import commando from '@magikcraft/commando'
const log = Logger(__filename)

log('Plugin loaded!')

log(`Registering 'custom' command`)
commando('custom', (args, player) => {
	console.log(args)
})
```

## License

Apache-2.0 © [Josh Wulf](https://github.com/jwulf)

[npm-image]: https://badge.fury.io/js/%40magikcraft%2Fcommando.svg
[npm-url]: https://npmjs.org/package/@magikcraft/commando
[travis-image]: https://travis-ci.org/Magikcraft/commando.svg?branch=master
[travis-url]: https://travis-ci.org/Magikcraft/commando
[daviddm-image]: https://david-dm.org/Magikcraft/commando.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Magikcraft/commando
[coveralls-image]: https://coveralls.io/repos/Magikcraft/commando/badge.svg
[coveralls-url]: https://coveralls.io/r/Magikcraft/commando
