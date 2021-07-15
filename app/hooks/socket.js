import {useEffect, useState} from "react";
import io from 'socket.io-client';

export default function useSocket() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io('localhost:3000');
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect()
    }

    return cleanup
  }, []);

  return socket;
}
