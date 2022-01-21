import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopTeamOs: ContractDefinition = {
	slug: 'loop-team-os',
	version: '1.0.0',
	name: 'team-os',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
