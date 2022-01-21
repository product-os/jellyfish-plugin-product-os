import { PluginDefinition } from '@balena/jellyfish-worker';
import { contracts } from './contracts';
import { actions } from './actions';

export * from './types';

/**
 * The productOS Jellyfish plugin.
 */
export const productOsPlugin = (
	definition: Partial<PluginDefinition> = {},
): PluginDefinition => {
	return {
		slug: 'plugin-product-os',
		name: 'Product-OS Plugin',
		version: '1.0.0',
		contracts,
		actions,
		...definition,
	};
};
