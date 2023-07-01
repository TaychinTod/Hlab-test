'use client'

import { useMemo } from 'react'
import CardMain from '../card/CardMain'
import { QueueType } from '@/model/queue'

interface queueGroupingType {
  [key: string]: QueueType[]
}

const QueueSection = ({ queue }: { queue: QueueType[] }): React.ReactNode => {
  // group queue by status
  const queueGrouping = useMemo(() => {
    return queue.reduce(
      (acc: queueGroupingType, curr: QueueType) => ({
        ...acc,
        [curr.status]: acc[curr.status] ? [...acc[curr.status], curr] : [curr],
      }),
      {}
    )
  }, [queue])

  const queueEntrues: Array<[string, QueueType[]]> =
    Object.entries(queueGrouping)

  return (
    <section className="tw-grid md:tw-grid-cols-3 tw-gap-10 xl:tw-gap-32 tw-container">
      {queueEntrues.map(([key, value]: any) => (
        <CardMain key={`card-${key}`} queue={value} status={key} />
      ))}
    </section>
  )
}

export default QueueSection
