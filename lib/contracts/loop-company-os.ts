import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopCompanyOs: ContractDefinition = {
	slug: 'loop-company-os',
	version: '1.0.0',
	name: 'company-os',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
