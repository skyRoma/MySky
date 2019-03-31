class Repository {
  constructor(model) {
    this.model = model;
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  findAll(options) {
    return this.model.findAll(options);
  }

  findById(id) {
    return this.model.findByPk(id);
  }

  create(entity) {
    return this.model.create(entity);
  }

  update(id, entity) {
    return this.model.update(entity, { where: { id } });
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = Repository;
