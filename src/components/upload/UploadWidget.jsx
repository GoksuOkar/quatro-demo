import { useEffect, useRef } from "react";
import { Button } from "@mantine/core";


export default function UploadWidget({ form }) {

// console.log('form-upload-widget', form);

const cloudinaryRef = useRef();
const widgetRef = useRef();

useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      { cloudName: 'dcxxjbxuo' , uploadPreset: 'l0ldgw4j' },
      (error, result) => {
        // console.log("result", result);
        if (result.event === "success") {
          // console.log("result.info.secure_url", result.info.secure_url);
          form.setFieldValue('image', result.info.secure_url);
        }
      }
    );
  }, []);

    return (
        <Button pt={4} onClick={() => widgetRef.current.open()}>
            Upload Image
        </Button>
    );
}