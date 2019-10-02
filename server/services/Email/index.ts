import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { Request } from 'express';
import { Func1 } from '../../types/genricTypes';

sg.setApiKey('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')


const sender = (data:MailData):Promise<any> => sg.send(data);


export const sendEmail = (ifSuccess:Func1<any, Promise<any>> ,ifError:Func1<any, PromiseLike<any>> )=> ({ email, apiKey }) => sender({
    from: 'noreply@starwars.com',
    to: email,
    subject: 'Your api-key',
    text: `Thanks for register. This is yout API-key: ${apiKey} Please don't share it. ;)!`
  })
    .then(ifSuccess)
    .catch(ifError)
