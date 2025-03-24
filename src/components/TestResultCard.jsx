export const TestResultCard = ({ number, title, description, status }) => {
    const statusColors = {
        Bajarildi: "bg-green-600 text-white",
        Muvaffaqiyatsiz: "bg-red-600 text-white",
      };
    return (
        <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center w-[549px] h-[123px]">
        <div className="flex items-center gap-4">
          <span className="bg-blue-700 text-white text-lg font-semibold w-10 h-10 flex items-center justify-center rounded-lg">
            {number}
          </span>
          <div>
            <h3 className="text-black text-xl font-bold">{title}</h3>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
        <span className={`px-4 py-2 rounded-full text-sm ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    )
  }
  