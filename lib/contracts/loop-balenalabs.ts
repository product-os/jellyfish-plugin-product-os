import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopBalenalabs: ContractDefinition = {
	slug: 'loop-balenalabs',
	version: '1.0.0',
	name: 'balenalabs',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
