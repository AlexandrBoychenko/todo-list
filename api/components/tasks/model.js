const Property                  = use('core/property');

const TasksRepository           = require('./repository');

const TasksDefinition = {

    name: 'Tasks',

    repository: TasksRepository,

    properties: {
        id: Property.number(),
        description: Property.string(),
        date: Property.number()
    },

    factory: {},

    instance: {}
};


module.exports = TasksDefinition;