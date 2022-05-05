import express from 'express'
import nodemailer from 'nodemailer'
import { prismaClient } from './prisma'
import { PrismaFeedBackRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackService } from './services/submit-feedback-service';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "945407d9922c4a",
    pass: "d1b67031f0cf2b"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const primsaFeedbackRepository = new PrismaFeedBackRepository()

  const submitFeedbackService = new SubmitFeedbackService(
    primsaFeedbackRepository
  )

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot
  })

  // await transport.sendMail({
  //   from: 'Equipe Luizdev <oi@equipeluizdev.com.br>',
  //   to: 'José da Silva <jose.da.silva@gmail.com>',
  //   subject: 'Novo Feedback',
  //   html: `
  //     <div style="font-family: sans-serif; font-size: 16px">
  //       <p>Tipo do feedback: ${type}</p>
  //       <p>Comentário: ${comment}</p>
  //     </div>
  //   `
  // })

  return res.status(201).send()
})
