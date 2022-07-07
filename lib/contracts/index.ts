import type { ContractData, ContractDefinition } from 'autumndb';
import { loopBalenaIo } from './loop-balena-io';
import { loopBalenalabs } from './loop-balenalabs';
import { loopCompanyOs } from './loop-company-os';
import { loopProductOs } from './loop-product-os';
import { loopTeamOs } from './loop-team-os';
import { roleLoop } from './role-loop';
import { viewAllJellyfishSupportThreads } from './view-all-jellyfish-support-threads';

export const contracts: Array<ContractDefinition<ContractData>> = [
	loopBalenaIo,
	loopBalenalabs,
	loopCompanyOs,
	loopProductOs,
	loopTeamOs,
	roleLoop,
	viewAllJellyfishSupportThreads,
];
