import { Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/model/user.entity';

@Controller("/")
export class UserController {
  constructor(private readonly appService: UserService) {}

  
  @Get("/user")
  getUser() : User[] {
    return this.appService.findAll();
  }

  @Post( "/user/:name/:email/:age"  )
  createUser(@Param("name") name : string, @Param("email") email : string, @Param("age") age : number ) : User {
    
    
    const user = this.appService.create({
          name : name,
          email : email,
          age : age
    })

    return user;
  }

}
