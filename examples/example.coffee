kash = require '../src/kash'

setTimeout ->
  console.log "Houdini is set to #{kash.get('houdini')} in 3..."
, 97

setTimeout ->
  console.log "Houdini is set to #{kash.get('houdini')} in 2..."
, 98

setTimeout ->
  console.log "Houdini is set to #{kash.get('houdini')} in 1..."
, 99

setTimeout ->
  console.log "Houdini is... #{kash.get('houdini')}"
, 101

kash.set 'houdini', 'disappear', 100

console.log "Houdini will now #{kash.get('houdini')}"

