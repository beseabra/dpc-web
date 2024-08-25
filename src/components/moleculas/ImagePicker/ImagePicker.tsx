"use client";
import { supabase } from "@/app/api/actions/supabase";
import { CircularProgress } from "@mui/material";
import imageCompression from 'browser-image-compression';
import Image from "next/image";
import React, { useRef, useState } from "react";

interface ImagePickerProps {
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
  onImageUpload: (url: string) => void; 
  bucketRoute: string;
}

export default function ImagePicker({
  id,
  name,
  label,
  defaultValue,
  onImageUpload,
  bucketRoute,
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
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      return await imageCompression(file, options);
    } catch (error) {
      setError('Erro ao comprimir a imagem: ' + error);
      throw error;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      generateDataUrl(file, (url) => {
        setDataUrl(url);
      });

      setUploading(true);
      setError(null);

      try {
        const compressedFile = await compressImage(file);
        const sanitizedFileName = sanitizeFileName(compressedFile.name);
        const { data, error } = await supabase
          .storage
          .from('profileImage') // Nome do bucket
          .upload(`${bucketRoute}/${sanitizedFileName}`, compressedFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          throw error;
        }

        const imageUrl = supabase
          .storage
          .from('profileImage')
          .getPublicUrl(`${bucketRoute}/${sanitizedFileName}`).data.publicUrl;

    
        onImageUpload(imageUrl);

        console.log('Imagem carregada com sucesso:', imageUrl);
      } catch (error: any) {
        setError('Erro ao fazer upload da imagem: ' + error.message);
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
      
      {uploading &&  <CircularProgress />}
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
