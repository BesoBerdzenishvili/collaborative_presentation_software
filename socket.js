import { io } from "socket.io-client";

const URL = import.meta.env.VITE_DB;

export const socket = io(URL);
