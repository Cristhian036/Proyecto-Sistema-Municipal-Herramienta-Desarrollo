import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComercioPage() {
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Comercio y Publicidad</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Trámites</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#comercio-ambulatorio" className="text-[#6B0F1A] hover:underline font-medium">
                    Comercio Ambulatorio
                  </Link>
                </li>
                <li>
                  <Link href="#autorizacion-ferias" className="text-[#6B0F1A] hover:underline font-medium">
                    Autorización para Ferias
                  </Link>
                </li>
                <li>
                  <Link href="#autorizacion-mercados" className="text-[#6B0F1A] hover:underline font-medium">
                    Autorización en Mercados
                  </Link>
                </li>
                <li>
                  <Link href="#publicidad-exterior" className="text-[#6B0F1A] hover:underline font-medium">
                    Publicidad Exterior
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="comercio-ambulatorio" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop"
                    alt="Comercio Ambulatorio"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Comercio Ambulatorio</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización temporal para realizar actividades comerciales en espacios públicos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La autorización para comercio ambulatorio permite a las personas realizar actividades comerciales
                      de bienes y/o servicios en espacios públicos de forma temporal. Estas autorizaciones son
                      personales e intransferibles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del DNI.</li>
                      <li>Declaración jurada de no contar con antecedentes penales ni policiales.</li>
                      <li>Croquis de ubicación.</li>
                      <li>Dos fotografías tamaño carnet.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 80.00
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 6 meses (renovable)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Desarrollo Económico Local ubicada en el segundo piso
                      del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="autorizacion-ferias" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                    alt="Autorización para Ferias"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Autorización para Ferias</CardTitle>
                    <CardDescription className="mt-2">
                      Permiso para la realización de ferias comerciales, artesanales, gastronómicas o culturales en
                      espacios públicos o privados.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La autorización para ferias permite la realización de eventos comerciales temporales donde se
                      exhiben y comercializan productos de diversa índole. Pueden ser ferias artesanales, gastronómicas,
                      culturales, entre otras.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tipos de Ferias</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ferias Artesanales</li>
                      <li>Ferias Gastronómicas</li>
                      <li>Ferias Culturales</li>
                      <li>Ferias Comerciales</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Duración</h3>
                    <p>
                      <strong>Costo:</strong> Desde S/. 150.00 hasta S/. 500.00, dependiendo del tipo y tamaño de la
                      feria.
                    </p>
                    <p>
                      <strong>Duración máxima:</strong> 15 días calendario
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Desarrollo Económico Local ubicada en el segundo piso
                      del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="autorizacion-mercados" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1513125370-3460ebe3401b?q=80&w=2070&auto=format&fit=crop"
                    alt="Autorización en Mercados"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Autorización en Mercados</CardTitle>
                    <CardDescription className="mt-2">
                      Permiso para la conducción de puestos en mercados municipales.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La autorización para conducción de puestos en mercados municipales permite a las personas realizar
                      actividades comerciales en los mercados administrados por la municipalidad. Esta autorización
                      otorga el derecho de uso del espacio asignado.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del DNI.</li>
                      <li>Declaración jurada de no contar con otro puesto en mercados municipales.</li>
                      <li>Certificado de salud (para venta de alimentos).</li>
                      <li>Dos fotografías tamaño carnet.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 120.00
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 1 año (renovable)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Subgerencia de Comercialización y Mercados ubicada en el segundo
                      piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="publicidad-exterior" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop"
                    alt="Publicidad Exterior"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Publicidad Exterior</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización para la instalación de elementos publicitarios en espacios públicos o fachadas de
                      edificaciones.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La autorización para publicidad exterior permite la instalación de elementos publicitarios como
                      paneles, letreros, toldos, banderolas, entre otros, en espacios públicos o en fachadas de
                      edificaciones.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tipos de Elementos Publicitarios</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Letreros adosados a fachadas</li>
                      <li>Paneles monumentales</li>
                      <li>Toldos publicitarios</li>
                      <li>Banderolas</li>
                      <li>Anuncios luminosos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> Desde S/. 120.00 hasta S/. 350.00, dependiendo del tipo y tamaño del
                      elemento publicitario.
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 1 año (renovable)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Desarrollo Urbano ubicada en el segundo piso del Palacio
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
