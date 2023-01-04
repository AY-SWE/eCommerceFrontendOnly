import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon, PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>AY Commerce</span>
            </div>
        </div>
    </div>
  )
}

export default Footer