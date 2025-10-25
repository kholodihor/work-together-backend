import type { Request, Response } from 'express'

// Controller to handle user-related requests

export async function getUsers(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'List of users' })
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
