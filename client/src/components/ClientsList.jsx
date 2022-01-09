import React from "react"
import ClientItem from "./ClientItem"

const ClientsList = ({ clients }) => {

    return (
        <div className="clientsListContainer">
            <table className="table table-hover">
                <thead className="clientsTableHeading">
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Контрагент</th>
                        <th scope="col">ИНН</th>
                        <th scope="col">Конфигурация 1С</th>
                        <th scope="col">Версия</th>
                        <th scope="col">Платформа</th>
                        {/* <th scope="col">Используется тарификация</th>
                        <th scope="col">Дата актуальности</th> */}
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) =>
                        <ClientItem key={client._id} client={client} index={index + 1} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsList