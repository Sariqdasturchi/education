import React, { useState } from "react";
import { Input, Upload } from "antd";
import { LuImagePlus } from "react-icons/lu";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";

const MaqolaTahrir = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("**Lorem Ipsum dolor sit amet**");
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          <div className="p-8 rounded-xl w-full max-w-4xl flex flex-col gap-6">
            {/* Title Input */}
            <div>
              <label className="block text-[#13265C] font-semibold mb-2 ">Maqola nomi</label>
              <Input
                placeholder="Maqola nomi"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-none text-[#464B59]"
              />
            </div>

            {/* Text Editor */}
            <div>
              <label className="block text-[#13265C] font-semibold mb-2">Maqolani yozing</label>
              <div className="border rounded-lg overflow-hidden">
                <MDEditor value={content} onChange={setContent} className="bg-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Image Upload */}
        <div className="w-sm lg:w-md">
          <label className="block text-[#13265C] font-semibold mb-2">Rasm yuklash</label>
          <div className="w-full h-42 rounded-lg flex items-center justify-center cursor-pointer relative bg-white hover:opacity-70">
            <Upload
              listType="picture"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              showUploadList={false} // Hide default UI
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {fileList.length === 0 && (
              <div className=" flex flex-col items-center text-center text-gray-500">
                <LuImagePlus className="text-5xl mb-2" />
                <p className="text-sm font-medium"><span className="underline">Yuklash uchun bosing</span> yoki sudrab olib tashlang</p>
                <p className="text-xs text-gray-400">SVG, PNG, JPG yoki GIF (maksimal 800x400px)</p>
              </div>
            )}
          </div>

        </div>
      
    </div>
  );
};

export default MaqolaTahrir;