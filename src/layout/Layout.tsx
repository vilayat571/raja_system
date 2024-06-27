import React from 'react'
import Foot from '../components/Footer/Foot'
import Totop from '../components/Home/Totop'

interface ILayout{
    children:React.ReactNode
}
const Layout:React.FC<ILayout>= ({children}) => {
  return (
    <div className='overflow-x-hidden'>
      {children}
      <Foot />
      <Totop />
    </div>
  )
}

export default Layout
