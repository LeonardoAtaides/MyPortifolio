"use client";
export interface TituloProps {
  tipo: 0 | 1 | 2 | 3 ;
}

// Definimos os títulos **depois** da interface
const TITULOS: Record<TituloProps["tipo"], string> = {
  0: "PROJETOS",
  1: "SOBRE MIM",
  2: "CERTIFICAÇÕES",
  3: "CONTATO"
};

export default function Titulo({ tipo }: TituloProps) {
  const texto = TITULOS[tipo];

  if (!texto) return <h2 className="text-gray-500">Título não encontrado</h2>;

  const cor = tipo === 1 || tipo === 2 ? "text-white" : "text-[#fff]";

  return (
    <h1 className={`text-4xl mt-10 pl-60 absolute uppercase${cor}`}>
      {texto}
    </h1>
  );
}
