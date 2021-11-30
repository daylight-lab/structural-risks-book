# What is the internet?

In broad strokes, an internet is a mechanism by which computers can be connected
together. 

Crucially, this mechanism ought to be somewhat scale-free - that is, it should
be able to connect any number of computers, all throughout the world, galaxy, or
beyond.

> Indeed, J.R.R. Licklider's original vision for the internet was an ["intergalactic computer network"](https://en.wikipedia.org/wiki/Intergalactic_Computer_Network).

Small, local networks, like your WiFi network, are simple enough to construct: you connect all of the computers to a single machine, a *router*. 
This internet - the one that delivered this document to you - provides a mechanism to connect those routers together.

> This internet is one of many possible internets that could have been designed (Clark, 2018), that could have become global (Dourish, 2015). How this particular internet became dominant worldwide is a story for another time.

This internet is best thought of as a "stack." Different technologies, each built on top of the other, create the effect of a single, cohesive technology that we experience as the internet. We can group these technologies roughly into "layers," each layer aiming to provide a different function.

| Layer         | Function                                               |
| ------------- | :-------------:                                        |
| Application   | Provides user-facing functionality.                    |
| Transport     | Assures messages are delivered end-to-end.             |
| Physical      | Assures machines are physically connected to a router. |

This book will go through each layer, starting from the bottom---the physical.

## References

Clark, D. D. (2018). Designing an internet. MIT Press.

Dourish, P. (2015). Not the internet, but this internet: how othernets illuminate our feudal internet. In , Proceedings of The Fifth Decennial Aarhus Conference on Critical Alternatives (pp. 157–168).
