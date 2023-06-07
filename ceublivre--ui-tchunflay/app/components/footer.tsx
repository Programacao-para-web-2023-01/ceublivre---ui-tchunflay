export default function Footer() {
  return (
    <div className="bg-store-purple w-full px-24 py-12 flex flex-row gap-6 text-[white] align">
      <div className="flex flex-col justify-around">
        <a href={"/"} className="text-white">
          Sobre nós
        </a>
        <a href={"/"} className="text-white">
          Comprar
        </a>
        <a href={"/"} className="text-white">
          Ajuda
        </a>
      </div>
      <div className="flex flex-col">
        <a href={"/"} className="text-white">
          Comunidade
        </a>
        <a href={"/"} className="red">
          Contato
        </a>
        <a href={"/"} className="text-white-200">
          Redes Sociais
        </a>
      </div>
      <div className="flex flex-col">
        <a href={"/"} className="text-white">
          Ferramentas
        </a>
        <a href={"/"} className="text-white">
          Notícias
        </a>
        <a href={"/"} className="text-white">
          Trabalhe Conosco
        </a>
      </div>
    </div>
  );
}
