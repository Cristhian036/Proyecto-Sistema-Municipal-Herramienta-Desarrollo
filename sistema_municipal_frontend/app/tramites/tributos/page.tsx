import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TributosPage() {
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tributos Municipales</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Tipos de Tributos</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#impuesto-predial" className="text-[#6B0F1A] hover:underline font-medium">
                    Impuesto Predial
                  </Link>
                </li>
                <li>
                  <Link href="#arbitrios" className="text-[#6B0F1A] hover:underline font-medium">
                    Arbitrios Municipales
                  </Link>
                </li>
                <li>
                  <Link href="#impuesto-alcabala" className="text-[#6B0F1A] hover:underline font-medium">
                    Impuesto de Alcabala
                  </Link>
                </li>
                <li>
                  <Link href="#impuesto-vehicular" className="text-[#6B0F1A] hover:underline font-medium">
                    Impuesto al Patrimonio Vehicular
                  </Link>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Enlaces Útiles</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.muniarequipa.gob.pe/tributos/calendario-tributario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B0F1A] hover:underline font-medium"
                  >
                    Calendario Tributario
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.muniarequipa.gob.pe/tributos/consulta-deuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B0F1A] hover:underline font-medium"
                  >
                    Consulta de Deuda
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.muniarequipa.gob.pe/tributos/preguntas-frecuentes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B0F1A] hover:underline font-medium"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card id="impuesto-predial" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                    alt="Impuesto Predial"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Impuesto Predial</CardTitle>
                    <CardDescription className="mt-2">
                      Tributo de periodicidad anual que grava el valor de los predios urbanos y rústicos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">¿Quiénes deben pagar?</h3>
                    <p>
                      Están obligados a pagar el Impuesto Predial las personas naturales o jurídicas que al 1 de enero
                      de cada año sean propietarias de predios gravados, independientemente del estado en que se
                      encuentren o el uso que se les dé.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tasas</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tramo de Autovalúo</TableHead>
                          <TableHead>Alícuota</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Hasta 15 UIT</TableCell>
                          <TableCell>0.2%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Más de 15 UIT hasta 60 UIT</TableCell>
                          <TableCell>0.6%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Más de 60 UIT</TableCell>
                          <TableCell>1.0%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-sm mt-2">UIT 2025: S/. 5,150.00</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Fechas de Pago</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Pago al contado:</strong> Hasta el último día hábil de febrero.
                      </li>
                      <li>
                        <strong>Pago fraccionado:</strong> Hasta el último día hábil de los meses de febrero, mayo,
                        agosto y noviembre.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Gerencia de Administración Tributaria ubicada en el primer piso del
                    Palacio Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tributos/impuesto-predial"
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

            <Card id="arbitrios" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1577191087998-05b2214fa5a1?q=80&w=2070&auto=format&fit=crop"
                    alt="Arbitrios Municipales"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Arbitrios Municipales</CardTitle>
                    <CardDescription className="mt-2">
                      Tasas que se pagan por la prestación o mantenimiento de servicios públicos como limpieza pública,
                      parques y jardines, y seguridad ciudadana.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Tipos de Arbitrios</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Limpieza Pública:</strong> Comprende el servicio de recolección domiciliaria de residuos
                        sólidos, barrido de calles, transporte y disposición final.
                      </li>
                      <li>
                        <strong>Parques y Jardines:</strong> Comprende el servicio de implementación, recuperación,
                        mantenimiento y mejoras de parques y jardines de uso público.
                      </li>
                      <li>
                        <strong>Seguridad Ciudadana:</strong> Comprende el servicio de vigilancia pública, prevención
                        del delito y atención de emergencias.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Fechas de Pago</h3>
                    <p>Los arbitrios municipales se pagan trimestralmente:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Primer trimestre: Hasta el último día hábil de febrero</li>
                      <li>Segundo trimestre: Hasta el último día hábil de mayo</li>
                      <li>Tercer trimestre: Hasta el último día hábil de agosto</li>
                      <li>Cuarto trimestre: Hasta el último día hábil de noviembre</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Gerencia de Administración Tributaria ubicada en el primer piso del
                    Palacio Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tributos/arbitrios-municipales"
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

            <Card id="impuesto-alcabala" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop"
                    alt="Impuesto de Alcabala"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Impuesto de Alcabala</CardTitle>
                    <CardDescription className="mt-2">
                      Impuesto que grava las transferencias de propiedad de bienes inmuebles urbanos o rústicos a título
                      oneroso o gratuito.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Información Básica</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>¿Quién paga?</strong> El comprador o adquirente del inmueble.
                      </li>
                      <li>
                        <strong>Base imponible:</strong> El valor de transferencia, no menor al valor de autovalúo.
                      </li>
                      <li>
                        <strong>Tasa:</strong> 3% del valor de transferencia.
                      </li>
                      <li>
                        <strong>Inafectación:</strong> Las primeras 10 UIT del valor del inmueble están inafectas.
                      </li>
                      <li>
                        <strong>UIT 2025:</strong> S/. 5,150.00
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Plazo y Requisitos</h3>
                    <p>
                      <strong>Plazo de pago:</strong> Hasta el último día hábil del mes siguiente de efectuada la
                      transferencia.
                    </p>
                    <p className="mt-4 mb-2">
                      <strong>Requisitos básicos:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DNI del comprador.</li>
                      <li>Documento que acredite la transferencia.</li>
                      <li>Autovalúo del año en que se produjo la transferencia.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Gerencia de Administración Tributaria ubicada en el primer piso del
                    Palacio Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tributos/impuesto-alcabala"
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

            <Card id="impuesto-vehicular" className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1581112877085-c0818e1b4cfd?q=80&w=2070&auto=format&fit=crop"
                    alt="Impuesto al Patrimonio Vehicular"
                    className="rounded-lg w-full md:w-1/3 object-cover h-48"
                  />
                  <div>
                    <CardTitle>Impuesto al Patrimonio Vehicular</CardTitle>
                    <CardDescription className="mt-2">
                      Impuesto que grava la propiedad de vehículos automóviles, camionetas, station wagon, camiones,
                      buses y ómnibus con una antigüedad no mayor de tres años.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Información Básica</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>¿Quién paga?</strong> Propietarios de vehículos con antigüedad no mayor a 3 años.
                      </li>
                      <li>
                        <strong>Base imponible:</strong> Valor original de adquisición, importación o ingreso al
                        patrimonio.
                      </li>
                      <li>
                        <strong>Tasa:</strong> 1% sobre el valor del vehículo.
                      </li>
                      <li>
                        <strong>Monto mínimo:</strong> 1.5% de la UIT vigente.
                      </li>
                      <li>
                        <strong>UIT 2025:</strong> S/. 5,150.00
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Forma de Pago y Requisitos</h3>
                    <p>
                      <strong>Forma de pago:</strong> Al contado hasta el último día hábil de febrero, o en forma
                      fraccionada hasta en cuatro cuotas trimestrales.
                    </p>
                    <p className="mt-4 mb-2">
                      <strong>Requisitos básicos:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DNI del propietario.</li>
                      <li>Tarjeta de propiedad del vehículo.</li>
                      <li>Comprobante de pago o factura de adquisición.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">¿Dónde realizar este trámite?</h3>
                  <p className="mb-4">
                    Este trámite se realiza en la Gerencia de Administración Tributaria ubicada en el primer piso del
                    Palacio Municipal (Plaza de Armas s/n, Arequipa).
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.muniarequipa.gob.pe/tributos/impuesto-vehicular"
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
