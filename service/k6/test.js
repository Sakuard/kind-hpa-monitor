import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100, // 每秒請求的數量
  duration: '300s', // 持續 60 秒
};

export default function () {
  http.get('http://localhost:8888');  // 替換為你的 Service 的 IP 地址
  sleep(1);
}