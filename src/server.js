const Obserser = require('./services/observer');

const observer = new Obserser();

const file = 'logs/info.log';

observer.on('file-updated', log => {
    console.log(log.message);
});

observer.watchFile(file);