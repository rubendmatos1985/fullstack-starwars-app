import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { Request } from 'express';

sg.setApiKey('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')



const sender = (data:MailData):Promise<any> => sg.send(data);


export const sendEmail = ({ email, apiKey }) => sender({
    from: 'noreply@starwars.com',
    to: email,
    subject: 'Your api-key',
    text: `Thanks for register. This is yout API-key: ${apiKey} Please don't share it. ;)!`
  })

