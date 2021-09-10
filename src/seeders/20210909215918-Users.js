"use strict";

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Matheus",
          lastName: "Domingos",
          password:
            "$2a$10$SZnYWwiirD6Bi41AVAdu/uXs3KXAgd7zyr2/yJ0f3ltYEm1WqP/ou",
          email: "myemail@email.com",
          userId: "EmKJH",
          createdAt: "2021-09-10T02:49:56.167Z",
          updatedAt: "2021-09-10T02:49:56.167Z",
        },
        {
          name: "Ana",
          lastName: "Domingos",
          password:
            "$2a$10$.eL5LCZFlKJ6NYXrz3oWMOZe0/XOE1qKOivTzBEVEKapqS8D7uIdu",
          email: "anaemail@email.com",
          userId: "q/aWh",
          createdAt: "2021-09-10T02:52:31.476Z",
          updatedAt: "2021-09-10T02:52:31.476Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
