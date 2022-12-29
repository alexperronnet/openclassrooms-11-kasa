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
      {name === 'chevron-left' && <path d="M15 18l-6-6 6-6" />}
      {name === 'chevron-right' && <path d="M9 18l6-6-6-6" />}
      {name === 'arrow-up' && (
        <>
          <path d="M12 20V4" />
          <path d="M6 10l6-6 6 6" />
        </>
      )}
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
      {name === 'star' && (
        <path d="M12.007 18.254L5.827 21.5l1.18-6.876L2 9.756l6.91-1L12 2.5l3.09 6.255 6.91 1-5.007 4.87 1.18 6.875-6.166-3.246z" />
      )}
    </svg>
  )
}
