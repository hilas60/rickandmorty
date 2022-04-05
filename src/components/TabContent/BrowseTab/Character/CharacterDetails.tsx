import React from 'react'
import { Character } from '../../../../views/character.type'
import DetailKeyValue from './DetailKeyValue'
import './CharacterRow.scss'
interface DetailsProps {
    character: Character
}

const CharacterDetails:React.FC<DetailsProps> = ({character}) => {
    const characterDetailsKeys = ['id', 'name', 'gender', 'origin', 'species', 'status' ]
    return (
        <div className='character-details-container'>
            <img src={character.image} alt={`${character.name}`} className="character-image" />
            <div className='description-container' >
                <div className='description-title'>character description</div>
                <div className='character-keys-container'> 
                {characterDetailsKeys.map(key => 
                    <DetailKeyValue key={`key-${key}`} label={key} value={character[key].name || character[key]} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails