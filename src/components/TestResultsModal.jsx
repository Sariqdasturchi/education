import { Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const TestResultsModal = ({ isOpen, onClose }) => {
    const router = useNavigate();
    const exitTest = () => {
        router("/dashboard/tests");
    };
    return (
        <Modal open={isOpen} footer={null} onCancel={onClose} centered width={600}>
            <div className="text-center p-4">
                <h2 className="text-xl font-semibold">Test natijalari</h2>
                <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg mt-4">
                    <div className="text-gray-600">
                        <p>Sarflangan vaqt</p>
                        <p className="text-blue-600 font-bold">45 min.</p>
                    </div>
                    <div className="text-gray-600">
                        <p>To‘g‘ri javoblar</p>
                        <p className="text-green-600 font-bold">18/30</p>
                    </div>
                    <div className="text-gray-600">
                        <p>Natija %</p>
                        <p className="text-blue-600 font-bold">98%</p>
                    </div>
                    <div className="text-gray-600">
                        <p>Ball</p>
                        <p className="text-yellow-600 font-bold">1</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="border rounded-lg p-4">
                        <p className="text-gray-600">Xatolar</p>
                        <div className="flex gap-2 mt-2">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-md">7</span>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-md">10</span>
                        </div>
                    </div>
                    <div className="border rounded-lg p-4">
                        <p className="text-gray-600">To‘g‘ri javoblar</p>
                        <div className="flex gap-2 mt-2">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-1 rounded-md">2</span>
                        </div>
                    </div>
                </div>

                <Button
                    type="primary"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                    onClick={() => exitTest()}
                >
                    Testdan chiqish
                </Button>
            </div>
        </Modal>
    );
};

export default TestResultsModal;