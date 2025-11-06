/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2332950405")

  // remove field
  collection.fields.removeById("select65320294")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text65320294",
    "max": 0,
    "min": 0,
    "name": "matiere_montures",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2332950405")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select65320294",
    "maxSelect": 1,
    "name": "matiere_montures",
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

  // remove field
  collection.fields.removeById("text65320294")

  return app.save(collection)
})
