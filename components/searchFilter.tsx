import Image from 'next/image';
import { Button } from './ui/button';

export function SearchFilter() {
  return (
    <div className="mt-6 flex justify-between">
      <Button variant="outline">
        <Image src="/scissors.png" alt="Scissors icon" width={14} height={14} />
        Cabelo
      </Button>
      <Button variant="outline">
        <Image src="/mustache.png" alt="Scissors icon" width={14} height={14} />
        Barba
      </Button>
      <Button variant="outline">
        <Image src="/razor.png" alt="Scissors icon" width={14} height={14} />
        Acabamento
      </Button>
    </div>
  );
}
