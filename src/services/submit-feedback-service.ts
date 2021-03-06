import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbackRepository } from "../repositories/feedback-repository"

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  #repository: FeedbackRepository
  #mailAdapter: MailAdapter

  constructor(
    feedbackRepository: FeedbackRepository,
    mailAdapter: MailAdapter
  ) {
    this.#repository = feedbackRepository,
    this.#mailAdapter = mailAdapter
  }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    if (!type) {
      throw new Error('Type is required.')
    }

    if (!['BUG','IDEA', 'OTHER'].includes(type)) {
      throw new Error('Invalid type.')
    }

    if (!comment) {
      throw new Error('Comment is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.#repository.create({
      type,
      comment,
      screenshot
    })

    await this.#mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: `
        <div style="font-family: sans-serif; font-size: 16px;">
        <p>Tipo do feedback: ${type}</p>
        <p>Comentário: ${comment}</p>
        ${ screenshot ? "<img src='" + screenshot + "' />" : ""}
        </div>
      `
    })
  }
}