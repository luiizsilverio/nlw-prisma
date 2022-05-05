import { FeedbackRepository } from "../repositories/feedback-repository"

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  #repository: FeedbackRepository

  constructor(feedbackRepository: FeedbackRepository) {
    this.#repository = feedbackRepository
  }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    await this.#repository.create({
      type,
      comment,
      screenshot
    })
  }
}