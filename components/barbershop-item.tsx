import { BarberShop } from '@/lib/generated/prisma';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface BarberShopItemProps {
  barber: BarberShop;
}

export function BarberShopItem({ barber }: BarberShopItemProps) {
  return (
    <Card className="min-w-[159px] py-2">
      <CardContent className="px-2">
        <div className="relative h-[100px] w-full">
          <Image
            src={barber.imageUrl}
            alt={barber.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="my-2">
          <h3 className="font-semibold truncate">{barber.name}</h3>
          <p className="text-sm text-gray-400 truncate">{barber.address}</p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
