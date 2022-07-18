const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    numberCel: {
        type: Number
    },
    device: {
        type: String
    },
    problem:{
        type: String
    },
    date: {
        type: String
    },
    deliveryDate:{
        type: Date
    },
    state:{
        type: String
    },
    news:{
        type: Array
    }
});

exports.Work = new mongoose.model('work', workSchema);


/**
 * Find a work by its id and return the first result.
 * @param id - the id of the work
 * @returns - Returns the first object of an array.
 */
async function findWorkById(id) {

    const work = await exports.Work.find({ id: { '$eq': id } });
    return work[0];
}

exports.Work.findById = findWorkById;


/**
 * Find all work in the database where the state is equal to the state passed in as a parameter.
 * @param state - { '': state }
 * @returns An array of objects.
 */
async function findWorkByState(state) {
    
    const work = await exports.Work.find({ state: { '$eq': state } });
    return work;
}


exports.Work.findByState = findWorkByState;