import React from 'react'

interface IIcon{
    Icon:JSX.Element
}

const Icon:React.FC<IIcon> = (props) => {
  return (
    <span className="p-3 bg-[#201F1F] rounded-full mr-1">
    {props.Icon}
    </span>
  )
}

export default Icon
