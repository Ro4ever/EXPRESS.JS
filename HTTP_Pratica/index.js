import express from 'express';

const app = express();
/* Utilizamos o método get seguindo o primeiro parâmetro,
 onde apontamos a rota. Logo em seguida, passamos uma arrow function, que
 recebe uma request e um response, com o response podemos usar o método
 send e exibir o conteúdo que desejamos, neste caso, uma mensagem em
 formato HTML, porém no response você poderia passar um JSON por exemplo. */

 var carros = ['Fiesta', 'Saveiro'];

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => 
res.send("<h3>Rotas no Express</h3><p>Rota '/")
);

app.get('/sobre', (req, res) => 
res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
);

app.get('/users/:name', (req, res) => {
    return res.json([name]);
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; //deletar item
    return res.json(carros[id]);
});

app.listen(3000, () =>
console.log("Servidor iniciado na porta 3000"
));