// src/components/shared/Layout.js (컨텐츠 영역(공통))
import React, {useState} from 'react';
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';

function Layout({children, activeMenu}) {
  const [menuState, setMenu] = useState(true); // 햄버거 바 useState

  function onClickMenu() {
    setMenu(!menuState);
  }

  return (
    <div className={styles.container}>
      <Header onClickMenu={onClickMenu} />
      <div className={styles.layout}>
        {menuState ? <Menu activeMenu={activeMenu} /> : <div></div>}
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;