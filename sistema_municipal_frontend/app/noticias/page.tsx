import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#8B1D36] text-white py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Escudo_de_Arequipa.svg/200px-Escudo_de_Arequipa.svg.png"
            alt="Escudo Municipal"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-lg font-semibold">Municipalidad de Arequipa</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:underline">
            Inicio
          </Link>
          <Link href="/noticias" className="text-sm font-bold hover:underline">
            Noticias
          </Link>
          <Link href="/multas" className="text-sm hover:underline">
            Multas
          </Link>
          <Link href="/contacto" className="text-sm hover:underline">
            Contacto
          </Link>
          <Link href="/login" className="text-sm hover:underline flex items-center gap-1">
            <span>Login</span>
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Todas las Noticias</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          ].map((imageUrl, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={`Imagen de noticia ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{15 - index} Jun 2025</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Título de la noticia municipal #{index + 1}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Descripción breve de la noticia municipal con información relevante para los ciudadanos de Arequipa...
                </p>
                <Link href={`/noticias/${index + 1}`} className="inline-flex items-center mt-3 text-[#8B1D36]">
                  Leer más
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-[#8B1D36] text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Escudo_de_Arequipa.svg/200px-Escudo_de_Arequipa.svg.png"
                alt="Escudo Municipal"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold">Municipalidad de Arequipa</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 Municipalidad de Arequipa. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
