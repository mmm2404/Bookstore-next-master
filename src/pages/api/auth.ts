// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const validate = (email: string, password: string): boolean => {
  if (password.length < 6) {
    return false
  }
  return true
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ error: true, message: 'Only POST' })
  }

  const { email, password } = req.body

  const validatedInfo = validate(email, password)
  if (!validatedInfo) {
    res
      .status(400)
      .send({ error: true, message: 'Email or password are incorrect' })
  } else {
    res.status(200).send({ success: true, token: 'testToken' })
  }
}

