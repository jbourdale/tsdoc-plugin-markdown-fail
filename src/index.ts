import axios from 'axios';
import * as Nodata from '@nodata/client';

console.log("Browser environment : ", Nodata);


Nodata.setNodataUrl('/nodata/api');


Nodata.authenticateIntoNodata('jbourdale@nodata.co', 'jbourdale')
.then(function() {
    Nodata.renderDashboard('DASHBOARDJULES', 'dashboard')
    .then((response) => console.log('response : ', response))
    .catch((error) => console.error('error : ', error));
})
.catch(function(error) {
    console.log('error : ', error);
})
