import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedBackRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackService } from './services/submit-feedback-service';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const primsaFeedbackRepository = new PrismaFeedBackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackService = new SubmitFeedbackService(
    primsaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
