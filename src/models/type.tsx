export declare interface TypeMessage {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
}

export const TypingSpeed = {
  DELETING_SPEED: 150,
  TYPING_SPEED: 150
}
