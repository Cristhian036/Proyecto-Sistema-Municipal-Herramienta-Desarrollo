import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LicenciasPage() {
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Licencias y Permisos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Licencias</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#licencia-funcionamiento" className="text-[#6B0F1A] hover:underline font-medium">
                    Licencia de Funcionamiento
                  </Link>
                </li>
                <li>
                  <Link href="#licencia-edificacion" className="text-[#6B0F1A] hover:underline font-medium">
                    Licencia de Edificación
                  </Link>
                </li>
                <li>
                  <Link href="#licencia-eventos" className="text-[#6B0F1A] hover:underline font-medium">
                    Licencia para Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#licencia-anuncios" className="text-[#6B0F1A] hover:underline font-medium">
                    Licencia para Anuncios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="licencia-funcionamiento" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=2070&auto=format&fit=crop"
                    alt="Licencia de Funcionamiento"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Licencia de Funcionamiento</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización que otorga la municipalidad para el desarrollo de actividades económicas en un
                      establecimiento determinado.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="requisitos">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
                    <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
                    <TabsTrigger value="costos">Costos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="requisitos" className="pt-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Solicitud de Licencia de Funcionamiento, con carácter de declaración jurada.</li>
                      <li>Declaración Jurada de Observancia de Condiciones de Seguridad.</li>
                      <li>Número de RUC y DNI o Carné de Extranjería del solicitante.</li>
                      <li>Copia simple de la vigencia de poder del representante legal (personas jurídicas).</li>
                      <li>Certificado de Seguridad en Edificaciones (según el nivel de riesgo).</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="procedimiento" className="pt-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Presentar la solicitud en la Plataforma de Atención al Ciudadano.</li>
                      <li>Pagar la tasa correspondiente según el tipo de licencia.</li>
                      <li>
                        Esperar la evaluación de la solicitud (4 días hábiles para riesgo bajo/medio, 10 días para
                        riesgo alto).
                      </li>
                      <li>Recibir la resolución de licencia o las observaciones correspondientes.</li>
                      <li>En caso de observaciones, subsanarlas en el plazo establecido.</li>
                    </ol>
                  </TabsContent>
                  <TabsContent value="costos" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">Licencia de Funcionamiento de Riesgo Bajo</h3>
                        <p>S/. 180.50</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Licencia de Funcionamiento de Riesgo Medio</h3>
                        <p>S/. 210.30</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Licencia de Funcionamiento de Riesgo Alto</h3>
                        <p>S/. 350.80</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Licencia de Funcionamiento de Riesgo Muy Alto</h3>
                        <p>S/. 450.20</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Puede realizar este trámite de manera presencial en la Plataforma de Atención al Ciudadano ubicada
                    en el primer piso del Palacio Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tramites/licencias-funcionamiento"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#6B0F1A] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Más información en la página oficial
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="licencia-edificacion" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Licencia de Edificación"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Licencia de Edificación</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización que otorga la municipalidad para ejecutar una obra de edificación nueva o de
                      ampliación, remodelación, etc.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="modalidades">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="modalidades">Modalidades</TabsTrigger>
                    <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
                    <TabsTrigger value="costos">Costos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="modalidades" className="pt-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Modalidad A:</strong> Aprobación automática con firma de profesionales. Para viviendas
                        unifamiliares de hasta 120 m² y ampliaciones menores.
                      </li>
                      <li>
                        <strong>Modalidad B:</strong> Aprobación de proyecto con evaluación por la Municipalidad. Para
                        viviendas multifamiliares de hasta 5 pisos.
                      </li>
                      <li>
                        <strong>Modalidad C:</strong> Aprobación de proyecto con evaluación previa por Revisores Urbanos
                        o Comisión Técnica. Para edificaciones de uso mixto, comercio e industria.
                      </li>
                      <li>
                        <strong>Modalidad D:</strong> Aprobación de proyecto con evaluación previa por Comisión Técnica.
                        Para edificaciones de gran envergadura.
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="requisitos" className="pt-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Formulario Único de Edificación (FUE) debidamente suscrito.</li>
                      <li>Documentación que acredite la propiedad del inmueble.</li>
                      <li>Planos de ubicación, arquitectura, estructuras, instalaciones sanitarias y eléctricas.</li>
                      <li>Memoria descriptiva por especialidad.</li>
                      <li>Estudio de mecánica de suelos (según el caso).</li>
                      <li>Certificado de Parámetros Urbanísticos y Edificatorios.</li>
                      <li>Pago de la tasa municipal correspondiente.</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="costos" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">Modalidad A</h3>
                        <p>S/. 120.50</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Modalidad B</h3>
                        <p>S/. 350.80</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Modalidad C</h3>
                        <p>S/. 580.30</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Modalidad D</h3>
                        <p>S/. 750.20</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Subgerencia de Obras Privadas ubicada en el tercer piso del Palacio
                    Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tramites/licencias-edificacion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#6B0F1A] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Más información en la página oficial
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="licencia-eventos" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                    alt="Licencia para Eventos"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Licencia para Eventos</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización temporal para la realización de eventos sociales, culturales, deportivos o de
                      entretenimiento.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Requisitos Básicos</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del DNI del solicitante.</li>
                      <li>Copia de contrato de alquiler del local (si aplica).</li>
                      <li>Plan de seguridad del evento.</li>
                      <li>Autorización de SUCAMEC (si se utilizarán fuegos artificiales).</li>
                      <li>Autorización de la Policía Nacional (según el caso).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Costos por Tipo de Evento</h3>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium">Eventos sociales (bodas, cumpleaños, etc.)</h4>
                        <p>S/. 150.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Eventos culturales</h4>
                        <p>S/. 120.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Eventos deportivos</h4>
                        <p>S/. 180.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Conciertos y espectáculos masivos</h4>
                        <p>S/. 350.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Importante</h3>
                  <p className="mb-4">
                    La solicitud debe presentarse con al menos 15 días de anticipación a la fecha del evento. Para
                    eventos masivos (más de 3,000 personas) se requiere presentar la solicitud con 30 días de
                    anticipación.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tramites/autorizacion-eventos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#6B0F1A] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Más información en la página oficial
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="licencia-anuncios" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop"
                    alt="Licencia para Anuncios"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Licencia para Anuncios</CardTitle>
                    <CardDescription className="mt-2">
                      Autorización para la instalación de elementos de publicidad exterior en la vía pública o en
                      propiedad privada.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Tipos de Anuncios</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Anuncios adosados a fachadas</li>
                      <li>Anuncios luminosos</li>
                      <li>Paneles monumentales</li>
                      <li>Toldos publicitarios</li>
                      <li>Anuncios en vía pública</li>
                    </ul>

                    <h3 className="font-semibold mb-4 mt-6">Requisitos Básicos</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Solicitud dirigida al alcalde.</li>
                      <li>Copia del DNI del solicitante.</li>
                      <li>Copia de la licencia de funcionamiento (si aplica).</li>
                      <li>Diseño del anuncio (dimensiones, materiales, colores).</li>
                      <li>Plano de ubicación con coordenadas UTM.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Costos por Tipo de Anuncio</h3>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium">Anuncios simples (hasta 1 m²)</h4>
                        <p>S/. 120.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Anuncios luminosos (hasta 2 m²)</h4>
                        <p>S/. 180.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Paneles monumentales</h4>
                        <p>S/. 350.00</p>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-4 mt-6">Vigencia</h3>
                    <p>
                      La autorización para anuncios tiene una vigencia de un año, debiendo renovarse 30 días antes de su
                      vencimiento.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Gerencia de Desarrollo Urbano ubicada en el segundo piso del Palacio
                    Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tramites/autorizacion-anuncios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#6B0F1A] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Más información en la página oficial
                    </a>
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
