import { Header } from '@/components/Header/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Bezerra!</h2>
        <p className="text-sm">Sexta-feira, 15 de maio.</p>
        <div className="flex gap-2 mt-6">
          <Input placeholder="Faça a sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-6 flex justify-between gap-3">
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
      </div>
    </div>
  );
}
