import { OK, StatusCodes } from 'http-status-codes'
import { Router, Request, Response, NextFunction  } from 'express'



const usersRoute = Router()

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
      const users = [{ userName: 'Matheus'}]
      res.status(OK).send({users})
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  res.status(200).send({ uuid })
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {  
        const newUser = req.body
        res.status(StatusCodes.CREATED).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body

  modifiedUser.uuid = uuid

  res.status(StatusCodes.OK).send({uuid})
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK)
})

export default usersRoute