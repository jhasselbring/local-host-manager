import { reactive } from 'vue'

let state = reactive({
  editor: {
    json: `[
  {
    "name": "Default",
    "ip":"127.0.0.1",
    "domains": ["localhost"]
  }
]`,
    text: ''
  }
})

const methods = {

}

export default {
  state, methods
}