import express from 'express';
const app = express();
app.use(express.json());

// app.get('', (req, res) => {
//     res.send({
//         message: 'Hello MindX-er'
//     });
// });

app.get('/users', (req, res) => {
    fetch('http://localhost:3000/users').then((rs) => {
        return rs.json()
    }).then((data) => {
        res.send({
            message: 'Hello MindX-er',
            data
        });
    });
});

app.get('/customers', (req, res) => {
    fetch('http://localhost:3000/customers').then((rs) => {
        return rs.json()
    }).then((data) => {
        res.send({
            message: 'Lấy sanh sách khách hàng',
            data
        });
    });
});

app.get('/customers/:id', (req, res) => {
    const id = req.params.id; // Lấy id từ params
    
    fetch(`http://localhost:3000/customers/${id}`).then((rs) => {
        return rs.json()
    }).then((data) => {
        res.send({
            message: 'Lấy danh sách khách hàng theo id',
            data
        });
    });
});

app.get('/')


app.listen(8080, () => {
    console.log('Server is running!');
});
