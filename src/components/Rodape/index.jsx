import styles from './Rodape.module.css';
import MarcaRegistrada from '@/assets/images/marca_registrada.svg?react';

import React from 'react';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Paulo Prediger
    </footer>
  );
}
