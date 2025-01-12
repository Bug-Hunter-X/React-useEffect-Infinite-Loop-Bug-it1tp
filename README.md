# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.

The `bug.js` file contains the buggy code, which attempts to update the state within the `useEffect` hook without any dependencies. This creates an infinite loop because every state update triggers a re-render, which in turn triggers the `useEffect` again.

The `bugSolution.js` file provides a corrected version of the code.  The solution shows how to correctly use the dependency array in `useEffect` to prevent the infinite loop.