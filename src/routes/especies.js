const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const especies = require("../sample.json");

router.get("/", (req, res) => {
    res.json(especies);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const especie = especies.find(e => e.id === id);

    if (especie) {
        res.json(especie);
    } else {
        res.status(404).send('Especie no encontrada');
    }
});

router.post("/", (req, res) => {
    const {name, habitat, tamaño, dieta } = req.body;
    if(name && habitat && tamaño && dieta){
        const id = especies.length + 1;
        const newEspecie = {...req.body, id};
        especies.push(newEspecie);
        res.json(especies);
    } else{
        res.status(500).json({error: "Hubo un error"});
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const {name, habitat, tamaño, dieta } = req.body;
    if(name && habitat && tamaño && dieta){
        _.each(especies, (especies, i) => {
            if(especies.id == id){
                especies.name = name;
                especies.habitat = habitat;
                especies.tamaño = tamaño;
                especies.dieta = dieta;
            }
        });
        res.json(especies);
    } else{
        res.status(500).json({error: "Hubo un error"});
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    _.each(especies, (especie, i) => {
        if (especie.id == id) {
            especies.splice(i, 1);
            return false; 
        }
    });

    res.json(especies); 
});

 module.exports = router;