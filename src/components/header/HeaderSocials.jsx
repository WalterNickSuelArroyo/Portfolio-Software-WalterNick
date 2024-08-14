import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaYoutube} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/walter-suel-arroyo-software/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/WalterNickSuelArroyo" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.youtube.com/@waltersuel" target='_blank' rel="noopener noreferrer"><FaYoutube/></a>
    </div>
  )
}

export default HeaderSocials