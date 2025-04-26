import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon, Upload } from "lucide-react";
import React from "react";

const CreateCoursePage = () => {
  return (
    <div className="p-4">
      <Card className="border shadow-none">
        <CardContent>
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="bg-slate-100 rounded-md flex items-center justify-center w-full md:w-[320px] h-[180px]">
              <div className="flex flex-col items-center text-slate-400">
                <ImageIcon className="mb-2" />
                <span>Upload image</span>
              </div>
            </div>
            <div className="space-y-4 items-center">
              <div>
                <p className="text-base">Size: 700x430 pixels</p>
                <p className="text-base">
                  File Support: .jpg, .jpeg, png, or .gif
                </p>
              </div>
              <Button className="flex items-center gap-2">
                <Upload size={18} />
                Upload Image
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCoursePage;
