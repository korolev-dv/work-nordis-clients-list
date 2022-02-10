const {Schema, model} = require('mongoose')

const schema = new Schema({
    client_name: {
        type: String,
        requaired: true
    },
    client_full_name: {
        type: String,
        requaired: true
    },
    inn: {
        type: Number
    },
    configuration_1c: {
        type: String,
        requaired: true
    },
    configuration_nordis: {
        type: String
    },
    type_activity: {
        type: String
    },
    date_info: {
        type: Date
    },
    platform_version: {
        type: String
    },
    conf_version: {
        type: String
    },
    conf_nordis_tarification: {
        type: Boolean    
    },
    extensions: [{
        name: String,
        synonym: String,
        version: String,
        active: Boolean,
    }],

})

module.exports = model('client', schema)