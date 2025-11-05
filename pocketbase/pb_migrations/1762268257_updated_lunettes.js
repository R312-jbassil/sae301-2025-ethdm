/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3957392180",
    "hidden": false,
    "id": "relation1661487575",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "matiere_branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // remove field
  collection.fields.removeById("relation1661487575")

  return app.save(collection)
})
