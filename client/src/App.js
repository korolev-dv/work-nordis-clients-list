import axios from 'axios';
import { useEffect, useState } from 'react';
import ClientsList from './components/ClientsList'
import Navbar from './components/Navbar';
import './styles/App.css'

function App() {

  const [clientsList, setClientsList] = useState([])

  useEffect(() => {
    fetchClients()
  }, [])


  async function fetchClients() {
    const response = await axios.get("http://62.192.227.9:7000/api/getClientsList")
    setClientsList(response.data)
  }

  return (
    <div className="App">
      <Navbar />
      
      <div style={{ width: "400px" }}>
        <input className="form-control me-2" type="search" placeholder="Найти ..." aria-label="Search"></input>
      </div>

      <h3 style={{ textAlign: 'center' }}>Список клиентов</h3>
      <ClientsList clients={clientsList} />
    </div>
  );
}

export default App;