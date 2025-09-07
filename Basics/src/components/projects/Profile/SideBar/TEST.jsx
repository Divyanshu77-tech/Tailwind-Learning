import React, { useRef, useEffect } from "react";

function MyComponent() {
  const myDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myDivRef.current && !myDivRef.current.contains(event.target)) {
        console.log(myDivRef.current, "  ", myDivRef.current.contains(event.target))
        // You can perform other actions here, like updating state or calling a function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render and cleans up on unmount.

  return (
    <div>
      <div
        ref={myDivRef}
        style={{ border: "2px solid blue", padding: "50px", margin: "20px" }}
      >
        <h2>This is the special div. Clicks inside here will be ignored.</h2>
        <p>Click anywhere outside this blue box to see the information.</p>
      </div>
      <p style={{ margin: "20px" }}>Some other content on the page.</p>
      <button style={{ margin: "20px" }}>Another interactive element.</button>
    </div>
  );
}

export default MyComponent;
