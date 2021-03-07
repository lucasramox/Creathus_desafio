
exports.up = function(knex) {
    return knex.schema.createTable('tbl_digimons', function (table) {
        table.increments().primary();
        table.string('name');
        table.string('img');
        table.string('level');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_digimons');
};
