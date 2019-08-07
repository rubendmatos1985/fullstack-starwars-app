exports.up = (knex) =>
  knex.schema.createTable('film', table =>{
    table.uuid('id')
    table.text('title')
    table.integer('episode_id')
    table.text('opening_crawl')
    table.text('director')
    table.text('producer')
    table.text('release_date')
    table.text('created')
    table.text('edited')
    table.text('url')  
  })


exports.down = function(knex) {
  return knex.schema.dropTable('film');
};
