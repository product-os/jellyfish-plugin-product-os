import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopProductOs: ContractDefinition = {
	slug: 'loop-product-os',
	version: '1.0.0',
	name: 'product-os',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
