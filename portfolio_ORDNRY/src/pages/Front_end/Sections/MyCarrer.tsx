import "./MyCarrer-Style.css";

function MyCarrer() {
  return (
    <section className="my-carrer-section">
      <div className="container-copy-mycarrer">
        <div className="container-header-mycarrer">
          <span className="tag">SKILLS</span>
          <h2 className="h2-mycarrer">Minha Carreira</h2>
        </div>
        <p className="subtitle-mycarrer">
          Atuação e aprendizados ao longo da minha carreira.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 502 98"
          className="mycarrer-decorative-svg"
        >
          <path
            d="M45.2167 97.1788C35.8883 97.1788 27.834 95.1489 21.0536 91.089C14.3165 87.029 9.11244 81.3495 5.44155 74.0503C1.81385 66.7511 0 58.2641 0 48.5894C0 38.9147 1.81385 30.4278 5.44155 23.1286C9.11244 15.8293 14.3165 10.1498 21.0536 6.08987C27.834 2.02996 35.8883 0 45.2167 0C54.5451 0 62.5778 2.02996 69.315 6.08987C76.0953 10.1498 81.2993 15.8293 84.927 23.1286C88.5979 30.4278 90.4334 38.9147 90.4334 48.5894C90.4334 58.2641 88.5979 66.7511 84.927 74.0503C81.2993 81.3495 76.0953 87.029 69.315 91.089C62.5778 95.1489 54.5451 97.1788 45.2167 97.1788ZM45.2167 80.5936C51.1333 80.68 56.0566 79.4059 59.9866 76.7713C63.9166 74.1366 66.8533 70.4007 68.7967 65.5633C70.7833 60.726 71.7766 55.068 71.7766 48.5894C71.7766 42.1108 70.7833 36.496 68.7967 31.7451C66.8533 26.9941 63.9166 23.3013 59.9866 20.6667C56.0566 18.0321 51.1333 16.6716 45.2167 16.5852C39.3001 16.4988 34.3768 17.7729 30.4468 20.4075C26.5168 23.0422 23.5585 26.7782 21.5719 31.6155C19.6284 36.4529 18.6567 42.1108 18.6567 48.5894C18.6567 55.068 19.6284 60.6828 21.5719 65.4337C23.5585 70.1847 26.5168 73.8775 30.4468 76.5121C34.3768 79.1467 39.3001 80.5073 45.2167 80.5936Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <path
            d="M96.8871 95.2353L96.8871 1.94357L136.274 1.94357C137.18 1.94357 138.39 1.98676 139.901 2.07314C141.456 2.11634 142.838 2.24591 144.047 2.46186C149.618 3.32567 154.175 5.16127 157.716 7.96866C161.3 10.776 163.935 14.3177 165.619 18.5935C167.303 22.8262 168.145 27.5556 168.145 32.7817C168.145 40.5992 166.202 47.2937 162.315 52.8653C158.428 58.3937 152.339 61.8057 144.047 63.1014L136.274 63.6197H114.507V95.2353H96.8871ZM149.489 95.2353L131.091 57.2707L149.23 53.7723L169.441 95.2353H149.489ZM114.507 47.1641H135.496C136.403 47.1641 137.396 47.1209 138.476 47.0346C139.556 46.9482 140.549 46.7754 141.456 46.5163C143.831 45.8684 145.667 44.7886 146.962 43.277C148.258 41.7221 149.143 40.0161 149.618 38.1589C150.137 36.2585 150.396 34.4661 150.396 32.7817C150.396 31.0972 150.137 29.3264 149.618 27.4692C149.143 25.5688 148.258 23.8628 146.962 22.3511C145.667 20.7963 143.831 19.6949 141.456 19.0471C140.549 18.7879 139.556 18.6151 138.476 18.5288C137.396 18.4424 136.403 18.3992 135.496 18.3992L114.507 18.3992L114.507 47.1641Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <path
            d="M177.205 95.2353L177.205 1.94357L207.392 1.94357C208.126 1.94357 209.638 1.96517 211.927 2.00836C214.216 2.05155 216.418 2.20272 218.534 2.46186C226.049 3.36887 232.419 5.9819 237.645 10.3009C242.87 14.62 246.843 20.1052 249.564 26.7566C252.285 33.4079 253.645 40.6855 253.645 48.5894C253.645 56.4933 252.285 63.7709 249.564 70.4223C246.843 77.0736 242.87 82.5588 237.645 86.8779C232.419 91.1969 226.049 93.81 218.534 94.717C216.418 94.9761 214.216 95.1273 211.927 95.1705C209.638 95.2137 208.126 95.2353 207.392 95.2353H177.205ZM195.084 78.6501H207.392C208.558 78.6501 210.135 78.6285 212.121 78.5853C214.108 78.4989 215.9 78.3045 217.498 78.0022C221.558 77.1816 224.861 75.2812 227.409 72.301C230.001 69.3209 231.901 65.7361 233.11 61.5466C234.362 57.3571 234.989 53.038 234.989 48.5894C234.989 43.9248 234.341 39.4978 233.045 35.3083C231.793 31.1188 229.871 27.5772 227.28 24.6834C224.689 21.7896 221.428 19.9541 217.498 19.1766C215.9 18.8311 214.108 18.6367 212.121 18.5935C210.135 18.5504 208.558 18.5288 207.392 18.5288H195.084V78.6501Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <path
            d="M262.71 95.2353V1.94357L280.589 1.94357L321.141 64.138V1.94357L339.021 1.94357V95.2353H321.141L280.589 33.0408V95.2353H262.71Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <path
            d="M350.619 95.2353V1.94357L390.005 1.94357C390.912 1.94357 392.121 1.98676 393.633 2.07314C395.187 2.11634 396.569 2.24591 397.779 2.46186C403.35 3.32567 407.906 5.16127 411.447 7.96866C415.032 10.776 417.666 14.3177 419.35 18.5935C421.035 22.8262 421.877 27.5556 421.877 32.7817C421.877 40.5992 419.933 47.2937 416.047 52.8653C412.16 58.3937 406.071 61.8057 397.779 63.1014L390.005 63.6197L368.239 63.6197V95.2353H350.619ZM403.22 95.2353L384.823 57.2707L402.961 53.7723L423.173 95.2353H403.22ZM368.239 47.1641L389.228 47.1641C390.135 47.1641 391.128 47.1209 392.208 47.0346C393.287 46.9482 394.281 46.7754 395.187 46.5163C397.563 45.8684 399.398 44.7886 400.694 43.277C401.989 41.7221 402.875 40.0161 403.35 38.1589C403.868 36.2585 404.127 34.4661 404.127 32.7817C404.127 31.0972 403.868 29.3264 403.35 27.4692C402.875 25.5688 401.989 23.8628 400.694 22.3511C399.398 20.7963 397.563 19.6949 395.187 19.0471C394.281 18.7879 393.287 18.6151 392.208 18.5288C391.128 18.4424 390.135 18.3992 389.228 18.3992L368.239 18.3992V47.1641Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <path
            d="M451.841 95.2353V57.2707L419.969 1.94357L440.569 1.94357L460.781 37.0575L480.992 1.94357L501.592 1.94357L469.72 57.2707V95.2353H451.841Z"
            fill="url(#paint0_linear_227_1404)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_1404"
              x1="219.821"
              y1="-0.000243942"
              x2="219.821"
              y2="96.921"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC3336" stop-opacity="0.15" />
              <stop offset="1" stop-color="#CC3336" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mycarrer-group mycarrer-skills">
          <h3>Dominio em:</h3>
          <div className="mycarrer-skills-list">
            <img loading="lazy" src="/html-icon.webp" alt="html-icon" />
            <img loading="lazy" src="/css-icon.webp" alt="css-icon" />
            <img loading="lazy" src="./react-icon.webp" alt="react-icon" />
            <img loading="lazy" src="./ts-icon.svg" alt="typescript-icon" />
            <img loading="lazy" src="./github-icon.webp" alt="github-icon" />
            <img loading="lazy" src="./csharp-icon.webp" alt="csharp-icon" />
            <img loading="lazy" src="./figma-icon.svg" alt="figma-icon" />
            <img loading="lazy" src="./trello-icon.svg" alt="trello-icon" />
          </div>
        </div>
      </div>
      <div className="mycarrer-list-container" id="my-carrer-section">
        <img
          src="./ordnry-icon.svg"
          alt="Ícone ORDNRY"
          className="mycarrer-element-icon"
        />

        <div className="mycarrer-group">
          <h3>Educação</h3>
          <div className="mycarrer-group-item">
            <img
              loading="lazy"
              className="mycarrer-group-item-icon"
              src="./unifenas-icon.svg"
              alt="unifenas-icon"
            />
            <div className="mycarrer-group-item-text">
              <h4>Ciência da Computação</h4>
              <p>
                Unifenas - Universidade Prof.Edson Antônio Velano{" "}
                <span>(2023 - Atual)</span>
              </p>
            </div>
          </div>

          <div className="mycarrer-group-item">
            <img
              loading="lazy"
              className="mycarrer-group-item-icon"
              src="./code-icon.svg"
              alt="code-boost-icon"
            />
            <div className="mycarrer-group-item-text">
              <h4>Code Boost</h4>
              <p>Will Moreira</p>
            </div>
          </div>
          <div className="mycarrer-group-item">
            <img
              loading="lazy"
              className="mycarrer-group-item-icon"
              src="./ui-icon.svg"
              alt="ui-boost-icon"
            />
            <div className="mycarrer-group-item-text">
              <h4>UI Boost</h4>
              <p>Gilberto Prado</p>
            </div>
          </div>
        </div>
        <div className="linha-mycarrerlist"></div>
        <div className="mycarrer-group">
          <h3>Profissional</h3>

          <div className="mycarrer-group-item">
            <img
              loading="lazy"
              className="mycarrer-group-item-icon"
              src="./sca-icon.svg"
              alt="sca-icon"
            />

            <div className="mycarrer-group-item-text">
              <h4>SCA - Prosistemas</h4>
              <p>
                UI Designer <span>(2023 - Atual)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MyCarrer;
