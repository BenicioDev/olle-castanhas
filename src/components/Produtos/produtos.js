import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List, Image, Spin } from "antd";
import { realtimeDB } from "../../firebaseConfig";

const { Meta } = Card;

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

  if (loading) return (
    <div style={{ padding: '20px' }}>
      <List>
        <Spin tip="Carregando produtos..." />
      </List>
    </div>
  )

  return (
    <div style={{ padding: '20px' }}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={products}
        renderItem={produto => (
          <List.Item>
            <Card
              hoverable
              cover={<Image alt={produto.nome} src={produto.pic} width={300} height={200} style={{ objectFit: 'cover' }} />}
            >
              <Meta title={produto.nome} description={produto.descricao} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Produtos;
