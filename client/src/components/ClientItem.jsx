import React from "react"

const ClientItem = ({ client, index, setModalActive, setClientItem }) => {

    if (client.configuration_1c === "Зарплата и кадры государственного учреждения редакция 3.1") {
        client.configuration_1c = "ЗГУ редакция 3.1"
    }

    if (client.configuration_1c === "Бухгалтерия государственного учреждения редакция 2.0") {
        client.configuration_1c = "БГУ редакция 2.0"
    }

    function clickedClientItem(event) {

        if (event._reactName = "onclick") {
            setModalActive(true)
            setClientItem(client)
        }
    }

    return (
        <tr onClick={clickedClientItem}>
            <th scope="row">{index}</th>
            <td>{client.client_name}</td>
            <td style={{textAlign: "center"}}>{client.inn}</td>
            <td style={{textAlign: "center"}}>{client.configuration_1c}</td>
            <td style={{textAlign: "center"}}>{client.conf_version}</td>
            <td style={{textAlign: "center"}}>{client.platform_version}</td>
            <td style={{textAlign: "center"}}><input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                checked={client.conf_nordis_tarification}
            /></td>
        </tr>
    )
}

export default ClientItem