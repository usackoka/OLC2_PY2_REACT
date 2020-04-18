import React from 'react';
import styles from './UserProfileImg.module.css';
import UserImg from '../../../assets/images/users/user-profile.jpg';

const UserProfileImg = ( props ) => {
  return(
    <img
    className={styles.UserProfileImg}
    src={UserImg}
    alt="Default User" />
  );
}

export default UserProfileImg;
