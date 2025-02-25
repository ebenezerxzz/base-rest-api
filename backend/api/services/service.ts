import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/repositorie";
import { UserRegisters } from "../../src/app/models/models";
import { Request, Response } from 'express';

export class UserService {
    private userRepository = getCustomRepository(UserRepository);

    //Função/método assíncrona, como promise, tipada com o modelo UserRegisters
    async getAllRegisters(): Promise<UserRegisters[]> {
        return this.userRepository.find()
    }

    //Função/método de busca de registros por id
    async getRegisterById(id: any): Promise<UserRegisters | null> {
        return this.userRepository.findOne(id);
    }

    //Função/método de registro de usuários
    async registerUser(id: number, username: string, pass: string, email: string, phone: string): Promise<UserRegisters> {
        const user = new UserRegisters();

        user.username = username;
        user.pass = pass;
        user.email = email;
        user.phone = phone;

        return this.userRepository.save(user)
    }

    async deleteRegister(id: number): Promise<UserRegisters> {
        const entity = await this.userRepository.findOne({ id });
        
        if(entity){
            await this.userRepository.remove(entity)
        }
    }
}