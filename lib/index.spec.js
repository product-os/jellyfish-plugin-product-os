/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const {
  expect,
  test
} = require('@jest/globals')
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins')
const Plugin = require('./index')

const context = {
  id: 'jellyfish-plugin-product-os-test'
}

const plugin = new Plugin()

test('Plugin returns collection of cards', () => {
  const cards = plugin.getCards(context, coreMixins)

  expect(_.isEmpty(cards)).toBeFalsy()
})

test('Expected cards are loaded', () => {
  const cards = plugin.getCards(context, coreMixins)

  // Sanity check
  expect(cards.image.name).toBe('Container image contract')
})
