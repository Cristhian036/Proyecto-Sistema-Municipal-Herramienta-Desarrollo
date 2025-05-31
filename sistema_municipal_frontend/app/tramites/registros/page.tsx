import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegistrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#6B0F1A] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-3">
                <img src="/images/escudo.png" alt="Escudo Municipalidad de Arequipa" className="h-12 w-auto" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Municipalidad de Arequipa</h1>
                <p className="text-sm">Portal de Trámites Municipales</p>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
              <Link href="/tramites" className="hover:underline font-bold">
                Guía de Trámites
              </Link>
              <Link href="/multas" className="hover:underline">
                Multas
              </Link>
              <Link href="/noticias" className="hover:underline">
                Noticias
              </Link>
              <Link href="/foros" className="hover:underline">
                Foros
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/tramites" className="text-[#6B0F1A] hover:underline flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Guía de Trámites
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Registros Civiles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Registros</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#partida-nacimiento" className="text-[#6B0F1A] hover:underline font-medium">
                    Partida de Nacimiento
                  </Link>
                </li>
                <li>
                  <Link href="#partida-matrimonio" className="text-[#6B0F1A] hover:underline font-medium">
                    Partida de Matrimonio
                  </Link>
                </li>
                <li>
                  <Link href="#partida-defuncion" className="text-[#6B0F1A] hover:underline font-medium">
                    Partida de Defunción
                  </Link>
                </li>
                <li>
                  <Link href="#otros-registros" className="text-[#6B0F1A] hover:underline font-medium">
                    Otros Registros
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="partida-nacimiento" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop"
                    alt="Partida de Nacimiento"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Partida de Nacimiento</CardTitle>
                    <CardDescription className="mt-2">
                      Documento oficial que certifica el nacimiento de una persona y establece su identidad legal.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La partida de nacimiento es un documento fundamental que acredita el nacimiento de una persona y
                      contiene información como nombres y apellidos, fecha y lugar de nacimiento, y datos de los padres.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DNI del solicitante.</li>
                      <li>Pago de la tasa municipal correspondiente.</li>
                      <li>En caso de ser un tercero, carta poder simple.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Tiempo</h3>
                    <p>
                      <strong>Costo:</strong> S/. 15.00
                    </p>
                    <p>
                      <strong>Tiempo de entrega:</strong> Inmediato
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Oficina de Registro Civil ubicada en el primer piso del Palacio
                      Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="partida-matrimonio" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                    alt="Partida de Matrimonio"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Partida de Matrimonio</CardTitle>
                    <CardDescription className="mt-2">
                      Documento oficial que certifica la unión matrimonial entre dos personas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La partida de matrimonio es un documento que acredita la celebración de un matrimonio civil y
                      contiene información como nombres de los cónyuges, fecha y lugar de la ceremonia, y datos de los
                      testigos.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DNI del solicitante.</li>
                      <li>Pago de la tasa municipal correspondiente.</li>
                      <li>En caso de ser un tercero, carta poder simple.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Tiempo</h3>
                    <p>
                      <strong>Costo:</strong> S/. 15.00
                    </p>
                    <p>
                      <strong>Tiempo de entrega:</strong> Inmediato
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Oficina de Registro Civil ubicada en el primer piso del Palacio
                      Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="partida-defuncion" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=2070&auto=format&fit=crop"
                    alt="Partida de Defunción"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Partida de Defunción</CardTitle>
                    <CardDescription className="mt-2">
                      Documento oficial que certifica el fallecimiento de una persona.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La partida de defunción es un documento que acredita el fallecimiento de una persona y contiene
                      información como nombre del fallecido, fecha, hora y lugar del deceso, y causa de muerte.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DNI del solicitante.</li>
                      <li>Pago de la tasa municipal correspondiente.</li>
                      <li>En caso de ser un tercero, carta poder simple.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Tiempo</h3>
                    <p>
                      <strong>Costo:</strong> S/. 15.00
                    </p>
                    <p>
                      <strong>Tiempo de entrega:</strong> Inmediato
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Oficina de Registro Civil ubicada en el primer piso del Palacio
                      Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="otros-registros" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                    alt="Otros Registros"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Otros Registros</CardTitle>
                    <CardDescription className="mt-2">
                      Otros documentos y certificados emitidos por la Oficina de Registro Civil.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Certificado de Soltería</h3>
                    <p>
                      Documento que acredita el estado civil de soltería de una persona. Costo: S/. 25.00. Tiempo de
                      entrega: 3 días hábiles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Certificado de Viudez</h3>
                    <p>
                      Documento que acredita el estado civil de viudez de una persona. Costo: S/. 25.00. Tiempo de
                      entrega: 3 días hábiles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Certificado de No Inscripción</h3>
                    <p>
                      Documento que certifica que una persona no se encuentra inscrita en los registros civiles. Costo:
                      S/. 20.00. Tiempo de entrega: 5 días hábiles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar estos trámites?</h3>
                    <p>
                      Estos trámites se realizan en la Oficina de Registro Civil ubicada en el primer piso del Palacio
                      Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Municipalidad de Arequipa</h3>
              <p className="text-gray-300">Portal Oficial de la Municipalidad Provincial de Arequipa</p>
              <p className="text-gray-300 mt-2">© 2025 Todos los derechos reservados</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/tramites" className="text-gray-300 hover:text-white">
                    Guía de Trámites
                  </Link>
                </li>
                <li>
                  <Link href="/multas" className="text-gray-300 hover:text-white">
                    Sistema de Multas
                  </Link>
                </li>
                <li>
                  <Link href="/noticias" className="text-gray-300 hover:text-white">
                    Noticias
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-300">Plaza de Armas s/n, Arequipa</p>
              <p className="text-gray-300">(054) 38-2080</p>
              <p className="text-gray-300">info@muniarequipa.gob.pe</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
