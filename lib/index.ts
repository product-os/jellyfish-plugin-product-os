import type { PluginDefinition } from '@balena/jellyfish-worker';
import { contracts } from './contracts';

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');

/**
 * The productOS Jellyfish plugin.
 */
export const productOsPlugin = (): PluginDefinition => {
	return {
		slug: 'plugin-product-os',
		name: 'Product-OS Plugin',
		version,
		contracts,
	};
};
