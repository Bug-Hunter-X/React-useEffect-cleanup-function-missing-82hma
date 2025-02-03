# React useEffect Cleanup Function Missing

This example demonstrates a common error in React applications: forgetting to include a cleanup function within the `useEffect` hook.  Failure to provide a cleanup function when adding event listeners, setting timers, or initiating other side effects can lead to memory leaks and unexpected behavior.

## The Problem

The `bug.js` file contains a React component that adds an event listener to the `document` when it mounts. However, it fails to remove this listener when the component unmounts, leading to a memory leak.  Each time the component renders, a new event listener is added, but the old ones persist, causing potential performance issues and unpredictable results.

## The Solution

The `bugSolution.js` file corrects this issue.  It adds a return statement within the `useEffect` hook.  This return statement provides a cleanup function that is automatically executed when the component unmounts. The cleanup function removes the event listener, preventing memory leaks and ensuring the component behaves as expected.