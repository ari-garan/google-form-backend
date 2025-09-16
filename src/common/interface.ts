export interface ResponseTS {
    statusCode: number; 
    status: string; 
    message: string; 
    data?: any;
}

export interface JwtPayload {
  userId: string;
  email?: string;
  iat?: number;
  exp?: number;
}

export interface User{
    firstName: string;
    lastNamr: string;
    email: string;
    password: string;
}

export interface QuestionField {
  id: number;
  question: string;
  answer?: string | null;
  component: string;
  type?: string | null;
  options?: string[];
}

export interface FormValues {
  title: { title: string };
  description: { description: string };
  isDisabled:{isDisabled:boolean};
  questions: QuestionField[],
}