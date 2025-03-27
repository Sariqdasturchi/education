import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { GripVertical, SquarePen, Trash2 } from "lucide-react";
import styled from "styled-components";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const { TextArea } = Input;
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
const StyledCheckbox = styled(Checkbox)`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  // Custom border

  &.ant-checkbox-checked {
    background-color: #3857af; // Yashil rang
    border-color: #3857af;
  }

  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
const StyledButton = styled(Button)`
  color: #13265c;
  border-radius: 50px;
  border: 1px solid #13265c;
  margin-top: 20px;
  padding: 10px 30px;
  margin-left: 50px;

  &:hover {
    border-color: #13265c !important;
    color: #13265c !important;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const VariantItem = ({ variant, index, onDelete, onChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: variant.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3">
      <StyledCheckbox
        checked={variant.correct}
        onChange={(e) => {
          // Only allow one checkbox to be checked at a time
          onChange(index, { 
            ...variant, 
            correct: e.target.checked,
            // If this checkbox is being checked, uncheck all others
            ...(e.target.checked && { forceUncheckOthers: true })
          });
        }}
      />
      <StyledInput
        className="max-w-[437px]"
        size="large"
        value={variant.text}
        onChange={(e) => onChange(index, { ...variant, text: e.target.value })}
        placeholder="Javobini kiriting"
      />
      <span {...listeners} {...attributes} className="cursor-grab">
        <GripVertical size={20} />
      </span>
      <button onClick={() => onDelete(index)} className="text-red-500">
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default function AddTest() {
  const [variants, setVariants] = useState([
    { id: 1, text: "", correct: false },
    { id: 2, text: "", correct: false },
    { id: 3, text: "", correct: false },
    { id: 4, text: "", correct: false },
  ]);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const allVariantsFilled = variants.every(v => v.text.trim() !== "");
    const oneCorrectSelected = variants.some(v => v.correct);
    setIsSubmitDisabled(!(allVariantsFilled && oneCorrectSelected));
  }, [variants]);

  const handleDelete = (index) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (index, newVariant) => {
    setVariants((prev) => {
      let updatedVariants = prev.map((item, i) => 
        i === index ? newVariant : item
      );
      
      if (newVariant.forceUncheckOthers) {
        updatedVariants = updatedVariants.map((v, i) => 
          i !== index ? { ...v, correct: false } : v
        );
      }
      
      return updatedVariants;
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setVariants((prev) => {
      const oldIndex = prev.findIndex((item) => item.id === active.id);
      const newIndex = prev.findIndex((item) => item.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  const [tests, setTests] = useState([
    {
      id: 1,
      testName: "Test1",
      question: "To'g'ri kiritilgan sonni belgilang",
    },
    {
      id: 2,
      testName: "Test2",
      question: "To'g'ri kiritilgan sonni belgilang",
    },
  ]);

  const onFinish = (values) => {
    console.log(values);
    console.log(variants);
    
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-start">
          <Form
            name="test"
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
            className="w-full"
            requiredMark={false}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col gap-5 max-w-[444px] w-full">
                  <Form.Item
                    className="!mb-0"
                    label={
                      <span className="font-medium text-[#13265C]">
                        Test nomi
                      </span>
                    }
                    name="testName"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos test nomini kiriting!",
                      },
                    ]}
                  >
                    <StyledInput size="large" placeholder="Test nomi" />
                  </Form.Item>
                  <Form.Item
                    className="!mb-0"
                    label={
                      <span className="font-medium text-[#13265C]">
                        Savol kiriting
                      </span>
                    }
                    name="question"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos savolni kiriting!",
                      },
                    ]}
                  >
                    <StyledTextArea
                      rows={4}
                      size="large"
                      placeholder="Savol kiriting"
                    />
                  </Form.Item>
                </div>
                <div className="">
                  <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext items={variants.map((v) => v.id)}>
                      <div className="flex flex-col gap-3">
                        {variants.map((variant, index) => (
                          <VariantItem
                            key={variant.id}
                            variant={variant}
                            index={index}
                            onDelete={handleDelete}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                  <Form.Item label={null} className="!mb-0 w-fit">
                    <StyledButton
                      disabled={isSubmitDisabled}
                      size="large"
                      htmlType="submit"
                    >
                      Kiritish
                    </StyledButton>
                  </Form.Item>
                </div>
              </div>
              <div>
                <p className="text-lg font-medium text-[#13265C] pb-[10px]">
                  Savollar
                </p>
                <div className="flex flex-col gap-5">
                  {tests.map((item, i) => (
                    <div
                      key={item.id}
                      className="max-w-[453px] w-full flex justify-between items-center py-[10px] px-5 gap-5 bg-white rounded-[10px] border border-[#E7E7E7]"
                    >
                      <div className="flex items-center gap-5">
                        <p className="w-10 h-10 bg-[#3857AF] rounded-[5px] flex items-center justify-center font-medium text-white">
                          {i + 1}
                        </p>
                        <div>
                          <p className="text-2xl font-bold">{item.testName}</p>
                          <p className="font-medium w-[240px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                            {item.question}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <button className="text-[#13265C] w-[33px] h-[33px] rounded-[5px] cursor-pointer flex items-center justify-center">
                          <SquarePen size={24} />
                        </button>
                        <button className="text-[#FF7070] w-[33px] h-[33px] bg-[#FFD3D3] rounded-[5px] cursor-pointer flex items-center justify-center">
                          <Trash2 size={24} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}