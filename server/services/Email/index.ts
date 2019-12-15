import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { Func1 } from '../../types/genricTypes';

sg.setApiKey('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')


const sender = (data:MailData):Promise<any> => sg.send(data);

export interface ISendEmailParams{
  onSuccess: Func1<any, Promise<any>>
  onError: Func1<any, PromiseLike<any>>
}


export const sendEmail = (fns: ISendEmailParams)=> ({ email, apiKey }) => sender({
    from: 'noreply@starwars.com',
    to: email,
    subject: 'Your api-key',
    text: `Thanks for register. This is yout API-key: ${apiKey} Please don't share it. ;)!`
  })
    .then(fns.onSuccess)
    .catch(fns.onError)
