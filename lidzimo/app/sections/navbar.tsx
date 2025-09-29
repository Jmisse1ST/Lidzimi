"use client";

import {  DropdownMenuIdiomas, DropdownMenuLanguage } from "@/components/drop-button";

import {
    NavigationMenu,

} from "../../components/ui/navigation-menu";


const Navbar = () => {
   

    return (

        <section className="py-6 bg-gray-200  border-b fixed top-0 left-0 w-full z-50">
            <div className="container container mx-auto md:px-20 lg:px-24">
                <nav className="flex items-center justify-between">
                    <a
                        href=""
                        className="flex items-center gap-2"
                    >

                        <span className="px-10 text-lg font-bold tracking-tighter text-amber-700">
                            Lidzimi
                        </span>
                    </a>
                    <NavigationMenu className="hidden lg:block">


                    </NavigationMenu>
                    <div className="items-center text-gray-900  gap-4 flex mr-6">

                        <DropdownMenuLanguage/>

                      
                        <DropdownMenuIdiomas />
                        
                    </div>

                </nav>
            </div>
        </section>
    );
};

export { Navbar };


