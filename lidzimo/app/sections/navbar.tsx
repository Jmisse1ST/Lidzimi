"use client";

import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
 
} from "../../components/ui/navigation-menu";


const Navbar = () => {

  return (

    <section className="py-6 bg-red-50  border-b">
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
            <span className="px-10 text-lg font-semibold tracking-tighter text-red-500">
              LiDzImI
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            
            
          </NavigationMenu>
          <div className="items-center text-red-500  gap-4 flex mr-6">

            <Button className="hover:bg-red-100" variant="outline"
              
            >
              Changana
            </Button>

            <Button className="bg-red-500 text-white hover:bg-red-300 asChild  "
              
            >
              Idiomas
            </Button>

          </div>
         
        </nav>
      </div>
    </section>
  );
};

export { Navbar };