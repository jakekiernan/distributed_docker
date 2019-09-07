# distributeddocker
A distributed system of docker nodes with load balancer and node.js services.

This is the shell for a network of docker nodes that distribute work to a series for nodes. The logic of the load balancer and work done by the nodes can be build out within their respective directories. 

To start: run `docker-compose up`.

The load balancer will port on 8080.

E.g. curl -d '{"todo":"todo value"}' -H "Content-Type: application/json" -X POST localhost:8080
