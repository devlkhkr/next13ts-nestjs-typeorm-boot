export interface response<T> {
  message: string;
  data: T;
  status: number;
}
