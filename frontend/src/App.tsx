import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountForm />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions/:id" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
