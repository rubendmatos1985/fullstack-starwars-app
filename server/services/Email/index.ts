import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { Func1 } from '../../types/genricTypes';
sg.setApiKey(process.env.SENDGRID_API_KEY)


const sender = (data:MailData):Promise<any> => sg.send(data);

export interface ISendEmailParams{
  onSuccess: Func1<any, Promise<any>>
  onError: Func1<any, PromiseLike<any>>
}


export const sendEmail = (to:string, message: string)=>  sender({
    from: 'noreply@starwars.com',
    to,
    subject: 'Your api-key',
    text: message
  })
   
