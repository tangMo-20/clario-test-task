import React from 'react';

const svg = {
    sidebarLogo: () => (
        <svg
            width="30"
            height="37"
            viewBox="0 0 30 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.3363 9.32596C29.3363 8.36358 29.2923 7.40119 29.2923 6.53047C29.2923 5.84305 28.7636 5.24729 28.0587 5.24729C22.8603 5.24729 18.8513 3.68914 15.5472 0.343709C15.0626 -0.11457 14.3137 -0.11457 13.8291 0.343709C10.525 3.68914 6.56009 5.24729 1.31759 5.24729C0.656774 5.24729 0.0840637 5.79722 0.0840637 6.53047C0.0840637 7.40119 0.0840637 8.36358 0.0400091 9.32596C-0.136209 18.4457 -0.356482 30.9109 14.2256 36.1811C14.3578 36.2269 14.4899 36.2727 14.6221 36.2727C14.7542 36.2727 14.8864 36.2727 15.0186 36.1811C29.6888 30.9109 29.4685 18.4457 29.3363 9.32596ZM20.6135 15.5127L13.8732 22.5244C13.6529 22.7535 13.3445 22.891 12.9921 22.891C12.6837 22.891 12.3753 22.7535 12.111 22.5244L8.76282 19.0415C8.27822 18.5374 8.27822 17.7583 8.76282 17.2542C9.24742 16.7501 9.99635 16.7501 10.481 17.2542L12.9921 19.8664L18.8954 13.7254C19.38 13.2213 20.1289 13.2213 20.6135 13.7254C21.0981 14.2295 21.0981 15.0086 20.6135 15.5127Z"
                fill="white"
            />
        </svg>
    ),
    foldersButton: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 18.2222C22 18.6937 21.7893 19.1459 21.4142 19.4793C21.0391 19.8127 20.5304 20 20 20H4C3.46957 20 2.96086 19.8127 2.58579 19.4793C2.21071 19.1459 2 18.6937 2 18.2222V5.77778C2 5.30628 2.21071 4.8541 2.58579 4.5207C2.96086 4.1873 3.46957 4 4 4H9L11 6.66667H20C20.5304 6.66667 21.0391 6.85397 21.4142 7.18737C21.7893 7.52076 22 7.97295 22 8.44444V18.2222Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    chartsButton: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 12V21H6V12H2Z" fill="#007AFF" />
            <path d="M18 7V21H22V7H18Z" fill="#007AFF" />
            <path d="M10 3V21H14V3H10Z" fill="#007AFF" />
        </svg>
    ),
    mailsButton: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 6L12 13L2 6"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    filesButton: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 2V9H20"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    tooltipLogo: () => (
        <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="22.5" cy="22.5" r="22.5" fill="#E3F0FF" />
            <path
                d="M14 27L19 22"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26 25L32 19M21 22L24 25L21 22Z"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

export default svg;
