const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 44443;

const getAllCharacters = async (req, res) => {
    let dirs = await readdir('./characters');
    dirs = dirs.map(dir => dir.replace('.json', ''));
    return res.json(dirs);
};

const getCharacter = async (req, res) => {
    if (!req.params || !req.params.character || req.params.character === 'null') {
        res.status(400);
        return res.send('Invalid character name');
    };

    let file = await readFile(`./characters/${req.params.character}.json`);
    return res.json(JSON.parse(file.toString()));
};

const saveCharacter = async (req, res) => {
    if (!req.body.name) return res.send('');

    await writeFile(`./characters/${req.body.name}.json`, JSON.stringify(req.body, null, 2));
    return res.send({});
};

app.get('/', getAllCharacters);
app.get('/:character', getCharacter);
app.post('/', saveCharacter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));