export interface OverlayError {
  title: string;
  message: string;
  path: string;
  codeFrame: string;
  stack?: string;
}
