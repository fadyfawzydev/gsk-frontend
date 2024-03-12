export const ArrowLine: React.FC<SvgProps> = ({
  className,
  width = 58,
  height = 142,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 58 142"
      fill={fill}
      className={className}
    >
      <path
        d="M3.65816 137.081L0.349516 103.809C0.292798 103.215 0.342543 102.641 0.490685 102.099C0.989322 100.231 2.59934 98.7797 4.63704 98.5737C7.26504 98.3132 9.60712 100.233 9.86814 102.859L11.9844 124.155C31.2064 105.491 40.7943 87.6703 45.0298 71.8906C49.8237 53.984 47.7473 38.5206 44.3383 27.2482C40.9296 15.9905 36.1548 9.00229 35.7587 8.44462C35.7431 8.41747 35.7431 8.41747 35.7431 8.41747L35.7392 8.41643C34.8687 7.20494 34.6449 5.7204 35.0029 4.38029C35.2784 3.35595 35.8945 2.41139 36.8257 1.74213C38.9675 0.197931 41.9544 0.684348 43.501 2.82475C43.7036 3.11576 49.0865 10.6214 53.1208 23.2732C57.1451 35.9077 59.7891 53.779 54.2703 74.3677C49.5828 91.8888 38.9831 111.236 18.817 130.855L40.4979 128.881C43.1297 128.641 45.4517 130.577 45.6951 133.207C45.936 135.838 43.998 138.163 41.3676 138.405L8.84935 141.371C6.23663 141.609 3.92037 139.695 3.65816 137.081Z"
        fill="#7D20A8"
      />
    </svg>
  );
};