/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { mergeProperties } from './transformer-merge-properties';

export const serviceSource: ContractDefinition = {
	slug: 'service-source',
	name: 'Source bundle for a service',
	type: 'type@1.0.0',
	data: {
		schema: {
			type: 'object',
			required: ['data'],
			properties: {
				data: {
					type: 'object',
					properties: {
						$transformer: {
							type: 'object',
							properties: {
								...mergeProperties,
								mergeable: {
									description: 'all platforms have an image',
									type: 'boolean',
									$$formula: `
									EVERY(VALUES(contract.data.platforms), "image") &&
									contract.data.$transformer.backflow &&
									contract.data.$transformer.backflow.filter(
										function(b){
											return b &&
														 b.type.startsWith("t-product-os-test-run") &&
														 b.data.data.success
										}
										).length > 0
									`,
									readOnly: true,
									default: false,
								},
							},
						},
					},
				},
			},
		},
	},
};
