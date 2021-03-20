/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const service: ContractDefinition = {
	slug: 'service',
	name: 'Containerized Service',
	type: 'type@1.0.0',
	data: {
		schema: {
			type: 'object',
			properties: {},
		},
	},
};
