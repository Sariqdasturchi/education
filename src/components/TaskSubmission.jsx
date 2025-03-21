import { Button, Upload, Input } from "antd";
import { UploadOutlined, ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";

const TaskSubmission = () => {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="p-8  rounded-2xl  w-full m-5 mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-3">
                    <ArrowLeftOutlined
                        className="text-xl text-gray-600 cursor-pointer hover:text-black transition"
                        onClick={handleBack}
                    />

                    <h2 className="text-xl font-semibold text-gray-800">
                        Matematika darslarida foydalaniladigan slayd taqdimoti
                    </h2>
                </div>
                <Button
                    type="primary"
                    className="rounded-[50px] px-6 py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition !bg-[#13265C] !border-[#13265C] !text-white"
                >
                    Topshirish <CheckOutlined />
                </Button>


            </div>

            {/* Task Description */}
            <div className="mt-6 text-gray-700 text-base space-y-3">
                <p className="font-medium">Mustaqil ishni bajarish yuzasidan ko‘rsatma:</p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Biologiya darslarida foydalaniladigan slaydlarning ta'lim samaradorligidagi ahamiyatini o‘rganing.</li>
                    <li>Elektron darslik va qo‘llanmalardan foydalanib Biologiya fanlaridan mavjud slaydlarni ko‘zdan kechiring va tahlil qiling.</li>
                    <li>Biologiya darslarida foydalanish uchun rasmli, jadvali slaydlar tayyorlang.</li>
                    <li>Biologiya darslarida foydalanish uchun ovozli va video slaydlar tayyorlang.</li>
                    <li>Biologiya darslarida o‘quvchilar nazoratini amalga mo‘ljallangan slaydlar tayyorlang.</li>
                </ol>
            </div>

            {/* Input and File Upload Section */}
            <div className="mt-6 flex flex-col md:flex-row gap-6">
                {/* Answer Input */}
                <div className="flex-1  shadow-lg p-5 ">
                    <p className="text-sm font-medium text-gray-800 mb-2">Javob kiriting</p>
                    <Input.TextArea rows={4} placeholder="Javobingizni kiriting..." className="resize-none  rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
                </div>

                {/* File Upload */}
                <div className="flex-1  shadow-lg p-5 ">
                    <span className="text-sm rounded-[50px]  font-medium text-white border px-6  mb-2 bg-[#13265C] disabled:inline  p-2 ">Fayl biriktirish</span>
                    <br />
                    <br />
                    <Upload className="w-full ">
                        <Button icon={<UploadOutlined />} className="w-full rounded-lg shadow-md hover:shadow-lg transition">
                            Fayl tanlash
                        </Button>
                    </Upload>
                    {/* <div className="mt-3 p-3 bg-gray-100 rounded-lg flex items-center justify-between border border-gray-300">
            <span className="text-sm font-medium text-gray-700">slayd_12345.pdf (2078.16 KB)</span>
            <Button type="link" className="text-blue-600 font-semibold">YUKLASH</Button>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default TaskSubmission;