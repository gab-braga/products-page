import React from 'react';
import styles from "./Home.module.css";
import Head from '../../components/Head/Head';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

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

  if (!products) return <Loading />;

  return (
    <section className={[styles.Home, "animeLeft"].join(" ")}>
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
