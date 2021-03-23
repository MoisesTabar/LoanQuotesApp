import './styles/App.css';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [cuantity, saveCuantity] = useState(0);
  const [date, saveDate] = useState('');
  const [total, saveTotal] = useState(0);

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
      />
      <Footer />
    </div>
  );
}

export default App;
