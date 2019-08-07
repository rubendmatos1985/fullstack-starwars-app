exports.up = function(knex) {
  return knex.schema.createTable('film', table =>{
    table.uuid('id')
    table.text('title')
    table.integer('episode')
    table.string('opening_crawl', 500)
    table.text('director')
    table.text('producer')
    table.text('realease_date')
    table.date('created')
    table.date('edited')
    table.text('url')  
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('film');
};
