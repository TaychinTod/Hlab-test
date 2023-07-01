'use client'

import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import { useEffect, useState } from 'react'

dayjs.extend(buddhistEra)

const RealTimeCounter = (): React.ReactNode => {
  const [currentTime, setCurrentTime] = useState(dayjs())
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(dayjs()), 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <span>{currentTime.locale('th').format('DD MMM BBBB HH:mm:ss น')}</span>
  )
}

export default RealTimeCounter
