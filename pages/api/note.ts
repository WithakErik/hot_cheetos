// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TNote } from "../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TNote[]>
) {
  const { title, body } = req.body;
  switch (req.method) {
    case "GET":
      // Get notes from database
      console.log("GET");
      res.status(200);
      break;
    case "POST":
      // Add note to database
      console.log("POST", title, body);
      res.status(200);
      break;
    default:
      res.status(400);
  }
}
