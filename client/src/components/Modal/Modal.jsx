import React from "react"
import "./modal.css"

const Modal = ({ active, setActive, clientItem }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div class="card">
                    <div class="card-header text-center">
                        <h5 class="card-title">{clientItem.client_name} (ИНН: {clientItem.inn})</h5>
                    </div>
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col">
                                <h6 class="card-title">Используемая конфигурация: {clientItem.configuration_1c} версия ({clientItem.conf_version})</h6>
                                <h6 class="card-title">Используемая версия Платформы 1С: {clientItem.platform_version}</h6>
                                <h6 class="card-title">Тарификация {clientItem.conf_nordis_tarification}</h6>
                            </div>
                            <div class="col">
                                <h5>Список расширений</h5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Расширение</th>
                                            <th scope="col">Версия</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>НордИС общего назначения</td>
                                            <td>1.0</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>расширение 2</td>
                                            <td>1.0</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>расширение 3</td>
                                            <td>3.1.18.377</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-muted text-center">
                        <p class="card-text"><small class="text-muted">Last updated {clientItem.date_info}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal