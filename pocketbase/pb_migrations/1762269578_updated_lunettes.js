/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1043159629",
    "max": 0,
    "min": 0,
    "name": "montures_couleur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2132504685",
    "max": 0,
    "min": 0,
    "name": "branches_couleur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1836226037",
    "max": 0,
    "min": 0,
    "name": "verres_couleur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3081504401",
    "max": null,
    "min": null,
    "name": "lar_pont",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number2479713136",
    "max": null,
    "min": null,
    "name": "lar_verres",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3949269562",
    "maxSize": 0,
    "name": "code_svg",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_427234108")

  // remove field
  collection.fields.removeById("text1043159629")

  // remove field
  collection.fields.removeById("text2132504685")

  // remove field
  collection.fields.removeById("text1836226037")

  // remove field
  collection.fields.removeById("number3081504401")

  // remove field
  collection.fields.removeById("number2479713136")

  // remove field
  collection.fields.removeById("editor3949269562")

  return app.save(collection)
})
