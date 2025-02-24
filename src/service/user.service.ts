// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity'; // Vamos definir um User basicamente
import { CreateUserDto } from '../dto/user.dto'; // Um DTO para criação de usuários

@Injectable()
export class UserService {
  private users: User[] = []; // Usando um array em memória para armazenar os usuários

  // Método para criar um novo usuário
  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1, // Simulando auto-incremento de ID
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  // Método para buscar todos os usuários
  findAll(): User[] {
    return this.users;
  }

  // Método para buscar um usuário pelo ID
  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Método para atualizar um usuário
  update(id: number, updateUserDto: CreateUserDto): User | null{
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      const updatedUser = { ...this.users[userIndex], ...updateUserDto };
      this.users[userIndex] = updatedUser;
      return updatedUser;
    }
    return null; // Caso não encontre o usuário
  }

  // Método para remover um usuário
  remove(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}