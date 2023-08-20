import { Server } from 'bun';
import { Database } from 'bun:sqlite';
import figlet from 'figlet';

const db = new Database('my.sqlite');

//! Benchmarks (ran with bun)
// wrk -t12 -c10000 -d10s http://localhost:3000
// Running 10s test @ http://localhost:3000
//   12 threads and 10000 connections
//   Thread Stats   Avg      Stdev     Max   +/- Stdev
//     Latency    17.59ms    1.67ms  55.63ms   98.35%
//     Req/Sec     1.70k   714.42     2.83k    65.75%
//   136028 requests in 10.10s, 211.84MB read
//   Socket errors: connect 9757, read 101, write 0, timeout 0
// Requests/sec:  13463.18
// Transfer/sec:     20.97MB

const server = Bun.serve({
  port: 3000,
  fetch(_req: Request, _res: Server) {
    const d = db.query(`select * from users where age > 10 and age < 50 and name LIKE 'A%'`);
    return Response.json(d.all());
  },
});

console.log(figlet.textSync('Bun!'));
console.log(`Listening on http://localhost:${server.port}...`);
