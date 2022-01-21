import { ActionDefinition } from '@balena/jellyfish-worker';
import { actionMatchMakeTask } from './action-matchmake-task';

export const actions: ActionDefinition[] = [actionMatchMakeTask];
