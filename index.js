module.exports = emitOnce

function emitOnce (state, emitter, app) {
  let emitted = []

  app.emit.once = function (...args) {
    const name = args[0]

    if (emitted.includes(name)) return

    emitted.push(name)
    this.apply(null, args)
  }

  app.emit.clear = clear

  emitter.on(state.events.NAVIGATE, function () {
    clear()
  })

  function clear (name = null) {
    if (name) {
      emitted = emitted.filter(item => item !== name)
      return
    }

    emitted = []
  }
}
