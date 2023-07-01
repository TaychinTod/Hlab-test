import Image from 'next/image'
import dynamic from 'next/dynamic'
import ShowOn from '../utils/ShowOn'

// fix severside no match
const RealTimeCounter = dynamic(
  () => import('./RealTimeCounter') as Promise<any>,
  {
    ssr: false,
    loading: () => (
      <div className="tw-w-36 tw-h-4 tw-bg-white tw-bg-opacity-20" />
    ),
  }
)

const TopHeader = (): React.ReactNode => {
  return (
    <nav>
      <div className="tw-bg-primary tw-py-3 tw-text-white">
        <div className="tw-container tw-flex tw-justify-between tw-items-center">
          {/* menuIcon */}
          <div className="md:tw-flex-1">
            <div className="tw-bg-white tw-bg-opacity-10 tw-p-1 tw-inline-flex tw-rounded-md">
              <Image
                src="/heart-rate.svg"
                alt="clock Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Header */}
          <h1 className="tw-text-2xl tw-flex-1 md:tw-text-center tw-text-right">
            คิวพบแพทย์ห้องแพทย์เวร
          </h1>
          {/* time counter */}
          <div className="tw-hidden md:tw-flex tw-items-center tw-justify-end tw-space-x-2 tw-flex-1">
            <Image src="/clock.svg" alt="clock Icon" width={20} height={20} />
            <ShowOn>
              <RealTimeCounter />
            </ShowOn>
          </div>
        </div>
      </div>
      {/* mobile timer */}
      <ShowOn showMobile>
        <div className="tw-contaient tw-text-center tw-mt-2">
          <RealTimeCounter />
        </div>
      </ShowOn>
    </nav>
  )
}

export default TopHeader
