"use client";

import { Button } from "../../components/ui/button";
import {
    NavigationMenu,

} from "../../components/ui/navigation-menu";


const Navbar = () => {

    return (

        <section className="py-6 bg-gray-100  border-b">
            <div className="container container mx-auto md:px-20 lg:px-24">
                <nav className="flex items-center justify-between">
                    <a
                        href=""
                        className="flex items-center gap-2"
                    >

                        <span className="px-10 text-lg font-bold tracking-tighter text-gray-900">
                            Lidzimi
                        </span>
                    </a>
                    <NavigationMenu className="hidden lg:block">


                    </NavigationMenu>
                    <div className="items-center text-gray-900  gap-4 flex mr-6">

                        <Button className="bg-amber-50 hover:text-white hover:bg-gray-800" variant="outline"

                        >
                            Changana
                        </Button>

                        <Button className="bg-gray-900 text-white  hover:bg-gray-600  asChild  "

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