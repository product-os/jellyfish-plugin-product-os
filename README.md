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
const cards = plugin.getCards(context, coreMixins)
console.dir(cards)
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-product-os