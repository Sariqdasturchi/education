import React, { useRef, useState } from "react";
import { Button, Form, Input, Modal, Spin, Switch } from "antd";
import styled from "styled-components";
import { File, FileVideo } from "lucide-react";

const { TextArea } = Input;
const StyledModal = styled(Modal)`
  top: 30px;
  .ant-modal-content {
    padding: 30px;
  }
  .ant-modal-close {
    width: 50px;
    height: 50px;
    border: 1px solid #e7e7e7;
    color: #ff7070;
  }
  .ant-modal-close:hover {
    color: #ff7070;
  }
  .ant-modal-header {
    margin-bottom: 20px;
  }
  .ant-modal-title {
    font-weight: 500;
    font-size: 24px;
  }
`;
const StyledInput = styled(Input)`
  border: 1px solid #e7e7e7 !important;
  box-shadow: none;
  padding: 8px 12px;
  border-radius: 10px;

  &::placeholder {
    color: #464b59;
  }
  &:active {
    border: 1px solid #e7e7e7;
  }

  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }

  @media (min-width: 768px) {
    padding: 13px 15px;
  }
`;
const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: #3857af !important;
  }
`;
const StyledTextArea = styled(TextArea)`
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  &::placeholder {
    color: #464b59;
  }
  &:hover {
    border: 1px solid #e7e7e7;
  }
  &:active {
    border: 1px solid #e7e7e7;
  }
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;
const FileInputWrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 18px;
    color: #13265c;
    padding-bottom: 10px;
  }
  .desc {
    color: #464b59;
    font-size: 16px;
  }
  .box {
    background-image: url("/src/assets/video-upload.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const CustomFileInput = styled.input`
  display: none;
  opacity: 0;
`;
const FileUploadButton = styled.label`
  cursor: pointer;
  width: 95px;
  height: 30.2px;
  position: absolute;
  bottom: 49.5px;
  background-image: url("/src/assets/outline.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
const FilePreview = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  align-items: center;
  padding: 8px 12px;
  .left {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
const RemoveButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #464b59;
`;
const FileWrapper = styled.div`
  .title {
    font-width: 500;
    font-size: 18px;
    color: #13265c;
  }
`;
const StyledButton = styled(Button)`
  color: white;
  background-color: #13265c;
  border-radius: 50px;
  border: 1px solid #13265c;
  margin-top: 30px;

  &:hover {
    border-color: #13265c !important;
    color: white !important;
    background-color: #13265c !important;
  }
`;
export default function DarslikAddVideo({ isModalOpen, handleCancel }) {
  const fileInputRef = useRef(null);
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [videoSize, setVideoSize] = useState(0);
  const [files, setFiles] = useState([]);

  const onFinish = (values) => {
    console.log(values);
  };
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const maxSize = 10 * 1024 * 1024; // 10MB (baytlarda)
    setVideoSize((file.size / 1024).toFixed(2));
    if (file.size > maxSize) {
      alert("Fayl hajmi 10MB dan kichik bo‘lishi kerak!");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Inputni tozalash
      }
      return;
    }

    if (file.type !== "video/mp4") {
      alert("Faqat .mp4 formatdagi videolar yuklanadi!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setVideoFile(URL.createObjectURL(file));
      setFileName(file.name);
      setLoading(false);
    }, 2000);
  };
  const removeFileVideo = () => {
    setVideoFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Fayllarni massivga aylantiramiz

    // 10MB dan katta fayllarni filtrlaymiz
    const filteredFiles = selectedFiles.filter(
      (file) => file.size <= 10 * 1024 * 1024
    );

    if (filteredFiles.length < selectedFiles.length) {
      alert("Ba'zi fayllar 10MB dan katta, ular qo'shilmadi!");
    }

    setFiles((prevFiles) => [...prevFiles, ...filteredFiles]); // Yangi fayllarni qo'shamiz
  };

  // Faylni o‘chirish
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <StyledModal
      width={883}
      title="Video qo’shish"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="add-video"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        requiredMark={false}
      >
        <div>
          <div className="flex gap-[30px]">
            <div className="w-1/2 flex flex-col gap-5">
              <Form.Item
                className="!mb-0"
                label={<span className="font-medium">Video nomi</span>}
                name="videoName"
                rules={[
                  {
                    required: true,
                    message: "Iltimos video nomini kiriting!",
                  },
                ]}
              >
                <StyledInput size="large" placeholder="Video nomi" />
              </Form.Item>
              <Form.Item
                className="!mt-0"
                label={
                  <span className="font-medium">Videoni ochiq qilish</span>
                }
                name="isPublic"
                valuePropName="checked"
              >
                <StyledSwitch />
              </Form.Item>
              <Form.Item
                className="!mb-0"
                label={<span className="font-medium">Nazariy matn</span>}
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Iltimos nazariy matnni kiriting!",
                  },
                ]}
              >
                <StyledTextArea rows={5} placeholder="Nazariy matn" />
              </Form.Item>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <FileInputWrapper>
                <p className="title">Videoni yuklash</p>
                <p className="desc">
                  Videoingizni bu yerga qo'shing va siz maksimal 10 mb videoni
                  yuklashingiz mumkin
                </p>
                <div
                  className={`w-[401px] h-[240.2px] mt-6 flex items-center justify-center relative ${
                    !videoFile && "box"
                  }`}
                >
                  {loading ? (
                    <Spin size="large" />
                  ) : videoFile ? (
                    <video src={videoFile} controls className="w-full h-full" />
                  ) : (
                    <FileUploadButton htmlFor="video-upload"></FileUploadButton>
                  )}
                </div>
                <CustomFileInput
                  ref={fileInputRef}
                  type="file"
                  id="video-upload"
                  accept="video/mp4"
                  onChange={handleVideoChange}
                />

                {fileName ? (
                  <FilePreview>
                    <div className="left">
                      <FileVideo size={30} />
                      <div className="flex flex-col">
                        <span className="text-[#13265C]">{fileName}</span>
                        <span className="text-[14px] text-[#464B59]">
                          {videoSize} KB
                        </span>
                      </div>
                    </div>
                    <RemoveButton onClick={removeFileVideo}>✖</RemoveButton>
                  </FilePreview>
                ) : (
                  <p className="text-[#6D6D6D]">Only support .mp4videos</p>
                )}
              </FileInputWrapper>
              <FileWrapper>
                <p className="title pb-[10px]">Fayl biriktirish</p>
                <div className="border border-[#E7E7E7] rounded-[10px]">
                  {/* Fayl tanlash qismi */}
                  <div className="border-b border-[#E7E7E7] relative">
                    <input
                      type="file"
                      id="file-upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      multiple // Bir nechta fayl yuklashga ruxsat
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload">
                      <button
                        type="button"
                        className="cursor-pointer px-5 py-[10px] bg-[#13265C] text-white rounded-[50px] m-[10px]"
                      >
                        Fayl tanlash
                      </button>
                    </label>
                  </div>

                  {/* Yuklangan fayllar ro‘yxati */}
                  {files.length > 0 && (
                    <div>
                      {files.map((file, index) => (
                        <div key={index} className="border-b border-[#E7E7E7]">
                          <div className="flex justify-between items-center p-[10px]">
                            <div className="flex items-center gap-[10px]">
                              <File color="#464B59" size={30} />
                              <div>
                                <p className="text-[#13265C]">{file.name}</p>
                                <p className="text-[14px] text-[#464B59]">
                                  {(file.size / 1024).toFixed(2)} KB
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-[#464B59] cursor-pointer"
                            >
                              ✖
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* YUKLASH tugmasi faqat fayl yuklangan bo‘lsa chiqadi */}
                  {files.length > 0 && (
                    <div className="flex justify-between">
                      <div></div>
                      <button className="text-[#3857AF] p-[10px] text-base">
                        YUKLASH
                      </button>
                    </div>
                  )}
                </div>
              </FileWrapper>
            </div>
          </div>
          <Form.Item label={null} className="!mb-0 w-full">
            <StyledButton
              className="w-full bg-red-600"
              size="large"
              htmlType="submit"
            >
              SAQLASH
            </StyledButton>
          </Form.Item>
        </div>
      </Form>
    </StyledModal>
  );
}
