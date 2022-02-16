import React from "react"
import ClientItem from "./ClientItem"

const ClientsList = ({clients, setModalActive, setClientItem}) => {

    return (
        <div className="clientsListContainer">
            <h3 style={{ textAlign: 'center' }}>Список клиентов</h3>
            <table className="table table-hover">
                <thead className="clientsTableHeading">
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col" style={{textAlign: "center"}}>Контрагент</th>
                        <th scope="col" style={{textAlign: "center"}}>ИНН</th>
                        <th scope="col" style={{textAlign: "center"}}>Конфигурация 1С</th>
                        <th scope="col" style={{textAlign: "center"}}>Версия</th>
                        <th scope="col" style={{textAlign: "center"}}>Платформа</th>
                        <th scope="col" style={{textAlign: "center"}}>Тарификация</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) =>
                        <ClientItem key={client._id} client={client} index={index + 1} setModalActive ={setModalActive} setClientItem = {setClientItem}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsList