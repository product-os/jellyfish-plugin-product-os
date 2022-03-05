# Jellyfish productOS Plugin

Provides a set of cards for adding productOS functionality to Jellyfish, such as
loops and transformers.

# Usage

Below is an example how to use this library:

```typescript
import { productOsPlugin } from '@balena/jellyfish-plugin-product-os';
import { PluginManager } from '@balena/jellyfish-worker';

// Load cards from this plugin
const pluginManager = new PluginManager([productOsPlugin()]);
const cards = pluginManager.getCards();
console.dir(cards);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-product-os

# Testing

Unit tests can be easily run with the command `npm test`.
