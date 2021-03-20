/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const viewAllTransformerWorkers: ContractDefinition = {
	slug: 'view-all-transformer-workers',
	name: 'Workers',
	type: 'view@1.0.0',
	markers: ['org-balena'],
	data: {
		namespace: 'Transformers',
		allOf: [
			{
				name: 'All transformer workers',
				schema: {
					type: 'object',
					properties: {
						type: {
							type: 'string',
							const: 'transformer-worker@1.0.0',
						},
					},
					additionalProperties: true,
					required: ['type'],
				},
			},
		],
	},
};
