const express = require('express');
const animalController = require('../../modules/animals/controllers');
const createAnimalSchema = require('../../modules/animals/validationSchemas/createAnimal');
const validate = require('../middlewares/validate');
const errorWrapper = require('../../modules/common/utils/errorWrapper');
const updateAnimalSchema = require('../../modules/animals/validationSchemas/updateAnimal');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, errorWrapper(animalController.getAnimals));

router.get('/:animalId', auth, errorWrapper(animalController.getAnimalById));

router.post('/', validate(createAnimalSchema), errorWrapper(animalController.createAnimal));

router.put('/:animalId', validate(updateAnimalSchema), errorWrapper(animalController.updateAnimal));

router.delete('/:animalId', errorWrapper(animalController.deleteAnimal));

module.exports = router;