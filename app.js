const expresss = require('express');
const app = expresss();

app.get('/welcome', (req, res) => {
    res.send("Welcome to nodejs beanstalk");
});

app.get('/', (req, res) => {
    res.send("Welcome to nodejs");
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
