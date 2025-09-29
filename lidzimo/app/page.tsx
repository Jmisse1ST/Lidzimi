
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Navbar } from "./sections/navbar"
import { HomeContent } from "./Home"


export default function HomePage() {
  return (
    

    <><Navbar /><div>

      <SidebarProvider className="">
        <AppSidebar />
        <SidebarInset>

          <header className="">

            <br />
            <br />
            <br />

            <div className="fixed flex items-center gap-2 px-4 py-6">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4 bg-amber-900" />

              <Breadcrumb className="">
                <BreadcrumbList>
                  <BreadcrumbItem className="text-amber-600 hidden md:block">
                    <BreadcrumbLink href="#">
                      Começando
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-600">O que é  Lidzimi?</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

         

          <main className="min-h-[calc(100vh-4rem)]  lg:pl-40 lg:pr-40 bg-gray-50">

              <HomeContent />

          </main>
         

        </SidebarInset>
      </SidebarProvider>

    </div></>
  )
}
