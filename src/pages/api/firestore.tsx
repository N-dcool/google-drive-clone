import {app, storage, database} from "@/firebaseCongif";
import { NextApiRequest, NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Hello World' })
}

export default firestore;