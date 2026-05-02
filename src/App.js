function App() {
  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '600px', 
                  margin: '60px auto', textAlign: 'center' }}>
      <h1>☁️ Todo App</h1>
      <p>Deployed via <strong>AWS Amplify</strong></p>
      <p>Backend powered by <strong>AWS AppSync (GraphQL)</strong></p>
      <ul style={{ textAlign: 'left', fontSize: '18px' }}>
        <li>✅ Buy groceries</li>
        <li>✅ Finish cloud project</li>
        <li>⬜ Submit presentation</li>
      </ul>
      <p style={{ color: 'gray', marginTop: '40px' }}>
        Hosted on AWS CDN • CI/CD via Git • Real-time via AppSync
      </p>
    </div>
  );
}
export default App;