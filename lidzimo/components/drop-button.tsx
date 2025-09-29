import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuIdiomas() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-amber-700 text-white  hover:bg-gray-600  asChild ">Idioma</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-25 " align="start">
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="">Zona Norte</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Emakhuwa

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Xichangana

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cinyanja

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cinyungwe

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cisena

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Elomwe

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Echuwabo

                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Zona Centro</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Cindau
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Citewe

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cisenga

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cicewa

                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Zona Sul</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Xitswa
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Xironga

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Bitonga

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Chopi

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Gitonga

                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
