```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop because the state update triggers a re-render,
    // which in turn triggers the useEffect again.
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```