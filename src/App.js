import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIInsights from './components/AIInsights';
import Portfolio from './components/Portfolio';
import MarketOverview from './components/MarketOverview';
import StockAnalysis from './components/StockAnalysis';
import NewsAnalyzer from './components/NewsAnalyzer';
import TradingSignals from './components/TradingSignals';
import Watchlist from './components/Watchlist';
import Settings from './components/Settings';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  });

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'ai-insights':
        return <AIInsights />;
      case 'portfolio':
        return <Portfolio />;
      case 'market':
        return <MarketOverview />;
      case 'analysis':
        return <StockAnalysis />;
      case 'news':
        return <NewsAnalyzer />;
      case 'signals':
        return <TradingSignals />;
      case 'watchlist':
        return <Watchlist />;
      case 'settings':
        return <Settings user={user} setUser={setUser} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header user={user} />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
