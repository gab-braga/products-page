import React from 'react';
import styles from "./Contact.module.css";
import photo from "../../assets/contato.jpg";
import Head from '../../components/Head/Head';

export default () => {
  return (
    <section className={styles.Contact + " animeLeft"}>
      <Head title="Produtos | Contato" description="Página de Contato" />
      
      <img src={photo} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.info}>
          <li>gabriel@example.com</li>
          <li>99 99999-9999</li>
          <li>Rua 31 de Fevereiro, 999</li>
        </ul>
      </div>
    </section>
  );
}
