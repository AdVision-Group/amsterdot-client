// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { CRAWABLE, NOT_CRAWABLE } from "../../config/robots.config"

export default function Robots(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const robots =
    process.env.ENVIRONMENT === "production" ? CRAWABLE : NOT_CRAWABLE

  res.status(200).send(robots)
}
