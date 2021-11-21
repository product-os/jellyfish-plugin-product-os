/*
 * This file was automatically generated by 'npm run types'.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { core } from '@balena/jellyfish-types';

interface ServiceSourceData {
	data: {
		[k: string]: unknown;
	};
	[k: string]: unknown;
}

export interface ServiceSourceContractDefinition
	extends Omit<core.ContractDefinition, 'data'>,
		ServiceSourceData {}

export interface ServiceSourceContract
	extends Omit<core.Contract, 'data'>,
		ServiceSourceData {}
