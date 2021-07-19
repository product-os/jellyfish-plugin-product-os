/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { balenaBuild } from './balena-build';
import { balenaRelease } from './balena-release';
import { balenaSource } from './balena-source';
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
import { service } from './service';
import { serviceSource } from './service-source';
import { task } from './task';
import { transformer } from './transformer';
import { transformerWorker } from './transformer-worker';
import { triggeredActionMergeDraftVersion } from './triggered-action-merge-draft-version';
import { triggeredActionMatchmakeTask } from './triggered-action-matchmake-task';
import { viewAllTransformerWorkers } from './view-all-transformer-workers';
import { viewAllTransformers } from './view-all-transformers';

export const cards = [
	balenaBuild,
	balenaRelease,
	balenaSource,
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
	service,
	serviceSource,
	transformerWorker,
	transformer,
	triggeredActionMergeDraftVersion,
	triggeredActionMatchmakeTask,
	viewAllTransformerWorkers,
	viewAllTransformers,
];
