/* Antes de rodarmos precisamos express, notem que importamos a
 nossa coleção de dados da pasta dados e dados.js e armazenamos
 ela na variavel colecaoUf e depois criamos a rota /ufs e listamos o
 servidor na porta 8080.
 */

import express from 'express';
import {  buscarUfPorId, buscarUfs, buscarUfsPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    //res.json(colecaoUf)
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    
    if (resultado.length > 0) 
    {
        res.json(resultado);
    }
    else 
    {
        res.status(404).send({ "erro": "Nenhuma UF encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);
    //const uf = colecaoUf.find(u => u.id === idUF);
    if(uf)
    {
        res.json(uf);
    }
    else if(isNaN(parseInt(req.params.iduf)))
    {
        res.status(400).send({ "erro": "Requisição inválida" });
    }
    else
    {
        res.status(404).send({ "erro": " UF não encontrada" });
    }

});

app.listen(8080, () => {
    console.log("Servidor iniciado na portaa 8080");
});