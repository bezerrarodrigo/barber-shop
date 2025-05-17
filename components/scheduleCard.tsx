import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function ScheduleCard() {
  return (
    <Card className="p-0">
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
        <div className="flex flex-col items-center justify-center px-5 border-l border-solid">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl font-semibold">06</p>
          <p className="text-sm font-light">9:45</p>
        </div>
      </CardContent>
    </Card>
  );
}
