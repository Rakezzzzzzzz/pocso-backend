
import { mail } from "./user.js";
import nodemailer from "nodemailer";
import bodyparser from "body-parser";


bodyparser.json();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "rakeshskumar0876@gmail.com",
        pass: "rjqx xowj zfcl lbhr"
    }
})

const sendMail = async () => {

    try{
        const student = await mail();
        

        if(!student){
            console.log('Student email not found'); 
        }
        const info = await transporter.sendMail({
            from: 'rakeshskumar0876@gmail.com',
            to: student,
            subject: "Hello World!",
            text: "This is a test email sent from Node.js using MongoDB.",
        })

        console.log('Email sent:', info.response);
    }
    catch(err){
        console.error('Error sending email',err);
        
    }
 
}

export default sendMail;

// Test function to verify email configuration
export const testEmailConfig = async () => {
    try {
        const info = await transporter.sendMail({
            from: 'rakeshskumar0876@gmail.com',
            to: 'rakeshskumar0876@gmail.com', // Send test email to yourself
            subject: "Test Email - SMTP Configuration",
            text: "This is a test email to verify your SMTP configuration is working correctly.",
        });
        console.log('✅ Test email sent successfully:', info.response);
        return true;
    } catch(err) {
        console.error('❌ Error sending test email:', err.message);
        return false;
    }
}