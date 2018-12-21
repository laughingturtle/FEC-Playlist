let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/../public'));



// app.get('/', (req,res)=>{
//     res.send('Hello world!!!!!')
// })

app.listen(port, ()=> {
    console.log(`server is listening on http:\\\\localhost:${port}`);
});