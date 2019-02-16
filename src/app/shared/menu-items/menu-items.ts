import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'course',
    name: 'Course',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'batch',
    name: 'Batch',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'student',
    name: 'Students',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'teacher',
    name: 'Teachers',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
  state: 'subject',
    name: 'Subject',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'examination',
    name: 'Examination',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'my_examinations',
    name: 'My Examinations',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'my_assessments',
    name: 'My Assessments',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'exam_assessments',
    name: 'My Examination Assessments',
    type: 'link',
    icon: 'basic-accelerator'
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
