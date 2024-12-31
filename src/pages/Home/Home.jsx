import React from 'react';
import styles from "./Home.module.css";
import Head from '../../components/Head/Head';
import { Link } from 'react-router-dom';

export default () => {
  const [products, setProducts ] = React.useState(null);

  async function loadData() {
    const endpoint = "https://ranekapi.origamid.dev/json/api/produto";
    const response = await fetch(endpoint);
    const data = await response.json();
    setProducts(data);
  }

  React.useEffect(() => {
    loadData()
  }, []);

  if (!products) return <p>Carregando...</p>;

  return (
    <section className={styles.Home + " animeLeft"}>
      <Head title="Produtos | Home" description="Página Principal" />
      
      {products.map(product => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.product}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
}
