import {useEffect, useState} from "react";
import io from 'socket.io-client';

export default function useSocket() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io('192.168.1.90:3000');
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect()
    }

    return cleanup
  }, []);

  return socket;
}
