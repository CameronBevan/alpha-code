# alpha-code
## simple unique code generation

The purpose for this package is to present a simple method of unique code generation using alphabet characters in place of numeric iteration. The use of non-numeric characters makes it possible to use less characters overall for the same number represented by the generated code.

#### Installation

```
npm i alpha-code
```

### Initialization

```javascript
const ac = require('alpha-code');
```

## Functions & Examples
*All examples use the default uppercase 21-character vowel-free alphabet.*

Linear increment

```javascript
ac.increment('SHWKLDS'); // returns: SHWKLDT
```

```javascript
ac.increment('CHDSLZ'); // returns: CHDSMB
```


## Features
Allows for remapping of character order to reduce readability.

```javascript
charMap = ['B', 'C', 'D', '...' ];

// could be set to:

charMap = ['Y', 'P', 'D', '...' ];
```

**Licence:** [ISC](https://opensource.org/licenses/ISC)

