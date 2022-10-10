import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

const port = 3000;

app.get("/secrets", async (req, res) => {
  const secret = await prisma.SecretModel.findMany();
  res.json(secret);
});

app.get("/secrets/:id", async (req, res) => {
  const { id } = req.params;

  const secret = await prisma.SecretModel.findUnique({
    where: { id: Number(id) },
  });
  res.send(secret);
});

app.post("/post_secret", async (req, res) => {
  const { id, name, secret } = req.body;

  await prisma.SecretModel.create({
    data: {
      id,
      name,
      secret,
    },
  });

  res.send("Secret created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//pscale connect baryga main --port 3309
//npx prisma db push
//pscale org switch gigachads
//npx prisma studio
//node app.js
