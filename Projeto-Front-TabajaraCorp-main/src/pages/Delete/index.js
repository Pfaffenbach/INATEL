import { FaUserMinus } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientFunc from '../../services/func.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Delete() {

    const [email, setEmail] = useState('');

    async function handleDelete(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientFunc.deleteFunc(data);
        console.log('update', update);
        if (update.status === 200) {
            toast.success('Funcionário deletado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Deletar Funcionário">
                    <FaUserMinus size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Deletar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}