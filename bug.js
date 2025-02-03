```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement for cleanup function
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```