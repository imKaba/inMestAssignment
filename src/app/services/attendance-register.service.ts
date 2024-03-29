import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceRegisterService {
private attendanceDB = [
  {
    id: 1,
    employeeName: "Sila Muremwa",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "present",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",

  },
  {
    id: 2,
    employeeName: "Nkwi Loh",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "absent",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  },
  {
    id: 3,
    employeeName: "Misheck Lukhama",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "absent",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "absent",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  },
  {
    id: 4,
    employeeName: "Karen Wanyama",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "absent",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  },
  {
    id: 5,
    employeeName: "Peris Muthoni",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "present",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  },
  {
    id: 5,
    employeeName: "Xarri Randy",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "absent",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  },

  {
    id: 6,
    employeeName: "Ushahemba Shir",
    week1_status: "absent",
    week2_status: "present",
    week3_status: "present",
    week4_status: "present",
    week5_status: "present",
    week6_status: "present",
    week7_status: "absent",
    week8_status: "absent",
    week9_status: "present",
    week10_status: "present",
    week11_status: "present",
    week12_status: "present",
    week13_status: "absent",
    week14_status: "absent",
    week15_status: "absent",
    week16_status: "present",
    week17_status: "present",
    week18_status: "present",
    week19_status: "present",
    week20_status: "present",
    week21_status: "absent",
    week22_status: "absent",
    week23_status: "present",
    week24_status: "present",
    
  }
];
  constructor() { }

  getAttendanceRecords() {
    return of(this.attendanceDB);
  }
}