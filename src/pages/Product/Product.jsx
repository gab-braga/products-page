import React from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import Head from "../../components/Head/Head";

export default () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  async function loadData() {
    const endpoint = `https://ranekapi.origamid.dev/json/api/produto/${id}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    setProduct(data);
  }

  React.useEffect(() => {
    loadData();
  }, []);

  if (!product) return <p>Carregando...</p>;

  return (
    <section className={styles.Product + " animeLeft"}>
      <Head title={`Produtos | ${product.nome}`} description={product.nome} />
      
      {product.fotos.map(photo => (
          <img key={photo.src} src={photo.src} alt={photo.titulo} />
      ))}
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};
