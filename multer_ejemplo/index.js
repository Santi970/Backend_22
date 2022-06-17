const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null , `${file.originalname}-${Date.now()}.png`); //originalname -> Id unico enc aso de que se llamen igual los archivos

    }
});

const upload = multer({storage});

const app  = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));


app.post('/uploadFile', upload.single('myFile'), (req, res) => {
    const file = req.file
    if(!file){
    return res.status(400).json({
        error: 'Please upload file'
    });
    } 
    return res.json(file)
});

app.post('/uploadMultiple', upload.array('myFiles', 12), (req, res) => {
    const files = req.files
    if(!files){
    return res.status(400).json({
        error: 'Please upload file'
    });
    } 
    return res.json(files)
});

const PORT = 8030;
const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});

server.on('error', err => console.error(`Error en el servidor: ${err.message}`));
