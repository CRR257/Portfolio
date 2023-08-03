export declare interface TypeMessage {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
}

export const TypingSpeed = {
  DELETING_SPEED: 130,
  TYPING_SPEED: 130
}
