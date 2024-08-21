import { database } from "@/db/database";
import { ItemCard } from "./item-card";

export default async function HomePage() {
  const allItems = await database.query.items.findMany();

  return (
    <main className='container mx-auto py-12 space-y-8'>
      <h1 className='text-4xl font-bold'>Item for Sale</h1>

      <div className='grid grid-cols-8 gap-8'>
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
