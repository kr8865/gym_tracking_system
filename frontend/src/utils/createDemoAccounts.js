// Script to create demo accounts for testing
// Run this in browser console: copy and paste this entire code

const createDemoAccounts = () => {
  const demoAccounts = [
    {
      uid: 'demo-member-001',
      email: 'demo@fittrack.com',
      displayName: 'Demo Member',
      password: 'demo123456',
      role: 'member',
      createdAt: new Date().toISOString(),
    },
    {
      uid: 'demo-trainer-001',
      email: 'trainer@fittrack.com',
      displayName: 'Demo Trainer',
      password: 'trainer123',
      role: 'trainer',
      createdAt: new Date().toISOString(),
    },
    {
      uid: 'demo-admin-001',
      email: 'admin@fittrack.com',
      displayName: 'Demo Admin',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
  ];

  localStorage.setItem('mockUsers', JSON.stringify(demoAccounts));
  console.log('✅ Demo accounts created!');
  console.log('You can now login with:');
  demoAccounts.forEach(acc => {
    console.log(`  ${acc.role.toUpperCase()}: ${acc.email} / ${acc.password}`);
  });
};

// Run it
createDemoAccounts();
