import isEmpty from 'lodash/isEmpty';
import { cardMixins as coreMixins } from '@balena/jellyfish-core';
import { ProductOsPlugin } from '../lib/index';

const context = {
	id: 'jellyfish-plugin-product-os-test',
};

const plugin = new ProductOsPlugin();

test('Plugin returns collection of cards', () => {
	const cards = plugin.getCards(context, coreMixins);

	expect(isEmpty(cards)).toBeFalsy();
});

test('Expected cards are loaded', () => {
	const cards = plugin.getCards(context, coreMixins);

	// Sanity check
	expect(cards.image.name).toBe('Container image contract');
	expect(cards['action-matchmake-task'].slug).toBe('action-matchmake-task');
});

test('Expected actions are loaded', () => {
	const actions = plugin.getActions(context);

	// Sanity check
	expect(typeof actions['action-matchmake-task'].handler).toBe('function');
});
