"use server";

import { auth } from "@/auth";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { getSignedUrlForS3Object } from "@/lib/s3";
import { redirect } from "next/navigation";

export async function createUploadUrlAction(key: string, type: string) {
  return await getSignedUrlForS3Object(key, type);
}

export async function createItemAction({
  fileName,
  name,
  startingPrice,
}: {
  fileName: string;
  name: string;
  startingPrice: number;
}) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to create an item");
  }

  const user = session.user;

  if (!user || !user.id) {
    throw new Error("You must be logged in to create an item");
  }

  await database.insert(items).values({
    name,
    startingPrice,
    fileKey: fileName,
    userId: user.id,
  });
  redirect("/");
}
