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

app.listen(8080, () => {
    console.log('Server is running!');
});
