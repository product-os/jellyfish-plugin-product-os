import type { ContractDefinition } from '@balena/jellyfish-types/build/core';

export const task: ContractDefinition = {
	slug: 'task',
	name: 'Task',
	type: 'type@1.0.0',
	data: {
		schema: {
			type: 'object',
			properties: {},
		},
	},
};
