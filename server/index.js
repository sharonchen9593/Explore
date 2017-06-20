import express from 'express';
import path from 'path';
let app = express();

var port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port)