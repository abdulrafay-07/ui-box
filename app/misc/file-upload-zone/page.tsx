import { FileUploadOne } from "@/components/misc/file-upload-one";
import { Code } from "@/components/dashboard/code";

import { fileUploadOneCode } from "@/constants/codes/misc";

const FileUploadZone = () => {
   return (
      <div className="p-4 md:px-8 text-neural-800 flex flex-col gap-y-10">
         <FileUploadOne />
         <Code
            code={fileUploadOneCode}
         />
      </div>
   )
};

export default FileUploadZone;