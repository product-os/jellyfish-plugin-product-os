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
import { triggeredActionMergeDraftVersion } from './triggered-action-merge-draft-version';
import { triggeredActionMatchmakeTask } from './triggered-action-matchmake-task';
import { viewAllJellyfishSupportThreads } from './view-all-jellyfish-support-threads';
import { viewAllTransformerWorkers } from './view-all-transformer-workers';
import { viewAllTransformers } from './view-all-transformers';
import { viewAllTransformerTypes } from './view-all-types';

export const cards = [
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
	task,
	serviceSource,
	transformerWorker,
	transformer,
	triggeredActionMergeDraftVersion,
	triggeredActionMatchmakeTask,
	viewAllJellyfishSupportThreads,
	viewAllTransformerWorkers,
	viewAllTransformers,
	viewAllTransformerTypes,
];
