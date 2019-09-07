# distributeddocker
A distributed system of docker containers with a load balancer and node.js workers.

This network includes a load balancer that distributes work to three node.js services. A simulated latency of 0-3 secconds has been built into the workers. The logic of the load balancer and work done by the nodes can be build out within their respective directories. Nodes can be added.

To start: run `docker-compose up`.

The load balancer will port on host at 8080.

Example request: `curl -d '{"todo":"todo value"}' -H "Content-Type: application/json" -X POST localhost:8080`
