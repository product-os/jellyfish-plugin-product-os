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

interface ContractRepositoryData {
	data: {
		base_slug: string;
		base_type: string;
		[k: string]: unknown;
	};
	[k: string]: unknown;
}

export interface ContractRepositoryContractDefinition
	extends Omit<core.ContractDefinition, 'data'>,
		ContractRepositoryData {}

export interface ContractRepositoryContract
	extends Omit<core.Contract, 'data'>,
		ContractRepositoryData {}