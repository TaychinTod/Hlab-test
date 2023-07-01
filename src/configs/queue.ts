interface QueueStatusConfigType {
  [key: string]: {
    title: string
    color: string
  }
}

const queueStatusConfig: QueueStatusConfigType = {
  3: {
    title: 'รีบด่วน',
    color: '#EEC33B',
  },
  4: {
    title: 'กึ่งรีบด่วน',
    color: '#17b79A',
  },
  5: {
    title: 'ไม่รีบด่วน',
    color: '#AEB1B9',
  },
}

export { queueStatusConfig }
