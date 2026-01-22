import { useState } from 'react';
import { analyzeChatFile } from '../api/chatService';

export const useChatAnalyzer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const processFile = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeChatFile(file);
      setData(result);
    } catch (err) {
      setError('Failed to connect to Python server. Ensure FastAPI is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, processFile };
};