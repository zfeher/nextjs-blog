import css from "styled-jsx/css";

export const heading2Xl = css`
  .heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
`;

export const headingXl = css`
  .headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
`;

export const headingLg = css`
  .headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }
`;

export const headingMd = css`
  .headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export const imageBorderCircleScoped = css.resolve`
  img {
    border-radius: 9999px;
  }
`;

export const colorInherit = css`
  .colorInherit {
    color: inherit;
  }
`;

export const padding1px = css`
  .padding1px {
    padding-top: 1px;
  }
`;

export const list = css`
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const listItem = css`
  .listItem {
    margin: 0 0 1.25rem;
  }
`;

export const lightText = css`
  .lightText {
    color: #666;
  }
`;
