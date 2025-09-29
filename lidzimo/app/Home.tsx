

const HomeContent = () => {

  return (
    <section className="py-20 md:bg-gray-50 bg-amber-50">
      <div className="container max-w-4xl mx-auto ">

        <div className=" mb-12">

          <h1 className="text-5xl font-bold text-amber-800 mb-6 text-center ">
            Lidzimi
          </h1>
          <p className="px-4 md:px-12 lg:px-8 text-xl  text-muted-foreground max-w-2xl mx-auto text-center">
            Uma plataforma Open Source para Documentação de Línguas Nativas de Moçambique.
          </p>

        </div>

        <div className="flex flex-col items-center ">

          <article className="w-full max-w-3xl px-4 ">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="Línguas de Moçambique"
              className="mb-8 w-full rounded-lg object-cover shadow-lg border-amber-50"
            />

            <p className="text text-muted-foreground max-w-2xl mx-auto  font-mono ">
              Contribua no nosso projeto no{' '}
              <a
                href="https://github.com/Jmisse1ST/Lidzimi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700  hover:underline font-medium"
              >
                GitHub
              </a>{' '}
              sugerindo novas funcionalidades ou melhorando a documentação. Caso não seja um desenvolvedor entre em contacto connosco via{' '}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline font-medium"
              >
                WhatsApp
              </a>
            </p>
            <br />

            <div className="text font-mono text-muted-foreground max-w-2xl mx-auto ">
              <p>
                Lidzimi é uma palavra em Changana que significa <em>Língua</em>.
                Esta plataforma tem como objetivo preservar e promover a diversidade linguística
                de Moçambique através da documentação aberta e colaborativa.
              </p>
              <br />
              <br />
              <h2 className="py-5 text-2xl text-center font-bold text-amber-700">Línguas
                Documentadas</h2>
              <ul>
                <li>

                  <strong className="text">
                    <a href="#" className="text text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ">Xichangana</a>
                  </strong> - Língua nativa da região de Maputo - 27%

                </li>
              </ul>
              <br />
              <br />
              <br />
              

              <h2 className=" text-2xl text-center font-bold text-amber-700">Por
                Documentar</h2>
                <br />
              <ul>
                <li>

                  <strong className="text">
                    <a href="#" className="text text-gray-700 hover:text-amber-600 ">Zona Norte</a>
                  </strong>- Língua nativas da região norte de Mocambiquee - 0 %

                </li>

                <li>

                  <strong className="text">
                    <a href="#" className="text text-gray-700 hover:text-amber-600  ">Zona Centro</a>
                  </strong>- Língua nativa da região de Maputo - 0 %

                </li>
                <li>

                  <strong className="text">
                    <a href="#" className=" text-gray-700  hover:text-amber-600  ">Zona Sul</a>
                  </strong>- Língua nativa da região de Sul de Mocambique - 7.9 %

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

