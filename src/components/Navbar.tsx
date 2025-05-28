
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Filter, User, ChevronDown, Heart, LogIn, UserPlus, LogOut, Settings } from 'lucide-react';

interface NavbarProps {
  onFilterChange?: (filters: any) => void;
}

const Navbar = ({ onFilterChange }: NavbarProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Por ahora hardcodeado, más tarde se conectará con auth

  const handleFilterSelect = (filterType: string, value: string) => {
    console.log('Filter selected:', filterType, value);
    // Aquí implementarías la lógica de filtrado
    if (onFilterChange) {
      onFilterChange({ [filterType]: value });
    }
  };

  const handleLogin = () => {
    // Por ahora solo simula login
    setIsLoggedIn(true);
    console.log('Login clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('Logout clicked');
  };

  const handleMyAnimals = () => {
    console.log('My animals clicked');
    // navigate('/mis-animales');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <Heart className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Reino Animal
            </span>
          </div>

          {/* Dropdowns */}
          <div className="flex items-center space-x-4">
            {/* Dropdown de Filtros */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg">
                <div className="px-2 py-1.5 text-sm font-semibold text-gray-900">
                  Filtrar por Especie
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('especie', 'felino')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  🐱 Felinos
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('especie', 'canino')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  🐶 Caninos
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('especie', 'ave')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  🦅 Aves
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm font-semibold text-gray-900">
                  Filtrar por Edad
                </div>
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('edad', 'joven')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  Joven (0-2 años)
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('edad', 'adulto')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  Adulto (3-7 años)
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('edad', 'senior')}
                  className="cursor-pointer hover:bg-green-50"
                >
                  Senior (8+ años)
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => handleFilterSelect('reset', 'all')}
                  className="cursor-pointer hover:bg-gray-50 text-gray-600"
                >
                  Limpiar filtros
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dropdown de Cuenta */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                >
                  <User className="h-4 w-4" />
                  <span>Cuenta</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 bg-white shadow-lg">
                {!isLoggedIn ? (
                  <>
                    <DropdownMenuItem 
                      onClick={handleLogin}
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Iniciar Sesión
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={handleRegister}
                      className="cursor-pointer hover:bg-green-50"
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Registrarse
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <div className="px-2 py-1.5 text-sm font-semibold text-gray-900 border-b">
                      👋 ¡Hola, Usuario!
                    </div>
                    <DropdownMenuItem 
                      onClick={handleMyAnimals}
                      className="cursor-pointer hover:bg-green-50"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Mis Animales
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="cursor-pointer hover:bg-red-50 text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
