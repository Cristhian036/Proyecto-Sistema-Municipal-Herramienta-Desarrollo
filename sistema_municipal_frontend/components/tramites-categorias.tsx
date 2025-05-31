import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Building, DollarSign, Users, Truck, ShoppingBag, Lightbulb, FileQuestion } from "lucide-react"

export default function TramitesCategorias() {
  const categorias = [
    {
      id: "licencias",
      title: "Licencias y Permisos",
      description: "Licencias de funcionamiento, edificación, eventos y anuncios publicitarios.",
      icon: <FileText className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/licencias",
    },
    {
      id: "tributos",
      title: "Tributos Municipales",
      description: "Impuesto predial, arbitrios, alcabala y patrimonio vehicular.",
      icon: <DollarSign className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/tributos",
    },
    {
      id: "registros",
      title: "Registros Civiles",
      description: "Partidas de nacimiento, matrimonio, defunción y otros registros.",
      icon: <Users className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/registros",
    },
    {
      id: "obras",
      title: "Obras y Construcción",
      description: "Permisos de construcción, habilitaciones urbanas y certificados.",
      icon: <Building className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/obras",
    },
    {
      id: "comercio",
      title: "Comercio y Publicidad",
      description: "Autorizaciones para comercio ambulatorio, ferias y publicidad.",
      icon: <ShoppingBag className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/comercio",
    },
    {
      id: "transporte",
      title: "Transporte y Vialidad",
      description: "Permisos de circulación, transporte público y señalización.",
      icon: <Truck className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/transporte",
    },
    {
      id: "servicios",
      title: "Servicios Públicos",
      description: "Servicios de agua, luz, limpieza y mantenimiento urbano.",
      icon: <Lightbulb className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/servicios",
    },
    {
      id: "otros",
      title: "Otros Trámites",
      description: "Otros trámites y servicios municipales.",
      icon: <FileQuestion className="h-10 w-10 text-[#6B0F1A]" />,
      url: "/tramites/otros",
    },
  ]

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorías de Trámites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorias.map((categoria) => (
          <Card key={categoria.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="mb-2">{categoria.icon}</div>
              <CardTitle className="text-lg">{categoria.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{categoria.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={categoria.url} className="text-[#6B0F1A] hover:underline font-medium text-sm">
                Ver trámites →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
