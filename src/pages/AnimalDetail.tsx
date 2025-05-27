
import { ArrowLeft, Calendar, Tag, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AnimalData {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  edad: string;
  descripcion: string;
  imagen: string;
}

const AnimalDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // En una aplicación real, estos datos vendrían de props, parámetros de URL, o una API
  // Por ahora uso datos de ejemplo
  const animalData: AnimalData = location.state?.animalData || {
    id: "1",
    nombre: "León Africano",
    especie: "Panthera leo",
    raza: "León Africano",
    edad: "5 años",
    descripcion: "El león africano es una subespecie de león que habita en África. Es el segundo felino más grande del mundo después del tigre. Los leones son animales sociales que viven en grupos llamados manadas. Son conocidos por su melena distintiva en los machos y su poderoso rugido que puede escucharse hasta 8 kilómetros de distancia.",
    imagen: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop"
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const handleAdopt = () => {
    navigate('/adoption-form', { 
      state: { 
        animalData: {
          idAnimal: animalData.id,
          nombre: animalData.nombre
        }
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="mb-6 text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Imagen del animal */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white p-4">
              <img
                src={animalData.imagen}
                alt={animalData.nombre}
                className="w-full h-[500px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Efecto de sombra decorativa */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl -z-10 opacity-30"></div>
          </div>

          {/* Información del animal */}
          <div className="space-y-6">
            {/* Título */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {animalData.nombre}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Cards de información */}
            <div className="grid gap-4">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Especie</p>
                      <p className="text-xl font-semibold text-gray-800">{animalData.especie}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Tag className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Raza</p>
                      <p className="text-xl font-semibold text-gray-800">{animalData.raza}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Edad</p>
                      <p className="text-xl font-semibold text-gray-800">{animalData.edad}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Descripción */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Descripción</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {animalData.descripcion}
                </p>
              </CardContent>
            </Card>

            {/* Botón de adopción */}
            <Button
              onClick={handleAdopt}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Heart className="mr-2 h-5 w-5" />
              ¡Quiero Adoptar a {animalData.nombre}!
            </Button>

            {/* Badge decorativo */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-4 py-2 text-sm">
                🐾 Información verificada
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
