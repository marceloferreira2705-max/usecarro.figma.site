import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AssinaturaPage } from './pages/AssinaturaPage';
import { ConsorcioPage } from './pages/ConsorcioPage';
import { FinanciamentoPage } from './pages/FinanciamentoPage';
import { VeiculosPage } from './pages/VeiculosPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { TermosPage } from './pages/TermosPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { LGPDPage } from './pages/LGPDPage';
import { CookiesPage } from './pages/CookiesPage';
import { OuvidoriaPage } from './pages/OuvidoriaPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
// import { SuccessPage } from './pages/SuccessPage'; // Removido

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assinatura" element={<AssinaturaPage />} />
        <Route path="/consorcio" element={<ConsorcioPage />} />
        <Route path="/financiamento" element={<FinanciamentoPage />} />
        <Route path="/veiculos" element={<VeiculosPage />} />
        <Route path="/veiculo/:id/:name?" element={<VehicleDetailPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/termos" element={<TermosPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/lgpd" element={<LGPDPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/ouvidoria" element={<OuvidoriaPage />} />
        {/* <Route path="/success" element={<SuccessPage />} /> Removido */}
      </Routes>
    </Router>
  );
};
