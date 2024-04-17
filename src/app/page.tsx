"use client";

export default function HomePage() {
  const handleClick = () => {
    const message = "Hola Martin, quiero comprar un vapo";
    const url = `https://wa.me/5491157469788?text=${encodeURI(message)}`;

    window.open(url, "_blank");
  };

  const texts = [
    "¡Martín tiene los vaporizadores perfectos para tu próxima joda!",
    "¡Haz que tu fiesta sea inolvidable con los vaporizadores de Martín!",
    "Eleva tus momentos de diversión con los vaporizadores de Martín",
    "¡Martín te garantiza la mejor joda con sus vaporizadores!",
    "No esperes más para disfrutar de la joda, ¡consigue tus vaporizadores con Martín!",
    "Con los vaporizadores de Martín, cada fiesta es una experiencia única",
    "¡Hazte notar en la joda con los vaporizadores de Martín!",
    "¡Martín tiene todo lo que necesitas para animar la fiesta con sus vaporizadores!",
    "¡No dejes que la joda se detenga, compra tus vaporizadores con Martín!",
  ];

  const text = texts[Math.floor(Math.random() * texts.length)];

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-8 text-center text-9xl font-bold">Salven a Martin</h1>
      <button
        className="focus:shadow-outline roundedpx-4 text-whitefocus:outline-none mx-auto h-[20rem]
         w-[50rem] w-full bg-gradient-to-r from-[#f7b733]
        to-[#fc4a1a] py-2 text-3xl font-bold transition-colors
        duration-300 ease-in-out
        hover:scale-105
        hover:from-[#f7b733]
        hover:to-[#fc4a1a]
        hover:shadow-lg
        "
        id="botonCompra"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
      <footer className="text-center leading-[4rem] opacity-70">
        © {new Date().getFullYear()} help-tone
      </footer>
    </div>
  );
}
