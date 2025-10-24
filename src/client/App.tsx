import { useState } from 'react';
import './styles/global.css'
import { Controls, useBlocks } from './hooks/useBlocks';

export const App = () => {
  const {blocks, claimBlock, protectBlock, destroyBlock} = useBlocks();
  const team1 = 'r/cats'
  const team2 = 'r/dogs'
  const [selectedControl, setSelectedControl] = useState<Controls>('Claiming')
  const [selectedBlock, setSelectedBlock] = useState(1000) 

  return (
    <div className="main-div">
      <div className='content'>
        <div className='top-section'>
          <p className='team-1-label hug-left'>
            {team1}
          </p>
          <p
            className={`${selectedControl} bold`}
          >
            {selectedControl}
          </p>
          <p className='team-2-label hug-right'>
            {team2}
          </p>
        </div>

        <div className='grid-section'>
          {
            blocks.map(row => {
              return (
                <div className='block-row'>
                  {
                    row.map(block => {
                      return (
                        <div 
                          id={block.id.toString()}
                          className={`block 
                            ${
                            block.owner ?
                              block.owner === team1 ? 
                                'team-1' :
                                'team-2'
                              :
                              'no-team'
                            }

                            ${
                              block.id === selectedBlock && 'selected'
                            }

                            ${
                              block.protected && 'protected'
                            }
                            `
                          }
                          onClick={() => setSelectedBlock(block.id)}
                        />
                      )
                    })
                  }
                  </div>
              )
            })
          }
        </div>

        <div>
          <button
            className="protect button"
            onClick={ () => {
              setSelectedControl('Protecting')
              protectBlock(selectedBlock)
            }}
          >
            Protect
          </button>

          <button
            className="claim button"
            onClick={ () => {
              setSelectedControl('Claiming')
              claimBlock(selectedBlock, team2)
            }}
          >
            Claim
          </button>

          <button
            className="destroy button"
            onClick={ () => {
                setSelectedControl('Destroying')
                destroyBlock(selectedBlock)
              }
            }
          >
            Destroy
          </button>
        </div>
      </div>

    </div>
  );
};
