import React from 'react';
import { Popover } from 'antd';
import { WhatsAppOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './PopOverContacts.css';

const PopOverContact = () => {
    const content = (
        <div className="popover-content">
            <ul className="contact-list">
                <li className="contact-item">
                    <PhoneOutlined className='icon-ppo' />
                    <div>
                        <span className="label">Compre por telefone</span><br />
                        <a href="tel:+5585999999" className="contact-link">(85) 9999-9999</a>
                    </div>
                </li>
                <hr />
                <li className="contact-item">
                    <WhatsAppOutlined className='icon-ppo' />
                    <div>
                        <span className="label">Fale no WhatsApp</span><br />
                        <a href="https://wa.me/5511993500214" target="_blank" rel="noopener noreferrer" className="contact-link">11993500214</a>
                    </div>
                </li>
                <hr />
                <li className="contact-item">
                    <MailOutlined className='icon-ppo' />
                    <div>
                        <span className="label">Envie um e-mail</span><br />
                        <a href="mailto:sac@mundocerealista.com.br" className="contact-link">sac@mundocerealista.com.br</a>
                    </div>
                </li>
            </ul>
            <div className="working-hours">
                <strong>HORÁRIO DE ATENDIMENTO</strong><br />
                Segunda a Sexta das 9h às 17h
            </div>
        </div>
    );

    return (
        <Popover content={content} title="Nossos Contatos" trigger="hover">
            <div className="menu-item">
                <WhatsAppOutlined className="icon" /> Fale Conosco!
            </div>
        </Popover>
    );
};

export default PopOverContact;
