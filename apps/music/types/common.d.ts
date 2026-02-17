/* eslint-disable @typescript-eslint/no-explicit-any */
import "@types/umami";

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
}
