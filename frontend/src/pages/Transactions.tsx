import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

interface Transaction {
    id: number;
    value: number;
    type: string;
    date: string;
}

export default function Transactions() {
    const { id } = useParams();
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    const [value, setValue] = useState(0);
    const [destinationId, setDestinationId] = useState('');

    const loadTransactions = () => {
        api.get(`/accounts/${id}/transactions`).then((res) => setTransaction(res.data));
    };

    useEffect(() => {
        loadTransactions();
    }, [id]);

    const deposit = async () => {
        await api.post(`/accounts/${id}/deposit?value=${value}`);
        loadTransactions();
    }

    const withdraw = async () => {
        await api.post(`/accounts/${id}/withdraw?value=${value}`);
        loadTransactions();
    }

    const transfer = async () => {
        await api.post(`/accounts/${id}/transfer/${destinationId}?value=${value}`);
        loadTransactions();
    }

    return (
        <div>
            <h2>Account {id} Transactions</h2>

            <input
                type="number"
                placeholder="Value"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="Destination account ID"
                value={destinationId}
                onChange={(e) => setDestinationId(e.target.value)}
            />
            <div>
                <button onClick={deposit}>Deposit</button>
                <button onClick={withdraw}>Withdraw</button>
                <button onClick={transfer}>Transfer</button>
            </div>

            <h3>Statement</h3>
            <ul>
                {transactions.map((t) => (
                    <li key={t.id}>
                        {t.type} of {t.value.toFixed(2)} on {new Date(t.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}