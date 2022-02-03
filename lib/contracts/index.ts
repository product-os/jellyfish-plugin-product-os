import type {
	ContractData,
	ContractDefinition,
} from '@balena/jellyfish-types/build/core';
import { contractRepository } from './contract-repository';
import { genericSource } from './generic-source';
import { image } from './image';
import { imageSource } from './image-source';
import { loopBalenaIo } from './loop-balena-io';
import { loopBalenalabs } from './loop-balenalabs';
import { loopCompanyOs } from './loop-company-os';
import { loopProductOs } from './loop-product-os';
import { loopTeamOs } from './loop-team-os';
import { roleLoop } from './role-loop';
import { roleTransformerWorker } from './role-transformer-worker';
import { serviceSource } from './service-source';
import { task } from './task';
import { transformer } from './transformer';
import { transformerWorker } from './transformer-worker';
import { triggeredActionMatchmakeTask } from './triggered-action-matchmake-task';
import { triggeredActionMergeDraftVersion } from './triggered-action-merge-draft-version';
import { viewAllJellyfishSupportThreads } from './view-all-jellyfish-support-threads';
import { viewAllTransformers } from './view-all-transformers';
import { viewAllTransformerTypes } from './view-all-types';
import { viewAllTransformerWorkers } from './view-all-transformer-workers';

export const contracts: Array<ContractDefinition<ContractData>> = [
	contractRepository,
	genericSource,
	image,
	imageSource,
	loopBalenaIo,
	loopBalenalabs,
	loopCompanyOs,
	loopProductOs,
	loopTeamOs,
	roleLoop,
	roleTransformerWorker,
	serviceSource,
	task,
	transformer,
	transformerWorker,
	triggeredActionMatchmakeTask,
	triggeredActionMergeDraftVersion,
	viewAllJellyfishSupportThreads,
	viewAllTransformers,
	viewAllTransformerTypes,
	viewAllTransformerWorkers,
];
