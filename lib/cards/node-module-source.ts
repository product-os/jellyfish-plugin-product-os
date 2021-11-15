/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const nodeModuleSource: ContractDefinition = {
	slug: 'node-module-source',
	name: 'Source bundle for a node module',
	type: 'type-product-os-t-type-source@1.0.0',
	data: {
		schema: {
			type: 'object',
			required: ['data'],
			properties: {
				data: {
					type: 'object',
					properties: {
						packageName: {
							type: 'string',
						},
						required: ['packageName'],
					},
				},
			},
		},
	},
};
