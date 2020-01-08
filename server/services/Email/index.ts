import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';

sg.setApiKey(process.env.SENDGRID_API_KEY)
export const sendEmail = (data:MailData)=>  sg.send(data)
   
