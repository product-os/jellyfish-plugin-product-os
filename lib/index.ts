/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishPluginBase } from '@balena/jellyfish-plugin-base';
import { cards } from './cards';
import { actions } from './actions';

export * from './types';

/**
 * The productOS Jellyfish plugin.
 */
export class ProductOsPlugin extends JellyfishPluginBase {
	constructor() {
		super({
			slug: 'jellyfish-plugin-product-os',
			name: 'Product-OS Plugin',
			version: '1.0.0',
			cards,
			actions,
		});
	}
}
