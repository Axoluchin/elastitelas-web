import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const list = [
  {
    label: "Telas",
    href: "#telas",
    target: undefined,
  },
  {
    label: "Elásticos",
    href: "#elasticos",
    target: undefined,
  },
  {
    label: "Producto Terminado",
    href: "#producto-terminado",
    target: undefined,
  },
  {
    label: "Misión",
    href: "#nosotros",
    target: undefined,
  },
  {
    label: "Visión",
    href: "#nosotros",
    target: undefined,
  },
  {
    label: "Valores",
    href: "#valores",
    target: undefined,
  },
];

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          role="img"
          aria-label="menu icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-10"
        >
          <path
            fill="currentColor"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-main text-main-100 m-0">
        <img src="./logotipo.webp" className="h-12" alt="logo de la empresa" />
        <ul className="text-2xl mt-8">
          {list.map(({ href, label, target }) => (
            <li className="hover:underline my-4" key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
