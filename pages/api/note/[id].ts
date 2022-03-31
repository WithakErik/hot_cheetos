// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TNote } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TNote[]>
) {
  const { id } = req.query;
  const { title, body } = req.body;
  switch (req.method) {
    case "DELETE":
      // Delete note from database
      console.log("DELETE", id);
      res.status(200);
      break;
    case "PUT":
      // Update note in database
      console.log("PUT", id, title, body);
      res.status(200);
      break;
    default:
      res.status(400);
  }
}
