import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://ec2-44-194-178-90.compute-1.amazonaws.com:8081";

class BillService {

  
    validateConsumer(bill){
        return axios.post(CONSUMER_API_BASE_URL + '/validateConsumer' , bill);
    }

    getBillById(billId){
        return axios.post(CONSUMER_API_BASE_URL + '/getBillById' , billId);
    }
    
    }
   
    


    
    

export default new BillService()
