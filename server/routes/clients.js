const {Router} = require('express')
const router = Router()
const Client = require("../models/client")

router.get('/getClientsList', async (req, res) => {
    const clients = await Client.find({})
    return res.status(200).json(clients)
})

router.get('/getClientInfo', async (req, res) => {
    const inn = req.query.inn
    const client = await Client.find({ inn })
    return res.status(200).json(client)
})

router.post('/addClientInfo', async (req, res) => {
    const {client_name, client_full_name, inn, platform_version, configuration_1c, conf_version, date_info, conf_nordis_tarification, extensions} = req.body
    const dateInfo = new Date(Date.parse(date_info))

    const candidate = await Client.findOne({ inn,  configuration_1c })

    if (candidate) {
        candidate.client_name = client_name
        candidate.client_full_name = client_full_name
        candidate.inn = inn
        candidate.platform_version = platform_version
        candidate.configuration_1c = configuration_1c
        candidate.conf_version = conf_version
        candidate.date_info = date_info
        candidate.conf_nordis_tarification = conf_nordis_tarification

        candidate.extensions = extensions

        await candidate.save()
        return res.status(200).json({message: 'Данные успешно обновлены в базе данных'})
    }
 
    const client = new Client({
        client_name: client_name,
        client_full_name: client_full_name,
        inn: inn,
        platform_version: platform_version,
        configuration_1c: configuration_1c,
        conf_version: conf_version,
        date_info: date_info,
        conf_nordis_tarification: conf_nordis_tarification,
        extensions: extensions,
    })

    await client.save()
    res.status(200).json({message: 'Данные успешно добавлены в базу данных'})
})

module.exports = router