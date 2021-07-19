/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const loopCompanyOs: ContractDefinition = {
	slug: 'loop-company-os',
	name: 'company-os',
	type: 'loop@1.0.0',
	data: {
		roles: ['loop'],
	},
};
