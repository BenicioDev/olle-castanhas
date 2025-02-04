import React from 'react';
import { Input, Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo"> <Link to="/">LOGO</Link></div>
            <div className="search-bar">
                <Input
                    placeholder="O que deseja procurar?"
                    prefix={<SearchOutlined style={{ color: '#004D4D' }} />}
                />
            </div>
            <div className="menu-icons">
                <div className="menu-item">
                    <QuestionCircleOutlined className="icon" /> Atendimentoooo
                </div>
                <div className="menu-item">
                    <UserOutlined className="icon" /> Minha Conta
                </div>
                <div className="menu-item">
                    <Badge count={0} size="small" color="#F59E0B">
                        <ShoppingCartOutlined className="icon" style={{ fontSize: '20px' }} />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

