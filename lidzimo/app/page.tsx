
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

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/* Header Fixo */}
          <header className="">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4" />
              <Breadcrumb className="">
                <BreadcrumbList>
                  <BreadcrumbItem className=" md:block">
                    <BreadcrumbLink href="#">
                      Changana
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Primeiros Passos</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div>
            
            <main className="min-h-[calc(100vh-4rem)] pt-16 lg:pl-20 lg:pr-20 bg-background">
              
              <HomeContent />

            </main>
          </div>
         
        </SidebarInset>
      </SidebarProvider>

    </div></>
  )
}
