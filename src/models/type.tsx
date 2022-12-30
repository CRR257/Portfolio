export declare interface Typing {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
  // heading: string;
  // messages: string[]
}

export const TypingSpeed = {
  Typing: 150,
  Delete: 30
}
