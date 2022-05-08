"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbacksRepository, mailAdapter) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { type, comment, screenShot } = request;
        if (!type) {
            throw new Error("Type is required.");
        }
        if (!comment) {
            throw new Error("Comment is required.");
        }
        if (screenShot && !screenShot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format.");
        }
        await this.feedbacksRepository.create({
            type,
            comment,
            screenShot,
        });
        await this.mailAdapter.sendMail({
            subject: "Novo feedback",
            body: [
                `<div style="font-family> sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenShot ? `<p><img src="${screenShot}"></p> ` : null,
                `</div>`,
            ].join("\n"),
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
