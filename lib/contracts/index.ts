import type { ContractData, ContractDefinition } from 'autumndb';
import { contractRepository } from './contract-repository';
import { loopBalenaIo } from './loop-balena-io';
import { loopBalenalabs } from './loop-balenalabs';
import { loopCompanyOs } from './loop-company-os';
import { loopProductOs } from './loop-product-os';
import { loopTeamOs } from './loop-team-os';
import { relationshipContractRepositoryContainsAny } from './relationship-contract-repository-contains-any';
import { relationshipContractRepositoryLatestAny } from './relationship-contract-repository-latest-any';
import { relationshipLoopOwnsContractRepository } from './relationship-loop-owns-contract-repository';
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
	relationshipContractRepositoryContainsAny,
	relationshipContractRepositoryLatestAny,
	relationshipLoopOwnsContractRepository,
];
