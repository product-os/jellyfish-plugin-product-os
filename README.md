# Jellyfish productOS Plugin

Provides a set of contracts for adding productOS functionality to Jellyfish, such as loops.

# Usage

Below is an example how to use this library:

```typescript
import { productOsPlugin } from '@balena/jellyfish-plugin-product-os';
import { PluginManager } from '@balena/jellyfish-worker';

// Load contracts from this plugin
const pluginManager = new PluginManager([productOsPlugin()]);
const contracts = pluginManager.getCards();
console.dir(contracts);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-product-os/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-product-os

# Testing

Unit tests can be easily run with the command `npm test`.
