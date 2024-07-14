module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

type Func = () => void;

declare namespace Resume {
  /** @description 基本信息 */
  interface User {
    /** 姓名 */
    name: string;
    /** 电话 */
    phone: string;
    /** 邮箱 */
    email: string;
    /** github */
    link: string;
    /** 身份 */
    position: string;
    /** 定位 */
    location: string;
    /** 薪资 */
    salary: string;
    /** 头像 */
    head: string;
  }

  /** @description 专业技能 */
  type Skills = string[];

  /** @description 作品集 */
  interface Work {
    /** 网页名称 */
    name: string;
    /** 网站描述 */
    desc: string;
    /** 网页链接 */
    links: {
      /** 链接描述 */
      label: string;
      /** 链接 */
      value: string;
    }[];
  }

  /** @description 教育经历 */
  interface Education {
    /** 头像 */
    icon: string;
    /** 学校 */
    school: string;
    /** 专业 */
    major: string;
    /** 时间 */
    time: string;
  }

  /** @description 工作经历 */
  interface Experience {
    /** 公司图标 */
    icon: string;
    /** 公司名称 */
    company: string;
    /** 工作内容 */
    content: string;
    /** 工作时间 */
    time: string;
  }

  /** @description 项目经历 */
  interface Project {
    /** 项目名称 */
    name: string;
    /** 技术栈 */
    stack: string;
    /** 项目职责 */
    duty: string;
  }
}

interface ResumeData {
  user: Resume.User;
  skills: Resume.Skills;
  works: Resume.Work[];
  education: Resume.Education;
  experiences: Resume.Experience[];
  projects: Resume.Project[];
}
