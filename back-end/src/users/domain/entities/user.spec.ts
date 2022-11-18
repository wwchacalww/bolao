import { User } from "./user";
describe("User entity unit test", () => {
  it("should create a new user", async () => {
    const user = new User({
      name: "Fulando de Tal",
      email: "fulando@detal.com",
      password: "123456",
    });

    expect(user.name).toBe("Fulando de Tal");
    expect(user.email).toBe("fulando@detal.com");
    expect(user.id).toBeDefined();

    user.changePassword("asdqwe");
    expect(user.password).toBe("asdqwe");
  });
});
