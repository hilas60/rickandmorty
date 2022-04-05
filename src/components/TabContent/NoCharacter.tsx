import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/noCharacter.svg'
import './TabContent.scss'
interface Props {
    text: string
}
const NoCharacter:React.FC<Props> = ({text}) => {
  return (
    <div className='no-character-container'>
        <SearchIcon />
        <div className='no-character-text'>{text}</div>
    </div>
  )
}

export default NoCharacter