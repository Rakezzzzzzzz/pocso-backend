import { testEmailConfig } from './controller/User/mail.js';

// Test the email configuration
console.log('🧪 Testing email configuration...');
testEmailConfig()
    .then(success => {
        if (success) {
            console.log('🎉 Email configuration is working perfectly!');
        } else {
            console.log('❌ Email configuration has issues. Check the error messages above.');
        }
    })
    .catch(error => {
        console.error('💥 Test failed:', error);
    }); 