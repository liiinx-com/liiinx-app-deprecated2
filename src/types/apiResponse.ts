export interface ApiResponse<T> {
  ok: boolean;
  statusCode: number;
  data: T;
  messages: string[];
}
