import sendMail, { testEmailConfig } from './controller/User/mail.js';

console.log('📧 Mail System Runner');
console.log('=====================');

// Test the email configuration
console.log('\n🧪 Testing email configuration...');
const testResult = await testEmailConfig();

if (testResult) {
    console.log('✅ Email configuration is working!');
    
    // Run the main sendMail function
    console.log('\n📤 Running main sendMail function...');
    try {
        await sendMail();
        console.log('✅ Main email function completed!');
    } catch (error) {
        console.error('❌ Error in main email function:', error.message);
    }
} else {
    console.log('❌ Email configuration failed. Please check your settings.');
} 