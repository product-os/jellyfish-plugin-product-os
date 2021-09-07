/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import type { ViewContractDefinition } from '@balena/jellyfish-types/build/core';

export const viewAllJellyfishSupportThreads: ViewContractDefinition = {
	slug: 'view-all-jellyfish-support-threads',
	name: 'Jellyfish threads',
	type: 'view@1.0.0',
	markers: ['org-balena'],
	loop: 'loop-product-os@1.0.0',
	data: {
		namespace: 'Support',
		allOf: [
			{
				name: 'Active cards',
				schema: {
					anyOf: [
						{
							$$links: {
								'is owned by': {
									type: 'object',
									required: ['type'],
									properties: {
										type: {
											const: 'user@1.0.0',
										},
									},
								},
							},
						},
						true,
					],
					$$links: {
						'has attached element': {
							type: 'object',
							properties: {
								type: {
									enum: [
										'message@1.0.0',
										'update@1.0.0',
										'create@1.0.0',
										'whisper@1.0.0',
										'rating@1.0.0',
										'summary@1.0.0',
									],
								},
							},
							additionalProperties: true,
						},
					},
					type: 'object',
					properties: {
						active: {
							const: true,
							type: 'boolean',
						},
						type: {
							type: 'string',
							const: 'support-thread@1.0.0',
						},
						data: {
							type: 'object',
							properties: {
								category: {
									description:
										"This field is not required and should match cases where the field is not present OR is 'general'",
									const: 'general',
								},
								product: {
									const: 'jellyfish',
								},
							},
							required: ['product'],
						},
					},
					required: ['active', 'type'],
					additionalProperties: true,
				},
			},
		],
	},
	requires: [],
	capabilities: [],
};
