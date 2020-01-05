[![Build Status](https://travis-ci.com/CassandraSpruit/Zephyr.svg?branch=master)](https://travis-ci.com/CassandraSpruit/Zephyr)
[![codecov](https://codecov.io/gh/CassandraSpruit/Zephyr/branch/master/graph/badge.svg)](https://codecov.io/gh/CassandraSpruit/Zephyr)
[![npm](https://img.shields.io/npm/v/@cspruit/zephyr)](https://www.npmjs.com/package/@cspruit/Zephyr)
[![license](https://img.shields.io/github/license/CassandraSpruit/Zephyr)](https://github.com/CassandraSpruit/Zephyr/blob/master/LICENSE)
[![Greenkeeper badge](https://badges.greenkeeper.io/CassandraSpruit/Zephyr.svg)](https://greenkeeper.io/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

# Zephyr

Zephyr is a lightweight javascript library that handles events and streams.

## Installation

- Install by running ```npm install --save-dev @cspruit/zephyr``` in the same directory as the package.json file lives.

## Usage

### For Application events
```javascript
import {EventRegistry} from '@cspruit/zephyr';

const registry = new EventRegistry();
registry.listen('My Cool Event', () => console.log('Hello world!'));
registry.sendEvent('My Cool Event'); // Should trigger 'Hello world!'
```

### For Element events
- Zephyr provides a wrapper around the normal element.addEventListener function that will filter for specific keypresses and other non-standard event types.

```javascript
import {listen, EventTypes} from '@cspruit/zephyr';

const submitField = document.createElement('input');
listen(el, EventTypes.enter, () => console.log('enter was pressed!'));
```

## Contributing
All contributions, suggestions, and issues are welcome!

Check out the [Issues](https://github.com/CassandraSpruit/Zephyr/issues) page. In general anything listed is up for grabs, though bugs tend to be more detailed than enhancements and might be better to pick up if starting out.

## License
This project uses [GPL 3.0](https://github.com/CassandraSpruit/Vivi/blob/master/LICENSE).
