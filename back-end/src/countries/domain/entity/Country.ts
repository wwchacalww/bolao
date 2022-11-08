import { v4 } from "uuid";

type CountryProps = {
  id?: string;
  name: string;
  slug: string;
  group: string;
  flag: string;
};

export class Country {
  private _id?: string;
  private _name: string;
  private _slug: string;
  private _group: string;
  private _flag: string;

  constructor({ id, name, slug, group, flag }: CountryProps) {
    this._id = id || v4();
    this._name = name;
    this._slug = slug;
    this._group = group;
    this._flag = flag;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get slug() {
    return this._slug;
  }

  get group() {
    return this._group;
  }

  get flag() {
    return this._flag;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      slug: this._slug,
      group: this._group,
      flag: this._flag,
    };
  }
}
