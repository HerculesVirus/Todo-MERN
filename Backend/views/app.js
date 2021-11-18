const express = require('express');

const app = express();

app.get('/', (req,res) => {

    res.end("Express Routes") 
    
});

port = process.env.PORT || 8080

app.listen(port , ()=> console.log(`Server running on this ${port} from Node.js`))