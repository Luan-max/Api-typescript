import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PotgresUserRepository } from "../../repositories/implementations/PotgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresTrapMailProvider = new PotgresUserRepository();

const createUseCase = new CreateUserUseCase(
  postgresTrapMailProvider,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUseCase);

export { createUseCase, createUserController };
