import { DataType } from 'm2-core'

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    isShowComponent() {
      return !DataType.isEmptyObject(this.data)
    }
  }
}
