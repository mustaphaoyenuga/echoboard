import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "./LogoutButton";

export default function UserMenu() {
const user = {
  email: 'musty1k4real@gmail.com',
  name: 'Mustapha Oyenuga'
}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='size-10 cursor-pointer'>
          <AvatarImage
            src='/images/profile-picture-5.jpg'
            alt='Profile Image'
          />
          <AvatarFallback>MO</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='flex flex-col space-y-1'>
          <span className='font-medium'>{user?.email}</span>
          <span className='text-sm text-muted-foreground'>{user?.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
