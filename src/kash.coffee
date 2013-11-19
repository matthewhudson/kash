store = {}

kash = {}

kash.set = (key, value, milliseconds) ->
  if not store[key]?
    store[key] = value
    setTimeout () ->
      delete store[key]
    , (milliseconds or 2000)

kash.get = (key) ->
  store[key] or null

kash.flush = ->
  store = {}

kash.size = ->
  Object.keys(store).length

exports = module.exports = kash