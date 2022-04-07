export default function Tweet({displayName, message}) {
  
  return (
   <div className="tweet--card">
    <p className="tweet--user">user: {displayName}</p>
    <p>{message}</p>
   </div>
  )
}