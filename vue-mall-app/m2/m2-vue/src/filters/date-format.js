import { DataUtil } from 'm2-core'

export default [{
  name: 'date',
  rule: (val, fmt) => DataUtil.formatDate(val, fmt)
}, {
  name: 'datetime',
  rule: (val, short, fmt) => short ? DataUtil.formatShortDateTime(val, fmt) : DataUtil.formatDateTime(val, fmt)
}, {
  name: 'time',
  rule: (val, short, fmt) => short ? DataUtil.formatShortTime(val, fmt) : DataUtil.formatTime(val, fmt)
}]
