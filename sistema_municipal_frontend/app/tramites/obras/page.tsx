import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ObrasPage() {
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Obras y Construcción</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Trámites</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#habilitacion-urbana" className="text-[#6B0F1A] hover:underline font-medium">
                    Habilitación Urbana
                  </Link>
                </li>
                <li>
                  <Link href="#conformidad-obra" className="text-[#6B0F1A] hover:underline font-medium">
                    Conformidad de Obra
                  </Link>
                </li>
                <li>
                  <Link href="#certificado-parametros" className="text-[#6B0F1A] hover:underline font-medium">
                    Certificado de Parámetros
                  </Link>
                </li>
                <li>
                  <Link href="#declaratoria-fabrica" className="text-[#6B0F1A] hover:underline font-medium">
                    Declaratoria de Fábrica
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="habilitacion-urbana" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                    alt="Habilitación Urbana"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Habilitación Urbana</CardTitle>
                    <CardDescription className="mt-2">
                      Proceso de convertir un terreno rústico en urbano, mediante la ejecución de obras de
                      accesibilidad, distribución de agua, recolección de desagüe, energía e iluminación pública.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La habilitación urbana es el proceso que permite convertir un terreno rústico o eriazo en urbano,
                      mediante la ejecución de obras de accesibilidad, de distribución de agua y recolección de desagüe,
                      de distribución de energía e iluminación pública.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Modalidades</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Modalidad A: Aprobación automática con firma de profesionales.</li>
                      <li>Modalidad B: Aprobación de proyecto con evaluación por la Municipalidad.</li>
                      <li>Modalidad C: Aprobación de proyecto con evaluación previa por Revisores Urbanos.</li>
                      <li>Modalidad D: Aprobación de proyecto con evaluación previa por Comisión Técnica.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo Aproximado</h3>
                    <p>Desde S/. 350.00 hasta S/. 1,200.00, dependiendo de la modalidad y el área del terreno.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Subgerencia de Habilitaciones Urbanas ubicada en el tercer piso del
                      Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="conformidad-obra" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                    alt="Conformidad de Obra"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Conformidad de Obra</CardTitle>
                    <CardDescription className="mt-2">
                      Documento que certifica que la obra ejecutada corresponde a la licencia de edificación otorgada.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La conformidad de obra es el procedimiento por el cual se determina que la obra ejecutada
                      corresponde a los planos aprobados con la licencia de edificación. Se puede solicitar con o sin
                      variaciones respecto al proyecto original.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tipos</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Conformidad de Obra sin Variaciones</li>
                      <li>Conformidad de Obra con Variaciones</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo Aproximado</h3>
                    <p>
                      <strong>Sin variaciones:</strong> S/. 180.00
                    </p>
                    <p>
                      <strong>Con variaciones:</strong> S/. 250.00
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Subgerencia de Obras Privadas ubicada en el tercer piso del Palacio
                      Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="certificado-parametros" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1580820267682-426da823b514?q=80&w=2070&auto=format&fit=crop"
                    alt="Certificado de Parámetros"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Certificado de Parámetros Urbanísticos y Edificatorios</CardTitle>
                    <CardDescription className="mt-2">
                      Documento que especifica los parámetros de diseño que regulan el proceso de edificación sobre un
                      predio urbano.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      El Certificado de Parámetros Urbanísticos y Edificatorios es un documento que especifica los
                      parámetros de diseño que regulan el proceso de edificación sobre un predio urbano, y deberá
                      contener los siguientes aspectos:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Zonificación</li>
                      <li>Alineamiento de fachada</li>
                      <li>Usos de los suelos permisibles y compatibles</li>
                      <li>Coeficientes de edificación</li>
                      <li>Porcentaje mínimo de área libre</li>
                      <li>Altura máxima y mínima de edificación</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Vigencia</h3>
                    <p>El certificado tiene una vigencia de 36 meses.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo</h3>
                    <p>S/. 80.00</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Subgerencia de Planeamiento y Habilitación Urbana ubicada en el
                      tercer piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="declaratoria-fabrica" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop"
                    alt="Declaratoria de Fábrica"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Declaratoria de Fábrica</CardTitle>
                    <CardDescription className="mt-2">
                      Documento que acredita la existencia de una edificación y describe sus características y
                      especificaciones técnicas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Información Básica</h3>
                    <p>
                      La Declaratoria de Fábrica o de Edificación es el reconocimiento legal de la existencia de
                      cualquier tipo de obra sujeta a este Reglamento. Se realiza mediante una declaración del
                      propietario, que cumple las formalidades y trámites establecidos por la Ley.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Modalidades</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Declaratoria de Fábrica de Obra Nueva</li>
                      <li>Declaratoria de Fábrica de Obra Existente (Regularización)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Costo Aproximado</h3>
                    <p>
                      <strong>Obra Nueva:</strong> S/. 200.00
                    </p>
                    <p>
                      <strong>Regularización:</strong> S/. 350.00
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Dónde realizar este trámite?</h3>
                    <p>
                      Este trámite se realiza en la Subgerencia de Obras Privadas ubicada en el tercer piso del Palacio
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
