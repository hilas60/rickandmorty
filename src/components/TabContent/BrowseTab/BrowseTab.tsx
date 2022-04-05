import React from 'react'
import { Character } from '../../../views/character.type'
import NoCharacter from '../NoCharacter'
import './BrowseTab.scss'
import CharacterRow from './Character/CharacterRow'

interface BrowseProps {
  data: Character[]
}

const BrowseTab:React.FC<BrowseProps> = ({data}) => {
  const tableHeaders = ['id', 'name', 'species', 'status', 'origin', 'gender', 'more']
  return (
    <div className='browse-tab-container'>
      {data?.length? 
        <table className='characters-table'>
          <thead>
            <tr>
              {tableHeaders.map(header => <th key={`table-header-${header}`}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(character => <CharacterRow key={character.id} character={character} />)}
          </tbody>
        </table>
        : (
          <NoCharacter text={'Search for character name in order to view a character'}/>
        )}
    </div>
  )
}

export default BrowseTab