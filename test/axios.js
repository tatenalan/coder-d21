import axios from 'axios';

axios.get('http://localhost:8080/api/products/').then((response) => {console.log(response)}).catch((error) => {console.log(error)}).then(() => { console.log('END')})