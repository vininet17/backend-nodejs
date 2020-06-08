import Knex from "knex";
export async function seed(knex: Knex) {
  return knex("items").insert([
    {
      title: "Coquetel Neon",
      image: "coquetel.jpg",
    },
  ]);
}