import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMasters } from '../../redux/slice/mastersSlice';
import styles from './Home.module.scss';

import MastersBlock from '../../components/MastersBlock/MastersBlock';
import Download from '../../components/Download/Download';

export const Home = () => {
  const dispatch = useDispatch();
  const { masters, status } = useSelector((state) => state.masters);

  const getMasters = async () => {
    dispatch(fetchMasters());
  };

  React.useEffect(() => {
    getMasters();
  }, []);

  const mastersBlock = masters.map((obj) => <MastersBlock key={obj.id} {...obj} />);

  return (
    <div>
      <Download />
      <p>Рекомендации для вас</p>
      <div className={styles.block}>{mastersBlock}</div>
    </div>
  );
};
