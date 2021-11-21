import { ActionFile } from '@balena/jellyfish-plugin-base';
import { ContractData } from '@balena/jellyfish-types/build/core';
import { actionMatchMakeTask } from './action-matchmake-task';

export const actions: Array<ActionFile<ContractData>> = [actionMatchMakeTask];
