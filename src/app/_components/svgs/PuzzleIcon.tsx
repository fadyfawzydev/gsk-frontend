export const PuzzleIcon: React.FC<SvgProps> = ({
  className,
  width = 34,
  height = 34,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill={fill}
      className={className}
    >
      <path
        d="M33.8403 12.0451C33.5926 11.0362 33.0623 10.1188 32.3118 9.40049C31.5613 8.6822 30.6215 8.19277 29.6027 7.98957C28.6371 7.80455 27.6396 7.87999 26.7128 8.20813V2.42844C26.7128 1.78438 26.457 1.16669 26.0016 0.711273C25.5461 0.255853 24.9285 0 24.2844 0H16.3191C16.0775 0.000958339 15.8416 0.0739953 15.6417 0.209765C15.4418 0.345534 15.287 0.53786 15.197 0.762131C15.107 0.986402 15.086 1.23242 15.1367 1.46869C15.1873 1.70497 15.3073 1.92076 15.4813 2.08846C15.7705 2.36906 16.0002 2.70506 16.1567 3.0764C16.3131 3.44775 16.3932 3.84681 16.392 4.24977C16.3911 4.71256 16.2848 5.16908 16.0812 5.58469C15.8777 6.0003 15.5821 6.36409 15.217 6.64846C14.8519 6.93283 14.4268 7.13032 13.974 7.22594C13.5212 7.32155 13.0525 7.3128 12.6036 7.20032C12.0476 7.06375 11.5425 6.77025 11.1486 6.35478C10.7546 5.93931 10.4884 5.41937 10.3816 4.85688C10.2814 4.36115 10.3067 3.84825 10.4551 3.36478C10.6036 2.8813 10.8705 2.44258 11.2315 2.08846C11.4055 1.92076 11.5255 1.70497 11.5762 1.46869C11.6268 1.23242 11.6058 0.986402 11.5158 0.762131C11.4259 0.53786 11.271 0.345534 11.0711 0.209765C10.8712 0.0739953 10.6354 0.000958339 10.3937 0H2.42844C1.78438 0 1.16669 0.255853 0.711273 0.711273C0.255853 1.16669 0 1.78438 0 2.42844V10.3937C0.000958339 10.6354 0.0739953 10.8712 0.209765 11.0711C0.345534 11.271 0.53786 11.4259 0.762131 11.5158C0.986402 11.6058 1.23242 11.6268 1.46869 11.5762C1.70497 11.5255 1.92076 11.4055 2.08846 11.2315C2.39557 10.9355 2.76033 10.7058 3.16005 10.5567C3.55977 10.4077 3.98588 10.3426 4.41186 10.3654C4.83784 10.3881 5.25458 10.4984 5.63612 10.6892C6.01767 10.8799 6.35586 11.1472 6.62964 11.4744C7.09641 12.0846 7.31441 12.8492 7.23967 13.6139C7.16493 14.3785 6.80301 15.0864 6.2269 15.5947C5.6508 16.1031 4.90336 16.374 4.13534 16.353C3.36732 16.3319 2.63585 16.0204 2.08846 15.4813C1.92076 15.3073 1.70497 15.1873 1.46869 15.1367C1.23242 15.086 0.986402 15.107 0.762131 15.197C0.53786 15.287 0.345534 15.4418 0.209765 15.6417C0.0739953 15.8416 0.000958339 16.0775 0 16.3191V24.2844C0 24.9285 0.255853 25.5461 0.711273 26.0016C1.16669 26.457 1.78438 26.7128 2.42844 26.7128H8.20813C7.87941 27.6395 7.80396 28.6371 7.98957 29.6027C8.19277 30.6215 8.6822 31.5613 9.40049 32.3118C10.1188 33.0623 11.0362 33.5926 12.0451 33.8403C12.8501 34.0393 13.6899 34.0525 14.5008 33.8788C15.3117 33.7051 16.0725 33.3491 16.7254 32.8378C17.3783 32.3265 17.9062 31.6732 18.2692 30.9276C18.6322 30.1819 18.8207 29.3635 18.8204 28.5342C18.8194 27.9145 18.7169 27.2993 18.5168 26.7128H24.2844C24.9285 26.7128 25.5461 26.457 26.0016 26.0016C26.457 25.5461 26.7128 24.9285 26.7128 24.2844V18.5168C27.2993 18.7169 27.9145 18.8194 28.5342 18.8204C29.3635 18.8207 30.1819 18.6322 30.9276 18.2692C31.6732 17.9062 32.3265 17.3783 32.8378 16.7254C33.3491 16.0725 33.7051 15.3117 33.8788 14.5008C34.0525 13.6899 34.0393 12.8501 33.8403 12.0451Z"
        fill="currentColor"
      />
    </svg>
  );
};
