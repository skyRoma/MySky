class Repository {
  constructor(model) {
    this.model = model;
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  findAll() {
    return this.model.query();
  }

  findById(id) {
    return this.model.query().findById(id);
  }

  findOne(fieldsObj) {
    return this.model.query().findOne(fieldsObj);
  }

  create(entity) {
    return this.model.query().insert(entity);
  }

  update(id, entity) {
    return this.model
      .query()
      .where({ id })
      .update(entity);
  }

  delete(id) {
    return this.model.query().deleteById(id);
  }
}

module.exports = Repository;
