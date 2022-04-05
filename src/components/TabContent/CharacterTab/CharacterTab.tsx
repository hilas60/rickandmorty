import React from 'react'
import { Character } from '../../../views/character.type'
import CharacterDetails from '../BrowseTab/Character/CharacterDetails'
import './CharacterTab.scss'
import NoCharacter from '../NoCharacter'

interface CharacterTabProps {
  data: Character
}

const CharacterTab:React.FC<CharacterTabProps> = ({data = null}) => {  
  return (
    <div className='character-tab-container'>
      {data ? <CharacterDetails character={data}/>: <NoCharacter text='Search for a character i.d in order to view a character'/>}
    </div>
  )
}

export default CharacterTab