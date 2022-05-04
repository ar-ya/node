const expresss = require('express');
const app = expresss();

app.get('/', (req, res) => {
    res.send("Welcome to homepage");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
