//useEffect pra executar código quando o componente carrega
//useState pra armazenar dados na memória do componente
import { useEffect, useState } from "react";

//conexao com o back
import api from "../services/api";

//hook pra mudar de pagina sem recarregar
import { useNavigate } from "react-router-dom";



//definicao da conta(toda conta tem id, titular e saldo)
interface Account {
    id: number;
    holder: string;
    balance: number;
}



export default function Accounts() {

    //accounts guarda a lista de contas,inicia vazia
    const [accounts, setAccounts] = useState<Account[]>([]);

    //funcao pra direcionar pra outra tela
    const navigate = useNavigate();

    //funcao q busca as contas no back
    //faz o get na rota accounts e atualiza
    const loadAccounts = () => {
        api.get('/accounts').then((res) => setAccounts(res.data));
    };

    //array vazio serve pra garantir que a funcao seja executada apenas UMA VEZ
    useEffect(() => {
        loadAccounts();
    }, []);


    

    // -----OQ APARECE NA TELA-------
    return (

        // Container principal
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Available Accounts</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">




                {/*pra cada array account encontrada, renderiza a div*/}
                {accounts.map((account) => (
                    <div
                        key={account.id} // identificador react
                         
                        
                        className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
                    >


                        {/*informacoes de cada conta*/}
                        <div>
                            <p className="text-sm font-light text-gray-500 mb-1">Account ID: {account.id}</p>
                            <p className="text-xl font-bold text-gray-900 mb-3">Holder: {account.holder}</p>



                            {/*exibe o saldo = balance*/}
                            <p className="text-2xl font-extrabold text-green-600">
                                Balance: ${account.balance.toFixed(2)} {/*tofixed por conta das casa deciamis */}
                            </p>
                        </div>


                        <div className="flex flex-col gap-2 mt-4">
                            {/* Botão de Ver Transacoes */}
                            <button
                                
                                onClick={() => navigate(`/transactions/${account.id}`)}//navega pra rota de transações
                                className="py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition duration-150"
                            >
                                See Transactions & Operations
                            </button>
                        </div>
                    </div>
                ))}
            </div>



            {/* se nao tiver nenhuma conta, exibe essa msg */}
            {accounts.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No accounts found. Create one to get started.</p>
            )}
        </div>
    );
}
