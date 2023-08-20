import express from 'express';
import figlet from 'figlet';
import { Database } from 'bun:sqlite';

const db = new Database('my.sqlite');

const app = express();
const port = 3000;

app.use(express.json());

//! Benchmarks (ran with bun)
// wrk -t12 -c10000 -d10s http://localhost:3000
// Running 10s test @ http://localhost:3000
//   12 threads and 10000 connections
//   Thread Stats   Avg      Stdev     Max   +/- Stdev
//     Latency    22.93ms    2.05ms  66.01ms   94.45%
//     Req/Sec     0.95k   488.20     1.83k    54.00%
//   104392 requests in 10.10s, 169.25MB read
//   Socket errors: connect 9757, read 104, write 0, timeout 0
// Requests/sec:  10330.74
// Transfer/sec:     16.75MB

app.get('/', (req, res) => {
  const d = db.query(`select * from users where age > 10 and age < 50 and name LIKE 'A%'`);
  res.send(d.all());
});

app.listen(port, async () => {
  console.log(figlet.textSync('Express!'));
  console.log(`Server is running on port ${port}`);
});
