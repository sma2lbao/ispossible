import { isMobile } from "./utils";
import FeedbackSvg from "./images/feedback.svg";
import CloseSvg from "./images/close.svg";

export interface SurveyProps {
  /**
   * 申请的id
   */
  id: string;

  /**
   * 用户工号
   */
  user?: string;

  /**
   *  调查类型：'1'|'satisfaction' 满意度调查；'2'|'suggestion' 意见反馈
   */
  type?: "2" | "satisfaction" | "suggestion";

  /**
   * 默认 prod
   */
  env?: "prod" | "dev";
}

export interface SurveyOptions {}

const urlConfig: Record<"prod" | "dev", Record<"pc" | "h5", string>> = {
  prod: {
    pc: "https://ehr.byd.com/resume/pc/feedback",
    h5: "https://job.byd.com/interview/mobile/feedback",
  },
  dev: {
    pc: "http://10.9.241.38:8000//resume/pc/feedback",
    h5: "https://jobtest.byd.com/interview/mobile/feedback",
  },
};

class Survey {
  // 被调查满意度的系统
  private id: string;

  private env: SurveyProps["env"];

  private type: SurveyProps["type"];

  constructor(props: SurveyProps) {
    this.id = props.id;
    this.type = props.type || "satisfaction";
    this.env = props.env || "prod";
  }

  createSurveyElement() {
    const styleEle = document.createElement("style");
    styleEle.innerHTML = `
    .surveyjs-container {
      position: fixed;
      right: 27px;
      bottom: 27px;
      padding-top: 8px;
      z-index: 9;
    }
    .surveyjs-feedback {
      width: 55px;
      height: 55x;
      cursor: pointer;
    }
    .surveyjs-close {
      width: 15px;
      height: 15px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
    `;

    const container = document.createElement("div");
    container.className = "surveyjs-container";

    const feedbackEle = document.createElement("img");
    feedbackEle.src = FeedbackSvg;
    feedbackEle.className = "surveyjs-feedback";

    const closeEle = document.createElement("img");
    closeEle.src = CloseSvg;
    closeEle.className = "surveyjs-close";

    container.appendChild(styleEle);
    container.appendChild(feedbackEle);
    container.appendChild(closeEle);

    feedbackEle.addEventListener("click", () => {
      this.open();
    });
    closeEle.addEventListener("click", () => {
      container.remove();
    });

    document.body.appendChild(container);
  }

  init() {
    this.createSurveyElement();
  }

  /**
   * 打开调查落地页
   */
  open() {
    const query = `?id=${this.id}&type=${this.type}`;
    const url = urlConfig[this.env || "prod"][isMobile() ? "h5" : "pc"];

    window.open(url + query, "_blank");
  }
}

export default Survey;
