/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2332950405",
    "hidden": false,
    "id": "relation65320294",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "matiere_montures",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // remove field
  collection.fields.removeById("relation65320294")

  return app.save(collection)
})
