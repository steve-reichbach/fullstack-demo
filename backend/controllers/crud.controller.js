const knex = require('../config/config.local');

class EntityRepository {
    constructor(collectionName) {
        this.knex = knex;
        this.collectionName = collectionName;
        this.errorCatcher = (e) => {
            console.error(e.message);
            throw new Error(e.message);
        }
    }
    getAll() {
        return this.knex(this.collectionName)
            .orderBy('id', 'asc')
            .map(row => knex.normalizeOutput(row))
            .catch(this.errorCatcher);
    }
    addOne(entity = { is_empty: true }) {
        if (entity['is_empty']) {
            return 'Object for adding is empty';
        }
        delete entity.id;
        return this.knex
            .insert({...entity})
            .returning('id')
            .into(this.collectionName);
    }
    updateOne(id, entity = { is_empty: true }) {
        if (!id || entity['is_empty']) {
            return 'Either object itself or its id is empty. Update is not available';
        }
        return this.knex(this.collectionName)
            .where('id', id)
            .update(entity)
            .returning('id')
            .catch(this.errorCatcher);
    }
    delete(id) {
        return this.knex(this.collectionName)
            .where('id', id)
            .delete()
            .catch(this.errorCatcher);
    }
}

module.exports.KeywordLists = new EntityRepository('KeywordLists');
module.exports.Vasts = new EntityRepository('Vasts');
