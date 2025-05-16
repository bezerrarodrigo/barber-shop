import { Header } from '@/components/Header/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Bezerra!</h2>
        <p className="text-sm">Sexta-feira, 15 de maio.</p>
      </div>
      <div className="flex gap-2 px-5">
        <Input placeholder="Faça a sua busca..." />
        <Button size="icon">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}
