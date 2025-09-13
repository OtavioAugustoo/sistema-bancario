import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface Account {
    id: number;
    holder: string;
    balance: number;
}

export default function Accounts() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/accounts').then((res) => setAccounts(res.data));
    }, []);

    return (
        <div>
            <h2>Banking System</h2>
            {accounts.map((account) => (
                <div key={account.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <p><strong>Holder:</strong> {account.holder}</p>
                    <p><strong>Balance:</strong> {account.balance.toFixed(2)}</p>
                    <button onClick={() => navigate(`/transactions/${account.id}`)}>See Transactions</button>
                </div>
            ))}
        </div>
    );
}
