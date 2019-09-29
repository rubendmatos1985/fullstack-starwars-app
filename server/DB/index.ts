import Knex from 'knex';

export const knex: Knex = require('knex')(require('../knexfile'));