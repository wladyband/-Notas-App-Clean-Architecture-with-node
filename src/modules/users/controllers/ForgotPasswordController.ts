import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

    /*await sendForgotPasswordEmail.execute({
      email,
    });*/

    const token = await sendForgotPasswordEmail.execute({
      email,
    });

    return response.json({ token });
  }
}
