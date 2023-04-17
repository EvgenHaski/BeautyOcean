import React from 'react';
import styles from './SearchValue.module.scss';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/slice/searchSlice';
import { fetchMasters } from '../../redux/slice/mastersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchValue() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.search);
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');

  // Input
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const onClickClear = () => {
    setValue('');
    inputRef.current.focus();
  };
  // Search filter
  const searchMasters = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(fetchMasters({ search }));
  };

  React.useEffect(() => {
    searchMasters();
  }, [searchValue]);

  return (
    <>
      <svg className={styles.search} xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <g fill="none" fillRule="evenodd" transform="translate(-2 -2)">
          <path d="M0 0h24v24H0z" />
          <circle cx="10" cy="10" r="7" stroke="#4D4D4D" strokeWidth="2" />
          <path stroke="#4D4D4D" strokeWidth="2" d="M17 17l4 4" />
        </g>
      </svg>
      <input ref={inputRef} value={value} onChange={onChangeInput} placeholder="Найти мастера..." />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </>
  );
}
