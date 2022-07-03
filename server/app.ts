import express from 'express';
const path = require('path')
const publicDirectoryPath = path.join(__dirname, '../dist')

const app = express();
app.use(express.static(publicDirectoryPath))


app.get("/", (req, res) => {
    return res.send("hello world");
});


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})