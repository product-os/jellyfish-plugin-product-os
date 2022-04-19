import type {
	ContractData,
	ContractDefinition,
} from '@balena/jellyfish-types/build/core';
import { contractRepository } from './contract-repository';
import { loopBalenaIo } from './loop-balena-io';
import { loopBalenalabs } from './loop-balenalabs';
import { loopCompanyOs } from './loop-company-os';
import { loopProductOs } from './loop-product-os';
import { loopTeamOs } from './loop-team-os';
import { roleLoop } from './role-loop';
import { viewAllJellyfishSupportThreads } from './view-all-jellyfish-support-threads';

export const contracts: Array<ContractDefinition<ContractData>> = [
	contractRepository,
	loopBalenaIo,
	loopBalenalabs,
	loopCompanyOs,
	loopProductOs,
	loopTeamOs,
	roleLoop,
	viewAllJellyfishSupportThreads,
];
