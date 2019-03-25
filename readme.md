# Choo emit.once
> Emit once per route change

```
npm install choo-emit-once
```

## Usage
```javascript
const choo = require('choo')
const emitOnce = require('choo-emit-once')

const app = choo()

app.use(emitOnce)

app.route('/', function (state, emit) {
  emit.once('event-name')
  emit.clear('event-name')
  emit.clear()
})

app.mount('body')
```
