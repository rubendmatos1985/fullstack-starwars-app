import sg  from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';

sg.setApiKey(process.env.SENDGRID_API_KEY)
export const sendEmail = (data:MailData)=>  sg.send(data)
   
export namespace EmailServiceProvider{
    const from = "noreply@starwars_api_clone.com";
    export function SendApiKeyEmail(apiKey: string, to: string):Promise<any>{
        return sendEmail
        ({
            from,
            to,
            subject: "your api key",
            text: `Thanks for register. This is your API-key: ${apiKey} Please don't share it. ;)!`     
        })
    }
}