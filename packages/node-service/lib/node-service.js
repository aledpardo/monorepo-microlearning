const AppServices = require('@monorepo/app-services');
const appServices = new AppServices();

if (appServices.executeProcess()) {
    console.log('Process has run successfuly');
}
