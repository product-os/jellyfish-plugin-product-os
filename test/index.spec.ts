import { PluginManager } from '@balena/jellyfish-worker';
import _ from 'lodash';
import { productOsPlugin } from '../lib/index';

const pluginManager = new PluginManager([productOsPlugin()]);

test('Plugin returns collection of contracts', () => {
	const cards = pluginManager.getCards();

	expect(_.isEmpty(cards)).toBeFalsy();
});

test('Expected contracts are loaded', () => {
	const cards = pluginManager.getCards();

	// Sanity check
	expect(cards.image.name).toBe('Container image contract');
	expect(cards['action-matchmake-task'].slug).toBe('action-matchmake-task');
});

test('Expected actions are loaded', () => {
	const actions = pluginManager.getActions();

	// Sanity check
	expect(typeof actions['action-matchmake-task'].handler).toBe('function');
});
