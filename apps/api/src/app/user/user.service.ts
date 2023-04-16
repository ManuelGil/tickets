import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

/**
 * UserService class.
 *
 * This service handles the records about users.
 */
@Injectable()
export class UserService {
  /**
   * This method instances the dependencies.
   *
   * @param {Repository<User>} userRepository - injects a `Repository` to users.
   */
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  /**
   * This method insert a new user.
   *
   * @param {CreateUserDto} createUserDto  - contains the user's information.
   * @returns {Promise<User>} - the new user.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  /**
   * This method gets all users.
   *
   * @returns {Promise<object>} - the result of search.
   */
  async findAll(): Promise<object> {
    const [result, total] = await this.userRepository.findAndCount({
      order: { createdAt: 'DESC' },
    });

    return {
      data: result,
      count: total,
    };
  }

  /**
   * This method return one user.
   *
   * @param {string} uuid - the user's id.
   * @returns {Promise<User>} - the user object.
   */
  async findOne(uuid: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ uuid });

    if (!user) throw new NotFoundException();

    return user;
  }

  /**
   * This method return one user by data.
   *
   * @param {object} data - contains the user's information.
   * @returns {Promise<User>} - the user object.
   */
  async findOneBy(data: object): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('users')
      .where({ ...data })
      .addSelect('users.password')
      .addSelect('users.roles')
      .getOne();

    if (!user) throw new NotFoundException();

    return user;
  }

  /**
   * This method updates a user.
   *
   * @param {string} uuid - the user's id.
   * @param {UpdateUserDto} updateCompanyDto - contains the user's information.
   * @returns {Promise<User>} - the updated user.
   */
  async update(uuid: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ uuid });

    if (!user) throw new NotFoundException();

    this.userRepository.merge(user, updateUserDto);

    return this.userRepository.save(user);
  }

  /**
   * This method deletes a user
   *
   * @param {string} uuid - the user's id.
   * @returns {Promise<object>} - the result of delete.
   */
  async remove(uuid: string): Promise<object> {
    return await this.userRepository.softDelete(uuid);
  }
}
