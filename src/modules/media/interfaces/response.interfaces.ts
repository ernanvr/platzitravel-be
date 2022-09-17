export interface FileJsonResponse {
  filename: string;
  url: string;
  bucket: string;
}

export interface ImageRequest {
  filename: string;
  buffer: Buffer;
}
