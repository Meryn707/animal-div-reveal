
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Heart, Mail, Phone, User } from 'lucide-react';

interface AnimalData {
  idAnimal: string;
  nombre: string;
}

const AdoptionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const animalData: AnimalData = location.state?.animalData || { idAnimal: "1", nombre: "Animal" };

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías los datos a tu backend
    console.log('Datos del formulario:', {
      idAnimal: animalData.idAnimal,
      ...formData
    });
    // Por ahora solo mostramos un alert
    alert('¡Solicitud de adopción enviada correctamente!');
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navegación */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PawHope
              </span>
            </div>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="mb-6 text-purple-700 hover:text-purple-900 hover:bg-purple-100 transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <div className="max-w-2xl mx-auto">
          {/* Header del formulario */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Formulario de Adopción
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Completa los datos para solicitar la adopción de{" "}
              <span className="font-semibold text-purple-700">{animalData.nombre}</span>.
            </p>
          </div>

          {/* Formulario */}
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="text-center text-2xl font-bold">
                Tu Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="idAnimal" value={animalData.idAnimal} />

                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-lg font-medium text-gray-700 flex items-center">
                    <User className="h-5 w-5 mr-2 text-purple-600" />
                    Nombre y Apellidos
                  </Label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors"
                    placeholder="Introduce tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-medium text-gray-700 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-600" />
                    Correo Electrónico
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-lg font-medium text-gray-700 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-purple-600" />
                    Número de Teléfono
                  </Label>
                  <Input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors"
                    placeholder="+34 123 456 789"
                  />
                </div>

                {/* Motivo */}
                <div className="space-y-2">
                  <Label htmlFor="motivo" className="text-lg font-medium text-gray-700 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-purple-600" />
                    ¿Por qué te ha gustado este animal?
                  </Label>
                  <Textarea
                    id="motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors resize-none"
                    placeholder="Cuéntanos qué te ha enamorado de este animal..."
                  />
                </div>

                {/* Botón de envío */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Enviar Solicitud de Adopción
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Mensaje de información */}
          <Card className="mt-6 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-6 text-center">
              <p className="text-gray-600">
                📋 Una vez enviada tu solicitud, nos pondremos en contacto contigo en un plazo de 24-48 horas para coordinar una cita y conocer mejor tus intenciones de adopción.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;
