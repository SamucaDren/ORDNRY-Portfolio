import "./otherPortfolioLink.css";

type otherPortfolioLinkProps = {
  portfolio: string;
  url: string;
};

function OtherPortfolioLink({ portfolio, url }: otherPortfolioLinkProps) {
  return (
    <a href={url} className="otherPortfolioLinkContainer">
      Confira meus Projetos<br></br>de {portfolio}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.29257 0.999893C3.29257 0.447751 3.74038 0.00023067 4.29247 0L13.2929 8.42937e-08C13.8452 3.37175e-07 14.2928 0.447608 14.2928 0.999893V10.0003C14.2925 10.5524 13.845 11.0002 13.2929 11.0002C12.7407 11.0002 12.2932 10.5524 12.293 10.0003V3.414L1.70711 13.9999C1.31658 14.3904 0.683417 14.3904 0.292893 13.9999C-0.0976311 13.6094 -0.097631 12.9762 0.292893 12.5857L10.8788 1.99979H4.29247C3.74038 1.99955 3.29258 1.55203 3.29257 0.999893Z" />
      </svg>
    </a>
  );
}
export default OtherPortfolioLink;
