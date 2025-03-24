import { useState, useEffect } from "react";
import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import TestResultsModal from "./TestResultsModal";

export default function TestSubmission() {
    const handleBack = () => {
        window.history.back();
    };

    const [timeLeft, setTimeLeft] = useState(600);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [answeredCount, setAnsweredCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    // const [correctCount, setCorrectCount] = useState(0);

    const tests = [
        { id: 1, question: "35+40 berilgan yig‘indi nechaga teng?", options: ["75", "85", "95", "105"], answer: 1 },
        { id: 2, question: "20+50 berilgan yig‘indi nechaga teng?", options: ["60", "70", "80", "90"], answer: 1 },
        { id: 3, question: "10+90 berilgan yig‘indi nechaga teng?", options: ["80", "90", "100", "110"], answer: 2 },
        { id: 4, question: "25+45 berilgan yig‘indi nechaga teng?", options: ["60", "70", "80", "90"], answer: 2 },
        { id: 5, question: "50+30 berilgan yig‘indi nechaga teng?", options: ["70", "80", "90", "100"], answer: 1 },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const selectAnswer = (testId, optionIndex) => {
        setSelectedAnswers((prev) => {
            const newAnswers = { ...prev, [testId]: optionIndex };
            setAnsweredCount(Object.keys(newAnswers).length);
            return newAnswers;
        });
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsResultModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="w-full mx-auto">
            <div className="flex items-center justify-between shadow-sm w-full pb-4 px-[50px] py-[29px]">
                <div className="flex items-center space-x-3">
                    <ArrowLeftOutlined className="text-xl text-gray-600 cursor-pointer hover:text-black transition" onClick={handleBack} />
                    <h2 className="text-xl font-semibold text-gray-800 ml-3">Irratsional tenglamalar va tengsizliklar</h2>
                </div>
            </div>

            <div className="flex gap-6 mt-6 p-6">
                <div className="w-2/3 h-[600px] overflow-y-auto p-4 bg-white shadow-lg rounded-xl">
                    {tests.map((test, index) => (
                        <div key={test.id} className="mb-4 p-4 border rounded-xl">
                            <h3 className="text-lg font-semibold mb-3">{index + 1}. {test.question}</h3>
                            {test.options.map((option, optIndex) => (
                                <button key={optIndex} onClick={() => selectAnswer(test.id, optIndex)} className={`w-full text-left p-3 border rounded-xl mb-2 transition duration-300 ${selectedAnswers[test.id] === optIndex ? "border-blue-600 bg-blue-100" : "hover:bg-gray-100"}`}>{option}</button>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="w-1/3 space-y-4">
                    <div className="p-4 bg-white shadow-lg rounded-xl">
                        <h3 className="text-lg font-semibold mb-3">Test nomi</h3>
                        <div className="grid grid-cols-5 gap-2">
                            {tests.map((test, index) => (
                                <button key={index} className={`w-10 h-10 flex items-center justify-center rounded-xl border transition ${selectedAnswers[test.id] !== undefined ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>{index + 1}</button>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-xl">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>⏳ {formatTime(timeLeft)}</span>
                            <span>✅ {answeredCount}</span>
                        </div>
                    </div>
                    <Button type="primary" size="large" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl" onClick={showModal}>Testni yakunlash</Button>
                </div>
            </div>

            <Modal title="Testni yakunlaysizmi?" open={isModalOpen} onCancel={handleCancel} footer={[
                <Button key="cancel" onClick={handleCancel} style={{ backgroundColor: "#FF5858", color: "white" }}>Yo‘q</Button>,
                <Button key="ok" type="primary" onClick={handleOk} style={{ backgroundColor: "#3857AF", color: "white" }}>Ha, yakunlayman</Button>]}
                centered />
            <div>
                {isResultModalOpen && <TestResultsModal isOpen={isResultModalOpen} onClose={() => setIsResultModalOpen(false)} />}
            </div>
            {/* <Modal title="Test natijalari" open={isResultModalOpen} footer={[<Button key="exit" type="primary" onClick={exitTest} style={{ backgroundColor: "#3857AF", color: "white" }}>Testdan chiqish</Button>]} centered>
                <p className="text-lg font-semibold">Sizning natijangiz: {correctCount} / {tests.length}</p>
            </Modal> */}
        </div>
    );
}