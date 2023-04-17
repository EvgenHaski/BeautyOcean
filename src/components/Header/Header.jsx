import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>BEAUTY OCEAN</div>
          </Link>
          <div className={styles.search_wrapper}>
            <svg
              className={styles.svg_main}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20">
              <g fill="none" fillRule="evenodd" transform="translate(-2 -2)">
                <path d="M0 0h24v24H0z" />
                <circle cx="10" cy="10" r="7" stroke="#4D4D4D" strokeWidth="2" />
                <path stroke="#4D4D4D" strokeWidth="2" d="M17 17l4 4" />
              </g>
            </svg>
            <input className={styles.search_main} placeholder="Поиск" />
          </div>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/login">
                  <Button variant="contained">Стать мастером</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
