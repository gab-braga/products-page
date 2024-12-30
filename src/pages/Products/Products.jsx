import React from 'react';
import styles from "./Products.module.css";
import Head from '../../components/Head/Head';

export default () => {
  return (
    <div className={styles.Products}>
      <Head title="Produtos | Home" description="Página Principal" />
      Products
    </div>
  );
}
