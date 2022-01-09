import React from "react"

const ClientItem = ({ client, index }) => {

    if (client.configuration_1c === "Зарплата и кадры государственного учреждения редакция 3.1") {
        client.configuration_1c = "ЗГУ редакция 3.1"
    }

    if (client.configuration_1c === "Бухгалтерия государственного учреждения редакция 2.0") {
        client.configuration_1c = "БГУ редакция 2.0"
    }

    return (
        <tr>
            <th scope="row">{index}</th>
            <td >{client.client_name}</td>
            <td>{client.inn}</td>
            <td>{client.configuration_1c}</td>
            <td>{client.conf_version}</td>
            <td>{client.platform_version}</td>
            {/* <td>{client.conf_nordis_tarification}</td>
            <td>{client.date_info}</td> */}
        </tr>
    )
}

export default ClientItem