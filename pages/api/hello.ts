// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const rate = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=milkywayex&CMC_PRO_API_KEY=xxx")
  const data = await rate.json() as Data;
  res.status(200).json(data)
}
