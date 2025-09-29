import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
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
                <Button variant="outline" className="bg-amber-700 text-white  hover:bg-amber-600  asChild w-25 ">Idioma</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-25" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger> Norte</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Emakhuwa
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Xichangana
                                    <DropdownMenuShortcut>27%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cinyanja
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cinyungwe
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cisena
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Elomwe
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Echuwabo
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Centro</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Cindau
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Citewe
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cisenga
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Cicewa
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Sul</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Xitswa
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Xironga
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Bitonga
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Chopi
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Gitonga
                                    <DropdownMenuShortcut>0%</DropdownMenuShortcut>

                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

import { useState } from 'react';


export function DropdownMenuLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState('Português');

  const languages = [
    {
      name: 'Português',
      code: 'pt',
      flag: '🇲🇿'
    },
    {
      name: 'English',
      code: 'en',
      flag: '🇬🇧'
    }
  ];

  const handleLanguageChange = (language: { name: string; code: string; flag: string }) => {
    setCurrentLanguage(language.name);
    //lógica para mudar o idioma da aplicação

    console.log(`Idioma alterado para: ${language.name} (${language.code})`);
  };

  const currentLang = languages.find(lang => lang.name === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-amber-700 text-amber-700 hover:bg-white  w-28 flex items-center gap-2"
        >
          <span>{currentLang.flag}</span>
          <span>{currentLang.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-28 bg-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center gap-2 cursor-pointer hover:bg-amber-50 text-amber-700"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


