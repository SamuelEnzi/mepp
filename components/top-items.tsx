import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function TopItems() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>CS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Cobblestone</p>
          <p className="text-sm text-muted-foreground">
            minecraft:cobblestone
          </p>
        </div>
        <div className="ml-auto font-medium">1.999</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Dirt</p>
          <p className="text-sm text-muted-foreground">minecraft:dirt</p>
        </div>
        <div className="ml-auto font-medium">500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Stone</p>
          <p className="text-sm text-muted-foreground">
            minecraft:stone
          </p>
        </div>
        <div className="ml-auto font-medium">200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sand</p>
          <p className="text-sm text-muted-foreground">minecraft:sand</p>
        </div>
        <div className="ml-auto font-medium">40</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Grass</p>
          <p className="text-sm text-muted-foreground">minecraft:grass</p>
        </div>
        <div className="ml-auto font-medium">5</div>
      </div>
    </div>
  )
}