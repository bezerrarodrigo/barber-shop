import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';

export function Header() {
  return (
    <Card>
      <CardContent className="flex justify-between items-center">
        <Image src="/logo.png" height={18} width={120} alt="Logo Barber" />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
