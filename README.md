# Tucked types (for Flow)

A new UX for tucking away static types.

```js
const findUsers = (users: Array<User>, predicate: User => Boolean): Array<User> => {
  const matches: Array<User> = [];
  for (let user of users) {
    if (predicate(user)) {
      matches.push(user);
    }
  }
  return matches;
};
```

```js
const findUsers = (users, predicate) => {
  const matches = [];
  for (let user of users) {
    if (predicate(user)) {
      matches.push(user);
    }
  }
  return matches;
};
```

_examples in Flow, but are directly translatable to languages with ML-style
annotations: TypeScript, Scala, F#, Kotlin, Swift, Hack, Reason, Pascal_

## Rationale

Names help us understand values at a glance, and types help us specify them more
clearly.

As a reader trying to skim code, types can be distracting—like answers to
questions that we are not currently asking.

When code is more likely to be skimmed than studied, it is perhaps a better
default experience for an editor to hide types until called upon (e.g. via
mouseover).

With this, code can be presented in the style of a dynamic language,
while still adhering to the static types in the code underneath.

The _presence_ of type annotations are often optional to allow for inference.
Similarly, the _visibility_ of type annotations should optional as well, if you
believe these concepts to be useful when treated orthogonally.

## Implementation Plan

Look at how flow-remove-types works to extract types.

Name annotation

```
  name: type  ---->  name (underlined, popover "type")
```

Function return annotation

```
  function name(): type   ----> name (underlined, popover "=> type")
```

Expression annotation

```
  (...): type  ---->  ... (underline, popover "type")
```

Any generic parameters (inside angle brackets)

```
  class|function name<T, ...>   ---->  name (underlined, popover "<T, ...>")
                                       also, any child annotation should be prepended "<T, ...>"
```

Allowing write-mode requires consideration of how to allow annotations to be
added/modified/removed, how copy-pasting will function.

Atom - look at either DisplayMarkers or code-folding

Prettier - consider effect since line width is affected
