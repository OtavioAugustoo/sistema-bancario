import { useState } from "react";
import api from '../services/api';

export default function AccountForm() {
    const [holder, setHolder] = useState('');
    const [balance] = useState(0);

    const createAccount = async () => {
        await api.post('/accounts/create', { holder, balance });
        alert('Account created successfully.');
    };

    return (
        <div>
            <h2>Create Account</h2>
            <input
                type="text"
                placeholder="Holder"
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
            />
            <button onClick={createAccount}>Create</button>
        </div>
    );
}
