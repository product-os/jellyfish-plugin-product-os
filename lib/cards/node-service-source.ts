/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const nodeServiceSource: ContractDefinition = {
	slug: 'node-service-source',
	name: 'Source bundle for a node service',
	type: 'type-product-os-t-type-source@1.0.0',
	data: {
		schema: {
			type: 'object',
			required: ['data'],
			properties: {
				data: {
					type: 'object',
				},
			},
		},
	},
};
