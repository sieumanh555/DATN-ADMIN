import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  hint?: string;
}

const TextAreaNews: React.FC<TextareaProps> = ({ error, hint, ...props }) => {
  return (
    <div>
      <textarea
        {...props}
        className={`w-full border p-2 ${error ? "border-red-500" : "border-gray-300"} rounded`}
      />
      {error && hint && <p className="mt-1 text-sm text-red-500">{hint}</p>}
    </div>
  );
};

export default TextAreaNews;
