import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  // Datos de ejemplo para mostrar cómo funcionaría la navegación
  const animalesEjemplo = [
    {
      id: "1",
      nombre: "León Africano",
      especie: "Panthera leo",
      raza: "León Africano",
      edad: "5 años",
      descripcion: "El león africano es una subespecie de león que habita en África. Es el segundo felino más grande del mundo después del tigre. Los leones son animales sociales que viven en grupos llamados manadas. Son conocidos por su melena distintiva en los machos y su poderoso rugido que puede escucharse hasta 8 kilómetros de distancia.",
      imagen: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop"
    },
    {
      id: "2",
      nombre: "Tigre de Bengala",
      especie: "Panthera tigris",
      raza: "Tigre de Bengala",
      edad: "3 años",
      descripcion: "El tigre de Bengala es una subespecie de tigre que se encuentra principalmente en India y Bangladesh. Es conocido por sus distintivas rayas negras sobre un pelaje naranja brillante. Son cazadores solitarios y excelentes nadadores.",
      imagen: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      nombre: "Elefante Africano",
      especie: "Loxodonta africana",
      raza: "Elefante Africano",
      edad: "12 años",
      descripcion: "El elefante africano es el animal terrestre más grande del mundo. Son conocidos por su inteligencia, memoria excepcional y estructuras sociales complejas. Juegan un papel crucial en sus ecosistemas como 'ingenieros del paisaje'.",
      imagen: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop"
    }
  ];

  const handleAnimalClick = (animal: any) => {
    navigate('/animal-detail', { state: { animalData: animal } });
  };

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animalesEjemplo.map((animal) => (
            <Card 
              key={animal.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
              onClick={() => handleAnimalClick(animal)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={animal.imagen}
                  alt={animal.nombre}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">¿Quieres agregar más animales?</h2>
              <p className="mb-6 opacity-90">
                Esta es una demostración de cómo se vería tu página de animales. ¡Personalízala con tus propios datos!
              </p>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Personalizar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
