"use client";
import { supabase } from "@/app/api/actions/supabase";
import imageCompression from 'browser-image-compression';
import Image from "next/image";
import React, { useRef, useState } from "react";

interface ImagePickerProps {
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
}

export default function ImagePicker({
  id,
  name,
  label,
  defaultValue,
}: Readonly<ImagePickerProps>) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(defaultValue ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateDataUrl = (file: File, callback: (imageUrl: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result as string);
    reader.readAsDataURL(file);
  };

  const sanitizeFileName = (name: string) => {
    return name.replace(/[^a-zA-Z0-9]/g, '_');
  };

  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: 1, // Limite máximo de tamanho em MB
      maxWidthOrHeight: 1024, // Ajuste as dimensões máximas conforme necessário
      useWebWorker: true,
    };
    try {
      return await imageCompression(file, options);
    } catch (error) {
      setError('Error compressing image: ' + error);
      throw error;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      generateDataUrl(file, (url) => {
        setDataUrl(url);
      });

      // Iniciar o processo de upload
      setUploading(true);
      setError(null);

      try {
        const compressedFile = await compressImage(file);

      

        const sanitizedFileName = sanitizeFileName(compressedFile.name);
        const { data, error } = await supabase
          .storage
          .from('profileImage') // Nome do bucket
          .upload(`public/${sanitizedFileName}`, compressedFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          throw error;
        }

        console.log('File uploaded successfully:', data);
      } catch (error: any) {
        setError('Error uploading file: ' + error.message);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        id={id}
        name={name}
        onChange={handleFileChange}
        ref={fileInput}
        accept="image/*"
      />
      
      {uploading && <p>Uploading...</p>}
      {error && <p>{error}</p>}
      
      {dataUrl && (
        <Image
          src={dataUrl}
          alt="Preview"
          width={100}
          height={100}
        />
      )}
    </>
  );
}
