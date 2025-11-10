import React from 'react'

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  )
}

export default function BadgeList({ items }) {
  return (
    <div className="-m-1">
      {items.map((i) => (
        <Badge key={i}>{i}</Badge>
      ))}
    </div>
  )
}
