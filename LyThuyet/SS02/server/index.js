import express from 'express';
import { customers } from "./data.js";

const app = express();


app.get('/customers', (req, res) =>{
    // res.end("Hello MindX");
    // const data = { school: 'MindX technology school'};
    // res.send(data);
    // const queryParams = req.query;
    // res.send(queryParams);
    res.json({
        message: 'Danh sách khách hàng la thanh cong',
        data: customers,
    })
    
});

app.listen(8080, () => {
    console.log('Server is running!');
} );


