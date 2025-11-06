/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3957392180")

  // remove field
  collection.fields.removeById("select1661487575")

  // add field
  collection.fields.addAt(1, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1661487575",
    "maxSize": 0,
    "name": "matiere_branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3957392180")

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

  // remove field
  collection.fields.removeById("editor1661487575")

  return app.save(collection)
})
