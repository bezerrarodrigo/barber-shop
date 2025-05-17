import { BarberShopItem } from '@/components/barbershop-item';
import { Heading } from '@/components/heading';
import { ScheduleCard } from '@/components/scheduleCard';
import { SearchFilter } from '@/components/searchFilter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/lib/prisma';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  const barbershops = await db.barberShop.findMany({});

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Bezerra!</h2>
        <p className="text-sm">Sexta-feira, 15 de maio.</p>
        <div className="flex gap-2 mt-6">
          <Input placeholder="Faça a sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <SearchFilter />
        <div className="relative w-full h-[150px] my-6">
          <Image
            className="object-cover rounded-xl"
            src="/banner01.png"
            fill
            alt="Agende com os melhores profissionais"
          />
        </div>
        <Heading title="Agendamentos" />
        <ScheduleCard />
        <Heading title="Recomendados" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {barbershops.map((barber) => (
            <BarberShopItem key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </div>
  );
}
