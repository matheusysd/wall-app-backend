"use strict";

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "A title",
          body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          author: "Matheus Domingos",
          authorId: "LQ.Bb",
          createdAt: "2021-09-09T22:06:24.357Z",
          updatedAt: "2021-09-09T22:06:24.357Z",
        },
        {
          title: "Another title",
          body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          author: "Matheus Domingos",
          authorId: "LQ.Bb",
          createdAt: "2021-09-09T22:06:24.357Z",
          updatedAt: "2021-09-09T22:06:24.357Z",
        },
        {
          title: "Other title",
          body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          author: "Ana Domingos",
          authorId: "q/aWh",
          createdAt: "2021-09-09T22:06:24.357Z",
          updatedAt: "2021-09-09T22:06:24.357Z",
        },
        {
          title: "A title",
          body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          author: "Ana Domingos",
          authorId: "q/aWh",
          createdAt: "2021-09-09T22:06:24.357Z",
          updatedAt: "2021-09-09T22:06:24.357Z",
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
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
