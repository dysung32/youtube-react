// src/components/shared/Header.js (상단 고정 바(공통))
import styles from './Header.module.css';
import youtubeLogo from '../../data/youtube_logo.png';
import {FiMenu} from 'react-icons/fi';
import {IoSearchOutline} from 'react-icons/io5';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import {useState} from 'react';

function Header({onClickMenu}) {
  const [value, setValue] = useState('');

  function onClick() {
    console.log(value);
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.header}>
      <div className={styles.tab}>
        <FiMenu className={styles.icon} onClick={onClickMenu} />
        <img src={youtubeLogo} alt="유튜브 로고" className={styles.logo} />
      </div>
      <div className={styles['center-tab']}>
        <input className={styles.input} onChange={onChange} value={value} />
        <IoSearchOutline className={styles['search-icon']} onClick={onClick} />
      </div>
      <div className={styles.tab}>
        <BsGrid3X3Gap className={styles.icon} />
        <HiOutlineDotsVertical className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;