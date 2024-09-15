```bash=
helm install kube-state-metrics prometheus-community/kube-state-metrics
helm install prometheus prometheus-community/prometheus -f ./prometheus/values.yaml
```
