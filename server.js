const express = require('express')
const app = express()
const port = 8080

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})