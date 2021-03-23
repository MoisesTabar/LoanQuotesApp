import './styles/App.css';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
import Spinner from './components/Spinner';
import { useState } from 'react';

function App() {
  const [cuantity, saveCuantity] = useState(0);
  const [date, saveDate] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Form 
        cuantity={cuantity} 
        saveCuantity={saveCuantity}
        date={date}
        saveDate={saveDate}
        total={total}
        saveTotal={saveTotal}
        setLoading={setLoading}
      />
      { 
        loading ? <Spinner /> : 
        (total === 0 ? <p>Please enter a cuantity and date to calculate</p> : <Results total={total} date={date} cuantity={cuantity}/>) 
      }
      <Footer />
    </div>
  );
}

export default App;
