import { useState } from "react";

export type Block = {
  owner: string | null,
  id: number,
  protected: boolean
}

export type Controls = 'Claiming' | 'Protecting' | 'Destroying';

export const useBlocks = () => {
	const initialBlocks: Block[][] = [
		[
			{
				owner: 'r/cats',
				id: 0,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 1,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 2,
				protected: false
			},
			{
				owner: null,
				id: 3,
				protected: false
			},
			{
				owner: null,
				id: 4,
				protected: false
			},
			{
				owner: null,
				id: 5,
				protected: false
			},
			{
				owner: null,
				id: 6,
				protected: false
			},
			{
				owner: null,
				id: 7,
				protected: false
			},
			{
				owner: null,
				id: 8,
				protected: false
			},
			{
				owner: null,
				id: 9,
				protected: false
			},
			{
				owner: null,
				id: 10,
				protected: false
			},
			{
				owner: null,
				id: 11,
				protected: false
			},
			{
				owner: null,
				id: 12,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 13,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 14,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 15,
				protected: false
			}
			],
			[
			{
				owner: 'r/cats',
				id: 16,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 17,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 18,
				protected: false
			},
			{
				owner: null,
				id: 19,
				protected: false
			},
			{
				owner: null,
				id: 20,
				protected: false
			},
			{
				owner: null,
				id: 21,
				protected: false
			},
			{
				owner: null,
				id: 22,
				protected: false
			},
			{
				owner: null,
				id: 23,
				protected: false
			},
			{
				owner: null,
				id: 24,
				protected: false
			},
			{
				owner: null,
				id: 25,
				protected: false
			},
			{
				owner: null,
				id: 26,
				protected: false
			},
			{
				owner: null,
				id: 27,
				protected: false
			},
			{
				owner: null,
				id: 28,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 29,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 30,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 31,
				protected: false
			}
			],
			[
			{
				owner: 'r/cats',
				id: 32,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 33,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 34,
				protected: false
			},
			{
				owner: null,
				id: 35,
				protected: false
			},
			{
				owner: null,
				id: 36,
				protected: false
			},
			{
				owner: null,
				id: 37,
				protected: false
			},
			{
				owner: null,
				id: 38,
				protected: false
			},
			{
				owner: null,
				id: 39,
				protected: false
			},
			{
				owner: null,
				id: 40,
				protected: false
			},
			{
				owner: null,
				id: 41,
				protected: false
			},
			{
				owner: null,
				id: 42,
				protected: false
			},
			{
				owner: null,
				id: 43,
				protected: false
			},
			{
				owner: null,
				id: 44,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 45,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 46,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 47,
				protected: false
			}
			],
			[
			{
				owner: 'r/cats',
				id: 48,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 49,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 50,
				protected: false
			},
			{
				owner: null,
				id: 51,
				protected: false
			},
			{
				owner: null,
				id: 52,
				protected: false
			},
			{
				owner: null,
				id: 53,
				protected: false
			},
			{
				owner: null,
				id: 54,
				protected: false
			},
			{
				owner: null,
				id: 55,
				protected: false
			},
			{
				owner: null,
				id: 56,
				protected: false
			},
			{
				owner: null,
				id: 57,
				protected: false
			},
			{
				owner: null,
				id: 58,
				protected: false
			},
			{
				owner: null,
				id: 59,
				protected: false
			},
			{
				owner: null,
				id: 60,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 61,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 62,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 63,
				protected: false
			}
			],
			[
			{
				owner: 'r/cats',
				id: 64,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 65,
				protected: false
			},
			{
				owner: 'r/cats',
				id: 66,
				protected: false
			},
			{
				owner: null,
				id: 67,
				protected: false
			},
			{
				owner: null,
				id: 68,
				protected: false
			},
			{
				owner: null,
				id: 69,
				protected: false
			},
			{
				owner: null,
				id: 70,
				protected: false
			},
			{
				owner: null,
				id: 71,
				protected: false
			},
			{
				owner: null,
				id: 72,
				protected: false
			},
			{
				owner: null,
				id: 73,
				protected: false
			},
			{
				owner: null,
				id: 74,
				protected: false
			},
			{
				owner: null,
				id: 75,
				protected: false
			},
			{
				owner: null,
				id: 76,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 77,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 78,
				protected: false
			},
			{
				owner: 'r/dogs',
				id: 79,
				protected: false
			}
		]
	];
	const [blocks, setBlocks] = useState<Block[][]>(initialBlocks);

	const updateBlock = (id: number, updater: (block:Block) => Block) => {
		setBlocks(prev => 
			prev.map(row => 
				row.map(block => 
					block.id === id ? updater(block) : block
				)
			)
		)
	}

	const claimBlock = (id: number, owner: string) => {
		updateBlock(id, block => {
			if (block.protected) {
				// This block is protected!
			}
			if (block.owner) {
				// Must destroy first!
				return block
			}
			return (
				{
					...block, 
					owner: owner, 
					protected: false
				}
			)
		})
	}
	
	const protectBlock = (id: number) => {
		updateBlock(id, block => ({ ...block, protected: true }));
	}

	const destroyBlock = (id: number) => {
		updateBlock(id, block => {
			if (block.protected) {
				return (
					{
						...block,
						protected: false
					}
				)
			}
			return (
				{ 
					...block, 
					owner: null, 
					protected: false 
				}
			)
		});
	}

  return {
	blocks,
	claimBlock,
	protectBlock,
	destroyBlock
  }
}