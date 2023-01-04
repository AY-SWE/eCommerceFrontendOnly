import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>AY Commerce</span>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>8 Avenue, New York City, NY 88888</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>(888)888-8888</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>support@aycommerce.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety & Privacy</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
