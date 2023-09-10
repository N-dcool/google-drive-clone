export default function Button({btnClass, btnName}) {
  return (
    <button className={`btn ${btnClass}`}>{btnName}</button>
  )
}