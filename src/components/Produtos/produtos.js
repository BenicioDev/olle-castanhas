import React, { useEffect, useState } from "react";
import axios from "axios";
import { realtimeDB } from "../../firebaseConfig";

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/Produtos.json`);

        if (response.data) {
          const productList = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setProducts(productList);
          console.log(productList);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((produto) => (
          <li key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>Preço: R$ {produto.valor}</p>
            <img src={produto.pic} alt={produto.nome} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
