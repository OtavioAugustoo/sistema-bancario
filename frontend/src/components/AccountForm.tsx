// useState p guardar dados locais 
import { useState } from "react";
import api from '../services/api';

// useNavigate redireciona pra outra pag sem recarreagr
import { useNavigate } from "react-router-dom";

export default function AccountForm() {


    //holder guarda o nome
    //set atualiza o nome(holder)
    const [holder, setHolder] = useState('');


    //faz o saldo começar em 0 (faz o saldo comecar em 0 quando cria a conta)
    const [balance] = useState(0);


    // Inicializa a função de navegação.
    const navigate = useNavigate();



    //--------------------CRIAÇÃO DE CONTA------------------

    //async pq espera a resposta da API
    const createAccount = async () => {

        //se o campo tiver vazio manda um alert
        if (!holder) {
            alert('Please enter a holder name.');
            return;
        }

        //envia dados pro back, faz um POST enviando JSON do nome e do saldo(holder e balance)
        //await serve pra 
        await api.post('/accounts/create', { holder, balance });

        // alert de sucesso sobre ccriar conta
        alert('Account created successfully.');
        navigate('/accounts'); //direciona para as contas criadas
    };

    //CREATE NEW ACCOUNT
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create New Account</h2>


            {/*caixa de texto de para criar a conta*/}
            <div className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Account Holder Name"
                    value={holder}

                    //quando o usuario digita, o onChange captura e seta o estado
                    onChange={(e) => setHolder(e.target.value)}

                    // classe do tailwild css pra estilização
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                />
            </div>

            {/* BOTÃO CREATE ACCOUNT */}
            <button
                onClick={createAccount} // botao de criar conta
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
            >
                Create Account
            </button>

            {/* BOTAO EXISTING ACCOUNTS*/}
            <div className="text-center pt-4">
                <button
                   
                    onClick={() => navigate('/accounts')} //botao de ver contas existentes
                    className="text-sm text-gray-500 hover:text-gray-700 transition duration-150"                >
                    Existing Accounts
                </button>
            </div>
        </div>
    );
}


//
