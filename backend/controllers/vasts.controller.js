const knex = require('../config/config.local');

const errorCatcher = (e) => {
    console.error(e.message);
    throw new Error(e.message);
};
const collection = 'Vasts';

class VastsRepository {
    constructor() {
        this.knex = knex;
    }
    getAll() {
        return this.knex(collection)
            .orderBy('id', 'asc')
            .map(row => knex.normalizeOutput(row))
            .catch(errorCatcher);
    }
    addOne(vast = { is_empty: true }) {
        if (vast['is_empty']) {
            return 'Object for adding is empty';
        }
        delete vast.id;
        return this.knex
            .insert({...vast})
            .into(collection)
            .catch(errorCatcher);
    }
    updateOne(id, vast = { is_empty: true }) {
        if (!id || vast['is_empty']) {
            return 'Either object itself or its id is empty. Update is not available';
        }
        return this.knex(collection)
            .where('id', id)
            .update(vast)
            .returning('id')
            .catch(errorCatcher);
    }
    delete(id) {
        return this.knex(collection)
            .where('id', id)
            .delete()
            .catch(errorCatcher);
    }
}

module.exports = new VastsRepository();
