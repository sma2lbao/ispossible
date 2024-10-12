declare namespace JSX {
  interface IntrinsicElements {
    "micro-app": any;
  }
}

interface Window {
  __MICRO_APP_BASE_APPLICATION__?: boolean;
}
