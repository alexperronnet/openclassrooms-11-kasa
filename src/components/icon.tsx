import { FC, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  name: string
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {name === 'chevron-down' && <path d="M6 9l6 6 6-6" />}
    </svg>
  )
}
