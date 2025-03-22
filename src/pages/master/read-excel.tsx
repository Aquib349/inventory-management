import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

const ReadExcelFromFrontend: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (event) => {
        const binaryStr = event.target?.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          setData((prevData) => [...prevData, ...jsonData]);
        });
      };
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      {/* File Upload */}
      <div
        {...getRootProps()}
        className="p-6 border-dashed border-2 cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drag & drop Excel files here, or click to select</p>
      </div>

      {/* Display Data */}
      {data.length > 0 && (
        <div className="mt-4 max-h-[calc(100vh-160px)] overflow-y-auto rounded-xl">
          <h2 className="text-lg font-bold">Excel Data:</h2>
          <table className="border-collapse border border-gray-400 w-full">
            <thead className="sticky top-0">
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="border border-gray-300 p-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="border border-gray-300 p-2">
                      {value as string}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReadExcelFromFrontend;
