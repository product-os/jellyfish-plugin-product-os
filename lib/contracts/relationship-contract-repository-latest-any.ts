import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipContractRepositoryLatestAny: RelationshipContractDefinition =
	{
		slug: 'relationship-contract-repository-latest-any',
		type: 'relationship@1.0.0',
		name: 'latest',
		data: {
			inverseName: 'is latest of',
			title: 'Contract Repository',
			inverseTitle: 'Any',
			from: {
				type: 'contract-repository',
			},
			to: {
				type: '*',
			},
		},
	};
