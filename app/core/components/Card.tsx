export const Card = ({ title, source, message, href, deleteAction, backgroundSrc }) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="bg-white shadow p-3 rounded ring-8">
        <a href={href} target="_blank" rel="noreferrer">
          <div
            style={{
              backgroundImage: `url('${backgroundSrc}')`,
            }}
            className="bg-cover bg-center bg-gray-300 h-32 rounded"
          ></div>
        </a>
        <div className="mt-6 ">
          <p className="text-lg text-bold tracking-wide text-gray-600">{title}</p>
          <p className="text-md text-gray-600">{source}</p>
          <p className="text-sm text-gray-600 font-hairline h-12 overflow-hidden truncate ">
            {message ? message : "NO TEXT"}
          </p>
        </div>
        <div className="mt-6">
          <button
            className="rounded shadow-md flex items-center shadow bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={deleteAction}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}
Card.defaultProps = {
  title: "Untitled",
  message: "No message.",
  href: "",
}
export default Card
