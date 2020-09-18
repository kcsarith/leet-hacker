const spaces = `  　
`
export const TextStats = ({ hackPad }) => {
  const mapMessage = (message) => {
    const result = {}
    for (let i = 0; i < message.length; i++) {
      const char = message[i]
      if (hackPad.includeSpaces === "false") {
        if (!spaces.includes(char)) {
          if (!result[char]) {
            result[char] = { char, orderOfAppearance: i, count: 1 }
          } else {
            result[char].count++
          }
        }
      } else {
        if (!result[char]) {
          result[char] = { char, orderOfAppearance: i, count: 1 }
        } else {
          result[char].count++
        }
      }
    }

    const resultArray = Object.keys(result).map(function (key) {
      return result[key]
    })

    return resultArray.sort((a, b) => a.orderOfAppearance - b.orderOfAppearance)
  }

  const messageArray = mapMessage(hackPad.textField)

  return (
    <>
      <div className="grid grid-rows-2 gap-3 p-0 lg:p-12 text-yellow-100">
        {/* TOP */}
        <div className="flex flex-col justify-center items-center bg-red-900 rounded-3xl h-96 py-12 ">
          <h1
            className={
              hackPad.applyStyling === "false"
                ? "text-4xl text-center m-8"
                : "text-4xl text-center m-8 font-extrabold text-white"
            }
          >
            Top 5 order of appearances
          </h1>
          {messageArray.map((ele, index) => {
            if (index < 5) {
              return (
                <p key={`${ele.char}${ele.count}${ele.orderOfAppearance}`}>
                  The character{" "}
                  <span
                    className={hackPad.applyStyling === "false" ? "" : "font-extrabold text-white"}
                  >
                    {ele.char}
                    {"'"}s
                  </span>{" "}
                  first index: {ele.orderOfAppearance} with {ele.count} element(s).
                </p>
              )
            }
          })}
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col justify-center items-center py-12 bg-green-900 rounded-3xl h-96 ">
          <h1
            className={
              hackPad.applyStyling === "false"
                ? "text-4xl text-center m-8"
                : "text-4xl text-center m-8 font-extrabold text-white"
            }
          >
            <p>Rank 6~30 by</p>
            <p>(char: index : total)</p>
          </h1>
          <div className="grid grid-cols-5 gap-2">
            {messageArray.slice(5).map((ele, index) => {
              if (index < 25) {
                return (
                  <div
                    className={"border-solid border-2 border-light-blue-500"}
                    key={`${ele.char}${ele.count}${ele.orderOfAppearance}`}
                  >
                    <span>
                      <span
                        className={
                          hackPad.applyStyling === "false" ? "" : "font-extrabold text-white"
                        }
                      >
                        {" "}
                        {ele.char}
                      </span>{" "}
                      : {ele.orderOfAppearance} : {ele.count}
                    </span>
                  </div>
                )
              } else {
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default TextStats
