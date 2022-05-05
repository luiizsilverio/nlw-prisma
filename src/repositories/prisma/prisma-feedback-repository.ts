import { prismaClient } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedback-repository";

export class PrismaFeedBackRepository implements FeedbackRepository {
  async create (data: FeedbackCreateData) {
    await prismaClient.feedback.create({
      data: {
        type: data.type,
        comment: data.comment,
        screenshot: data.screenshot
      }
    })
  }
}