let ClasseModel = require("../models/classe.js");
const { getAll } = require("./eleve.js");

let ClasseController = {
    find: async (req, res) => {
        let found = await ClasseModel.find({name: req.params.classe});
        res.json(found);
    },
    all: async (req, res) => {
        let allClasses = await ClasseModel.find()
        res.json(allClasses);
    },
    create: async(req,res) => {
        let newClasse = new ClasseModel(req.body);
        let saveClasse = await newClasse.save();
        res.json(saveClasse);

        getAllEleves: async (req, res) => {
            let foundClasse = await ClasseModel.find({name: req.params.classename}).populate("eleves");
            res.json(foundClasse);
        }
    }

}
module.exports = ClassController;






}