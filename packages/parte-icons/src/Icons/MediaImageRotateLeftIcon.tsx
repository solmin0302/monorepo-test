import { convertIcon, IconProps } from '../common/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M13 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C8.11 2.47 8 2.72 8 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H13c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3Zm-5.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5ZM10 7H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1Zm-1 6.33L7 12l-1 1-2-3-2 2.67V9h7v4.33Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaImageRotateLeftIcon = convertIcon(Icon, 'media-image-rotate-left');
export default MediaImageRotateLeftIcon;
