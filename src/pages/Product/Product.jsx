import React from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import Head from "../../components/Head/Head";
import Loading from "../../components/Loading/Loading";

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

  if (!product) return <Loading />;

  return (
    <section className={[styles.Product, "animeLeft"].join(" ")}>
      <Head title={`Produtos | ${product.nome}`} description={product.nome} />

      <div>
        {product.fotos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.titulo} />
        ))}
      </div>

      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};
