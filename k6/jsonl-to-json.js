const fs = require('fs').promises;

async function jsonLinesFrom(filePath) {
    const data = await fs.readFile(filePath, 'utf-8');
    return data.split('\n').filter(line => line.length > 0)
        .map(line => JSON.parse(line));
}

const filePath = './result.jsonl';
jsonLinesFrom(filePath).then(jsonArray => {
    return fs.writeFile('./result-array.json', JSON.stringify({result: jsonArray}), 'utf-8');
});
