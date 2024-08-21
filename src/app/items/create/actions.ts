"use server";

import { auth } from "@/auth";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createItemAction(formData: FormData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to create an item");
  }

  const user = session.user;

  if (!user || !user.id) {
    throw new Error("You must be logged in to create an item");
  }

  const startingPrice = formData.get("startingPrice") as string;

  const priceAsPesewas = Math.floor(parseFloat(startingPrice) * 100);

  await database.insert(items).values({
    name: formData.get("name") as string,
    startingPrice: priceAsPesewas,
    userId: user.id,
  });
  redirect("/");
}
