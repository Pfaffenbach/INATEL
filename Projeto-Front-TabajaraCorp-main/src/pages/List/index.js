import { FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientFunc from '../../services/func.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function List() {

    const [users, setUsers] = useState([
    ]);

    async function List(e) {
        e.preventDefault();

        const response = await ClientFunc.listFunc();

        if (response.status === 200) {
            setUsers(response.data)
            toast.success('Funcionários resgatados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar Funcionários">
                    <FaUsers size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={List}>

                        <div class="table-wrapper">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.email} </td>
                                            <td>{user.nome} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <button type="submit">Listar</button>

                    </form>
                </div>

            </div>

        </div>

    )
}