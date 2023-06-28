// user controller here

import { Request, Response } from "express";

const userList = [
  { id: 1, name: "Reshma", age: 1 },
  { id: 2, name: "Sourina", age: 2 },
  { id: 3, name: "Abhi", age: 3 },
  { id: 4, name: "Gayathri", age: 4 },
];

export const createUsers = async (request: Request, response: Response) => {
  response.json({ message: "create users" });
};

export const deleteUser = async (request: Request, response: Response) => {
  response.json({ message: "delete user" });
};

export const createUsersById = async (request: Request, response: Response) => {
  const userId = request.params;
  console.log(userId, "user id");
  const result = userList.filter((user) => user.id === Number(userId.id));
  response.json(result);
};
