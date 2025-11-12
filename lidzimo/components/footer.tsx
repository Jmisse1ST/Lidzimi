const Footer = () => {
  return (
    <section className="py-3 mt-7">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4">
        {/* Linha divisória com 20% de margem em cada lado */}
        <div className="w-full flex justify-center items-center mb-3">
          <div className="w-[10%]"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-[10%]"></div>
        </div>
        
        {/* Conteúdo centralizado */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500  font-mono">Mantido por: Jemisse Macuacua </p>
          <p className="text-sm text-gray-500  font-mono"> Software Developer </p>
         
          <span className="text-xs text-gray-500 mt-6 font-mono">v1.0.0</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;