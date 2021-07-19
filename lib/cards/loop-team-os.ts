/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopTeamOs: ContractDefinition = {
	slug: 'loop-team-os',
	name: 'team-os',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
