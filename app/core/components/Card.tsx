export const Card = ({ title, source, message, href, deleteAction, backgroundSrc }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-2">
      <div className="bg-white shadow p-3 rounded hover:ring-8 w-full xl:w-48 lg:w-52 xl:w-64 sm:w-60 md:w-48">
        <a href={href} target="_blank" rel="noreferrer">
          <div
            style={{
              backgroundImage: `url('${backgroundSrc}')`,
            }}
            className="bg-cover bg-center bg-gray-300 h-32 rounded"
          ></div>
        </a>
        <div className="mt-6 w-full xl:w-44 lg:w-48 xl:w-60 sm:w-52 md:w-40">
          <p className="text-lg text-bold tracking-wide text-gray-600 overflow-hidden truncate">
            {title.substring(0, 24)}
          </p>
          <p className="text-md w-full xl:w-44 lg:w-48 xl:w-60 sm:w-52 md:w-40 text-gray-600 overflow-hidden truncate">
            {source.substring(0, 30)}
          </p>
          <p className="text-sm text-gray-600 font-hairline h-12 overflow-hidden truncate w-full xl:w-44 lg:w-48 xl:w-60 sm:w-52 md:w-40">
            {message ? message.substring(0, 50) : "NO TEXT"}
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
