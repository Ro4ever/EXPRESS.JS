/* Antes de rodarmos precisamos express, notem que importamos a
 nossa coleção de dados da pasta dados e dados.js e armazenamos
 ela na variavel colecaoUf e depois criamos a rota /ufs e listamos o
 servidor na porta 8080.
 */

import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

const buscaUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

app.get('/ufs', (req, res) => {
    //res.json(colecaoUf)
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscaUfsPorNome(nomeUf) : colecaoUf;
    
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
    const idUF = parseInt(req.params.iduf);
    //const uf = colecaoUf.find(u => u.id === idUF);

    let mensagemErro = '';
    let uf;

        if (!(isNaN(idUF)))
        {
            uf = colecaoUf.find(u => u.id === idUF);
            if(!uf)
            {
                mensagemErro = 'UF não encontrada';
            }
        }
        else
        {
            mensagemErro = 'Requisição inválida';
        }

        if (uf)
        {
            res.json(uf);
        }
        else
        {
            res.status(404).send({ "erro": mensagemErro});
        }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na portaa 8080");
});