"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subimt_feedback_use_case_1 = require("./subimt-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new subimt_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenShot: "data:image/png;base64/test.jpg",
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it("should not be able to submit a feedback without type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "example comment",
            screenShot: "data:image/png;base64/test.jpg",
        })).rejects.toThrow();
    });
    it("should not be able to submit a feedback without comment", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenShot: "data:image/png;base64/test.jpg",
        })).rejects.toThrow();
    });
    it("should not be able to submit a feedback without an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenShot: "test.jpg",
        })).rejects.toThrow();
    });
});
