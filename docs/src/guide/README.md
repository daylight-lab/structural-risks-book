# Introduction

The thesis of this book is that the internet is, broadly speaking, insecure and
prone to collapse. The purpose of this book is to describe why *exactly* this is
the case---what particular attacks threaten the internet's stability globally.

What to do about these issues is outside the scope of this book (though g
certainly make my own opinions on the matter known; see [...]). This is a
reference text primarily. It seeks to inform, drawing on rich and old bodies of
work, about these risks: where they come from, how they work, and what their
impact might be.

## What this book covers

This book covers structural risks to the global internet, a phrase best defined by decomposing it into its component parts:

- **The global internet**. Of all the world's computer networks, a single global internet more or less encompasses or interoperates between all of them.

- **Structural risks**. On that shared internet, a subset of its infrastructure
  is common: it affects all internet users. Risks that affect this infrastructure are *structural*: they threaten the stability and availability
  of internet content for everyone.


This book is concerned with enumerating threats that meet this criteria.

(The remainder of of this introduction expands on two concepts).

## What this book doesn't cover

This book is *not* concerned with local risks: for example, with attacks that
affect a handful of internet users, a few hundred, a few thousand, or even a
billion internet users. This book is concerned with attacks that affect *all*
(or at least, the overwhelming majoirty of) internet users.

Nor is this book concerned with estimating the specific impact of risks. It
attempts to sketch scenarios that would inflict worst-case damage, and treds
lightly in imagining the second- or third-order consequences of such damage
(e.g., the disintegration of global trading routes; the return of humanity to a
hunter-gatherer civilization; etc). Such work is hard when the attacks are
well-defined in scope and local in impact [[cite:&Ralph2015]], let alone when they are theoretical and global.

## How to read this book

The introduction of this book - this section - draws boundaries around the
notion of a global internet, and what constitutes structural risk to it. It
provides background on how this internet works, concieving of it as a "stack" of
technical "layers."

The remainder of the book is best understood heirarchically:

- **Chapters (layers)**. The subsequent chapters work through the three layers of this
  stack: the physical, transport, and application layers. Each chapter begins by
  describing what the layer is and how it works in practice. It then steps
  through each key
  - **Sections (technologies)**. Each chapter (layer) contains a section on the major,
    relevant technologies that comprise that stack. Each technology is
    introduced.
    - **Structural risks**. Each section (technology) contains a series of
      structural risks that affect that technology.
      - **Anticipated impact**. Each structural risk is defined by its
        anticipated impact: what the risk would affect, and how.



## Contributing to this book

This book is open-source, a perennial work in progress. Contributions are welcome.
Please see...
<!-- github repository -->
