import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserEdit, FaUserMinus, FaUserSecret, FaUsers } from "react-icons/fa";

import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                
            </div>
            <Link to="/">
                <FaUserPlus color="white" size={24} />
                Cadastrar
            </Link>
            <Link to="/update">
                <FaUserEdit color="white" size={24} />
                Atualizar
            </Link>
            <Link to="/delete">
                <FaUserMinus color="white" size={24} />
                Deletar
            </Link>
            <Link to="/list">
                <FaUsers color="white" size={24} />
                Listar
            </Link>
            <Link to="/listEmail">
                <FaUserSecret color="white" size={24} />
                Listar Por Email
            </Link>
        </div>
    )
}