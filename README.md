readme_k6 = """# ⚡ k6 Performance & Load Testing Framework

[![k6 CI](https://github.com/YOUR-USERNAME/k6-performance-testing-framework/actions/workflows/performance.yml/badge.svg)](https://github.com/bfsouza/k6-performance-testing-framework/actions)
![k6](https://img.shields.io/badge/k6-v0.45%2B-7D46D7?style=flat&logo=k6)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?style=flat&logo=docker)
![Grafana](https://img.shields.io/badge/Grafana-Monitoring-F46800?style=flat&logo=grafana)

> Performance, Load, Stress, and Spike testing framework for REST APIs built with **k6**, **Docker Compose**, **InfluxDB**, and **Grafana**. Designed to measure SLAs, identify bottlenecks, and validate system reliability under high concurrency.

---

## 🎯 Target Application

Tests are executed against the **[ServeRest](https://serverest.dev/)** ecosystem:
* **API REST:** `https://serverest.dev`

---

## 🏗️ Architecture & Features

* **Performance-as-Code:** Modular JavaScript scripts structured for maintainability and reusability.
* **SLAs & Thresholds:** Automated quality gates ensuring p(95) response times and error rate thresholds.
* **Multiple Load Profiles:** Dedicated test scenarios covering Smoke, Load, Stress, and Spike testing strategies.
* **Real-time Observability:** Fully configured Docker stack running **k6 + InfluxDB + Grafana** for real-time visual metrics dashboarding.
* **CI/CD Integration:** Automated performance checks via GitHub Actions.

```text
├── .github/workflows/   # CI/CD pipeline execution
├── config/              # Thresholds, SLAs, and load profiles
├── dash/                # Pre-configured Grafana dashboard JSON
├── src/
│   ├── api/             # Encapsulated API requests
│   ├── data/            # Dynamic payload generators
│   └── tests/           # Performance test scenarios (Load, Stress, Spike)
├── docker-compose.yml   # Stack definition (k6 + InfluxDB + Grafana)
└── README.md
