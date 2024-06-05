type JSONStudent = {
  student_id: string;
  full_name: string;
  sex: string;
  career: string;
  faculty: string;
  year: number;
  province: string;
  municipality: string;
  quarters_date: Date;
  photo?: string;
  user: number;
  room: number;
};

export default JSONStudent;
