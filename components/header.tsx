import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export function Header() {
  return (
    <div>
      <div className="flex justify-between items-center p-5 border-b border-b-gray-800">
        <Image src="/logo.png" height={18} width={120} alt="Logo Barber" />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}
