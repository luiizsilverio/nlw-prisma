import { SubmitFeedbackService } from "./submit-feedback-service"

const submitFeedback = new SubmitFeedbackService(
  { create: async () => {} },
  { sendMail: async () => {} }
)

describe('Submit feedback', () => {

  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'my comment',
      screenshot: 'data:image/png;base64,KKK'
    })).resolves.not.toThrow()
  })

  it('should not be able to submit feedback with invalid type', async () => {
    await expect(submitFeedback.execute({
      type: 'XXX',
      comment: 'my comment',
      screenshot: 'data:image/png;base64,KKK'
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'my comment',
      screenshot: 'data:image/png;base64,KKK'
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'IDEA',
      comment: '',
      screenshot: 'data:image/png;base64,KKK'
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback with invalid screenshot format', async () => {
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: 'my comment',
      screenshot: 'foto.jpg'
    })).rejects.toThrow()
  })
})
