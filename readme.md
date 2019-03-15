# Choo emit.once
> Emit once per route change

```
npm install choo-emit-once
```

## Usage
```
const choo = require('choo')
const emitOnce = require('choo-emit-once')

const app = choo()

app.use(emitOnce)

app.route('/', function (state, emit) {
  emit.once('event-name')
})

app.mount('body')
```
