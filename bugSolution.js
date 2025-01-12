```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The dependency array is empty, so this effect only runs once after the initial render.
    // Alternatively, you could add a dependency here if needed, to specify when you want it to run
    // For instance, to run when count changes:  useEffect(() => {/*...*/}, [count])
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```