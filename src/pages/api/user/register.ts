import { signUp } from "@/libs/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await signUp(req.body, (status: boolean) => {
      status
        ? res
            .status(200)
            .json({ status: true, statusCode: 200, message: "success" })
        : res
            .status(400)
            .json({ status: false, statusCode: 400, message: "failed" });
    });
  } else {
    res
      .status(405)
      .json({ status: false, statusCode: 405, message: "method not allowed" });
  }
};
export default handler;
