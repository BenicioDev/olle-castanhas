import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";
import "./ProdutosAdmin.css";

export default function ProdutosAdmin() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "https://olle-castanhas-default-rtdb.firebaseio.com/Produtos.json"
            );
            if (response.data) {
                const productList = Object.keys(response.data).map((key) => ({
                    id: key,
                    ...response.data[key],
                }));
                setProducts(productList);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        form.setFieldsValue(product);
        setIsModalOpen(true);
    };

    const handleUpdate = async () => {
        try {
            const updatedValues = form.getFieldsValue();
            await axios.put(
                `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/Produtos/${editingProduct.id}.json`,
                updatedValues
            );
            message.success("Produto atualizado com sucesso!");
            setIsModalOpen(false);
            fetchProducts();
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            message.error("Erro ao atualizar produto.");
        }
    };

    const columns = [
        {
            title: "Nome do Produto",
            dataIndex: "nome",
            key: "nome",
        },
        {
            title: "Valor",
            dataIndex: "valor",
            key: "valor",
            render: (text) => `R$ ${text}`,
        },
        {
            title: "Ações",
            key: "acoes",
            render: (_, record) => (
                <Button onClick={() => handleEdit(record)}>Editar</Button>
            ),
        },
    ];

    return (
        <div className="container">
            <Table dataSource={products} columns={columns} rowKey="id" loading={loading} />

            {/* Modal de Edição */}
            <Modal
                title="Editar Produto"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleUpdate}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="nome" label="Nome do Produto" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="valor" label="Valor" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item name="descricao" label="Descrição">
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
