# Jellyfish productOS Plugin

Provides a set of cards for adding productOS functionality to Jellyfish, such as
loops and transformers.

# Usage

Below is an example how to use this library:

```js
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins')
const ProductOSPlugin = require('@balena/jellyfish-plugin-product-os')

const plugin = new ProductOSPlugin()

// Load cards from this plugin, can use custom mixins
const cards = plugin.getCards(coreMixins)
console.dir(cards)
```
