import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Project from '../../Components/Project/Project'
import Avatar from '../../Components/Avatar/Avatar'
import './farm.css'

const ProflieFarm = () => {
  return (
    <div className='layout-proflie-farm'>
        <div className='white-gradient'>
            <Navbar />
            <Avatar />
            <Project />
        </div>
    </div>
  )
}

export default ProflieFarm