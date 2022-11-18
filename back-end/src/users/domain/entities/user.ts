import { v4 } from "uuid";

type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor({ id, name, email, password }: UserProps) {
    this._id = id || v4();
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get id() {
    return this._id;
  }
  private set id(id: string) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  private set name(name: string) {
    this._name = name;
  }

  get email() {
    return this._email;
  }
  private set email(email: string) {
    this._email = email;
  }

  get password() {
    return this._password;
  }
  private set password(password: string) {
    this._password = password;
  }
  changePassword(newPassword: string) {
    this._password = newPassword;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}
