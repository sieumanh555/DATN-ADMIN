import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  hint?: string;
}

const TextAreaNews: React.FC<TextareaProps> = ({ error, hint, ...props }) => {
  return (
    <div>
      <textarea
        {...props}
        className={`w-full p-2 border ${error ? "border-red-500" : "border-gray-300"} rounded`}
      />
      {error && hint && <p className="text-red-500 text-sm mt-1">{hint}</p>}
    </div>
  );
};

export default TextAreaNews;
