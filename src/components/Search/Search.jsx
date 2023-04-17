import React from 'react';
import styles from './Search.module.scss';
import { Container } from '@mui/material';
import SearchValue from '../SearchValue/SearchValue';
import Categories from '../Categories/Categories';

export default function Search() {
  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <SearchValue />
          <Categories />
          <svg
            className={styles.location}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                stroke="#4d4d4d"
                strokeWidth="2"
                d="M12 21c1.5 0 7-7 7-11s-3-7-7-7-7 3-7 7 5.5 11 7 11z"></path>
              <circle cx="12" cy="10" r="2" fill="#4d4d4d"></circle>
            </g>
          </svg>
          <input type="text" placeholder="Выбрать город..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.date}>
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                stroke="#666"
                strokeWidth="2"
                d="M11 5h5m3 0c.552 0 1 .445 1 1v14c0 .552-.445 1-1 1H5c-.552 0-1-.445-1-1V6a1 1 0 0 1 1.01-1H8"></path>
              <path
                fill="#666"
                d="M7 12h2v2H7zM11 12h2v2h-2zM11 16h2v2h-2zM15 12h2v2h-2zM7 16h2v2H7zM7 2h2v6H7zM15 2h2v6h-2z"></path>
            </g>
          </svg>
          <input className={styles.input} type="text" placeholder="Выбрать дату..." />
        </div>
        <div className={styles.text}>
          <p>Найди лучшего мастера!</p>
        </div>
        <button className={styles.filters}>
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.53125 2.82122H9.1811C9.41969 3.81255 10.2917 4.54982 11.3284 4.54982C12.3651 4.54982 13.2372 3.81255 13.4758 2.82122H16.4688C16.7621 2.82122 17 2.57662 17 2.27492C17 1.97323 16.7621 1.72863 16.4688 1.72863H13.4758C13.2372 0.737299 12.3651 0 11.3284 0C10.2917 0 9.41963 0.737299 9.18106 1.72863H0.53125C0.237867 1.72863 0 1.97323 0 2.27492C0 2.57662 0.237867 2.82122 0.53125 2.82122ZM11.3284 1.0926C11.9624 1.0926 12.4782 1.62299 12.4782 2.27489C12.4782 2.92683 11.9624 3.45722 11.3284 3.45722C10.6945 3.45722 10.1787 2.92683 10.1787 2.27489C10.1787 1.62299 10.6945 1.0926 11.3284 1.0926ZM0.53125 7.5463H3.52425C3.76284 8.53763 4.63486 9.27489 5.67159 9.27489C6.70833 9.27489 7.58034 8.53763 7.81894 7.5463H16.4688C16.7621 7.5463 17 7.30169 17 7C17 6.69831 16.7621 6.4537 16.4688 6.4537H7.8189C7.58031 5.46237 6.70829 4.72508 5.67156 4.72508C4.63482 4.72508 3.76281 5.46237 3.52421 6.4537H0.53125C0.237867 6.4537 0 6.69831 0 7C0 7.30169 0.237834 7.5463 0.53125 7.5463ZM5.67156 5.81767C6.30554 5.81767 6.82132 6.34806 6.82132 7C6.82132 7.65191 6.30554 8.18229 5.67156 8.18229C5.03758 8.18229 4.5218 7.65191 4.5218 7C4.5218 6.34806 5.03758 5.81767 5.67156 5.81767ZM16.4688 11.1788H13.4758C13.2372 10.1874 12.3651 9.45015 11.3284 9.45015C10.2917 9.45015 9.41966 10.1874 9.18106 11.1788H0.53125C0.237867 11.1788 0 11.4234 0 11.7251C0 12.0268 0.237867 12.2714 0.53125 12.2714H9.1811C9.41969 13.2627 10.2917 14 11.3284 14C12.3652 14 13.2372 13.2627 13.4758 12.2714H16.4688C16.7621 12.2714 17 12.0268 17 11.7251C17 11.4234 16.7622 11.1788 16.4688 11.1788ZM11.3284 12.9074C10.6945 12.9074 10.1787 12.377 10.1787 11.7251C10.1787 11.0731 10.6945 10.5427 11.3284 10.5427C11.9624 10.5427 12.4782 11.0731 12.4782 11.7251C12.4782 12.377 11.9624 12.9074 11.3284 12.9074Z"
              fill="black"
            />
          </svg>
          Фильтры
        </button>
      </div>
    </Container>
  );
}
