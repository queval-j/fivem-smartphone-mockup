const { SendJSON, NewUUID } = require('../utils');

const PhoneConfiguration = {
    system: {
        carrierName: 'My Carrier',
    },
    fivemModules: {
        gameFramework: {
            qbcore: {
                moduleName: 'QB Core',
                enabled: true,
            },
            esx: {
                moduleName: 'ESX',
                enabled: false,
            },
            custom: {
                moduleName: 'Custom',
                enabled: false,
            },
        },
        voice: {
            pmaVoice: {
                moduleName: 'pma-voice',
                status: 'started',
                enabled: true,
            },
            mumble: {
                moduleName: 'mumble-voip',
                status: 'missing',
                enabled: false,
            },
        }
    }
};

exports.Controller = (app) => {
    // Phone
    app.post('/api-system-phone-configuration', (req, res) => {
        SendJSON(req, res, {
            data: PhoneConfiguration,
        })
    })
}