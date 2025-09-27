import { ChevronLeft } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HomeContent = () => {

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto">
        {/* Header Centralizado */}
        <div className=" mb-12">
          <h1 className="text-5xl font-bold text-amber-800 mb-6 text-center">
            Lidzimi
          </h1>
          <p className="text-xl  text-muted-foreground max-w-2xl mx-auto text-center">
            Uma plataforma Open Source para Documentação de Línguas Nativas de Moçambique.
          </p>

        </div>

        <div className="flex flex-col items-center ">
          {/* Conteúdo Principal Centralizado */}
          <article className="w-full max-w-3xl px-4 ">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="Línguas de Moçambique"
              className="mb-8 w-full rounded-lg object-cover shadow-lg border-amber-50"
            />

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
              Contribua no nosso projeto no{' '}
              <a
                href="https://github.com/seu-usuario/seu-repositorio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700  hover:underline font-medium"
              >
                GitHub
              </a>{' '}
              sugerindo novas funcionalidades ou melhorando a documentação. Caso não seja um desenvolvedor entre em contato conosco via{' '}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline font-medium"
              >
                WhatsApp
              </a>.
            </p>
            <br />

            <div className="text-xl text-muted-foreground max-w-2xl mx-auto ">
              <p className=" text-xl text-muted-foreground max-w-2xl mx-auto">
                Lidzimi é uma palavra em Changana que significa <em>"Língua"</em>.
                Esta plataforma tem como objetivo preservar e promover a diversidade linguística
                de Moçambique através da documentação aberta e colaborativa.
              </p>
              <br />
              <h2 className="py-2 text-3xl text-center font-bold text-amber-700">Línguas
                Documentadas</h2>
              <ul>
                <li>
                  <strong>
                    <a href="#" className="text-amber-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors">Ronga</a>
                  </strong> - Língua nativa da região de Maputo
                </li>
              </ul>



            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </article>
        </div>
      </div>
    </section>

  );
};

export { HomeContent };

