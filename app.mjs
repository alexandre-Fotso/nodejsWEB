import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get("/", (req , res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>NodejsApp</title>
        
       
    </head>
    <body>
    
    
        <h1>bonjour</h1>
    
        <script src="script.js"></script>
        
    </body>
    </html>`);
}
     
);

await connectToDatabase();

app.listen(3000);