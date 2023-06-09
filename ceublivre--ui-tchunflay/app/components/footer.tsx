export default function Footer() {
  return (
    <div className="bg-store-purple w-full px-24 py-12 flex flex-row gap-6 text-[white]">
      <div className="flex flex-col justify-around">
        <a href={"/"} className="hover:underline">
          Sobre nós
        </a>
        <a href={"/"} className="hover:underline">
          Comprar
        </a>
        <a href={"/"} className="hover:underline">
          Ajuda
        </a>
      </div>
      <div className="flex flex-col">
        <a href={"/"} className="hover:underline">
          Comunidade
        </a>
        <a href={"/"} className="hover:underline">
          Contato
        </a>
        <a href={"/"} className="hover:underline">
          Redes Sociais
        </a>
      </div>
      <div className="flex flex-col">
        <a href={"/"} className="hover:underline">
          Ferramentas
        </a>
        <a href={"/"} className="hover:underline">
          Notícias
        </a>
        <a href={"/"} className="hover:underline">
          Trabalhe Conosco
        </a>
      </div>
    </div>
  );
}
