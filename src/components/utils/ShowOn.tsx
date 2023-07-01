'use client'
import { useMediaQuery } from 'usehooks-ts'

const ShowOn = ({
  children,
  showMobile = false,
}: {
  children?: React.ReactNode
  showMobile?: boolean
}): React.ReactNode => {
  const matches = useMediaQuery(
    `(${showMobile ? 'max-width' : 'min-width'}: 768px)`
  )
  if (matches) return <div>{children}</div>
  return <></>
}

export default ShowOn
