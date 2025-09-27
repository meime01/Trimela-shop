import { useState } from 'react'
import Navbar from './componets/common/navbar'
import Footer from './componets/common/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>Welcome to Trimela Shoppers</h1>
        {/* Add your other content here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
