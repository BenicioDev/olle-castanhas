import React from 'react';
import { Input, Badge, Popover } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './header.css';
import { Link } from 'react-router-dom';
import { Image } from 'antd';


export default function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <Image
                    class="img-logo"
                    width={195}
                    height={65}
                    style={{ borderRadius: '6px' }}
                    src="/header/ultima.png"
                />
            </div>
            <div className="search-bar">
                <Input
                    placeholder="O que deseja procurar?"
                    prefix={<SearchOutlined style={{ color: '#004D4D' }} />}
                />
            </div>
            <div className="menu-icons">
                
                <Popover content="Em breve" title="Aviso">
                    <div className="menu-item">
                        <QuestionCircleOutlined className="icon" /> Atendimento
                    </div>
                </Popover>

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

