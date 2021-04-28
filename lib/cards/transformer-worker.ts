/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const transformerWorker: ContractDefinition = {
	slug: 'transformer-worker',
	name: 'Transformer Worker',
	type: 'type@1.0.0',
	markers: [],
	data: {
		schema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						uuid: {
							type: 'string',
						},
						endpoint: {
							type: 'string',
						},
						token: {
							type: 'string',
						},
						transformers: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									id: {
										type: 'string',
									},
									ref: {
										type: 'string',
									},
									count: {
										type: 'string',
									},
								},
							},
						},
						os: {
							type: 'string',
						},
						architecture: {
							type: 'string',
						},
						cpu_load: {
							type: 'number',
						},
						ram: {
							type: 'object',
							properties: {
								available: {
									type: 'number',
								},
								total_mb: {
									type: 'number',
								},
							},
						},
						storage: {
							type: 'object',
							properties: {
								available: {
									type: 'number',
								},
								total_mb: {
									type: 'number',
								},
							},
						},
					},
					required: ['uuid'],
				},
			},
			required: ['data'],
		},
		meta: {
			relationships: [
				{
					title: 'Tasks',
					link: 'owns',
					type: 'task',
				},
			],
		},
	},
};
