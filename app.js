const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;
const dataFilePath = path.join("/app/data", "message.txt");

// Check if the file exists before writing
if (!fs.existsSync(dataFilePath)) {
    console.log('File does not exist, creating it...');
    fs.writeFileSync(dataFilePath, "Hello, World! Data is persisted in the volume.\n", { flag: 'w' });
} else {
    console.log('File already exists.');
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const fileContent = fs.readFileSync(dataFilePath, "utf-8");
    console.log('Reading file:', fileContent); // Log the content being read
    res.end(`Data from volume: ${fileContent}`);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
