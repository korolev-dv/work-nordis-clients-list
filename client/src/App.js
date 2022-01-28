import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import ClientsList from './components/ClientsList'
import Navbar from './components/Navbar';
import './styles/App.css'

function App() {

  const [clientsList, setClientsList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    const response = await axios.get("http://62.192.227.9:7000/api/getClientsList")
    setClientsList(response.data)
  }

  const searchedClientsList = useMemo(() => {

    if (searchQuery) {
      return clientsList.filter(client => client.client_name.toLowerCase().includes(searchQuery))    
    }
    return clientsList
 
  }, [clientsList, searchQuery])

  return (
    <div className="App">
      <Navbar />
      
      <div style={{ width: "400px" }}>
        <input 
            className="form-control me-2"
            type="search" 
            placeholder="Найти ..." 
            aria-label="Search" 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)}>
        </input>
      </div>

      <h3 style={{ textAlign: 'center' }}>Список клиентов</h3>
      <ClientsList clients={searchedClientsList} />
    </div>
  );
}

export default App;