/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *
 * This file was automatically generated by 'npm run types'.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { core } from '@balena/jellyfish-types';

interface TransformerData {
	data: {
		requirements: {
			os?: string;
			architecture?: string;
			[k: string]: unknown;
		};
		inputFilter: {
			[k: string]: unknown;
		};
		workerFilter: {
			[k: string]: unknown;
		};
		[k: string]: unknown;
	};
	[k: string]: unknown;
}

export interface TransformerContractDefinition
	extends Omit<core.ContractDefinition, 'data'>,
		TransformerData {}

export interface TransformerContract
	extends Omit<core.Contract, 'data'>,
		TransformerData {}
