import { Routes, Route } from "react-router-dom";

import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { UsersPage } from "./Pages/UsersPage/UsersPage";
import { CompanysPage } from "./Pages/CompanysPage/CompanysPage";
import { CounterpartiesPage } from "./Pages/CounterpartiesPage/CounterpartiesPage";
import { ContractsPage } from "./Pages/ContractsPage/ContractsPage";
import { DealsPage } from "./Pages/DealsPage/DealsPage";
import { SettingsPage } from "./Pages/SettingsPage/SettingsPage";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Layout } from "./Components/Layout/Layout";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

import './App.css';

function App() {


  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ProfilePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="companys" element={<CompanysPage />} />
          <Route path="counterparties" element={<CounterpartiesPage />} />
          <Route path="contracts" element={<ContractsPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
