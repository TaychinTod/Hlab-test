import QueueSection from '@/components/section/QueueSection'
import queue from '@/data/queue.json'

export const metadata = {
  title: 'คิวพบแพทย์ห้องแพทย์เวร',
  description: 'Hlab test',
}

const Home = () => {
  return (
    <main className="tw-py-8 tw-bg-backgroud tw-h-full tw-min-h-[calc(100vh-56px)]">
      <QueueSection queue={queue} />
    </main>
  )
}

export default Home
