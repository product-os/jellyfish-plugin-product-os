import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { mergeProperties } from './transformer-merge-properties';

export const service: ContractDefinition = {
	slug: 'service',
	name: 'Containerized Service',
	type: 'type@1.0.0',
	data: {
		schema: {
			type: 'object',
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
