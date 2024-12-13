import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LearnMorePage from './pages/LearnMorePage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Features from './pages/Features';
import ChatWidget from './components/chat/ChatWidget';
import PatientRecords from './pages/PatientRecords';
import HowItWorks from './components/common/HowItWorks';
import UploadReport from './pages/UploadReport';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ChatWidget />
        <HowItWorks />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <HomePage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <HowItWorksPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <AboutPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <ContactPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Features />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/patient-records"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <PatientRecords />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/upload-report"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <UploadReport />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}