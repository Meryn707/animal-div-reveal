
import { Animal } from '@/types/animal';

const API_BASE_URL = 'http://localhost:8080/api/animales';

export const animalService = {
  // Obtener todos los animales
  async getAllAnimals(): Promise<Animal[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los animales');
    }
    return response.json();
  },

  // Obtener animal por ID
  async getAnimalById(id: number): Promise<Animal> {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Animal no encontrado');
      }
      throw new Error('Error al obtener el animal');
    }
    return response.json();
  }
};
