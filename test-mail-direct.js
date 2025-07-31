import { testEmailConfig } from './controller/User/mail.js';

// Simple test
console.log('🧪 Testing mail.js directly...');
testEmailConfig()
    .then(result => {
        if (result) {
            console.log('✅ mail.js is working correctly!');
        } else {
            console.log('❌ mail.js has issues');
        }
    })
    .catch(error => {
        console.error('💥 Error:', error);
    }); 