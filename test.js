const assert = require('assert');
const app = require('./index');

const server = app.listen(0, () => {
  const port = server.address().port;
  fetch(`http://localhost:${port}/health`)
    .then(res => res.json())
    .then(data => {
      assert.strictEqual(data.status, 'healthy');
      console.log('Test passed');
      server.close();
    })
    .catch(err => {
      console.error('Test failed:', err);
      server.close();
      process.exit(1);
    });
});
