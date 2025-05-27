
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { animalService } from '@/services/animalService';
import { Animal } from '@/types/animal';

const Index = () => {
  const navigate = useNavigate();

  const { data: animales, isLoading, error } = useQuery({
    queryKey: ['animales'],
    queryFn: animalService.getAllAnimals,
  });

  const handleAnimalClick = (animal: Animal) => {
    navigate(`/animal-detail/${animal.idAnimal}`, { state: { animalData: animal } });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin text-green-600" />
          <span className="text-xl text-gray-600">Cargando animales...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error al cargar los datos</h2>
          <p className="text-gray-600">No se pudieron cargar los animales. Verifica que tu backend esté ejecutándose.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Reino Animal
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la fascinante diversidad del mundo animal. Haz clic en cualquier animal para conocer más detalles.
          </p>
        </div>

        {/* Grid de animales */}
        {animales && animales.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animales.map((animal) => (
              <Card 
                key={animal.idAnimal}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
                onClick={() => handleAnimalClick(animal)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={animal.imagenUrl}
                    alt={animal.nombre}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {animal.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 italic">
                    {animal.especie}
                  </p>
                  <p className="text-gray-700 line-clamp-2 mb-4">
                    {animal.descripcion.substring(0, 100)}...
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300"
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-600">No hay animales registrados</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">¡Conectado a tu backend!</h2>
              <p className="mb-6 opacity-90">
                Los datos se están cargando directamente desde tu API de Spring Boot.
              </p>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Total de animales: {animales?.length || 0}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
