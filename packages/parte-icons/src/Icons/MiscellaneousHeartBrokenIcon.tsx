import { convertIcon, IconProps } from '../common/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7.71 8.87 6.17 6.55l.02-.01A.906.906 0 0 1 6 6c0-.07.03-.13.04-.19h-.02l.78-3.92C6.09 1.34 5.19 1 4.2 1 1.88 1 0 2.83 0 5.09c0 .07.01.13.01.19H0c0 .05.01.1.01.14 0 .05.01.1.01.14.07.8.32 1.66.82 2.57 1.07 1.94 2.88 3.47 5.86 5.84l-.68-2.74h.02C6.03 11.16 6 11.08 6 11c0-.28.11-.53.29-.71l1.42-1.42ZM16 5.09C16 2.83 14.12 1 11.8 1c-1.2 0-2.27.5-3.04 1.28l-.7 3.51 1.77 2.66-.01.01c.1.15.18.33.18.54 0 .28-.11.53-.29.71l-1.6 1.6.75 3.01c3.23-2.56 5.16-4.15 6.28-6.18.5-.91.75-1.77.82-2.56.01-.05.01-.11.02-.16 0-.04.01-.09.01-.13h-.01c.01-.07.02-.14.02-.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousHeartBrokenIcon = convertIcon(
  Icon,
  'miscellaneous-heart-broken'
);
export default MiscellaneousHeartBrokenIcon;
