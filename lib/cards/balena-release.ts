import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { mergeProperties } from './transformer-merge-properties';

export const balenaRelease: ContractDefinition = {
	slug: 'balena-release',
	name: 'Released Balena application',
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
							},
						},
					},
				},
			},
		},
	},
};
