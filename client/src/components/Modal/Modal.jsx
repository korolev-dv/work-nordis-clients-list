import React from "react"
import "./modal.css"

const Modal = ({ active, setActive, clientItem }) => {

    let extensions = clientItem.extensions

    if (!extensions) {
        extensions = []
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="card">
                    <div className="card-header text-center">
                        <h5 className="card-title">{clientItem.client_name} (ИНН: {clientItem.inn})</h5>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col">
                                <h6 className="card-title">Используемая конфигурация: {clientItem.configuration_1c} версия ({clientItem.conf_version})</h6>
                                <h6 className="card-title">Используемая версия Платформы 1С: {clientItem.platform_version}</h6>
                                <h6 className="card-title">Тарификация:
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkboxNoLabel"
                                        checked={clientItem.conf_nordis_tarification}
                                    />
                                </h6>
                            </div>
                            <div className="col">
                                <h5>Список расширений</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Расширение</th>
                                            <th scope="col">Версия</th>
                                            <th scope="col">Активно</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {extensions.map((extension, index) =>
                                            <>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{extension.name}</td>
                                                    <td>{extension.version}</td>
                                                    <td className="td-content-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="checkboxNoLabel"
                                                            checked={extension.active}
                                                        />
                                                    </td>
                                                </tr>
                                            </>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted text-center">
                        <p className="card-text">
                            <small className="text-muted">Last updated {clientItem.date_info}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal