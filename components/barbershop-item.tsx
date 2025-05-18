import { BarberShop } from '@/lib/generated/prisma';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { StarIcon } from 'lucide-react';

interface BarberShopItemProps {
  barber: BarberShop;
}

export function BarberShopItem({ barber }: BarberShopItemProps) {
  return (
    <Card className="min-w-[159px] py-2">
      <CardContent className="px-2">
        <div className="relative h-[159px] w-full">
          <Image
            src={barber.imageUrl}
            alt={barber.name}
            fill
            className="object-cover rounded-lg"
          />
          <Badge variant="secondary" className="absolute top-2 left-2">
            <StarIcon className="text-primary fill-primary" />
            <span className="text-xs font-semibold">{barber.rate}</span>
          </Badge>
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
