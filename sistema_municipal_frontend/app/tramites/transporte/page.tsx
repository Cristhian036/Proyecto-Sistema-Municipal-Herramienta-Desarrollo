import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransportePage() {
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Transporte y Vialidad</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Trámites</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#tarjeta-circulacion" className="text-[#6B0F1A] hover:underline font-medium">
                    Tarjeta de Circulación
                  </Link>
                </li>
                <li>
                  <Link href="#autorizacion-paraderos" className="text-[#6B0F1A] hover:underline font-medium">
                    Autorización de Paraderos
                  </Link>
                </li>
                <li>
                  <Link href="#permiso-operacion" className="text-[#6B0F1A] hover:underline font-medium">
                    Permiso de Operación
                  </Link>
                </li>
                <li>
                  <Link href="#licencia-conducir" className="text-[#6B0F1A] hover:underline font-medium">
                    Licencia de Conducir Municipal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="tarjeta-circulacion" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                    alt="Tarjeta de Circulación"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Tarjeta de Circulación</CardTitle>
                    <CardDescription className="mt-2">
                      Documento que autoriza la circulación de vehículos de servicio público de transporte de pasajeros.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La Tarjeta de Circulación es el documento que autoriza la circulación de vehículos de servicio
                      público de transporte de pasajeros en las rutas autorizadas por la municipalidad. Es emitida a
                      favor de las empresas de transporte que cuentan con permiso de operación vigente.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del permiso de operación vigente.</li>
                      <li>Copia de la tarjeta de propiedad del vehículo.</li>
                      <li>Copia del SOAT vigente.</li>
                      <li>Certificado de inspección técnica vehicular vigente.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 50.00 por vehículo
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 1 año
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Transporte Urbano y Circulación Vial ubicada en el
                      segundo piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="autorizacion-paraderos" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                    alt="Autorización de Paraderos"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Autorización de Paraderos</CardTitle>
                    <CardDescription className="mt-2">
                      Permiso para el establecimiento de paraderos de transporte público en la vía pública.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La autorización de paraderos permite a las empresas de transporte público contar con espacios
                      designados para el embarque y desembarque de pasajeros en la vía pública. Estos paraderos son
                      establecidos por la municipalidad considerando aspectos de seguridad vial y fluidez del tránsito.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del permiso de operación vigente.</li>
                      <li>Propuesta de ubicación del paradero.</li>
                      <li>Estudio de impacto vial (para paraderos principales).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 150.00 por paradero
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 1 año (renovable)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Transporte Urbano y Circulación Vial ubicada en el
                      segundo piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="permiso-operacion" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
                    alt="Permiso de Operación"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Permiso de Operación</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización que permite a una empresa brindar el servicio de transporte público de pasajeros en
                      una ruta determinada.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      El Permiso de Operación es la autorización que otorga la municipalidad a una empresa de transporte
                      para que pueda brindar el servicio de transporte público de pasajeros en una ruta determinada.
                      Este permiso establece las condiciones de operación, frecuencias, flota vehicular y otros aspectos
                      relacionados con el servicio.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia de la escritura pública de constitución de la empresa.</li>
                      <li>Padrón de flota vehicular.</li>
                      <li>Propuesta de ruta y frecuencias.</li>
                      <li>Estudio técnico de factibilidad.</li>
                      <li>Póliza de seguro de responsabilidad civil.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 500.00
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 5 años (renovable)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Transporte Urbano y Circulación Vial ubicada en el
                      segundo piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="licencia-conducir" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop"
                    alt="Licencia de Conducir Municipal"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Licencia de Conducir Municipal</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización para conducir vehículos menores como mototaxis dentro de la jurisdicción municipal.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La Licencia de Conducir Municipal es la autorización que otorga la municipalidad para conducir
                      vehículos menores como mototaxis dentro de su jurisdicción. Esta licencia es complementaria a la
                      licencia de conducir emitida por el Ministerio de Transportes y Comunicaciones.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requisitos Principales</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del DNI.</li>
                      <li>Certificado de salud para licencia de conducir.</li>
                      <li>Certificado de capacitación en seguridad vial.</li>
                      <li>Dos fotografías tamaño carnet.</li>
                      <li>Pago de la tasa municipal correspondiente.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo y Vigencia</h3>
                    <p>
                      <strong>Costo:</strong> S/. 80.00
                    </p>
                    <p>
                      <strong>Vigencia:</strong> 3 años
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Gerencia de Transporte Urbano y Circulación Vial ubicada en el
                      segundo piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
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
