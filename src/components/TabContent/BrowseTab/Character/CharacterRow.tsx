import React, { useState } from 'react'
import { Character } from '../../../../views/character.type'
import { ReactComponent as ChevronDown } from '../../../../assets/chevronDown.svg'
import { ReactComponent as ChevronUp } from '../../../../assets/chevronUp.svg'
import CharacterDetails from './CharacterDetails'

interface CharacterRowProps {
    character: Character,
}

const CharacterRow:React.FC<CharacterRowProps> = ({character}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(prev => !prev)
    }
    const keys = Object.keys(character)
    return (
        <>
            <tr className='character-row' key={character.id} onClick={handleClick}>
                <td className="character-item">{character.id}</td>
                <td className="character-item">{character.name}</td>
                <td className="character-item">{character.species}</td>
                <td className="character-item">{character.status}</td>
                <td className="character-item">{character.origin.name}</td>
                <td className="character-item">{character.gender}</td>
                {isOpen?
                <td className="character-item"><span className='more'><ChevronUp/></span></td>
                :<td className="character-item"><ChevronDown/></td>}
            </tr>
            {isOpen?
            <tr>
                <td className='details-cell' colSpan={keys.length}>
                    <CharacterDetails character={character} />
                </td>
            </tr>
                : null}
        </>
  )
}

export default CharacterRow