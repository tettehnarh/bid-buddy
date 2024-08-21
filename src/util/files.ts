import { env } from "process";

export function getImageUrl(fileKey: string) {
  return `${env.NEXT_PUBLIC_BUCKET_URL}/${fileKey}`;
}
