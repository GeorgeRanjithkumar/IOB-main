import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CheckMailPage from "./pages/CheckMailPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import ContactPage from "./pages/ContactPage";
import KYCPage from "./pages/KYCPage";
import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";
import TransactionPage from "./pages/TransactionPage";
import ProfilePage from "./pages/ProfilePage";
import UserData from "./pages/UserData";
import Exchange from "./pages/dropdown_pages/Exchange";
import Wallet from "./pages/dropdown_pages/Wallet";
import Explorer from "./pages/dropdown_pages/Explorer";
import Prices from "./pages/dropdown_pages/Prices";
import Charts from "./pages/dropdown_pages/Charts";
import About from "./pages/dropdown_pages/About";
import FAQ from "./pages/dropdown_pages/FAQ";
import PrivacyPolicy from "./pages/dropdown_pages/PrivacyPolicy";
import KycSuccess from "./pages/KycSuccess";
import Profile from "./pages/Profile";
import Navbar from "./components/navbar-components/navbar"
import OrdersStatic from "./pages/OrdersStatic";
import Datatable from "./pages/datatable";
import Datatable1 from "./pages/datatable1";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<OrdersStatic/>}/> */}
        {/* <Route path="/" element={<Datatable/>}/> */}
        <Route path="/" element={<Datatable1/>}/>
        {/* <Route path="/" element={<Navbar/>}/> */}
        {/* <Route path="/" element={<Profile/>}/> */}
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/check-email" element={<CheckMailPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/kycDocsSubmitted" element={<KycSuccess />} /> */}
        
        {/* dropdown routes */}
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
