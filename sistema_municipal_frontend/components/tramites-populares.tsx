import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function TramitesPopulares() {
  const tramitesPopulares = [
    {
      id: "licencia-funcionamiento",
      title: "Licencia de Funcionamiento",
      description: "Autorización para el desarrollo de actividades económicas en un establecimiento.",
      url: "/tramites/licencias#licencia-funcionamiento",
    },
    {
      id: "impuesto-predial",
      title: "Impuesto Predial",
      description: "Tributo anual que grava el valor de los predios urbanos y rústicos.",
      url: "/tramites/tributos#impuesto-predial",
    },
    {
      id: "partida-nacimiento",
      title: "Partida de Nacimiento",
      description: "Documento que certifica el nacimiento de una persona.",
      url: "/tramites/registros#partida-nacimiento",
    },
    {
      id: "licencia-edificacion",
      title: "Licencia de Edificación",
      description: "Autorización para ejecutar una obra de edificación nueva o modificación.",
      url: "/tramites/licencias#licencia-edificacion",
    },
  ]

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trámites más solicitados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tramitesPopulares.map((tramite) => (
          <Card key={tramite.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{tramite.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tramite.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={tramite.url} className="text-[#6B0F1A] hover:underline font-medium text-sm flex items-center">
                Ver detalles
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
