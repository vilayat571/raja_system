import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export interface IContactDetails{
  id?:number,
  style:string,
  text:string,
  icon:IconProp
}

const ContactAtom:React.FC<IContactDetails> = ({icon,style,text}) => {
  return (
    <div className={style}>
    <FontAwesomeIcon icon={icon} size='1x' />
    <span className="ml-2 text-sm mt-1">{text}</span>
  </div>
  )
}

export default ContactAtom
