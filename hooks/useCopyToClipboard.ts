// hooks/useCopyToClipboard.ts
"use client";
import { useState, useCallback, useRef, useEffect } from "react";

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return true;
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
      return false;
    }
  }, []);

  return { copied, copyToClipboard };
};
