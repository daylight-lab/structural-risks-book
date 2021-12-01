# What is the global internet?

## An internet

We can meaningfully distinguish between *an* internet (Clark, 2018) and *this*
internet (Dourish, 2015). In broad strokes, an internet is a mechanism by which
computers can be connected together. Crucially, this mechanism ought to be
somewhat scale-free - that is, it should be able to connect together any number
of computers. Small, local networks, like your WiFi network, are simple enough
to construct: you connect all of the computers to a single machine, a *router*.
Internets should work at any scale--- all throughout the world, galaxy, or
beyond.

> Indeed, J.R.R. Licklider's original vision for the internet was an ["intergalactic computer network"](https://en.wikipedia.org/wiki/Intergalactic_Computer_Network).

*An* internet is the abstract idea of a scale-free
computer network. *This* internet - the one that delivered this document to
you - provides some specific set of mechanisms for connecting computers
together.
This book is about *this internet*: the global internet.

## The global internet

> This internet is one of many possible internets that could have been designed [[cite:&clark2018designing]], that could have become global [[cite:&dourish2015not]]. Due to a variety of historical, cultural, and political factors in the late 20th century, this is the internet that became global [[cite:&hu2015prehistory]].
<!-- TODO cite this internet from the ground -->

Many internets are possible, a few exist, but only one is truly global. 

Although this internet varies greatly regionally (TODO), it spreads indeed spread worldwide. If you're wealthy enough, you can get an internet connection anywhere on the surface of the earth (TODO). There is, in other words, one global internet, albeit one composed of a variety of uniquely local experiences.
[[cite:&abbate2017and]]

The global internet uses a variety of *common* infrastructure---infrastructure
that essentially all internet hosts share. It is risks to this shared
infrastructure that this book concerns itself with. <!-- TODO - inline defn for
hosts computers that are connected to, that participate in, this internet -->


## The "stack" model

This internet is best thought of as a "stack." Different technologies, each built on top of the other, create the effect of a single, cohesive technology that we experience as the internet. We can group these technologies roughly into "layers."

| Layer | Name         | Function                                               |
|-------|--------------|--------------------------------------------------------|
| 3     | Applications | Provides specific user-facing functionality.           |
| 2     | Transport    | Assures messages are delivered end-to-end.             |
| 1     | Physical     | Assures machines are physically connected to a router. |


In this book, we'll use a simple, three-layer structure to describe the internet.
This book will go through each layer, starting from the bottom---the physical.

> This three-layer model is considerably simpler from other layer models you may
be familiar with, such as the [OSI
model](https://en.wikipedia.org/wiki/OSI_model). Indeed, as far as we know, we
made this three-layer model up. Listen: all models are wrong, and any given
model is only as useful as the domain in which they're applied. We reckon this
three-layer model is powerful enough to describe all of the attacks we discuss
in this book.

## How the layers stack

Each layer---itself comprised of many interacting technologies---aims to provide
a different set of features. Notice how the features they provide become more
specific as we move "up" the stack, more agnostic as we move "down."
For example, starting from the "bottom" of the stack:

1. **Layer 1: The physical**. The physical layer of the internet serves to allow
   computers to send signals to other computers. It does not care how they are
   connected, or what kinds of signals they send
2. **Layer 2: The transport**. The transport layer of the internet specifies
   *particular* signals that participating computers can send and receive
   (called *packets*; effectively, messages), and provides a mechanism to route
   and address those messages between computers. It assumes physical connections
   exist between all participating computers; that is, it is built *on top of*
   the physical layer. It does not care what's *in* the messages (what the
   messages are about, or why they are being sent).
2. **Layer 3: The applications**. The application layer of the internet
   specifies particular things to do with those messages. It *applies* the more
   general things lower-layers do, creating specific *applications* of the
   transport and application layers abstract abilities.

## References

Clark, D. D. (2018). Designing an internet. MIT Press.

Dourish, P. (2015). Not the internet, but this internet: how othernets illuminate our feudal internet. In Proceedings of The Fifth Decennial Aarhus Conference on Critical Alternatives (pp. 157–168).

Merrill, N (2022). This internet, from the ground. ArXiV.

Hu, Tung-Hui. A Prehistory of the Cloud. MIT press, 2015.

Abbate, J. (2017). What and where is the internet?(re) defining internet histories. Internet Histories, 1(1-2), 8–14.
