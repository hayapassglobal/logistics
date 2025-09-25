
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, AboutPage, ServicesOverviewPage, ServiceDomesticPage, ServiceInternationalPage, ServiceWarehousingPage, ServiceCustomsPage, ServiceSpecializedPage, ServiceConsultancyPage, TrackingPage, QuoteRequestPage, FaqPage, ContactPage, PrivacyPolicyPage, TermsPage, AdminLoginPage, ClientAuthPage, ClientDashboardPage, RatesCalculatorPage, AdminDashboardPage } from './pages';

// Helper component to scroll to top on page change
const ScrollToTop = (): null => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for main site pages with Header and Footer
const MainLayout = () => (
    <div className="flex flex-col min-h-screen bg-white text-[#555e67]">
        <Header />
        <main className="flex-grow">
            <ScrollToTop />
            <Outlet />
        </main>
        <Footer />
    </div>
);


const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/domestic" element={<ServiceDomesticPage />} />
          <Route path="/services/international" element={<ServiceInternationalPage />} />
          <Route path="/services/warehousing" element={<ServiceWarehousingPage />} />
          <Route path="/services/customs" element={<ServiceCustomsPage />} />
          <Route path="/services/specialized" element={<ServiceSpecializedPage />} />
          <Route path="/services/consultancy" element={<ServiceConsultancyPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/rates" element={<RatesCalculatorPage />} />
          <Route path="/quote" element={<QuoteRequestPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
        
        {/* Standalone route for the client login/register page */}
        <Route path="/login" element={<ClientAuthPage />} />
        {/* Standalone route for the admin login page */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        {/* Standalone route for the CLIENT dashboard page */}
        <Route path="/dashboard" element={<ClientDashboardPage />} />
        {/* Standalone route for the ADMIN dashboard page */}
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;