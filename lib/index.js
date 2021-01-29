/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const {
  JellyfishPluginBase
} = require('@balena/jellyfish-plugin-base')
const cards = require('./cards')
const {
  version
} = require('../package.json')

/**
 * The productOS Jellyfish plugin.
 */
module.exports = class ProductOsPlugin extends JellyfishPluginBase {
  constructor () {
    super({
      slug: 'jellyfish-plugin-product-os',
      name: 'Product-OS Plugin',
      version,
      cards
    })
  }
}
