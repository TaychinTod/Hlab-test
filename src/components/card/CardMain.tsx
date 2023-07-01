import { queueStatusConfig } from '@/configs/queue'

interface QueueType {
  id: number
  status: string
}

interface CardMainProps {
  queue: QueueType[]
  status: number
}

const CardMain = ({ queue, status }: CardMainProps): React.ReactNode => {
  const config = queueStatusConfig[status]
  const formatedQueue = Array(5)
    .fill(null)
    .map((d, i) => queue[i] || d)
  return (
    <div className="tw-rounded-xl tw-overflow-hidden tw-bg-white">
      <div
        style={{ backgroundColor: config.color }}
        className="tw-text-center tw-text-white tw-text-xl tw-py-2"
      >
        {config.title} ระดับ {status}
      </div>
      <div className="tw-p-4">
        <div className="tw-text-center tw-border-b tw-pb-2 tw-text-xl">
          คิวที่เรียก
        </div>
        <div className="tw-text-center tw-text-5xl tw-divide-y">
          {formatedQueue.map((q, i) => (
            <div key={`list-${i}-${status}`} className="tw-py-3">
              {q ? (
                <>
                  V{status}-{q.id}
                </>
              ) : (
                <div className="tw-opacity-0">-</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardMain
