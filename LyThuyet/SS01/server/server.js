import http from 'http';
const app = http.createServer((request, response) => {
    const data = { school: 'MindX technology school' };
    response.end(JSON.stringify(data));
});

app.listen(8080, () => {
    console.log('Server is running!');
});

