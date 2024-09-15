### 硬體設置
```bash=
docker run -d --name=grafana -p 3000:3000 grafana/grafana
kubectl port-forward svc/prometheus-server 9090:80
```
