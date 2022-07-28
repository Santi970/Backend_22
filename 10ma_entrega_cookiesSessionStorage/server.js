const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const morgan = require('morgan');
const Mensajes = require('./api/Mensajes');
const {routerProductos} = require('./routes/routerProductos.js');

const session = require('express-session')
const MongoStore = require('connect-mongo')
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const PORT = 8081;
const mensajes = new Mensajes;
const defaultMessages = [
    { author: 'Admin', text: 'Desafío chat global y vista de productos utilizando WebSocket en NodeJS' }
];

//Necesitamos agregar estas dos líneas para que me lea los JSON que vienen desde POSTMAN. Caso contrario no los puede leer.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Morgan nos avisará por cada petición sobre nuestro server
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

app.use(session({
    store: MongoStore.create({
        //En Atlas connect App :  Make sure to change the node version to 2.2.12:
        mongoUrl: 'mongodb+srv://santicendra:Nuevacontra1987@cluster0.lavna26.mongodb.net/sessions?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    ttl: 60 * 60
}))

app.use('/api', routerProductos);

//Se envía el archivo login. Es lo primero que aparece.
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
})

//Endpoint para chequear el login.
app.get('/login', (req,res)=>{
    if(req.query.username === "Jorge"){
        console.log("login correcto");
        req.session.username = "Jorge";
        req.session.admin = true;
        res.send({status:"ok"});
    }else{
        res.send({status: "Invalid username"});
    }
})

//logout se accede a través del botón de logout del content.html
app.get('/logout', (req,res)=>{
    req.session.destroy(err => {
        if (!err) {
            res.redirect('/')
        }
        else res.send({ status: 'Logout ERROR', body: err })
    })
})

//Middleware para chequear que esté loggeado como el username correcto. En caso de no, se envía un 401.
//Además por cada nueva petición se regenera el tiempo de vida de la session.
const auth = (req, res, next) =>{
    console.log (req);
    if (req.session.username === "Jorge" && req.session.admin){
        req.session.regenerate(()=>{
            req.session.username = "Jorge";
            req.session.admin = true;
            console.log(req.session);
            return next();
        })
    }
    else
        return res.sendStatus(401);
}

app.get('/content', auth, (req, res)=>{
    res.sendFile(__dirname + '/public/content.html')
})

app.get('/info', (req, res) => {
    console.log('session', req.session)
    console.log('sessionID', req.sessionID)
    console.log('cookies', req.cookies)
    console.log('sessionStore', req.sessionStore)

    res.send('Send info ok!');
})

io.on('connection', async socket => {
    console.log('Un cliente se ha conectado');
    let contenido = await mensajes.leerMensajes();

    socket.emit('messages', contenido)

    // si el cliente envia un nuevo mensaje, lo guardo y emito. Debe ser async. porque sino trae promise pending.
    socket.on('new-message', async function (data) {
        console.log("Guardar en server");
        await mensajes.guardarMensajes(data);
        io.sockets.emit('messages', await mensajes.leerMensajes());
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});