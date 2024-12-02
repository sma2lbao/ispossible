"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-bilibili",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fillRule="evenodd"><g><path d="M164.516 504.574c16.736-.741 32.287-1.778 47.69-2.074 66.797-1.185 132.409 6.814 194.762 31.998 30.51 12.296 59.984 26.517 86.495 46.516 21.772 16.444 26.512 36.887 16.588 67.108-6.22 18.665-18.661 32.739-34.36 45.034-37.028 28.888-75.832 54.96-120.412 69.626-31.251 10.37-63.687 18.222-96.27 23.259-42.803 6.666-86.2 9.629-129.447 13.628-8.886.89-17.92-.296-26.807-.296-4.591 0-5.776-2.37-5.924-6.37-1.185-19.703-2.074-39.553-3.851-59.256-2.222-25.48-4.74-50.96-7.702-76.292-3.999-35.406-8.442-70.663-12.885-105.92-4.592-37.184-9.331-74.22-13.774-111.403-4.443-36.294-8.442-72.736-13.182-109.03-5.332-41.48-11.256-82.96-16.884-124.439C21.888 157.63 12.705 109.04.116 61.19c-.592-2.074 1.185-6.666 2.962-7.259C44.993 37.042 87.056 20.6 128.97 3.86c13.922-5.63 15.107-7.26 15.255 10.37.148 75.107.444 150.214 1.63 225.321.592 39.11 2.073 78.218 4.739 117.18 3.258 47.552 8.294 95.106 12.589 142.659 0 2.074.889 4 1.333 5.185m83.68 218.062a74372.3 74372.3 0 0 0 114.784-86.958c-4.74-6.815-109.303-47.85-133.89-53.33 6.221 46.367 12.59 92.587 19.107 140.288M682.317 708.25C662.38 506.113 645.544 301.756 607 98.584c12.553-1.481 25.106-3.258 37.806-4.295 14.62-1.332 29.388-1.925 44.009-3.11 12.257-1.036 16.835 2.222 17.574 14.217 2.215 32.134 4.135 64.268 6.35 96.403 2.953 43.388 6.055 86.925 9.156 130.314 2.215 31.246 4.135 62.64 6.646 93.886 2.805 34.207 5.907 68.267 9.008 102.474 2.215 25.175 4.283 50.497 6.793 75.672 2.658 27.247 5.612 54.495 8.418 81.742.738 7.849 1.624 15.697 2.215 23.546.296 4.294-2.067 4.887-6.055 4.442-21.709-2.221-43.418-3.85-66.603-5.627M501 415.155c17.616-2.517 34.639-5.33 51.662-7.254 12.287-1.48 24.721-1.629 37.008-2.813 6.661-.593 10.954 1.776 11.99 8.29 2.813 17.322 5.773 34.79 7.846 52.26 3.405 29.017 6.07 58.182 9.178 87.199 2.664 25.464 5.329 50.78 8.29 76.243 3.256 27.24 6.809 54.333 10.213 81.425 1.037 7.995 1.777 16.137 2.813 24.872A9507.093 9507.093 0 0 0 565.245 745C543.929 635.15 522.612 526.189 501 415.155M883 753.976c-24.084 0-47.276.148-70.468-.296-1.933 0-5.352-3.409-5.501-5.484-3.568-37.05-6.69-73.953-9.96-111.004l-9.367-103.149c-3.27-35.42-6.393-70.841-9.663-106.262-.149-2.074-.595-4.001-1.041-7.113 8.623-1.038 16.8-2.668 25.125-2.668 22.449 0 44.897.593 67.495 1.186 5.798.148 8.325 4.001 8.623 9.336.743 11.116 1.784 22.083 1.784 33.198.148 52.167-.149 104.483.297 156.65.446 41.646 1.784 83.439 2.676 125.084zM551.069 368c-5.307-42.568-10.614-84.102-16.069-127.409 13.857-.148 27.715-.591 41.425-.591 4.57 0 6.634 2.513 7.076 7.538 3.686 38.725 7.519 77.45 11.499 117.654-14.3.739-29.042 1.773-43.931 2.808M830 252.066c11.937 0 24.619-.148 37.45 0 6.417.148 9.55 2.672 9.55 10.244-.448 36.224-.15 72.449-.15 108.525V379c-15.367-.742-30.139-1.485-46.7-2.227-.15-41.124-.15-82.396-.15-124.707M497.569 377c-7.424-41.193-14.996-82.091-22.569-124.023 13.512-2.067 27.023-4.282 40.387-5.906 5.939-.738 4.9 4.43 5.197 7.678 1.633 13.879 2.82 27.61 4.305 41.488 2.376 21.704 4.752 43.408 6.979 64.965.297 2.805 0 5.758 0 8.859-11.284 2.362-22.569 4.577-34.299 6.939M768 253.16c12.718 0 25.435.148 38.004-.148 5.685-.149 7.78 1.038 7.63 7.563-.449 17.352.15 34.704.3 52.204.15 21.505 0 43.157 0 64.513-12.868 1.335-24.09 2.373-36.209 3.708-3.142-41.97-6.433-83.793-9.725-127.84" transform="translate(71 112)"/></g></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-bilibili": IsIcon;
    }
    interface IsIcon {}
  }
}