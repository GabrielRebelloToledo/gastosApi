const express = require('express');
const bodyParser = require('body-parser');
cors = require('cors');

//criar o express app
const app = express();

/* Configure cors */
app.set('secret', 'aplicacao');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));

/* Configure Token */
app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log('####################################');
    if (token) {
        console.log('A token is send by the application');
        console.log('Token value is ' + token);
    } else {
        console.log('No token is send by the the application');
    }
    console.log('####################################');
    next();
});

//Porta do serviço
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// define um rota padrao

app.get('/', (req, res) => {
    res.send("Hello!!!")
});

//Require employee routes
const receitaRoutes = require('./src/routes/receita.routes')
const login = require('./src/routes/login.routes')
const categoria = require('./src/routes/categoria.routes')
const despesas = require('./src/routes/despesas.routes')



//utilizando o middleware
 app.use('/api/receita', receitaRoutes) 
app.use('/api/logon', login)
app.use('/api/categoria', categoria)
app.use('/api/despesas', despesas)


//Ouvir
app.listen(port, () => {
    console.log(`Server online na porta ${port}`);
})