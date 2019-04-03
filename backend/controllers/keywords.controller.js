const knex = require('../config/config.local');

const errorCatcher = (e) => {
    console.error(e.message);
    throw new Error(e.message);
};
const collection = 'KeywordLists';

class KeywordsRepository {
    constructor() {
        this.knex = knex;
    }
    getAll() {
        return this.knex(collection)
            .orderBy('id', 'asc')
            .map(row => knex.normalizeOutput(row))
            .catch(errorCatcher);
    }
    addOne(entity = { is_empty: true }) {
        if (entity['is_empty']) {
            return 'Object to add is empty';
        }
        delete entity.id;
        return this.knex
            .insert({...entity})
            .into(collection)
            .catch(errorCatcher);
    }
    updateOne(id, entity = { is_empty: true }) {
        if (!id || entity['is_empty']) {
            return 'Either object itself or its id is empty. Update is not available';
        }
        return this.knex(collection)
            .where('id', id)
            .update(entity)
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

module.exports = new KeywordsRepository();
