const { execSync } = require('child_process');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const cmd_snapshot = 'adb shell screencap -p /data/local/tmp/snapshot.png';
    const cmd_pull = 'adb pull /data/local/tmp/snapshot.png ./snapshot.png';

    execSync(cmd_snapshot);
    execSync(cmd_pull);

    res.sendFile('./snapshot.png', { root: process.cwd() });
});

app.listen(5051, () => {
    console.log(`Example app listening on http://127.0.0.1:5051`);
});
