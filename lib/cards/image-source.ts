/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const imageSource: ContractDefinition = {
	slug: 'image-source',
	name: 'Image source contract',
	type: 'type@1.0.0',
	markers: [],
	data: {
		schema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						should_trigger: {
							type: 'boolean',
						},
					},
					required: ['should_trigger'],
				},
			},
			required: ['data'],
		},
		artefactType: 'tar',
	},
};
