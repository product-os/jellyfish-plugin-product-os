/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')

/**
 * The productOS Jellyfish plugin.
 *
 * TODO: use TypeScript to define a plugin interface
 * that this class must implement.
 */
module.exports = class DefaultPlugin {
  constructor (options = {}) {
    this.options = options
    this.slug = 'jellyfish-plugin-product-os'
    this.name = 'Cards for running product-os features'
    this.requires = []
  }

  getCards (mixins) {
    const cards = _.reduce(
      [
        require('./cards/image.json'),
        require('./cards/image-source.json'),

        require('./cards/loop.js'),
        require('./cards/loop-product-os.js'),
        require('./cards/role-loop.json'),
        require('./cards/role-transformer-worker.json'),
        require('./cards/task'),
        require('./cards/transformer.json'),
        require('./cards/transformer-worker.json'),
        require('./cards/view-all-transformer-workers.json'),
        require('./cards/view-all-transformers.json')
      ],
      (cardMap, card) => {
        const initializedCard = mixins.initialize(card)
        if (cardMap[initializedCard.slug]) {
          throw new Error(
            `Duplicate cards with slug '${initializedCard.slug}' found`
          )
        }
        cardMap[initializedCard.slug] = initializedCard
        return cardMap
      },
      {}
    )

    return cards
  }
}
