import { convertIcon, IconProps } from '../component/Icon';
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
        d="M13 2H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4v2H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H9V7h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorAlignmentVerticalCenterIcon = convertIcon(
  Icon,
  'editor-alignment-vertical-center'
);
export default EditorAlignmentVerticalCenterIcon;
