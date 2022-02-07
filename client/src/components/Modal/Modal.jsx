import React from "react"
import "./modal.css"

const Modal = ({active, setActive, clientItem}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className= {active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <h3>{clientItem.client_name} (ИНН: {clientItem.inn})</h3>
                <h5>Используемая конфигурация: {clientItem.configuration_1c} версия ({clientItem.conf_version})</h5>
                <h5>Используемая версия Платформы 1С: {clientItem.platform_version}</h5>
                <h6>Тарификация {clientItem.conf_nordis_tarification}</h6>
                <h6>Дата актуальности данных: {clientItem.date_info}</h6>
            </div>
        </div>
    )
}

export default Modal