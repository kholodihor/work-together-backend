import type { Request, Response } from 'express'

export function getUsers(req: Request, res: Response) {
  res.status(200).json({ message: 'List of users' })
}
