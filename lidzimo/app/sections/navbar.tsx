"use client";

import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionItem,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";


const Navbar = () => {

  return (

    <section className="py-6">
      <div className="container container mx-auto md:px-20 lg:px-24">
        <nav className="flex items-center justify-between">
          <a
            href=""
            className="flex items-center gap-2"
          >
            <img
              src=""
              className="max-h-8"
              alt=""
            />
            <span className="px-10 text-lg font-semibold tracking-tighter text-indigo-600">
              Providermz
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="">

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Depoimentos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Como Funciona
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Recursos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">

            <Button variant="outline"
              onClick={() => navigate("/Login")}
            >
              Entrar
            </Button>

            <Button className="bg-indigo-600 text-white hover:bg-indigo-300 asChild  "
              onClick={() => navigate("/CriarConta")}
            >
              Começar Grátis
            </Button>

          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden bg-text-600 mr-6">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href=""
                    className="flex items-center gap-2"
                  >
                    <img
                      src=""
                      className="max-h-8"
                      alt=""
                    />
                    <span className="text-lg font-semibold tracking-tighter text-indigo-600">
                      Providermz
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6 ">
                  <a href="#" className="font-medium text-gray-700">
                    Depoimentos
                  </a>
                  <a href="#" className="font-medium text-gray-700">
                    Como Funciona
                  </a>
                  <a href="#" className="font-medium text-gray-700">
                    Recursos
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-300" onClick={() => navigate("/Login")}>Entrar</Button>

                  <Button className="bg-indigo-600 text-white hover:bg-indigo-400 hover:text-indigo-700 asChild"
                    onClick={() => navigate("/CriarConta")}>Começar Grátis</Button>

                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };