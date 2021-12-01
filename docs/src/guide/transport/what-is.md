# What is the transport layer?

Thanks to the physical layer, we can connect the world's devices to one another.
This allows them to pass messages. That's great, to make this system work, we
must agree on a method for
delivering those messages.

The essense of our task is this: we need to be able to create a message for any
device on the network. The network will deliver the message to the recipient,
trying multiple paths to find them if necessary.

This is what the transport layer hopes to achieve.

- The transport layer's first task is to construct a global system of addressing, making particular machines uniquely addressable worldwide. This is the work of the Internet Protocol addressing schemes, which we discuss in the following section.
- Its second task is to figure out how to route addressed messages between machines. This is the work of the Border Gateway Protocol (BGP), which we discuss in the section after that.
