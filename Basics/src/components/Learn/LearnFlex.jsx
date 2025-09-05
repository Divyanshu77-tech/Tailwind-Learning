import React from "react";

const LearnFlex = () => {
  // 🌀 Flex Direction
  // flex-row (default): children left → right
  // flex-row-reverse: right → left
  // flex-col: children top → bottom (main & cross swapped)
  // flex-col-reverse: bottom → top

  // 🎯 Justify Content (main axis)
  // justify-start (default): items at start
  // justify-end: items at end
  // justify-center: items centered
  // justify-between: equal space between items
  // justify-around: equal space + half at edges
  // justify-evenly: equal space everywhere incl. edges

  // 📐 Align Items (cross axis)
  // items-start (default): items at start
  // items-end: items at end
  // items-center: items centered
  // items-baseline: align by text baseline

  // 🔄 Flex Wrap
  // flex-nowrap (default): no wrapping
  // flex-wrap: items wrap to next line
  // flex-wrap-reverse: wrap in reverse direction

  // 🏗 Align Content (with flex-wrap, multiple rows on cross axis)
  // content-start: rows at start
  // content-end: rows at end
  // content-center: rows centered
  // content-between: equal space between rows
  // content-around: equal space + half at ends
  // content-evenly: equal space everywhere incl. ends

  // 📏 Gap
  // gap: space between rows & columns
  // gap-x-N: space between columns
  // gap-y-N: space between rows

  // 🎯 Align Self (override parent cross-axis)
  // self-start (default): item at start
  // self-end: item at end
  // self-center: item centered

  // 📈 Flex Grow
  // grow: child takes remaining space
  // grow-N: child grows N times compared to others

  // 📉 Flex Shrink
  // shrink (default): item shrinks when space is less
  // shrink-0: prevent shrinking

  // 🔢 Order
  // order-N: changes display order of children

  return (
    <div className="flex items-baseline m-7 h-[550px] w-[600px] bg-black">
      <div className="bg-green-500 h-24 w-24">Green</div>
      <div className="bg-red-500 h-24 w-24">Red</div>
      <div className="bg-blue-500 h-24 w-24">Blue</div>
      <div className="bg-purple-500 h-24 w-24">Purple</div>
    </div>
  );
};

export default LearnFlex;
