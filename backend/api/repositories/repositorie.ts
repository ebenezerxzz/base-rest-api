import {EntityRepository, Repository } from 'typeorm';
import { UserRegisters } from '../../src/app/models/models';

@EntityRepository(UserRegisters)
export class UserRepository extends Repository<UserRegisters> { 
    async findByEmail(email: string): Promise<UserRegisters | null> {
        return this.findOne({where: { email } });
    }
}