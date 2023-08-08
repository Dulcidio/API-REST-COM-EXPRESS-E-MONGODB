import autores from "../models/Autor.js";


class AutorController {

    static listarAutores = async (req, res) => {

        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado)
            console.log(autoresResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static listarAutorPorID = (req, res) =>{
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - id não localizada!`});
            }else{
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let livro = new autores(req.body);

        livro.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar autor!` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id;

        autores. findByIdAndDelete(id,(err) =>{
            if(!err){
                res.status(200).send({message:'Autor excluido com sucesso!'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }





}


export default AutorController;