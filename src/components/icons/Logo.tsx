interface LogoProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Logo = (props: LogoProps) => (
  <svg
    width={37}
    height={24}
    viewBox="0 0 37 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.5 24c-1.3 0-2.1-.6-3.408-1.307C22.784 21.987 19 19.142 19 15.6c0-2.402-.62-4.346-1.674-5.894-1.047-1.537-2.465-2.602-3.94-3.353-.711-.362-1.451-.658-2.188-.903-.43-.143-.679-.604-.492-1.016a7.531 7.531 0 0113.96 5.633 7.53 7.53 0 0111.734 6.25C36.4 21.324 32 24 27.5 24z"
      fill="#8FB2F5"
    />
    <path
      d="M0 15.69c0 3.97 2.617 7.277 6.084 8.008A4.99 4.99 0 007.8 24h11.701c.392 0 .563-.525.264-.778-2.045-1.73-3.565-4.17-3.565-7.622 0-1.897-.48-3.28-1.188-4.318-.716-1.05-1.723-1.836-2.897-2.435-1.186-.603-2.473-.988-3.702-1.26a7.047 7.047 0 00-.882-.056C3.371 7.531 0 11.184 0 15.69z"
      fill="#8FB2F5"
    />
  </svg>
);
