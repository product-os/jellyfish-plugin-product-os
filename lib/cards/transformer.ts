/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const transformer: ContractDefinition = {
	slug: 'transformer',
	name: 'Transformer',
	type: 'type@1.0.0',
	markers: [],
	data: {
		schema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						requirements: {
							type: 'object',
							properties: {
								os: {
									type: 'string',
								},
								architecture: {
									type: 'string',
								},
							},
						},
						inputFilter: {
							type: 'object',
						},
						workerFilter: {
							type: 'object',
						},
					},
					required: ['requirements', 'inputFilter', 'workerFilter'],
				},
			},
			required: ['data'],
		},
		artefactType: 'image',
	},
};