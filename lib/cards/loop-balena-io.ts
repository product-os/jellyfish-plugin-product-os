import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopBalenaIo: ContractDefinition = {
	slug: 'loop-balena-io',
	name: 'balena-io',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
