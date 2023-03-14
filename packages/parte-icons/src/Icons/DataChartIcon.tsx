import { convertIcon, IconProps } from '../common/Icon';

function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15C0 15.55 0.45 16 1 16H3C3.55 16 4 15.55 4 15V9.4L0 11V15ZM6 9.5V15C6 15.55 6.45 16 7 16H9C9.55 16 10 15.55 10 15V10L9 11L6 9.5ZM13 7L12 8V15C12 15.55 12.45 16 13 16H15C15.55 16 16 15.55 16 15V7.88C15.74 7.95 15.42 8 15 8C13.04 8 13 7 13 7ZM15 1H12C11.45 1 11 1.45 11 2C11 2.55 11.45 3 12 3H12.59L8.8 6.78L5.45 5.11V5.12C5.31 5.05 5.16 5 5 5C4.84 5 4.69 5.05 4.56 5.11V5.1L0.56 7.1V7.11C0.23 7.28 0 7.61 0 8C0 8.55 0.45 9 1 9C1.16 9 1.31 8.95 1.44 8.89V8.9L5 7.12L8.55 8.9V8.89C8.69 8.95 8.84 9 9 9C9.28 9 9.53 8.89 9.71 8.71L14 4.41V5C14 5.55 14.45 6 15 6C15.55 6 16 5.55 16 5V2C16 1.45 15.55 1 15 1Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataChartIcon = convertIcon(Icon, 'data-chart');

export default DataChartIcon;
