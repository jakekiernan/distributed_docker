# distributeddocker
A distributed system of docker nodes with load balancer and node.js services.

This network includes a load balancer that distributes work to three node.js workers. Nodes can be added, and the logic of the load balancer and work done by the nodes can be build out within their respective directories. Simulated latency of 0-3 secconds has been built into the workers.

To start: run `docker-compose up`.

The load balancer will port on host at 8080.

Example request: `curl -d '{"todo":"todo value"}' -H "Content-Type: application/json" -X POST localhost:8080`
