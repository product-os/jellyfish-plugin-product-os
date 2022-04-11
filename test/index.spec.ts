import { PluginManager } from '@balena/jellyfish-worker';
import _ from 'lodash';
import { productOsPlugin } from '../lib/index';

const pluginManager = new PluginManager([productOsPlugin()]);

test('Plugin returns collection of contracts', () => {
	const contracts = pluginManager.getCards();
	expect(_.isEmpty(contracts)).toBeFalsy();
});

test('Expected contracts are loaded', () => {
	const contracts = pluginManager.getCards();
	expect(contracts['contract-repository'].name).toBe('Repository');
});
