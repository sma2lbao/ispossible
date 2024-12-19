/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
}
