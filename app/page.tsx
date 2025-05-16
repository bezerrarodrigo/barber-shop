import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Bezerra!</h2>
        <p className="text-sm">Sexta-feira, 15 de maio.</p>
        <div className="flex gap-2 mt-6">
          <Input placeholder="Faça a sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-6 flex justify-between">
          <Button variant="outline">
            <Image
              src="/scissors.png"
              alt="Scissors icon"
              width={14}
              height={14}
            />
            Cabelo
          </Button>
          <Button variant="outline">
            <Image
              src="/mustache.png"
              alt="Scissors icon"
              width={14}
              height={14}
            />
            Barba
          </Button>
          <Button variant="outline">
            <Image
              src="/razor.png"
              alt="Scissors icon"
              width={14}
              height={14}
            />
            Acabamento
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6">
          <Image
            className="object-cover rounded-xl"
            src="/banner01.png"
            fill
            alt="Agende com os melhores profissionais"
          />
        </div>
        <Card className="mt-6 p-0">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge>Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex justify-center items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
                    alt="@vintagebarber"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm font-light">9h45</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
