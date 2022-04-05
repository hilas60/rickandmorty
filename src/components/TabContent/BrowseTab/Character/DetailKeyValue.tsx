import React from 'react'

interface KeyValueProps {
    label: string,
    value: string,
}

const DetailKeyValue:React.FC<KeyValueProps> = ({label, value}) => {
  return (
    <div className='character-key-value'>
        <div className="character-key">{label}</div>
        <div className="character-value">{value}</div>
    </div>
  )
}

export default DetailKeyValue