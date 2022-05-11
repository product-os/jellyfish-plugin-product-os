import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipLoopOwnsContractRepository: RelationshipContractDefinition =
	{
		slug: 'relationship-loop-owns-contract-repository',
		type: 'relationship@1.0.0',
		name: 'owns',
		data: {
			inverseName: 'is owned by',
			title: 'Owned contract repository',
			inverseTitle: 'Loop',
			from: {
				type: 'loop',
			},
			to: {
				type: 'contract-repository',
			},
		},
	};
