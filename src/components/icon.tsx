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
      {name === 'loader' && (
        <>
          <path d="M12 6V3" />
          <path d="M16.243 7.758l2.121-2.122" />
          <path d="M12 21v-3" />
          <path d="M5.636 18.364l2.121-2.12" />
          <path d="M18 12h3" />
          <path d="M3 12h3" />
          <path d="M16.243 16.242l2.12 2.122" />
          <path d="M5.636 5.636l2.121 2.121" />
        </>
      )}
    </svg>
  )
}
