// app.js
const http = require('http');
const PORT = process.env.PORT || 8080;

// 模擬 CPU 密集型計算的 Fibonacci 函數
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

http.createServer((req, res) => {
  // 模擬 CPU 負載，計算 Fibonacci 數列
  const fib = calculateFibonacci(40);  // 可調整數值以增加計算量
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Fibonacci(40): ${fib}\n`);
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});