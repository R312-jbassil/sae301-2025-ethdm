/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3957392180")

  // remove field
  collection.fields.removeById("text1579384326")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1661487575",
    "maxSelect": 1,
    "name": "matiere_branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Acétate",
      "Métal",
      "Titane",
      "Bois"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3957392180")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1579384326",
    "max": 0,
    "min": 0,
    "name": "matiere_branches",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select1661487575")

  return app.save(collection)
})
