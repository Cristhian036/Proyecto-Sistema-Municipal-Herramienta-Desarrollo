import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

export default function Home() {
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
        <h2 className="text-2xl font-bold mb-6 text-center">Noticias Municipales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primera fila de noticias */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Nuevo parque municipal"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>15 Jun 2025</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Inauguración del nuevo parque municipal en el centro histórico</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                La Municipalidad de Arequipa inauguró el nuevo parque municipal que beneficiará a más de 5,000 vecinos
                del centro histórico...
              </p>
              <Link href="/noticias/1" className="inline-flex items-center mt-3 text-[#8B1D36]">
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

          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                alt="Mejoramiento de vías"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>14 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">Programa de mejoramiento de vías públicas inicia este mes</h3>
                <Link href="/noticias/2" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Campaña de vacunación para mascotas"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>12 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">
                  Campaña de vacunación gratuita para mascotas este fin de semana
                </h3>
                <Link href="/noticias/3" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Sistema de pago en línea"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>10 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">Nuevo sistema de pago de arbitrios municipales en línea</h3>
                <Link href="/noticias/4" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>

          {/* Segunda fila de noticias */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Programa de emprendedores"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>9 Jun 2025</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Municipalidad lanza programa de apoyo a emprendedores locales</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                El nuevo programa municipal busca impulsar a más de 200 emprendedores locales con capacitaciones y
                financiamiento...
              </p>
              <Link href="/noticias/5" className="inline-flex items-center mt-3 text-[#8B1D36]">
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

          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Concurso de proyectos urbanos"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>8 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">Concurso municipal de proyectos de mejora urbana</h3>
                <Link href="/noticias/6" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Oficinas municipales"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>6 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">Nuevos horarios de atención en oficinas municipales</h3>
                <Link href="/noticias/7" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="Censo de comerciantes"
                width={150}
                height={150}
                className="w-32 h-full object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>5 Jun 2025</span>
                </div>
                <h3 className="font-bold text-sm mb-1">Resultados del censo municipal de comerciantes</h3>
                <Link href="/noticias/8" className="inline-flex items-center text-xs text-[#8B1D36]">
                  Leer más
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#8B1D36] text-white px-6 py-2 rounded-md hover:bg-[#7A1A30] transition-colors">
            Ver más noticias
          </button>
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
